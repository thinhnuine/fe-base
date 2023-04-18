import { Layout } from 'antd'

import { LanguageSwitcher } from '@/components/language-switcher'

const { Header } = Layout

export const AdminHeader = () => {
  return (
    <Header className="sticky top-0 z-10 px-5 bg-[#001529] flex justify-end">
      <LanguageSwitcher />
    </Header>
  )
}
