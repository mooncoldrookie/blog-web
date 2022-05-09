import styled from 'styled-components'

export const HomePageWrap = styled.div`
  .title {
    color: ${(p) => p.theme.colors.primary};
    padding-bottom: 12px;
  }
  .view-all {
    padding: 20px 0;
    text-align: center;
  }
  .view-all-btn {
    display: inline-block;
    padding: 4px 12px;
  }
`
