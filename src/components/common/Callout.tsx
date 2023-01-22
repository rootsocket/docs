import { FC, ReactNode } from 'react'
import { Icon } from './Icon'

export const Callout: React.FC<{ children: ReactNode; className?: string | '' }> = ({ children, className }) => {
  return (
    <div
      className={`rounded-lg border border-blue-100 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20 ${className}`}
    >
      <div className="flex space-x-4 p-6 py-4 text-blue-600 dark:text-blue-300 items-start">
        <div className="mt-1 w-5 shrink-0 text-blue-500 dark:text-blue-400">
          <Icon name="exclamation" />
        </div>
        <div className="prose-a:font-semibold flex justify-start items-start">{children}</div>
      </div>
    </div>
  )
}
