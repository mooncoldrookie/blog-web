import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next/types'

import { PostCategory } from '@/components/pages/posts'
import { getBlogList } from '@/api/home'
import { PostList } from '@/components/PostList'
import { PostsPageWrapper } from '@/components/pages/posts/styled'
import { getCategoryList } from '@/api/category'
import MyPagination from '@/components/Pagination/Pagination'
import { setPageTitle } from '@/utils'
import { AppLayout } from '@/layout'
import { getBlogListByCategoryName } from "@/api/blog";

function PostsPage({ postsData, categoryData }) {
  const [pages, setPages] = useState(
    Math.ceil(postsData.total / postsData.pageSize)
  )
  const [postList, setPostList] = useState<any[]>(postsData.list)
  const [categoryList, setCategoryList] = useState<any[]>(categoryData.list)
  const [currentPage, setCurrentPage] = useState(postsData.page)
  const [total,setTotal] = useState(postsData.total)
  const [currentCategory, setCurrentCategory] = useState('全部')

  const handleChange = async (event, value) => {
    setCurrentPage(value)
    const blogListRes = await getBlogList(value)
    const { data } = blogListRes
    setPostList(data.list)
    setPages(Math.ceil(postsData.total / postsData.pageSize))
    setTotal(data.total)
  }

  const onClickCategory = async (e: React.MouseEvent, name: string) => {
    e.preventDefault()
    setCurrentCategory(name)
    if (name === '全部') {
      const res = await getBlogList()
      const {data} = res
      setPostList(data.list)
      setPages(Math.ceil(data.total / data.pageSize))
      setCurrentPage(data.page)
      setTotal(data.total)
      return
    }
    const res = await getBlogListByCategoryName(name, currentPage)
    const { data } = res
    setPostList(data.list)
    setPages(Math.ceil(data.total / data.pageSize))
    setCurrentPage(data.page)
    setTotal(data.total)
  }

  useEffect(() => {
    setPageTitle(`分类 - ${currentCategory}`)
  }, [currentCategory])

  return (
    <AppLayout>
      <PostsPageWrapper>
        <PostCategory
          categoryList={categoryList}
          current={currentCategory}
          onClickCategory={onClickCategory}
        />
        <div className="posts-container">
          <div>共 {total} 条结果</div>
          <PostList posts={postList} />
        </div>
        <MyPagination
          list={postList}
          pages={pages}
          page={currentPage}
          handleChange={handleChange}
        />
      </PostsPageWrapper>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const postsData: any = await getBlogList()
  const categoryData: any = await getCategoryList()
  categoryData.data.list.unshift({ name: '全部' })
  return {
    props: {
      postsData: postsData.data,
      categoryData: categoryData.data,
    },
  }
}

export default PostsPage
