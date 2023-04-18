import { Layout } from 'antd'

import { LanguageSwitcher } from '@/components/language-switcher'
const { Header } = Layout
export const AppHeader = () => {
  return (
    <Header className="flex justify-between items-center">
      <div className="float-left w-[120px] h-[31px] my-4 mr-6 ml-0 bg-[#ffffff4d]" />
      <LanguageSwitcher />
    </Header>
  )
}
