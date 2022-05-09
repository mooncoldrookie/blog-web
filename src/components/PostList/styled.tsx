import styled from 'styled-components'

export const PostListWrap = styled.div`
  flex: 1 0 0%;

  .empty {
    height: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(30%);
  }
`

export const PostItemWrap = styled.div`
  padding-bottom: 18px;
  border-bottom: 1px solid ${(p) => p.theme.colors.cardBorder};

  &:last-child {
    border-bottom: none;
  }

  .post-title {
    color: ${(p) => p.theme.colors.text};
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

  .description {
    color: ${(p) => p.theme.colors.gray};
    font-size: 14px;
    padding: 0 16px;
  }

  .read-more {
    height: 24px;
    display: flex;
    align-items: center;
  }

  .arrow-right {
    margin-left: 4px;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.3s;
  }
`
