import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const Footer = styled.footer`
  margin-top: 50px;
  position: relative;
  padding: 32px 0;
  background-color: ${(p) => p.theme.colors.footerBg};
`

interface InnerWrapperProps {
  isDesktop: boolean
}

export const InnerWrapper = styled.div<InnerWrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? 'row' : 'column')};
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`

export const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TitleLogo = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  text-align: center;
  padding-bottom: 24px;
`
export const Greeting = styled.div`
  display: flex;
  align-items: center;
`

export const Heart = styled(FavoriteIcon)`
  font-size: 24px;
  margin-left: 4px;
  color: ${(p) => p.theme.colors.red};
`

export const LinksWrapper = styled.div`
  padding-top: 24px;
  flex: 1;
  display: flex;
  justify-content: center;

  .links-title {
    color: #666;
    font-size: 0.9rem;
  }
`

export const Links = styled.div`
  display: grid;
  width: 360px;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  gap: 6px;
  padding-top: 12px;

  a {
    color: ${(p) => p.theme.colors.text};
  }
`

export const FooterCopyright = styled.div`
  padding-top: 48px;
  text-align: center;
  color: #666;
  font-size: 0.8rem;
`
