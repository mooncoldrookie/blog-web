import { AppLayout } from '@/layout'
import { PostsPageWrapper } from '@/components/pages/posts/styled'
import { CategoryList } from '@/components/pages/posts'
import { PostListWrap } from '@/components/PostList/styled'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostItem from '@/components/PostList/PostItem'
import React, { useEffect, useRef, useState } from 'react'
import { getPostsByCategory } from '@/api/post'
import produce from 'immer'
import { GetServerSideProps } from 'next/types'
import { useRouter } from 'next/router'
import { Skeleton } from '@mui/material'
import { setPageTitle } from '@/utils'

function usePostsByCategory(categoryId: number) {
  const [posts, setPosts] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    size: 10,
    total: 0,
  })
  const currentCategory = useRef(null)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const fetchPostsByCategory = async () => {
    try {
      setLoading(true)
      const params = {
        limit: pagination.size,
        offset: (pagination.page - 1) * pagination.size,
        categoryId,
      }
      const result = await getPostsByCategory(params)
      if (result.success) {
        const { list, total, category } = result.data
        if (currentCategory.current?.id !== category.id) {
          currentCategory.current = category
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

  return {
    loading,
    currentCategory,
    posts,
    setPosts,
    pagination,
    fetchPostsByCategory,
    hasMore,
    loadMore,
  }
}

function PostsCategory({ id }) {
  const router = useRouter()
  const [categoryId, setCategoryId] = useState(() => (isNaN(id) ? 0 : Number(id)))
  const {
    loading,
    currentCategory,
    posts,
    setPosts,
    fetchPostsByCategory,
    pagination,
    hasMore,
    loadMore,
  } = usePostsByCategory(categoryId)

  const clickCategory = (category) => {
    router.push(`/posts/category/${category.id}`)
  }

  useEffect(() => {
    setCategoryId(isNaN(id) ? 0 : Number(id))
  }, [id])

  useEffect(() => {
    fetchPostsByCategory()
  }, [pagination.page, categoryId])

  useEffect(() => {
    if (currentCategory.current) {
      setPageTitle(currentCategory.current.name)
    }
  }, [currentCategory.current])

  return (
    <AppLayout>
      <PostsPageWrapper>
        <CategoryList currentId={categoryId} clickItem={clickCategory} />
        <div className="posts-container">
          <PostListWrap>
            <div>共 {pagination.total} 条结果</div>
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

export default PostsCategory
