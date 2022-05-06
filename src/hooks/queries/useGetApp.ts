import { QueryFunction, QueryObserverResult, useQuery } from 'react-query'
import api from '@api/index'
import { GetAppResponse } from '@api/services/AppsService.types'
import { QueryKey } from '@consts/queryKey'

const getApp: QueryFunction<GetAppResponse, [string, string]> = async ({
  queryKey: [, id]
}) => {
  const { data } = await api.appsService.getApp(id)
  return data
}

const useGetApp = (id: string): QueryObserverResult<GetAppResponse, Error> => {
  return useQuery([QueryKey.apps, id], getApp, {
    enabled: !!id
  })
}

export default useGetApp
