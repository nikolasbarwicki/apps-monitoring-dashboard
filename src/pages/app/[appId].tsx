import { useRouter } from 'next/router'
import NextImage from 'next/image'

import useGetApp from '@hooks/queries/useGetApp'
import { Layout } from '@components/Layout'
import { SimpleStats } from '@components/SimpleStats'
import { LoadingInfo } from '@components/LoadingInfo'
import { ErrorInfo } from '@components/ErrorInfo'

export default function DetailedAppPage() {
  const { query } = useRouter()

  const {
    data: response,
    isLoading,
    isError,
    refetch
  } = useGetApp(query.appId as string)

  const refetchDetails = () => refetch()

  return (
    <Layout>
      <h1 className="py-8 text-2xl font-medium">Detailed View</h1>
      <div>
        {isLoading ? <LoadingInfo /> : null}

        {isError ? <ErrorInfo /> : null}

        {response ? (
          <div className="flex flex-col gap-2">
            <div>
              <NextImage src={response.logo} width={20} height={20} />
            </div>
            <ul>
              <li>Company: {response.company}</li>
              <li>App Name: {response.name}</li>
              <li>Server Address: {response.server_address}</li>
            </ul>
            <div className="flex gap-4">
              <SimpleStats
                heading="Number of users:"
                value={response.number_of_users}
              />
              <SimpleStats
                heading="Number of active users:"
                value={response.number_of_active_users}
              />
            </div>
            <div className="flex flex-col">
              <span>Contact person:</span>
              <span>
                {response.admin.first_name} {response.admin.last_name} ||{' '}
                {response.admin.email}
              </span>
            </div>
            <button
              onClick={refetchDetails}
              className="rounded-md bg-blue-100 p-2"
            >
              Refetch data
            </button>
          </div>
        ) : null}
      </div>
    </Layout>
  )
}
