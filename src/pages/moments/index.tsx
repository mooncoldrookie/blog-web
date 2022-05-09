import React, {  useEffect, useState } from "react";
import { GetServerSideProps } from 'next/types'
import { useRouter } from 'next/router'

import { MomentsPageWrap } from '@/components/pages/moments/styled'
import { getMomentList } from '@/api/moment'
import { MomentList } from '@/components/pages/moments'
import { Pagination } from '@/components/Pagination'
import { setPageTitle } from '@/utils'
import { AppLayout } from '@/layout'

function MomentsPage({ data}) {
  const router = useRouter()
  const [momentList,setMomentList ] = useState(data.list)
  const [pages,setPages] = useState(Math.ceil(data.total/data.pageSize))
  const [total,setTotal] = useState(data.total)
  const [currentPage,setCurrentPage] = useState(data.page)

  const changePage = async (event, value) => {
    const result = await getMomentList(value)
    const {list,page,pageSize,total} = result.data
    setMomentList(list)
    setPages(Math.ceil(total/pageSize))
    setTotal(total)
    setCurrentPage(page)
  }

  useEffect(() => {
    setPageTitle('瞬间')
  }, [])

  useEffect(()=>{
    console.log(total)
  },[currentPage,pages,total])

  return (
    <AppLayout>
      <MomentsPageWrap>
        <div className="title-main">记录瞬间</div>
        <div className="moment-list-main">
          <MomentList list={momentList}  />
        </div>
        <div className="pagination-main">
          <Pagination
            list={momentList}
            handleChange={changePage}
            pages={pages}
            page={currentPage}
          />
        </div>
      </MomentsPageWrap>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getMomentList()
  return {
    props: {
      data:res.data,
    },
  }
}

export default MomentsPage
