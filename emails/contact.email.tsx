import { Logo365k } from '@/app/(features)/365kreative'
import { Contact } from '@/app/(features)/contact/validate.contract'
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Section,
  Hr
} from '@react-email/components'

import * as React from 'react'

export interface ContactEmailProps extends Contact {
  name: string
  subject: string
  message: string
}

export default function ContactEmail({
  name,
  subject,
  message
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body
        style={{
          backgroundColor: '#ffffff',
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
        }}
      >
        <Container style={containerStyles}>
          <Logo365k style={{ width: '320px' }} />

          <Text style={paragraphStyles}>Hi {name},</Text>

          <Text style={paragraphStyles}>
            Thank you for contacting us, I can confirm that we have received
            your email.
          </Text>

          <Text style={paragraphStyles}>
            We will be in touch with a response shortly.
          </Text>

          <Section style={{ marginTop: '20px' }}>
            <Text style={paragraphStyles}>Many thanks,</Text>
            <Text style={paragraphStyles}>The 365Kreative Team</Text>

            <Hr style={hr} />

            <Section>
              <Text style={messageStyles}>Your message:</Text>
              <Text style={messageStyles}>{message}</Text>
            </Section>

            <Hr style={hr} />

            <Text style={footerTextStyles}>
              You are receiving this email because you previously filled in a
              contact on our website.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
ContactEmail.display = 'ContactEmail'

ContactEmail.PreviewProps = {
  subject: 'Email confirmation – We have received your message',
  name: 'Otis',
  message: `I hope this message finds you well. I am reaching out to express my interest in your web development services. I am considering creating a new website and would like to gather some information about your offerings.

  Could you please provide me with details on the types of websites you specialize in, along with any packages or pricing information? Additionally, I am keen to understand the process you follow from conception to launch, including any initial consultations, design phases, and post-launch support.
  
  Thank you for your time, and I look forward to your response.`
} as ContactEmailProps

const containerStyles = {
  margin: '0 auto',
  padding: '20px 0 48px'
}

const paragraphStyles = {
  fontSize: '16px',
  lineHeight: '26px'
}

const messageStyles = {
  fontSize: '16px',
  lineHeight: '26px',
  fontStyle: 'italic',
  color: '#8898aa'
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0'
}

const footerTextStyles = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '14px'
}
