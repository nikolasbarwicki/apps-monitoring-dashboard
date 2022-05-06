import useGetApps from '@hooks/queries/useGetApps'
import { Layout } from '@components/Layout'
import { AppListElement } from '@components/AppListElement'
import { LoadingInfo } from '@components/LoadingInfo'
import { ErrorInfo } from '@components/ErrorInfo'

export default function Home() {
  const { data, isLoading, isError } = useGetApps()

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {isLoading ? <LoadingInfo /> : null}

        {isError ? <ErrorInfo /> : null}

        {data ? data.map((app) => <AppListElement app={app} />) : null}
      </div>
    </Layout>
  )
}
