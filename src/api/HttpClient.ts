import axios, { AxiosInstance } from 'axios'

class HttpClient {
  protected api: AxiosInstance

  constructor(baseUrl: string) {
    this.api = axios.create({ baseURL: baseUrl })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static afterResponse(resp: any): any {
    return resp
  }
}

export default HttpClient
