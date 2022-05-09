import React, { memo } from 'react'

import PostItem from './PostItem'
import { PostListWrap } from './styled'

interface PostListProps {
  posts: any[]
}

function PostList({ posts }: PostListProps) {
  return (
    <PostListWrap>
      {posts.length > 0 ? (
        posts.map((item) => (
          <PostItem
            id={item.id}
            key={item.id}
            title={item.title}
            preview={item.preview}
            createTime={item.createTime}
            categoryName={item.categoryName}
            tags={item.tags}
            views={item.views}
          />
        ))
      ) : (
        <div className="bp3-text-muted empty">暂时没有文章</div>
      )}
    </PostListWrap>
  )
}

export default memo(PostList)
