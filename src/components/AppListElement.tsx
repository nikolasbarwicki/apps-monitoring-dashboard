import { FC } from 'react'
import Link from 'next/link'

import { App } from '@api/services/AppsService.types'

interface AppDetailsProps {
  app: App
}

export const AppListElement: FC<AppDetailsProps> = ({ app }) => {
  return (
    <Link key={app.id} href={`/app/${app.id}`}>
      <li className="h-32 cursor-pointer list-none rounded-lg bg-blue-100 shadow-lg">
        <div className="flex flex-col p-4">
          <span className="text-xl font-medium">Name: {app.name}</span>
          <span className=" text-md">Company: {app.company}</span>
        </div>
      </li>
    </Link>
  )
}
