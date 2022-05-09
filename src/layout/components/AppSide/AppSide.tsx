import React, { memo, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  selectLoading,
  selectRecommendList,
  selectTagList,
  setLoading,
  setRecommendList,
  setTagList,
} from '@/app/reducer/asideSlice'
import { useAppAside } from '@/layout/components/AppSide/hooks'

import { Recommend, SideWrap, TagCategory } from './styled'
import RecommendList from './RecommendList'
import TagList from './TagList'

function AppSide() {
  const recommendList = useAppSelector(selectRecommendList)
  const tagList = useAppSelector(selectTagList)
  const loading = useAppSelector(selectLoading)
  const dispatch = useAppDispatch()

  const { fetchAllTags, fetchRecommendPosts } = useAppAside()

  useEffect(() => {
    async function asyncFetchPosts() {
      const { list } = await fetchRecommendPosts()
      dispatch(setRecommendList(list))
    }
    async function asyncFetchTags() {
      const { list } = await fetchAllTags()
      dispatch(setTagList(list))
    }
    asyncFetchPosts()
    asyncFetchTags()
  }, [dispatch])
  
  
  
  return (
    <SideWrap>
      <Recommend>
        <h3 className="title">推荐文章</h3>
        <div className="recommend-content">
          {loading ? (
            <Box>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Box>
          ) : (
            <RecommendList list={recommendList} />
          )}
        </div>
      </Recommend>
      <TagCategory>
        <h3 className="title">标签分类</h3>
        <div className="tags-content">
          {loading ? (
            <Box>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </Box>
          ) : (
            <TagList list={tagList} />
          )}
        </div>
      </TagCategory>
    </SideWrap>
  )
}

export default memo(AppSide)
