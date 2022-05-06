import { FC, ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="container mx-auto max-w-7xl px-8">{children}</main>
  )
}
