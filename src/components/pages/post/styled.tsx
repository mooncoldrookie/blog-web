import styled from 'styled-components'

export const PostWrap = styled.div``

export const PostContent = styled.article`
  .post-content-header {
  }

  .post-title {
    font-size: 24px;
    line-height: 1.22;
    margin: 24px 0;
    word-wrap: break-word;
  }
  .subtitle {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }

  .post-content {
    min-height: 500px;
    font-size: 15px;
    padding: 12px 0 36px;
    word-break: break-word;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }

  .sub-text {
    font-size: 14px;
    color: ${(p) => p.theme.colors.gray};
  }

  .divider {
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    opacity: 0.2;
    margin: 12px 0;
  }

  .tags-wrap {
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .post-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    padding: 4px 16px;
    border-radius: 14px;
    background-color: #e5effe;
    color: #06f;

    @media (any-hover: hover) {
      &:hover {
        background-color: #d8e8fe;
      }
    }
  }
`
