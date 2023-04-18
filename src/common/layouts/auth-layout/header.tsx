import { Layout } from 'antd'

import { LanguageSwitcher } from '@/components/language-switcher'
const { Header } = Layout

export const AuthHeader = () => {
  return (
    <Header>
      <div className="flex justify-between items-center">
        <div className="w-[120px] h-[31px] my-4 ml-0 bg-[#ffffff4d]" />
        <LanguageSwitcher />
      </div>
    </Header>
  )
}
