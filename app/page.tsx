import * as React from 'react'
import { Metadata } from 'next/types'

import { SocialLinks } from '@/app/(features)/nav'
import { contact } from '@/content/data'
import { Logo365k } from '@/app/(features)/365kreative'
import Home from './(features)/home'

export const metadata: Metadata = {
  title: 'Transform your online presence with 365Kreative',
  description:
    'We design, develop, and optimise websites that are visually stunning, SEO savvy and conversion-focused.'
}

export default async function HomePage() {
  return (
    <>
      <Home />

      <footer className="Footer container relative text-sm z-[2] pt-20 pb-4 px-8 lg:px-20 grid items-end xl:h-[50vh]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="grid gap-4 w-full ">
            <Logo365k className="h-10 w-36" fill="white" />
            <a className="flex" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="flex" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-10 mb-1 md:flex justify-center xl:flex">
          © Copyright 2024 all right reserved
        </div>
      </footer>
    </>
  )
}
