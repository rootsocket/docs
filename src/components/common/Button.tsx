import { FC } from 'react'
import classnames from 'classnames'
import { Icon, IconName } from './Icon'
import Link from 'next/link'
import { isExternalUrl } from '../../utils/helpers'

const themeClasses = {
  primary:
    'bg-blue-600 text-blue-50 border-blue-800 hover:bg-blue-500 dark:bg-blue-600 dark:border-blue-700 dark:hover:bg-blue-500 dark:hover:border-blue-600',
  secondary:
    'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-50 dark:text-blue-300 dark:border-blue-500/30 dark:hover:bg-blue-500/30 dark:bg-blue-500/20',
}

export const Button: FC<{
  label: string
  action?: () => void
  theme?: 'primary' | 'secondary'
  href?: string
  icon?: IconName
}> = ({ label, action, href, theme = 'primary', icon }) => {
  const sharedClasses =
    'px-6 py-2 flex justify-center items-center space-x-3 rounded-md border font-medium focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900'

  if (href) {
    return (
      <Link href={href}>
        <a
          className={classnames(sharedClasses, themeClasses[theme])}
          onClick={action}
          aria-label={label}
          target={isExternalUrl(href) ? '_blank' : undefined}
          rel={isExternalUrl(href) ? 'noreferrer' : undefined}
        >
          <span>{label}</span>
          {icon && (
            <span className="w-5">
              <Icon name={icon} />
            </span>
          )}
        </a>
      </Link>
    )
  } else {
    return (
      <button className={classnames(sharedClasses, themeClasses[theme])} onClick={action} aria-label={label}>
        <span>{label}</span>
        {icon && (
          <span className="w-5">
            <Icon name={icon} />
          </span>
        )}
      </button>
    )
  }
}
