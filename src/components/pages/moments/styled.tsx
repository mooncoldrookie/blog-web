import styled from 'styled-components'

export const MomentsPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .title-main {
    padding: 12px 0;
    border-radius: 8px;
    font-size: 18px;
    text-align: center;
    background-color: ${(p) => p.theme.colors.card};
  }

  .moment-list-main {
    flex: 1 0 0%;
    margin-top: 24px;
  }

  .pagination-main {
  }
`
export const MomentListWrap = styled.div`
  .list-empty {
    padding: 100px 0;
    text-align: center;
  }
`

export const MomentItemWrap = styled.div`
  .moment-inner {
  }

  .moment-card {
    margin-bottom: 8px;
    background: ${(p) => p.theme.colors.card};
    color: ${({ theme }) => theme.colors.text};
    border: none;
  }

  .card-content {
    font-size: 15px;
    line-height: 1.6;
    white-space: break-spaces;
    word-break: break-word;
  }

  .tool-btn {
    outline: none;
    border: none;
    color: grey;
    font-size: 16px;
  }

  @media (any-hover: hover) {
    .tool-btn:hover {
      color: ${(p) => p.theme.colors.red};
    }
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    padding: 0 8px;
  }

  @media (any-hover: hover) {
    .icon-wrap:hover .icon {
      background-color: rgba(240, 46, 46, 0.15);
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 50%;

    &.like {
      color: rgba(240, 46, 46, 0.15);
    }
  }

  .likes {
    margin-left: 8px;
  }

  .MuiCardHeader-title {
    font-weight: bold;
  }

  .MuiCardHeader-subheader {
    color: #999;
  }
`
