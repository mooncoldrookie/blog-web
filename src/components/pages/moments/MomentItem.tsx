import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import React, { useState } from 'react'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useSnackbar } from 'notistack'

import avatar from '@/assets/images/defaultAvatar.jpeg'
import settings from '@/settings'
import dayjs from '@/utils/date-format'
import { selectTheme } from '@/layout/AppLayoutSlice'
import { likeMoment } from '@/api/moment'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { addLikeId } from '@/app/reducer/momentSlice'
import MarkdownRenderer from '@/components/MarkdownRenderer'

import { MomentItemWrap } from './styled'

function MomentItem({ data }) {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  return (
    <MomentItemWrap>
      <div className="moment-inner">
        <Card className="moment-card" variant="outlined">
          <CardHeader
            avatar={<Avatar src={settings.avatar && avatar} />}
            title={settings.author}
            subheader={dayjs(data.createTime).format('YYYY-MM-DD HH:mm')}
          />
          <CardContent>
            <div className="card-content">
              <MarkdownRenderer content={data.content} />
            </div>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
      </div>
    </MomentItemWrap>
  )
}

export default MomentItem
