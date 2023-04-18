import { Layout } from 'antd'
import { useAtomValue } from 'jotai'
import React, { ReactElement } from 'react'

import { AdminFooter } from './footer'
import { AdminHeader } from './header'
import { AdminSider } from './sider'
import { collapseSiderAtom } from './store'

const { Content } = Layout

type AppLayoutType = {
  children: ReactElement
}
export const AdminLayout = ({ children }: AppLayoutType) => {
  const collapsed = useAtomValue(collapseSiderAtom)

  return (
    <>
      <Layout hasSider>
        <AdminSider />
        <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
          <AdminHeader />
          <Content className="mt-6 mx-4 mb-0">
            <div className="p-6 text-center bg-white">{children}</div>
          </Content>
          <AdminFooter />
        </Layout>
      </Layout>
    </>
  )
}
