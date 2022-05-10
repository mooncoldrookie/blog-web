import styled from 'styled-components'

export const PostListWrap = styled.div`
  flex: 1 0 0%;

  .empty {
    height: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(30%);
  }
  .no-more {
    margin-top: 24px;
    font-size: 14px;
    color: ${(p) => p.theme.colors.gray};
  }
  .no-posts {
    margin-top: 100px;
  }
`

export const PostItemWrap = styled.div`
  .title-wrapper {
  }
  .publish-date {
    color: ${(p) => p.theme.colors.gray};
  }

  .post-title {
    color: ${(p) => p.theme.colors.text};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .post-desc {
    padding: 8px 0;
  }

  &:hover .post-title {
    color: ${(p) => p.theme.colors.second};
  }

  &:hover .arrow-right {
    opacity: 1;
  }
`
