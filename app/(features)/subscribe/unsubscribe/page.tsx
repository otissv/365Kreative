import { CircleX, Mail } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next/types'

import { SocialLinks } from '@/app/(features)/nav'
import { TypographyH1 } from '@/components/typography/h1.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography/h2.typography'
import { Divider } from '@/components/divider'
import { Logo365k } from '@/app/(features)/365kreative'
import { deleteSubscribe } from '@/app/(features)/subscribe/service.subscribe'
import { Reviews } from '@/app/(features)/reviews'

export const metadata: Metadata = {
  title: 'Unsubscribing from newsletter',
  description: 'Confirmation of unsubscribing from newsletter.'
}

export default async function Unsubscribed({
  searchParams
}: {
  searchParams: { email: string }
}) {
  const { email } = searchParams

  const result = await deleteSubscribe(email)
  const error = (result as { error: Error }).error

  return (
    <div className="container grid justify-center pt-6 pb-20 gap-20">
      <div className="max-w-[800px] grid center gap-6">
        <Logo365k className="w-full" />
        <div className="center mx-auto relative w-40 h-40 mb-10">
          <Mail className="absolute w-40 h-40 mx-auto app-gradient-color" />
          <CircleX
            fill="black"
            className="absolute bottom-0 right-0 w-14 h-14 text-[#6f0b0b]"
          />
        </div>

        {error ? (
          <>
            <TypographyH1 className="center mb-6">
              Something went wrong
            </TypographyH1>
            <TypographyParagraph className="text-xl center ">
              Please try again in an hour.
            </TypographyParagraph>
          </>
        ) : (
          <>
            <TypographyH1 className="center mb-6">Unsubscribed</TypographyH1>
            <TypographyParagraph className="text-xl center ">
              {email || ''} has been unsubscribed from the newsletter.
            </TypographyParagraph>
          </>
        )}
      </div>

      <Divider />

      <div className=" grid md:grid-cols-2 gap-6 center">
        <Button
          variant="outline"
          className="app-gradient-border hover:app-bg-gradient hover:text-foreground focus:app-bg-gradient  border-2  w-48"
          asChild
        >
          <Link href="/">Back to home page</Link>
        </Button>
        <div className="grid gap-2 center">
          <TypographyParagraph>Let&apos;s connect</TypographyParagraph>
          <SocialLinks />
        </div>
      </div>

      <Divider />

      <section id="hero">
        <TypographyH2 className="flex center">
          What our Clients Say
        </TypographyH2>
        <Reviews />
      </section>
    </div>
  )
}
