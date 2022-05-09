import styled from 'styled-components'

export const PaginationWrap = styled.div`
  .pagination-container {
    margin: 32px 0;
    display: flex;
    justify-content: center;
  }
  .MuiPaginationItem-root {
    color: ${(p) => p.theme.colors.text};
  }
  .Mui-selected.MuiPaginationItem-root {
    background-color: ${(p) => p.theme.colors.navControlsBg};
  }
  .posts-container {
    padding-top: 12px;
  }
`
