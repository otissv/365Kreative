'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { Button } from '@/components/ui/button'
import { SubscribeForm } from '@/app/(features)/subscribe/validate.subscribe'

export interface ResendSubscribeProps
  extends SubscribeForm,
    React.HTMLAttributes<HTMLDivElement> {}

export const ResendSubscribe = ({ name, email }: ResendSubscribeProps) => {
  const [hasError, setHasError] = React.useState<boolean>(false)

  const router = useRouter()
  const handleOnResendClick = async () => {
    const response = await fetch('/subscribe/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })

    if (!response.ok) {
      setHasError(true)
      return
    }
    setHasError(false)
    router.push('/subscribe/thank-you')
  }

  return (
    <div className="grid justify-center items-center gap-6">
      <TypographyParagraph className="justify-center">
        This token has expired
      </TypographyParagraph>

      <Button onClick={handleOnResendClick}>Resend Confirm Subscription</Button>

      {hasError ? (
        <TypographyParagraph className="justify-center">
          This token has expired
        </TypographyParagraph>
      ) : null}
    </div>
  )
}
