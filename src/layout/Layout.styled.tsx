import styled from 'styled-components'

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
`

export const FrameMain = styled.div`
  flex: 1 1 0%;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const AppMainWrap = styled.main`
  display: flex;
  flex: 1 0 0%;
  width: 100%;
`

export const MainFull = styled.div`
  flex: 1;
`
export const InnerMainWrap = styled.div`
  padding: 12px;
  width: 100%;
  height: 100%;
`
export const MainSide = styled.div`
  width: 292px;
  margin-left: 32px;
  flex: none;
`
