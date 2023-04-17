import { Layout, theme } from 'antd'
import { useAtomValue } from 'jotai'
import React, { ReactElement } from 'react'

import { SiderLayout } from './sider'
import { collapseSiderAtom } from './store'

const { Header, Content, Footer } = Layout

type AppLayoutType = {
  children: ReactElement
}
export const AppLayout = ({ children }: AppLayoutType) => {
  const collapsed = useAtomValue(collapseSiderAtom)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <Layout hasSider>
        <SiderLayout />
        <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
          <Header style={{ position: 'sticky', top: 0, zIndex: 1000, padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  )
}
