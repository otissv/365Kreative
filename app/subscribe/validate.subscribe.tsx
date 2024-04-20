import { formatValidationError } from "@/lib/formatValidationError"
import z from "zod"

export const subscribeFormValidator = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name is too short",
    })
    .min(2, { message: "Name is too short" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),
})

export const subscribeRecordValidator = subscribeFormValidator.extend({
  id: z.string(),
  token: z.string().min(36),
  token_expiry: z.date(),
  verified: z.boolean(),
  xata: z
    .object({
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      version: z.number().optional(),
    })
    .optional(),
})

export type SubscribeForm = z.infer<typeof subscribeFormValidator>
export type Subscribe = z.infer<typeof subscribeRecordValidator>

export function subscribeValidate(data: SubscribeForm) {
  try {
    return subscribeFormValidator.parse(data)
  } catch (error) {
    return formatValidationError(error)
  }
}

export function subscribeNameValidate(name: SubscribeRecord["name"]) {
  try {
    return subscribeFormValidator.pick({ name: true }).parse({ name })
  } catch (error) {
    return formatValidationError(error)
  }
}

export function subscribeEmailValidate(email: SubscribeRecord["email"]) {
  try {
    return subscribeFormValidator.pick({ email: true }).parse({ email })
  } catch (error) {
    return formatValidationError(error)
  }
}

export function subscribeTokenValidate(token: SubscribeRecord["token"]) {
  try {
    return subscribeRecordValidator.pick({ token: true }).parse({ token })
  } catch (error) {
    return formatValidationError(error)
  }
}
