import { Layout, theme } from 'antd'

const { Header } = Layout

export const HeaderLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return <Header style={{ position: 'sticky', top: 0, zIndex: 1000, padding: 0, background: colorBgContainer }} />
}
