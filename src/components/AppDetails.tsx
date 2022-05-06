import { FC } from 'react'
import { App } from '@api/services/AppsService.types'

interface AppDetailsProps {
  app: App
}

export const AppDetails: FC<AppDetailsProps> = ({ app }) => {
  return (
    <li key={app.id} className="h-32 list-none bg-blue-100 rounded-lg shadow-lg">
      <div className="flex flex-col p-4">
        <span className="text-xl font-medium">Name: {app.name}</span>
        <span className=" text-md">Company: {app.company}</span>
      </div>
    </li>
  )
}
