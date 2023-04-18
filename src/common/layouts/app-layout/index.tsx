import { Layout } from 'antd'
import React, { ReactElement } from 'react'

import { AppFooter } from './footer'
import { AppHeader } from './header'

const { Content } = Layout

export const AppLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Layout className="min-h-[100vh]">
      <AppHeader />
      <Content className="px-[50px]">
        <div className="p-10 mt-10 bg-white ">{children}</div>
      </Content>
      <AppFooter />
    </Layout>
  )
}
