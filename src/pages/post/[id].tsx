import React from 'react'
import { GetServerSideProps } from 'next/types'
import Head from 'next/head'
import { Link } from '@mui/material'

import { getPostById } from '@/api/post'
import { PostContent, PostWrap } from '@/components/pages/post/styled'
import dayjs from '@/utils/date-format'
import { AppLayout } from '@/layout'
import HtmlRenderer from '@/components/HtmlRenderer'

function PostPage({ post }) {
  return (
    <AppLayout>
      <PostWrap>
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostContent>
          <div className="post-content-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="subtitle">
              <span className="sub-text">
                发布于 {dayjs(post.publishDate).format('YYYY-MM-DD HH:mm')}
              </span>
              <span className="sub-text">阅读量 {post.views}</span>
            </div>
            <div className="post-content ">
              <HtmlRenderer html={post.contentHtml} />
            </div>
            <div className="post-footer">
              <p className="sub-text">
                最后修改于 {dayjs(post.updateAt).format('YYYY-MM-DD HH:mm')}
              </p>
              <div className="divider" />
              <div className="tags-wrap">
                {post.tags?.length > 0
                  ? post.tags.map((item) => (
                      <Link className="post-tag" key={item.name} underline="none">
                        {item.name}
                      </Link>
                    ))
                  : undefined}
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
  const res = await getPostById(query.id)
  return {
    props: {
      post: res.data,
    },
  }
}

export default PostPage
