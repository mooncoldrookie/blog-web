import React, { memo } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useRouter } from 'next/router'

import MarkdownRenderer from '@/components/MarkdownRenderer'

import { PostItemWrap } from './styled'

interface PostItemProps {
  id: number
  title: string
  preview: string
  createTime: string
  categoryName: { name: string }
  tags: string
  views:number
}

function PostItem(props: PostItemProps) {
  const { preview, title, id } = props
  const router = useRouter()
  return (
    <PostItemWrap>
      <a onClick={() => router.push(`/post/${id}`)}>
        <h3 className="post-title">{title}</h3>
        <div className="description">
          <MarkdownRenderer content={preview} />
        </div>

        <div className="read-more">
          <span>阅读全文</span>
          <ArrowForwardIcon className="arrow-right" />
        </div>
      </a>
    </PostItemWrap>
  )
}

export default memo(PostItem)
