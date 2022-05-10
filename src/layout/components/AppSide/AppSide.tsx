import React, { memo, useEffect, useState } from 'react'

import { Recommend, SideWrap, AsideTagWrapper } from './styled'
import RecommendList from './RecommendList'
import TagList from './TagList'
import { getRecommendedPosts, getTags } from '@/api/home'
import produce from 'immer'

const AsideTag = () => {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchTags() {
      try {
        setLoading(true)
        const res = await getTags()
        if (res.success) {
          setTags(
            produce((draft) => {
              draft.push(...res.data)
            })
          )
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetchTags()
  }, [])
  return (
    <AsideTagWrapper>
      <h3 className="title">标签</h3>
      <div className="tags-content">
        <TagList list={tags} />
      </div>
    </AsideTagWrapper>
  )
}

const AsideRecommended = () => {
  const [recommended, setRecommended] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchRecommended() {
      try {
        setLoading(true)
        const res = await getRecommendedPosts()
        if (res.success) {
          setRecommended(
            produce((draft) => {
              draft.push(...res.data)
            })
          )
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    fetchRecommended()
  }, [])
  return (
    <Recommend>
      <h3 className="title">推荐文章</h3>
      <div className="recommend-content">
        <RecommendList list={recommended} />
      </div>
    </Recommend>
  )
}

function AppSide() {
  return (
    <SideWrap>
      <AsideRecommended />
      <AsideTag />
    </SideWrap>
  )
}

export default memo(AppSide)
