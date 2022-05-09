import React, { useCallback, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next/types'
import { useRouter } from 'next/router'

import { getBlogListByTagName } from '@/api/blog'
import { TagPageWrap } from '@/components/pages/tag/styled'
import { PostList } from '@/components/PostList'
import MyPagination from '@/components/Pagination/Pagination'
import { setPageTitle } from '@/utils'
import { AppLayout } from '@/layout'

function TagPage({ code, data, msg }) {
  const router = useRouter()
  const [isError, setError] = useState(code !== 0)
  const { tag } = router.query
  const { list, total, pageSize,page } = data
  const [pages, setPages] = useState(Math.ceil(total / pageSize))
  const [postList, setPostList] = useState<any[]>(list)
  const [currentPage, setCurrentPage] = useState(page)

  const handleChange = async (event, value) => {
    setCurrentPage(value)
  }

  const fetchPostsByTag = useCallback(async () => {
    try {
      const res: any = await getBlogListByTagName(tag, currentPage)
      if (res.code === 0) {
        const { list, total, pageSize } = res.data
        setPostList(list)
        setPages(Math.ceil(total / pageSize))
      } else {
        setError(true)
      }
    } catch (e) {
      console.log(e)
    }
  }, [tag, currentPage])

  useEffect(() => {
    fetchPostsByTag()
  }, [fetchPostsByTag])

  useEffect(() => {
    setPageTitle(`${tag}下的文章`)
  }, [tag])

  return (
    <AppLayout>
      <TagPageWrap>
        <h4>
          共{total}篇 {tag} 下的文章
        </h4>
        <PostList posts={postList} />
        <MyPagination
          list={postList}
          handleChange={handleChange}
          pages={pages}
          page={currentPage}
        />
      </TagPageWrap>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const res = await getBlogListByTagName(query.tag)
  return {
    props: res,
  }
}

export default TagPage
