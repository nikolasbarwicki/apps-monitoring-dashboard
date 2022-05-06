import { FC, ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="container mx-auto max-w-7xl px-8">
      <Link href="/" passHref>
        <a>
          <h1 className="py-8 text-2xl font-medium">Dashboard Monitor</h1>
        </a>
      </Link>
      {children}
    </main>
  )
}
