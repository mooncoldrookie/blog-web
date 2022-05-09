import '@/styles/reset.css'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

import store from '@/app/store'
import CustomSnackbarProvider from '@/components/CustomSnackbarProvider'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Layout } from '@/layout'
import MyThemeProvider from '@/components/ThemeProvider'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  // 创建一个 client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MyThemeProvider>
            <Layout>
              <CustomSnackbarProvider>
                <Head>
                  <title>SunMoon</title>
                </Head>
                <Component {...pageProps} />
              </CustomSnackbarProvider>
            </Layout>
          </MyThemeProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default MyApp
