import Head from 'next/head'
import { Link } from '@mui/material'
import { useRouter } from 'next/router'

import { getHomePosts } from '@/api/home'
import { HomePageWrap } from '@/components/pages/home/styled'
import { AppLayout } from '@/layout'
import { PostListWrap } from '@/components/PostList/styled'
import PostItem from '@/components/PostList/PostItem'
import React, {useEffect} from 'react'

export default function Home({ data }) {
  const router = useRouter()
  return (
    <AppLayout>
      <HomePageWrap>
        <Head>
          <title>首页</title>
        </Head>
        <h3 className="title">最新文章</h3>
        <PostListWrap>
          {data.map((item) => (
            <PostItem
              id={item.id}
              key={item.id}
              title={item.title}
              publishDate={item.publishDate}
            />
          ))}
        </PostListWrap>
        {data.length && (
          <div className="view-all">
            <Link className="view-all" onClick={() => router.push('/posts')} underline="none">
              查看全部文章
            </Link>
          </div>
        )}
      </HomePageWrap>
    </AppLayout>
  )
}

export const getServerSideProps = async (context) => {
  const result = await getHomePosts()

  return {
    props: {
      data: result.data,
    },
  }
}
