import '@/styles/globals.css'
import '@/styles/font.css'

import { ConfigProvider } from 'antd'
import jaJP from 'antd/locale/ja_JP'
import { createStore, Provider } from 'jotai'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const store = createStore()

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <ConfigProvider locale={jaJP}>{getLayout(<Component {...pageProps} />)}</ConfigProvider>
    </Provider>
  )
}

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())
