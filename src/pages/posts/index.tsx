import React, { useEffect, useState } from 'react'

import { CategoryList } from '@/components/pages/posts'
import { PostsPageWrapper } from '@/components/pages/posts/styled'
import { setPageTitle } from '@/utils'
import { AppLayout } from '@/layout'

import InfiniteScroll from 'react-infinite-scroll-component'
import PostItem from '@/components/PostList/PostItem'
import { PostListWrap } from '@/components/PostList/styled'
import { useRouter } from 'next/router'
import { Skeleton } from '@mui/material'
import { getPagingPosts } from '@/api/post'
import produce from 'immer'

export function usePosts() {
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
    total: 0,
  })
  const [loading, setLoading] = useState(false)

  const [posts, setPosts] = useState([])

  const [hasMore, setHasMore] = useState(true)

  const fetchPagingPosts = async () => {
    try {
      setLoading(true)
      const params = {
        limit: pagination.size,
        offset: (pagination.page - 1) * pagination.size,
      }
      const result = await getPagingPosts(params)
      if (result.success) {
        const { list, total, page } = result.data
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

  const loadMorePosts = async () => {
    setPagination(
      produce((draft) => {
        draft.page += 1
      })
    )
  }

  useEffect(() => {
    setHasMore(pagination.total !== posts.length)
  }, [pagination.total, posts.length])

  return {
    loading,
    hasMore,
    pagination,
    posts,
    setPosts,
    fetchPagingPosts,
    loadMorePosts,
  }
}

function PostsPage() {
  const router = useRouter()
  const { loading, hasMore, pagination, posts, fetchPagingPosts, loadMorePosts } = usePosts()

  const clickCategory = (category) => {
    router.push(`/posts/category/${category.id}`)
  }

  useEffect(() => {
    setPageTitle('????????????')
  }, [])
  useEffect(() => {
    fetchPagingPosts()
  }, [pagination.page])

  return (
    <AppLayout>
      <PostsPageWrapper>
        <CategoryList currentId={0} clickItem={clickCategory} />

        <div className="posts-container">
          <div>??? {pagination.total} ?????????</div>
          <PostListWrap>
            {posts.length ? (
              <InfiniteScroll
                dataLength={posts.length}
                next={loadMorePosts}
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
                {posts.length && !hasMore && <div className="no-more">?????????????????????</div>}
              </InfiniteScroll>
            ) : undefined}
          </PostListWrap>
        </div>
      </PostsPageWrapper>
    </AppLayout>
  )
}

export default PostsPage
