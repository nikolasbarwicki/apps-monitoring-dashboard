import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { QueryClientProvider } from '@contextProviders/QueryClientProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
export default MyApp
