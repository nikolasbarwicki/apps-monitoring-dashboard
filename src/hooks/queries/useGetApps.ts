import { QueryFunction, QueryObserverResult, useQuery } from 'react-query'
import api from '@api/index'
import { GetAppsResponse } from '@api/services/AppsService.types'
import { QueryKey } from '@consts/queryKey'

const getApps: QueryFunction<GetAppsResponse> = async () => {
  const { data } = await api.appsService.getApps()
  return data
}

const useGetApps = (): QueryObserverResult<GetAppsResponse, Error> => {
  return useQuery([QueryKey.apps], getApps)
}

export default useGetApps
