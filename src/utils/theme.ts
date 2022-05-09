import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      second: string
      text: string
      gray: string
      background: string
      card: string
      navControlsBg: string
      navControlsBgHover: string
      cardBorder: string
      footerBg: string
      red: string
    }
    desktopHeaderHeight: string
    mobileHeaderHeight: string
  }
}

export const lightTheme = {
  mode: 'light',
  colors: {
    primary: '#A82255',
    second: '#5642A6',
    text: '#333',
    gray: '#666',
    background: '#f5f5f5',
    card: '#fff',
    navControlsBg: '#e5e6eb',
    navControlsBgHover: '#d3d3d5',
    cardBorder: '#ececec',
    footerBg: '#CBE5F5',
    red: '#A82A2A',
  },
  desktopHeaderHeight: '60px',
  mobileHeaderHeight: '60px',
}

export const darkTheme = {
  mode: 'dark',
  colors: {
    primary: '#FF66A1',
    second: '#AD99FF',
    text: '#d3d3d3',
    gray: '#999',
    background: '#0c0c0c',
    card: '#16161a',
    navControlsBg: '#3e3e48',
    navControlsBgHover: '#686877',
    cardBorder: '#202025',
    footerBg: '#1A242C',
    red: '#FF7373',
  },
  desktopHeaderHeight: '60px',
  mobileHeaderHeight: '60px',
}
