import React, { memo } from 'react'
import cx from 'classnames'

import { useAppSelector } from '@/app/hooks'
import { selectIsDesktop } from '@/layout/AppLayoutSlice'

import { CategoryWrap } from './styled'

interface PostCategoryProps {
  categoryList: any[]
  current: string
  onClickCategory: (e: React.MouseEvent, name: string) => void
}

function PostCategory({
  categoryList,
  current,
  onClickCategory,
}: PostCategoryProps) {
  const isDesktop = useAppSelector(selectIsDesktop)

  return (
    <CategoryWrap>
      {isDesktop ? (
        <div className="items-container">
          {categoryList.map((item) => (
            <a
              className={cx(
                'grid-item',
                current === item.name ? 'current' : ''
              )}
              key={item.name}
              onClick={(e) => onClickCategory(e, item.name)}
            >
              {item.name}
            </a>
          ))}
        </div>
      ) : (
        <div className="items-scrollbar">
          <div className="scroll-inner ">
            {categoryList.map((item) => (
              <div className="item-wrap" key={item.name}>
                <span
                  className={cx(
                    'item',
                    current === item.name ? 'current-mobile' : ''
                  )}
                  onClick={(e) => onClickCategory(e, item.name)}
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

export default memo(PostCategory)
