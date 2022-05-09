import Pagination from '@mui/material/Pagination'
import React, { memo } from 'react'

import { PaginationWrap } from './styled'

interface MyPaginationProps {
  list: any[]
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void
  pages: number
  page?: number
}

function MyPagination({
  list,
  handleChange,
  pages,
  page = 1,
}: MyPaginationProps) {
  return (
    <PaginationWrap>
      {list.length > 0 && pages > 1 && (
        <div className="pagination-container">
          <Pagination
            count={pages}
            shape="rounded"
            onChange={handleChange}
            page={page}
          />
        </div>
      )}
    </PaginationWrap>
  )
}

export default memo(MyPagination)
