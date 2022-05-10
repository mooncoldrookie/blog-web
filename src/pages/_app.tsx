import '@/styles/reset.css'
import '@/styles/globals.css'
import '@/styles/main.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'

import store from '@/app/store'
import CustomSnackbarProvider from '@/components/CustomSnackbarProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Layout } from '@/layout'
import MyThemeProvider from '@/components/ThemeProvider'

import { recordAccess } from '@/api/base'
import { useEffect } from 'react'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  useEffect(() => {
    async function record() {
      try {
        await recordAccess(new Date().toString())
      } catch (e) {
        console.log(e)
      }
    }
    record()
  }, [])

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <MyThemeProvider>
          <Layout>
            <CustomSnackbarProvider>
              <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>SunMoon</title>
              </Head>
              <Component {...pageProps} />
            </CustomSnackbarProvider>
          </Layout>
        </MyThemeProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
