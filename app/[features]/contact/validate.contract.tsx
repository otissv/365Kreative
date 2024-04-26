import z from "zod"

import { ErrorIssues, formatValidationError } from "@/lib/formatValidationError"

export const contactFormValidator = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5),
})

export interface Contact extends z.infer<typeof contactFormValidator> {}

export function contactValidate(data: Contact): Contact | ErrorIssues {
  try {
    return contactFormValidator.parse(data)
  } catch (error) {
    return formatValidationError(error)
  }
}

export function contactNameValidate(
  name: Contact["name"]
): ErrorIssues | { name: Contact["name"] } {
  try {
    return contactFormValidator.pick({ name: true }).parse({ name })
  } catch (error) {
    return formatValidationError(error)
  }
}

export function contactEmailValidate(
  email: Contact["email"]
): { email: Contact["email"] } | ErrorIssues {
  try {
    return contactFormValidator.pick({ email: true }).parse({ email })
  } catch (error) {
    return formatValidationError(error)
  }
}

export function contactMessageValidate(
  message: Contact["message"]
): { message: Contact["message"] } | ErrorIssues {
  try {
    return contactFormValidator.pick({ message: true }).parse({ message })
  } catch (error) {
    return formatValidationError(error)
  }
}
