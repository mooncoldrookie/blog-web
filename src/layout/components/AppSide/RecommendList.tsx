import React, { memo } from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useRouter } from 'next/router'
import { Link } from '@mui/material'

import { RecommendListWrap } from './styled'

function RecommendList({ list }) {
  const router = useRouter()
  const onClickItem = (item) => {
    if (String(item.id) !== router.query.id) {
      router.push(`/post/${item.id}`)
    }
  }
  return (
    <RecommendListWrap>
      {list.map((item) => (
        <li key={item.id} className="recommend-item">
          <Link onClick={() => onClickItem(item)} underline="none">
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
