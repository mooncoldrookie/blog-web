import styled from 'styled-components'

export const TagPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  h4 {
    color: ${(p) => p.theme.colors.text};
  }
`
