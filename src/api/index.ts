import HttpClient from '@api/HttpClient'

class Api extends HttpClient {
  constructor() {
    super(process.env.NEXT_PUBLIC_API_URL)
  }
}

const api = new Api()

export default api
