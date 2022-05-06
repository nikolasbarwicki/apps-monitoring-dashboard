export interface App {
  id: number
  name: string
  company: string
}

export interface DetailedApp extends App {
  id: number
  name: string
  company: string
  logo: string
  number_of_users: number
  number_of_active_users: number
  server_address: string
  admin: {
    email: string
    first_name: string
    last_name: string
  }
}

export type GetAppsResponse = App[]

export type GetAppResponse = DetailedApp
