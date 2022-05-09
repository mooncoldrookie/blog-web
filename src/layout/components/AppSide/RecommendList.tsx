import React, { memo } from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'

import { RecommendListWrap } from './styled'

function RecommendList({ list }) {
  const router = useRouter()
  return (
    <RecommendListWrap>
      {list.map((item) => (
        <li key={item.id} className="recommend-item">
          <Link
            onClick={() => router.push(`/post/${item.id}`)}
            underline="none"
          >
            <span className="arrow-right">
              <ArrowCircleRightOutlinedIcon className="arrow-right-icon" />
            </span>
            <span className="recommend-item-title">{item.title}</span>
          </Link>
        </li>
      ))}
    </RecommendListWrap>
  )
}

export default memo(RecommendList)
