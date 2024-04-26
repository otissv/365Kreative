import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

import { emails } from "@/content/data"
import {
  Contact,
  contactValidate,
} from "@/app/[features]/contact/validate.contract"
import ContactEmail from "@/emails/contact.email"
import { isDev } from "@/lib/isDev"
import { ErrorIssues } from "@/lib/formatValidationError"
import { contactCreate } from "@/app/[features]/contact/service.contact"
import { env } from "@/config/env"

const { resend365ApiKey, testEmailAddress } = env()
const resend = new Resend(resend365ApiKey)

export async function POST(request: NextRequest) {
  const data: Contact = await request.json()
  const validate = contactValidate(data)

  const { errors } = validate as ErrorIssues

  if (errors) {
    return NextResponse.json(errors, { status: 400 })
  }

  const from = isDev ? "onboarding@resend.dev" : emails.contact.from
  const to = (isDev && testEmailAddress) || emails.contact.to

  const subject = `${data.email.split("@")[0]}: ${emails.contact.subject}`

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      react: ContactEmail({ subject, ...data }),
    })

    await contactCreate(data)

    return NextResponse.json({
      message: "Success",
    })
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 })
  }
}
