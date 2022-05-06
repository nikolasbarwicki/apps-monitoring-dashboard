import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { FC, ReactNode } from 'react'

const queryClient = new QueryClient()

interface QueryClientProviderProps {
  children?: ReactNode
}

export const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => {
  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' ? (
        <ReactQueryDevtools position="bottom-left" initialIsOpen={false} />
      ) : null}
    </QueryClientProviderBase>
  )
}
