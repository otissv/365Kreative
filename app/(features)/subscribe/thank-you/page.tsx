import { CircleCheck, Mail, MoveDown } from 'lucide-react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next/types'

import { SocialLinks } from '@/app/(features)/social-links'
import { TypographyH1 } from '@/components/typography/h1.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { Button } from '@/components/ui/button'
import { TypographyH2 } from '@/components/typography/h2.typography'
import { Divider } from '@/components/divider'
import { isEmail } from '@/lib/isEmail'
import { Logo365M } from '@/app/(features)/365Milian'
import { Reviews } from '@/app/(features)/reviews'

export const metadata: Metadata = {
  title: 'Thank you for subscribing',
  description: 'Confirmation of request ti join newsletter.'
}

export default function ThankYou({
  searchParams
}: {
  searchParams: { email: string }
}) {
  const { email } = searchParams

  if (!isEmail(email)) redirect('/')

  return (
    <div className="container grid justify-center pt-6 pb-20 gap-20">
      <div className="max-w-[800px] grid center gap-6">
        <Logo365M className="w-full" />
        <div className="center mx-auto relative w-40 h-40 mb-10">
          <Mail className="absolute w-40 h-40 mx-auto app-gradient-color" />
          <CircleCheck
            fill="black"
            className="absolute bottom-0 right-0 w-14 h-14 text-green-800"
          />
        </div>

        <TypographyH1 className="center mb-6">
          Thank you <br />
          for signing up <br />
          for our newsletter
        </TypographyH1>

        <TypographyParagraph className="text-xl center ">
          An email has been sent to {email}.
        </TypographyParagraph>
        <TypographyParagraph className="text-xl center ">
          Please click the verify button in the email to complete your
          registration.
        </TypographyParagraph>

        <TypographyParagraph className="inline-block center ">
          In the mean time, check out what our clients have to say
          <MoveDown className="inline w-4" />
        </TypographyParagraph>
      </div>

      <Divider />

      <div className=" grid md:grid-cols-2 gap-6 center">
        <Button
          variant="outline"
          className="app-border-gradient hover:app-bg-gradient hover:text-foreground focus:app-bg-gradient  border-2  w-48"
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
