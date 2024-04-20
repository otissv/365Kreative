import { SubscribeForm } from "@/app/subscribe/validate.subscribe"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

export interface ConfirmNewsletterEmailProps extends SubscribeForm {
  subject: string
  token: string
  unsubscribeURL: string
  verifyURL: string
}

export default function ConfirmNewsletterEmail({
  subject,
  name,
  unsubscribeURL,
  verifyURL,
}: ConfirmNewsletterEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Hi {name},</Text>
          <Text style={paragraph}>
            Thank you for signing up for 365Kreative newsletter.
          </Text>

          <Text style={paragraph}>
            {" "}
            Please click the link below to confirm your subscription.
          </Text>

          <Section style={btnContainer}>
            <Button style={button} href={verifyURL}>
              Confirm your subscription
            </Button>
          </Section>

          <Text style={paragraph}>It&apos;s good to have you!</Text>

          <Section style={{ marginTop: "64px" }}>
            <Text style={paragraph}>Best Regards,</Text>
            <Text style={paragraph}>The 365Kreative Team</Text>

            <Hr style={hr} />

            <Text style={footerText}>
              You are receiving this email because you previously requested to
              subscribe to newsletter.{" "}
              <Link href={unsubscribeURL} style={footerText}>
                Unsubscribe from list.
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
ConfirmNewsletterEmail.display = "ConfirmNewsletterEmail"

ConfirmNewsletterEmail.PreviewProps = {
  subject: "Please confirm you email",
  name: "Otis",
  unsubscribeURL: "http://localhost:3000/subscribe/unsubscribe",
  verifyURL: "http://localhost:3000/subscribe/verify",
} as ConfirmNewsletterEmailProps

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const btnContainer = {
  textAlign: "center" as const,
}

const button = {
  borderRadius: "4px",
  fontSize: "24px",
  background:
    "linear-gradient(180deg, hsla(293, 75%, 13%, 1) 0%, hsla(261, 53%, 30%, 1) 100%)",
  color: "#fff",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footerText = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "14px",
}
