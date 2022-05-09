import styled from 'styled-components'

export const SideWrap = styled.div`
  padding-top: 12px;
`

export const Recommend = styled.div`
  .title {
    color: ${(p) => p.theme.colors.primary};
  }

  .recommend-content {
    font-size: 16px;
  }
`

export const RecommendListWrap = styled.ul`
  .recommend-item {
    a {
      color: ${(p) => p.theme.colors.text};
      display: flex;
      align-items: flex-start;
      padding: 8px 0;
    }

    .arrow-right {
      font-size: 20px;
      height: 24px;
      display: flex;
      align-items: center;
      color: ${(p) => p.theme.colors.second};

      &-icon {
        transition: transform 0.3s;
      }
    }

    &-title {
      flex: 1 1 0%;
      display: inline-block;
      margin-left: 12px;
      line-height: 24px;
    }

    &:hover .arrow-right-icon {
      transform: translateX(4px);
    }

    &:hover .recommend-item-title {
      color: ${(p) => p.theme.colors.second};
    }
  }
`

export const TagCategory = styled.div`
  padding-top: 24px;

  .title {
    color: ${(p) => p.theme.colors.primary};
  }

  .tags-content {
    padding-top: 12px;
  }
`

export const TagListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    position: relative;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 8px;
  }

  .MuiChip-root {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.navControlsBg};
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.03);
    }
  }

  .MuiChip-label {
    color: ${(p) => p.theme.colors.text};
  }
`
