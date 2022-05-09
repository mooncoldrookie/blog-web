import styled from 'styled-components'

export const CategoryWrap = styled.div`
  .items-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px 24px;
    margin-top: 24px;
  }

  .grid-item {
    background-color: ${({ theme }) => theme.colors.navControlsBg};
    color: ${({ theme }) => theme.colors.text};
    padding: 0 12px;
    border-radius: 4px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 1px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      background-color: ${({ theme }) => theme.colors.navControlsBgHover};
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .items-scrollbar {
    position: relative;
    height: 54px;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.card};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: 4px;
    overflow: hidden;
  }

  .scroll-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: -17px;
    left: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 16px;
    padding: 0 12px;
  }

  .item-wrap {
    flex: 0 0 auto;
    margin-top: 12px;

    .item {
      display: inline-block;
      max-width: 300px;
      padding: 6px 28px;
      background-color: ${({ theme }) => theme.colors.navControlsBg};
      border-radius: 4px;
      font-size: 14px;
      letter-spacing: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .grid-item.current,
  .grid-item.current:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.second};
  }

  .item.current-mobile {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.second};
  }
`

export const PostsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .posts-container {
    flex: 1 0 0%;
    padding-top: 24px;
  }
`
