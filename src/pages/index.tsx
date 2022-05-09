import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Link } from '@mui/material'
import { useRouter } from 'next/router'

import { getBlogList } from '@/api/home'
import { PostList } from '@/components/PostList'
import { HomePageWrap } from '@/components/pages/home/styled'
import { AppLayout } from '@/layout'

export default function Home({data}) {
  const router = useRouter()
  return (
    <AppLayout>
      <HomePageWrap>
        <Head>
          <title>首页</title>
        </Head>
        <h3 className="title">最新文章</h3>
        <PostList posts={data.list} />
        {data.list.length !== 0 && (
          <div className="view-all">
            <Link
              className="view-all"
              onClick={() => router.push('/posts')}
              underline="none"
            >
              查看全部文章
            </Link>
          </div>
        )}
      </HomePageWrap>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getBlogList()


  return {
    props: res
  }
}
