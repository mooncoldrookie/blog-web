import React, { memo, useEffect, useState } from 'react'
import cx from 'classnames'

import { useAppSelector } from '@/app/hooks'
import { selectIsDesktop } from '@/layout/AppLayoutSlice'

import { CategoryWrap } from './styled'
import { useRouter } from 'next/router'
import { getAllCategory } from '@/api/category'
import produce from 'immer'
import { Skeleton } from '@mui/material'

export function useCategory() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const result = await getAllCategory()
      if (result.success) {
        setCategories(
          produce((draft) => {
            draft.push(...result.data)
          })
        )
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return { loading, categories, fetchCategories }
}

interface PostCategoryProps {
  currentId: number
  clickItem: (any) => void
}

function CategoryList({ currentId, clickItem }: PostCategoryProps) {
  const router = useRouter()
  const isDesktop = useAppSelector(selectIsDesktop)
  const { loading, categories, fetchCategories } = useCategory()
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <CategoryWrap>
      {loading ? (
        <Skeleton animation="wave" height={150} />
      ) : isDesktop ? (
        <div className="items-container">
          <a
            className={cx('grid-item', router.pathname === '/posts' ? 'current' : '')}
            onClick={() => router.push(`/posts`)}
          >
            全部
          </a>
          {categories.map((item) => (
            <a
              className={cx('grid-item', currentId === item.id ? 'current' : '')}
              key={item.name}
              onClick={() => clickItem(item)}
            >
              {item.name}
            </a>
          ))}
        </div>
      ) : (
        <div className="items-scrollbar">
          <div className="scroll-inner ">
            <div className="item-wrap">
              <span
                className={cx('item', router.pathname === '/posts' ? 'current-mobile' : '')}
                onClick={() => router.push(`/posts`)}
              >
                全部
              </span>
            </div>
            {categories.map((item) => (
              <div className="item-wrap" key={item.id}>
                <span
                  className={cx('item', currentId === item.id ? 'current-mobile' : '')}
                  onClick={() => clickItem(item)}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </CategoryWrap>
  )
}

export default memo(CategoryList)
