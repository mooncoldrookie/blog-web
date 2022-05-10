import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import { recordAccess } from '@/api/base'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="SunMoon的个人网站" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export async function getInitialProps(context) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = context.renderPage

  try {
    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(context)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}
