import { Layout } from 'antd'
import { ReactElement } from 'react'

import { AuthFooter } from './footer'
import { AuthHeader } from './header'

const { Content } = Layout

export const AuthLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Layout className="min-h-[100vh]">
      <AuthHeader />
      <Content className="py-0 px-[50px]">
        <div className="min-h-[280px] max-w-[600px] p-6 my-4 mx-auto rounded-lg shadow-md bg-white mt-[100px]">
          <div className="max-w-[500px] mx-auto">{children}</div>
        </div>
      </Content>
      <AuthFooter />
    </Layout>
  )
}
