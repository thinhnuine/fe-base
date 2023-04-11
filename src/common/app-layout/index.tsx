import { ReactNode } from 'react'

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return <div className="layout-container flex min-h-screen flex-col items-center justify-between p-24">{children}</div>
}
