import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { nanoid } from "nanoid"

import ConfirmNewsletterEmail from "@/emails/confirm-newsletter.email"
import { emails } from "@/content/data"
import { isDev } from "@/lib/isDev"
import {
  SubscribeForm,
  subscribeValidate,
} from "@/app/subscribe/validate.subscribe"
import { ErrorIssues } from "@/lib/formatValidationError"
import { createSubscribe } from "@/app/subscribe/service.subscribe"
import { env } from "@/config/env"

const { resend365ApiKey, testEmailAddress, baseUrl } = env()
const resend = new Resend(resend365ApiKey)

export async function POST(request: NextRequest) {
  try {
    const data: SubscribeForm = await request.json()
    const validate = subscribeValidate(data)

    const { errors } = validate as ErrorIssues

    if (errors) {
      return NextResponse.json(errors, { status: 400 })
    }

    const from = isDev
      ? "onboarding@resend.dev"
      : emails.confirmNewsletterSubscription.from
    const to = (isDev && testEmailAddress) || data.email

    const token = nanoid(36)
    const subject = emails.confirmNewsletterSubscription.subject
    const unsubscribeURL = `${baseUrl}${emails.confirmNewsletterSubscription.unsubscribePath}`
    const verifyURL = `${baseUrl}${emails.confirmNewsletterSubscription.verifyPath}?token=${token}`

    await resend.emails.send({
      from,
      to,
      subject,
      react: ConfirmNewsletterEmail({
        subject,
        token,
        unsubscribeURL,
        verifyURL,
        ...data,
      }),
    })

    await createSubscribe({
      ...data,
      token,
    })

    return NextResponse.json({
      message: "Success",
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      status: 400,
      error,
    })
  }
}
