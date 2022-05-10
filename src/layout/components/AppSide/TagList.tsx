import React, { memo } from 'react'
import Chip from '@mui/material/Chip'
import { Link } from '@mui/material'
import { useRouter } from 'next/router'

import { TagListWrap } from './styled'

function TagList({ list }) {
  const router = useRouter()

  return (
    <TagListWrap>
      {list.map((item) => (
        <Link
          key={item.name}
          target="_blank"
          onClick={() => router.push({ pathname: `/posts/tag/${item.id}` })}
          underline="none"
        >
          <Chip label={item.name} />
        </Link>
      ))}
    </TagListWrap>
  )
}

export default memo(TagList)
