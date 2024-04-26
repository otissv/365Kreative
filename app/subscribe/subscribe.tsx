"use client"

import React from "react"
import { MoveRight } from "lucide-react"
import { useRouter } from "next/navigation"

import { subscribe } from "@/content/data"
import {
  Section,
  SectionHeading,
  SectionProps,
  SectionWatermark,
} from "@/app/features/section"
import { Box, BoxProps } from "@/components/box"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loading } from "@/components/loading"
import {
  subscribeEmailValidate,
  subscribeNameValidate,
  subscribeValidate,
} from "@/app/subscribe/validate.subscribe"
import { ErrorIssues } from "@/lib/formatValidationError"
import { isNullOrUndefined } from "@/lib/isNullOrUndefined"

type SubscriptionFormAgreeAction = {
  type: "agree"
  value?: boolean
  error?: string
}
type SubscriptionFormEmailAction = {
  type: "email"
  value?: string
  error?: string
}
type SubscriptionFormInvalidAction = {
  type: "invalid"
  name?: string
  email?: string
  agree?: string
}

type SubscriptionFormLoadingAction = {
  type: "isLoading"
  loading?: boolean
}

type SubscriptionFormNameAction = {
  type: "name"
  value?: string
  error?: string
}

type SubscriptionFormResetAction = {
  type: "reset"
}

type SubscriptionFormActionTypes =
  | SubscriptionFormAgreeAction
  | SubscriptionFormEmailAction
  | SubscriptionFormInvalidAction
  | SubscriptionFormLoadingAction
  | SubscriptionFormNameAction
  | SubscriptionFormResetAction

type SubscriptionFormState = {
  name: { value: string; error: string }
  email: { value: string; error: string }
  agree: { value: boolean; error: string }
  isLoading: boolean
}

const initialFormState: SubscriptionFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  agree: { value: false, error: "" },
  isLoading: false,
}

export const Subscribe = ({ className, ...props }: SectionProps) => {
  return (
    <Section className={cn("section-gradient", className)} {...props}>
      <SectionWatermark className="ml-2 lg:translate-x-16  top-[20%] md:top-[30%] lg:top-[20%] 2xl:top-[45%]">
        {subscribe.title}
      </SectionWatermark>

      <Box className="section-container px-2 lg:px-20 pb-20 pt-[18%] md:pt-[25%] lg:pt-[8%] xl:pt-[15%] 2xl:pt-[20%]">
        <SectionHeading className="mb-8" headingClassName="grid mb-2">
          <span className="text-2xl uppercase font-normal tracking-wide mb-1">
            {subscribe.heading}
            <span className="text-transparent">,</span>
          </span>
          {subscribe.title}
        </SectionHeading>

        <TypographyParagraph
          className="block mb-1 ml-5 lg:ml-0 opacity-0 translate-y-40 duration-500 delay-100"
          enter="opacity-1 translate-y-0"
        >
          {subscribe.content[0]}
        </TypographyParagraph>

        <TypographyParagraph
          className="block mb-8 ml-5 lg:ml-0 opacity-0 translate-y-40 duration-500 delay-100"
          enter="opacity-1 translate-y-0"
        >
          {subscribe.content[1]}
        </TypographyParagraph>

        <SubscribeForm
          className="opacity-0 translate-y-40 duration-500 delay-100"
          enter="opacity-1 translate-y-0"
        />
      </Box>
    </Section>
  )
}

export const SubscribeForm = ({ className, ...props }: BoxProps) => {
  const router = useRouter()
  const formReducer = (
    state: SubscriptionFormState,
    { type, ...payload }: SubscriptionFormActionTypes
  ): SubscriptionFormState => {
    switch (type) {
      case "isLoading":
        return {
          ...state,
          ...(payload as any),
        }

      case "name":
        return {
          ...state,
          name: { ...state.name, ...(payload as SubscriptionFormNameAction) },
        }

      case "email":
        return {
          ...state,
          email: {
            ...state.email,
            ...(payload as SubscriptionFormEmailAction),
          },
        }

      case "agree":
        return {
          ...state,
          agree: {
            ...state.agree,
            ...(payload as SubscriptionFormAgreeAction),
          },
        }

      case "invalid": {
        const name = (payload as SubscriptionFormInvalidAction).name
        const email = (payload as SubscriptionFormInvalidAction).email
        const agree = (payload as SubscriptionFormInvalidAction).agree

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
          agree: {
            ...state.agree,
            ...(!isNullOrUndefined(agree) ? { error: agree } : {}),
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

  const handleOnSubscriptionSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault()

    const validate = subscribeValidate({
      name: form.name.value,
      email: form.email.value,
    })

    const { errors } = validate as ErrorIssues

    if (errors) {
      formDispatch({
        type: "invalid",
        ...errors,
      })
      return
    }

    if (!form.agree.value) {
      formDispatch({
        type: "agree",
        error: "You must agree",
      })
      return
    }

    try {
      formDispatch({
        type: "isLoading",
        loading: true,
      })
      formDispatch({
        type: "invalid",
        name: "",
        email: "",
        agree: "",
      })

      const response = await fetch("/subscribe/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
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

      router.push(`/subscribe/thank-you?email=${form.email.value}`)
    } catch (error) {
      formDispatch({
        type: "isLoading",
        loading: false,
      })
      formDispatch({
        type: "agree",
        error: "Something went wrong",
      })
    }
  }

  const handleOnBlur =
    (fieldName: "name" | "email") =>
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      let validate
      if (fieldName === "name") {
        validate = subscribeNameValidate(e.currentTarget.value)
      } else if (fieldName === "email") {
        validate = subscribeEmailValidate(e.currentTarget.value)
      }

      const { errors } = validate as ErrorIssues

      if (errors) {
        formDispatch({
          type: "invalid",
          ...errors,
        })
      }
    }

  const handleOnInputChange =
    (type: "name" | "email") =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      formDispatch({
        type,
        value: e.currentTarget.value,
        error: "",
      })
    }

  const handleOnCheckboxChange = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault()
    formDispatch({
      type: "agree",
      value: !form.agree.value,
    })
  }

  return (
    <>
      <Box
        as="p"
        className="text-sm italic mb-1 opacity-0 translate-y-40"
        enter="translate-y-0 opacity-100"
      >
        No spam, ever!
      </Box>

      <Box
        as="form"
        className={cn(
          "bg-background-3 border rounded-sm p-4 max-w-[500px] ml-5 lg:ml-0 leading-[0]",
          className
        )}
        {...props}
      >
        <Label htmlFor="agree" className="items-start leading-1 mb-6">
          <Checkbox
            id="agree"
            checked={form.agree.value}
            className="mr-2 mb-2 items-center translate-y-1"
            onClick={handleOnCheckboxChange}
          />
          <TypographyParagraph className="text-sm">
            {subscribe.agree}
          </TypographyParagraph>
        </Label>

        <div className="relative grid md:flex">
          <div className="mb-3 md:w-96">
            <Input
              aria-label="name"
              className="md:rounded-r-none"
              placeholder="Enter your name..."
              onBlur={handleOnBlur("name")}
              value={form.name.value}
              onChange={handleOnInputChange("name")}
            />
          </div>

          <div className="mb-3 md:w-96">
            <Input
              type="email"
              aria-label="email address"
              className="md:rounded-l-none md:border-l-0 md:rounded-r-none md:border-r-0"
              placeholder="Enter your email here.."
              value={form.email.value}
              onBlur={handleOnBlur("email")}
              onChange={handleOnInputChange("email")}
            />
          </div>

          <Button
            className={cn(
              "bg-purple-700  hover:bg-purple-500 focus:bg-purple-500 text-white w-full hidden",
              "md:flex md:w-[150px] md:border md:rounded-l-none"
            )}
            onClick={handleOnSubscriptionSubmit}
          >
            {form.isLoading ? (
              <>
                <Loading className="mr-2 h-4 w-4" /> {subscribe.sending}...
              </>
            ) : (
              <>
                {subscribe.button} <MoveRight className="h-4 w-4 ml-4" />
              </>
            )}
          </Button>
        </div>

        <div className="grid">
          {form.name.error ? (
            <TypographyParagraph className="text-sm bg-red-700 my-2 p-1 rounded-sm leading-normal">
              {form.name.error}
            </TypographyParagraph>
          ) : null}
          {form.email.error ? (
            <TypographyParagraph className="text-sm bg-red-700 my-2 p-1 rounded-sm leading-normal">
              {form.email.error}
            </TypographyParagraph>
          ) : null}

          {form.agree.error ? (
            <TypographyParagraph className="text-sm bg-red-700 my-2 p-1 rounded-sm leading-normal">
              {form.agree.error}
            </TypographyParagraph>
          ) : null}
        </div>

        <Button
          className={cn(
            "bg-purple-700  hover:bg-purple-500 focus:bg-purple-500 text-white w-full mt-6 md:hidden"
          )}
          onClick={handleOnSubscriptionSubmit}
        >
          {form.isLoading ? (
            <>
              <Loading className="mr-2 h-4 w-4" /> {subscribe.sending}
            </>
          ) : (
            <>
              {subscribe.button} <MoveRight className="h-4 w-4 ml-4" />
            </>
          )}
        </Button>
      </Box>
    </>
  )
}
