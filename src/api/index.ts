import HttpClient from '@api/HttpClient'
import AppsService from '@api/services/AppsService'

class Api extends HttpClient {
  appsService: AppsService

  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL)
    this.appsService = new AppsService(this.api)
  }
}

const api = new Api()

export default api
