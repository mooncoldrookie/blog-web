import React from 'react'

import MomentItem from './MomentItem'
import { MomentListWrap } from './styled'

function MomentList({ list }) {
  if (list.length === 0) {
    return (
      <MomentListWrap>
        <div className="list-empty">博主暂未发表任何动态</div>
      </MomentListWrap>
    )
  }
  return (
    <MomentListWrap>
      {list.map((moment) => (
        <MomentItem key={moment.id} data={moment} />
      ))}
    </MomentListWrap>
  )
}

export default MomentList
