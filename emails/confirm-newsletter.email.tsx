import { Logo365k } from '@/app/(features)/365kreative'
import { SubscribeForm } from '@/app/(features)/subscribe/validate.subscribe'
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

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
  email
}: ConfirmNewsletterEmailProps) {
  const unsubscribe = `${unsubscribeURL}?email=${email}`

  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={mainStyles}>
        <Container style={containerStyles}>
          <Logo365k style={{ width: '320px' }} />

          <Text style={paragraphStyles}>Hi {name},</Text>

          <Text style={paragraphStyles}>
            Thank you for signing up for 365Kreative newsletter.
          </Text>

          <Text style={paragraphStyles}>
            Please click the link below to confirm your subscription.
          </Text>

          <Section style={btnContainerStyles}>
            <Button style={buttonStyles} href={verifyURL}>
              Confirm your subscription
            </Button>
          </Section>

          <Text style={paragraphStyles}>It&apos;s good to have you!</Text>

          <Section style={{ marginTop: '64px' }}>
            <Text style={paragraphStyles}>Many thanks,</Text>
            <Text style={paragraphStyles}>The 365Kreative Team</Text>

            <Hr style={hrStyles} />

            <Text style={footerTextStyles}>
              You are receiving this email because you previously requested to
              subscribe to newsletter.{' '}
              <Link href={unsubscribe} style={footerTextStyles}>
                Unsubscribe from list.
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
ConfirmNewsletterEmail.display = 'ConfirmNewsletterEmail'

ConfirmNewsletterEmail.PreviewProps = {
  subject: 'Please confirm you email',
  name: 'Otis',
  email: 'otissv@email.com',
  unsubscribeURL: 'http://localhost:3000/subscribe/unsubscribe',
  verifyURL: 'http://localhost:3000/subscribe/verify'
} as ConfirmNewsletterEmailProps

const mainStyles = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
}

const containerStyles = {
  margin: '0 auto',
  padding: '20px 0 48px'
}

const paragraphStyles = {
  fontSize: '16px',
  lineHeight: '26px'
}

const btnContainerStyles = {
  textAlign: 'center' as const
}

const buttonStyles = {
  borderRadius: '4px',
  fontSize: '24px',
  background:
    'linear-gradient(180deg, hsla(293, 75%, 13%, 1) 0%, hsla(261, 53%, 30%, 1) 100%)',
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px'
}

const hrStyles = {
  borderColor: '#cccccc',
  margin: '20px 0'
}

const footerTextStyles = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '14px'
}
