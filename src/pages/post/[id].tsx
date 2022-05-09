import React from 'react'
import { GetServerSideProps } from 'next/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'

import { getBlogById } from '@/api/blog'
import { PostContent, PostWrap } from '@/components/pages/post/styled'
import dayjs from '@/utils/date-format'
import { selectTheme } from '@/layout/AppLayoutSlice'
import { useAppSelector } from '@/app/hooks'
import { AppLayout } from '@/layout'
import MarkdownRenderer from '@/components/MarkdownRenderer'

function PostPage({ post }) {
  const theme = useAppSelector(selectTheme)
  const router = useRouter()
  return (
    <AppLayout>
      <PostWrap>
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostContent>
          <div className="post-content-header">
            <h1 className="post-title">{post.title}</h1>
            <p className="sub-text">
              创建于 {dayjs(post.createAt).format('YYYY-MM-DD HH:mm')}
            </p>
            <div className="post-content ">
              <MarkdownRenderer content={post.content} />
            </div>
            <div className="post-footer">
              <p className="sub-text">
                SunMoon 最后修改于{' '}
                {dayjs(post.updateAt).format('YYYY-MM-DD HH:mm')}
              </p>
              <div className="divider" />
              <div className="tags-wrap">
                {post.tags &&
                  post.tags.split(",").map((tag) => (
                    <Link
                      className="post-tag"
                      key={tag}
                      underline="none"
                    >
                      {tag}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </PostContent>
      </PostWrap>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const res = await getBlogById(query.id)
  return {
    props: {
      post: res.data,
    },
  }
}

export default PostPage
