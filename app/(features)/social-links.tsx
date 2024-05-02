import * as React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

import { cn } from '@/lib/utils'

const social = [
  {
    href: 'https://www.facebook.com/365kreative',
    name: 'Facebook',
    Icon: (props: Record<string, any>) => <Facebook {...props} />
  },
  {
    href: 'https://twitter.com/365kreative',
    name: ' X formerly known as Twitter',
    Icon: (props: Record<string, any>) => <Twitter {...props} />
  },
  {
    href: 'https://www.instagram.com/365kreative',
    name: 'Instagram',
    Icon: (props: Record<string, any>) => <Instagram {...props} />
  }
] as const

export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={cn('flex gap-1', className)}>
      {social.map(({ href, Icon, name }, index) => {
        return (
          <li key={index}>
            <Link
              href={href}
              className="inline-flex justify-center items-center rounded-full w-10 h-10 bg-background border bg-nav-button-hover"
            >
              <Icon />
              <span className="sr-only">{name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
