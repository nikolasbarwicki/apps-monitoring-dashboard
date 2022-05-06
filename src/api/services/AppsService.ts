import { AxiosInstance, AxiosResponse } from 'axios'
import { GetAppsResponse } from '@api/services/AppsService.types'

class AppsService {
  private api: AxiosInstance

  constructor(api: AxiosInstance) {
    this.api = api
  }

  getApps(): Promise<AxiosResponse<GetAppsResponse>> {
    return this.api.get('/list')
  }
}

export default AppsService
