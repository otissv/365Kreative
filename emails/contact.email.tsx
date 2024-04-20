import { Contact } from "@/app/contact/validate.contract"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import * as React from "react"

export interface ContactEmailProps extends Contact {
  subject: string
}

export default function ContactEmail({ subject }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{subject}</Preview>
      <Body
        style={{
          backgroundColor: "#ffffff",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        }}
      >
        <Container className="mx-auto px-0 pt-5 p-12">
          <Text className="text-">Thank you for contacting us</Text>
        </Container>
      </Body>
    </Html>
  )
}
ContactEmail.display = "ContactEmail"
