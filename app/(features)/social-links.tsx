import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

const social = [
  {
    href: 'https://www.linkedin.com/company/365Milian',
    name: 'LinkedIn',
    Icon: ({ className, ...props }: Record<string, any>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    href: 'https://twitter.com/365Milian',
    name: ' X formerly known as Twitter',
    Icon: (props: Record<string, any>) => (
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
        fill="currentColor"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com/365Milian',
    name: 'Instagram',
    Icon: (props: Record<string, any>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
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
              rel="noopener noreferrer"
              target="_blank"
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
