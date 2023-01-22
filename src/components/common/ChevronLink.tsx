import { FC } from 'react'
import Link from 'next/link'
import { Icon } from './Icon'

const isExternalUrl = (link: string): boolean => !link.startsWith('/')

export const ChevronLink: FC<{ label: string; url: string }> = ({ label, url }) => {
  if (isExternalUrl(url)) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center space-x-1.5 text-blue-600 no-underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <span className="font-semibold">{label}</span>
        <span className="block w-2">
          <Icon name="chevron-right" />
        </span>
      </a>
    )
  } else {
    return (
      <Link href={url}>
        <a className="inline-flex items-center space-x-1.5 text-blue-600 no-underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          <span className="font-semibold">{label}</span>
          <span className="block w-2">
            <Icon name="chevron-right" />
          </span>
        </a>
      </Link>
    )
  }
}
