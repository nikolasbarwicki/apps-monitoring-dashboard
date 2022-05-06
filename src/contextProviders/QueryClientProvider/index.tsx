import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { FC, ReactNode } from 'react'

const queryClient = new QueryClient()

interface Interface {
  children?: ReactNode
}

export const QueryClientProvider: FC<Interface> = ({ children }) => {
  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' ? (
        <ReactQueryDevtools position="bottom-left" initialIsOpen={false} />
      ) : null}
    </QueryClientProviderBase>
  )
}
