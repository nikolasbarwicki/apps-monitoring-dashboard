import { FC } from 'react'

interface SimpleStatsProps {
  heading: string
  value: number
}

export const SimpleStats: FC<SimpleStatsProps> = ({ heading, value }) => {
  return (
    <div className="flex w-64 flex-col rounded-md bg-blue-100 p-4">
      <span>{heading}</span>
      <span className="text-xl font-medium">{value}</span>
    </div>
  )
}
