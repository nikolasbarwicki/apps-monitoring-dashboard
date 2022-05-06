import useGetApps from '@hooks/queries/useGetApps'
import { Layout } from '@components/Layout'
import { AppDetails } from '@components/AppDetails'

export default function Home() {
  const { data, isLoading, isError } = useGetApps()

  return (
    <Layout>
      <h1 className="py-8 text-2xl font-medium">Dashboard Monitor</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {isLoading ? (
          <span className="text-xl font-medium">Loading...</span>
        ) : null}

        {isError ? (
          <span className="text-xl font-medium">
            There is an error with fetching your data
          </span>
        ) : null}

        {data ? data.map((app) => <AppDetails app={app} />) : null}
      </div>
    </Layout>
  )
}
