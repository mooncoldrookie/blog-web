import React, { memo } from 'react'
import { useRouter } from 'next/router'

import { PostItemWrap } from './styled'
import dateFormat from '@/utils/date-format'

interface PostItemProps {
  id: number
  title: string
  publishDate: string
}

function PostItem(props: PostItemProps) {
  const { title, id, publishDate } = props
  const router = useRouter()

  const time = dateFormat(publishDate).fromNow()

  return (
    <PostItemWrap>
      <a onClick={() => router.push(`/post/${id}`)}>
        <div className="title-wrapper">
          <h3 className="post-title">{title}</h3>
          <div className="publish-date">发布于 {time}</div>
        </div>
      </a>
    </PostItemWrap>
  )
}

export default memo(PostItem)
