import { redirect } from 'next/navigation'
import { isBefore } from 'date-fns'
import { SubscribeRecord } from '@/xata'
import { SelectedPick } from '@xata.io/client'
import { Newspaper } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next/types'

import { TypographyH1 } from '@/components/typography/h1.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import {
  filterBySubscribeToken,
  updateSubscribeToken
} from '@/app/(features)/subscribe/service.subscribe'
import { ResendSubscribe } from '@/app/(features)/subscribe/verify/resend-subscribe'
import { Subscribe } from '@/app/(features)/subscribe/validate.subscribe'
import { Divider } from '@/components/divider'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/app/(features)/nav'
import { TypographyH2 } from '@/components/typography/h2.typography'
import { Logo365k } from '@/app/(features)/365kreative'
import { Reviews } from '@/app/(features)/reviews'

export const metadata: Metadata = {
  title: 'Verify subscription to newsletter',
  description: 'Confirmation of subscription to newsletter.'
}

export default async function Verify({
  searchParams
}: {
  searchParams: { token: string }
}) {
  const { token } = searchParams

  if (!token) redirect('/')

  const filter = await filterBySubscribeToken(token)
  const filterError = (filter as { error: Error }).error

  if (filterError) {
    return (
      <VerifyContainer>
        <TypographyParagraph className="justify-center">
          Token does not exist
        </TypographyParagraph>
      </VerifyContainer>
    )
  }

  const { name, email, token_expiry } = filter as Subscribe

  if (isBefore(new Date(), token_expiry)) {
    const subscribe = filter as Readonly<SelectedPick<SubscribeRecord, ['*']>>
    const subscription = await updateSubscribeToken({ token, subscribe })
    const error = (subscription as { error: Error }).error

    if (error) redirect('/')

    return (
      <VerifyContainer>
        <div className="grid justify-center items-center gap-6">
          <TypographyParagraph className="justify-center">
            Thank you for subscribing to our newsletter
          </TypographyParagraph>
        </div>
      </VerifyContainer>
    )
  } else {
    return (
      <VerifyContainer>
        <ResendSubscribe name={name as string} email={email as string} />
      </VerifyContainer>
    )
  }
}

const VerifyContainer = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="container grid justify-center pt-6 pb-20 gap-20" {...props}>
      <Logo365k className="w-full" />

      <div className="max-w-[800px] grid center gap-6">
        <div className="center mx-auto relative w-40 h-40 mb-10">
          <Newspaper className="w-40 h-40 mx-auto app-gradient-color" />
        </div>

        <TypographyH1 className="center mb-6">Verify Subscription</TypographyH1>

        {children}
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
