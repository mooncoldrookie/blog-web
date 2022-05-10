import { AppLayout } from '@/layout'
import { PostsPageWrapper } from '@/components/pages/posts/styled'
import { PostListWrap } from '@/components/PostList/styled'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostItem from '@/components/PostList/PostItem'
import React, { useEffect, useRef, useState } from 'react'
import { getPostsByTag } from '@/api/post'
import produce from 'immer'
import { GetServerSideProps } from 'next/types'
import { Skeleton } from '@mui/material'
import { setPageTitle } from '@/utils'

function usePostsByTag(tagId: number) {
  const [posts, setPosts] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
    total: 0,
  })
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const currentTag = useRef(null)

  const fetchPostsByTag = async () => {
    try {
      setLoading(true)
      const params = {
        limit: pagination.size,
        offset: (pagination.page - 1) * pagination.size,
        tagId,
      }
      const result = await getPostsByTag(params)
      if (result.success) {
        const { list, total, page, tag } = result.data
        if (currentTag.current?.id !== tag.id) {
          currentTag.current = tag
          setPosts(() => [])
        }
        setPosts(
          produce((draft) => {
            draft.push(...list)
          })
        )
        setPagination(
          produce((draft) => {
            draft.total = total
          })
        )
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const loadMore = async () => {
    setPagination(
      produce((draft) => {
        draft.page += 1
      })
    )
  }

  useEffect(() => {
    setHasMore(pagination.total !== posts.length)
  }, [pagination.total, posts.length])

  useEffect(() => {
    if (currentTag.current) {
      setPageTitle(currentTag.current.name)
    }
  }, [currentTag.current])

  return {
    currentTag,
    loading,
    posts,
    setPosts,
    pagination,
    fetchPostsByTag,
    hasMore,
    loadMore,
  }
}

function PostsTag({ id }) {
  const [tagId, setTagId] = useState(() => (isNaN(id) ? 0 : Number(id)))
  const { currentTag, loading, posts, setPosts, fetchPostsByTag, pagination, hasMore, loadMore } =
    usePostsByTag(tagId)

  useEffect(() => {
    setTagId(isNaN(id) ? 0 : Number(id))
  }, [id])

  useEffect(() => {
    fetchPostsByTag()
  }, [pagination.page, tagId])

  return (
    <AppLayout>
      <PostsPageWrapper>
        <div className="posts-container">
          <PostListWrap>
            <div>
              {pagination.total} 条关于
              <span style={{ fontWeight: 'bold' }}> {currentTag.current?.name} </span>的内容
            </div>
            {posts.length ? (
              <InfiniteScroll
                dataLength={posts.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<div>loading...</div>}
              >
                {posts.map((item) => (
                  <PostItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    publishDate={item.publishDate}
                  />
                ))}
                {posts.length && !hasMore && <div className="no-more">没有更多文章了</div>}
              </InfiniteScroll>
            ) : undefined}
          </PostListWrap>
        </div>
      </PostsPageWrapper>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  return {
    props: {
      id: query.id,
    },
  }
}

export default PostsTag
