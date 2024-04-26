"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { contact } from "@/content/data"
import {
  Section,
  SectionHeading,
  SectionProps,
  SectionWatermark,
} from "@/app/features/section"
import { Box } from "@/components/box"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SendHorizontal } from "lucide-react"
import {
  contactEmailValidate,
  contactMessageValidate,
  contactNameValidate,
  contactValidate,
} from "@/app/contact/validate.contract"
import { Loading } from "@/components/loading"
import { ErrorIssues } from "@/lib/formatValidationError"
import { isNullOrUndefined } from "@/lib/isNullOrUndefined"

type ContactFormNameAction = {
  type: "name"
  value?: string
  error?: string
}

type ContactFormEmailAction = {
  type: "email"
  value?: string
  error?: string
}

type ContactFormMessageAction = {
  type: "message"
  value?: string
  error?: string
}

type ContactFormLoadingAction = {
  type: "isLoading"
  isLoading?: boolean
}

type ContactFormInvalidAction = {
  type: "invalid"
  name?: string
  email?: string
  message?: string
}

type ContactFormResetAction = {
  type: "reset"
}

type ContactFormActionTypes =
  | ContactFormLoadingAction
  | ContactFormNameAction
  | ContactFormEmailAction
  | ContactFormMessageAction
  | ContactFormInvalidAction
  | ContactFormResetAction

type ContactFormActionState = {
  name: { value: string; error: string }
  email: { value: string; error: string }
  message: { value: string; error: string }
  isLoading: boolean
}

const initialFormState: ContactFormActionState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
  isLoading: false,
}

export const Contact = ({ className, ...props }: SectionProps) => {
  const router = useRouter()

  const formReducer = (
    state: ContactFormActionState = initialFormState,
    { type, ...payload }: ContactFormActionTypes
  ): ContactFormActionState => {
    switch (type) {
      case "isLoading":
        return {
          ...state,
          ...(payload as any),
        }

      case "name":
        return {
          ...state,
          name: { ...state.name, ...(payload as ContactFormNameAction) },
        }

      case "email":
        return {
          ...state,
          email: { ...state.email, ...(payload as ContactFormEmailAction) },
        }

      case "message":
        return {
          ...state,
          message: {
            ...state.message,
            ...(payload as ContactFormMessageAction),
          },
        }

      case "invalid": {
        const name = (payload as ContactFormInvalidAction).name
        const email = (payload as ContactFormInvalidAction).email
        const message = (payload as ContactFormInvalidAction).message

        return {
          ...state,
          name: {
            ...state.name,
            ...(!isNullOrUndefined(name) ? { error: name } : {}),
          },
          email: {
            ...state.email,
            ...(!isNullOrUndefined(email) ? { error: email } : {}),
          },
          message: {
            ...state.message,
            ...(!isNullOrUndefined(message) ? { error: message } : {}),
          },
        }
      }

      case "reset":
        return initialFormState

      default:
        return state
    }
  }

  const [form, formDispatch] = React.useReducer<typeof formReducer>(
    formReducer,
    initialFormState
  )

  const handleOnContactSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()

    const validate = contactValidate({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    })

    const { errors } = validate as ErrorIssues

    if (errors) {
      formDispatch({
        type: "invalid",
        ...errors,
      })
      return
    }

    try {
      formDispatch({
        type: "isLoading",
        isLoading: true,
      })
      formDispatch({
        type: "invalid",
        name: "",
        email: "",
        message: "",
      })

      const response = await fetch("/contact/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      })

      if (!response.ok) {
        formDispatch({
          type: "agree",
          error: "Something went wrong",
        })
        return
      }

      formDispatch({
        type: "reset",
      })

      router.push("/contact/thank-you")
    } catch (error) {
      formDispatch({
        type: "isLoading",
        isLoading: false,
      })
    }
  }

  const validateField = (
    fieldName: "name" | "email" | "message",
    value: string
  ) => {
    let validate
    if (fieldName === "name") {
      validate = contactNameValidate(value)
    } else if (fieldName === "email") {
      validate = contactEmailValidate(value)
    } else if (fieldName === "message") {
      validate = contactMessageValidate(value)
    }

    const { errors } = validate as ErrorIssues

    if (errors) {
      formDispatch({
        type: "invalid",
        ...errors,
      })
    }
  }

  const handleOnInputBlur =
    (fieldName: "name" | "email") =>
    (e: React.FocusEvent<HTMLButtonElement>) => {
      validateField(fieldName, e.currentTarget.value)
    }

  const handleOnTextareaBlur =
    (fieldName: "message") => (e: React.FocusEvent<HTMLTextAreaElement>) => {
      validateField(fieldName, e.currentTarget.value)
    }

  const changeFormValue = (
    type: "name" | "email" | "message",
    value: string
  ) => {
    formDispatch({
      type,
      value,
      error: "",
    })
  }

  const handleOnInputChange =
    (type: "name" | "email") => (e: React.ChangeEvent<HTMLInputElement>) => {
      changeFormValue(type, e.currentTarget.value)
    }

  const handleOnTextareaChange =
    (type: "message") => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      changeFormValue(type, e.currentTarget.value)
    }

  return (
    <Section className={cn("section-gradient", className)} {...props}>
      <SectionWatermark className="ml-2 lg:translate-x-16 top-[10%] md:top-[15%] lg:top-[20%] 2xl:top-[20%]">
        {contact.title}
      </SectionWatermark>
      <Box
        className={cn(
          "section-container px-2 lg:px-20 pb-20 pt-[32%] md:pt-[5%] lg:pt-[8%] xl:pt-[15%] 2xl:pt-[5%]",
          "lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
        )}
      >
        <div>
          <SectionHeading className="mb-8" headingClassName="grid mb-2">
            <span className="text-2xl uppercase font-normal tracking-wide mb-1">
              {contact.heading}
              <span className="text-transparent">,</span>
            </span>
            {contact.title}
          </SectionHeading>

          <Box
            className="ml-5 lg:ml-0 grid gap-2 mb-6 translate-y-40 duration-500 delay-10"
            enter="translate-y-0"
          >
            <TypographyParagraph className="mb-8 lg:ml-0">
              {contact.content}
            </TypographyParagraph>

            <a href={`email:${contact.email}`}>Email: {contact.email}</a>
            <a href={`tel:${contact.phone}`}>Phone: {contact.phone}</a>
          </Box>
        </div>

        <Box
          as="form"
          className={cn(
            "bg-background-3 border rounded-sm p-4 flex flex-col gap-6 ml-5 lg:ml-0 translate-y-40 duration-500 delay-100",
            "lg:gird lg:col-start-2"
          )}
          enter="translate-y-0"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="flex mb-2">
                Name *
              </Label>
              <Input
                id="name"
                className={cn(
                  "rounded-sm",
                  form.name.error && "border-red-700"
                )}
                value={form.name.value}
                onBlur={handleOnInputBlur("name")}
                onChange={handleOnInputChange("name")}
              />
              {form.name.error ? (
                <TypographyParagraph className="text-sm text-red-700 mb-2 p-1 rounded-sm leading-normal">
                  {form.name.error}
                </TypographyParagraph>
              ) : null}
            </div>

            <div>
              <Label htmlFor="email" className="flex mb-2">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                className={cn(
                  "rounded-sm",
                  form.email.error && "border-red-700"
                )}
                value={form.email.value}
                onBlur={handleOnInputBlur("email")}
                onChange={handleOnInputChange("email")}
              />
              {form.email.error ? (
                <TypographyParagraph className="text-sm text-red-700 mb-2 p-1 rounded-sm leading-normal">
                  {form.email.error}
                </TypographyParagraph>
              ) : null}
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="flex mb-2">
              Message *
            </Label>
            <Textarea
              id="message"
              className={cn(
                "rounded-sm rounded-br-none",
                form.message.error && "border-red-700"
              )}
              placeholder="Enter message here.."
              value={form.message.value}
              onBlur={handleOnTextareaBlur("message")}
              onChange={handleOnTextareaChange("message")}
            />
            {form.message.error ? (
              <TypographyParagraph className="text-sm text-red-700 mb-2 p-1 rounded-sm leading-normal">
                {form.message.error}
              </TypographyParagraph>
            ) : null}
          </div>

          <Button
            className={cn(
              "text-xl rounded-sm text-foreground w-full h-auto bg-purple-700  hover:bg-purple-500 focus:bg-purple-500",
              "md:ml-auto md:w-auto"
            )}
            disabled={form.isLoading}
            onClick={handleOnContactSubmit}
          >
            {form.isLoading ? (
              <>
                <Loading className="mr-2 h-4 w-4" /> Sending...
              </>
            ) : (
              <>
                {contact.button}
                <SendHorizontal className="ml-4 h-6 w-6" />{" "}
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Section>
  )
}
