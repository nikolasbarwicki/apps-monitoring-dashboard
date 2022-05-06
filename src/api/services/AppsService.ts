import { AxiosInstance, AxiosResponse } from 'axios'

import {
  GetAppResponse,
  GetAppsResponse
} from '@api/services/AppsService.types'

class AppsService {
  private api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  getApps(): Promise<AxiosResponse<GetAppsResponse>> {
    return this.api.get('/list')
  }

  getApp(id: string): Promise<AxiosResponse<GetAppResponse>> {
    return this.api.get(`/details/${id}`)
  }
}

export default AppsService
