import { GlobalOutlined } from '@ant-design/icons'
import { Popover } from 'antd'
import { useRouter } from 'next/router'
import EnglandFlag from 'public/svgs/england-flag.svg'
import JapanFlag from 'public/svgs/japan-flag.svg'

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const router = useRouter()

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const content = (
    <>
      <div className="flex gap-1 items-center hover:cursor-pointer" onClick={() => onToggleLanguageClick('ja')}>
        <JapanFlag />
        <span>日本語</span>
      </div>
      <hr className="border-[#ccc] my-1" />
      <div className="flex gap-1 items-center hover:cursor-pointer" onClick={() => onToggleLanguageClick('en')}>
        <EnglandFlag />
        <span>English</span>
      </div>
    </>
  )

  return (
    <Popover content={content} className={className}>
      <GlobalOutlined className="text-white text-xl hover:cursor-pointer" />
    </Popover>
  )
}
