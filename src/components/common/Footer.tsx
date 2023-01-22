import { FC } from 'react'

const isExternalUrl = (link: string): boolean => {
  return !link.startsWith('/')
}

const content = {
  note: (
    <>
      <p>
        RootSocket
      </p>
    </>
  ),
  menus: [
    // {
    //   title: 'Examples',
    //   elements: [
    //     {
    //       label: 'Next.js (TypeScript)',
    //       url: '/examples/nextjs',
    //     },
    //   ],
    // },
    // {
    //   title: 'Community',
    //   elements: [
    //     { label: 'Twitter', url: 'https://twitter.com/contentlayerdev' },
    //     { label: 'Discord', url: 'https://discord.gg/rytFErsARm' },
    //     { label: 'GitHub', url: 'https://github.com/contentlayerdev/contentlayer' },
    //   ],
    // },
  ],
}

export const Footer: FC = () => {
  return (
    <div className="border-t border-gray-200 bg-transparent dark:border-gray-800 ">
      <div className="container mx-auto pb-4 px-8">
        <div className="mt-4 text-slate-700 dark:text-slate-400 text-md inline-flex"><div className='mr-1'>&copy; {new Date().getFullYear()}</div> <div>{content.note}</div></div>
        {/* <div className="space-y-8 md:flex md:space-y-0 md:space-x-16">
          {content.menus.map(({ title, elements }, index) => (
            <div key={index}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-800 dark:text-slate-200">
                {title}
              </h4>
              <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
                {elements.map(({ label, url }, index) => (
                  <li key={index}>
                    <Link href={url}>
                      <a
                        className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
                        target={isExternalUrl(url) ? '_blank' : undefined}
                      >
                        <span>{label}</span>
                        {isExternalUrl(url) && (
                          <span className="inline-block w-4">
                            <Icon name="external-link" />
                          </span>
                        )}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}
