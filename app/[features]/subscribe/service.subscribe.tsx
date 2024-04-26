import { SubscribeRecord, getXataClient } from "@/xata"
import { SelectedPick } from "@xata.io/client"
import { add } from "date-fns"

import {
  SubscribeForm,
  subscribeTokenValidate,
  subscribeValidate,
} from "@/app/[features]/subscribe/validate.subscribe"
import { ErrorIssues } from "@/lib/formatValidationError"

const xata = getXataClient()

export async function createSubscribe({
  name,
  email,
  token,
}: SubscribeForm & { token: string }) {
  try {
    const tokenValidate = subscribeTokenValidate(token)
    const tokenErrors = (tokenValidate as ErrorIssues).errors

    if (tokenErrors) {
      throw Error("Must provide a token")
    }

    const validate = subscribeValidate({
      name,
      email,
    })

    const errors = (validate as ErrorIssues).errors

    if (errors) {
      throw new Error("InValid data")
    }

    const result = await xata.db.subscribe.create({
      name,
      email,
      token,
      token_expiry: add(new Date(), { days: 3 }),
    })

    if (!result) return { error: new Error("Subscription not created") }

    return result
  } catch (error) {
    return {
      error: error instanceof Error ? error : new Error(error as string),
    }
  }
}

export async function filterBySubscribeToken(token: string) {
  try {
    const validate = subscribeTokenValidate(token)
    const error = (validate as ErrorIssues).errors

    if (error) {
      throw new Error("Must provide a token")
    }

    const result = await xata.db.subscribe.filter({ token }).getFirst()

    if (!result) {
      throw new Error("Subscription not found")
    }

    return result
  } catch (error) {
    return {
      error: error instanceof Error ? error : new Error(error as string),
    }
  }
}

export async function updateSubscribeToken({
  token,
  subscribe,
}: {
  token: string
  subscribe: Readonly<SelectedPick<SubscribeRecord, ["*"]>>
}) {
  try {
    if (!subscribe) {
      throw new Error("Subscription not found")
    }

    const validate = subscribeTokenValidate(token)
    const error = (validate as ErrorIssues).errors

    if (error) {
      throw new Error("Must provide a token")
    }

    const result = await subscribe.update({
      token_expiry: null,
      token: null,
      verified: true,
    })

    if (!result) {
      throw new Error("Subscription not found")
    }

    return result
  } catch (error) {
    return {
      error: error instanceof Error ? error : new Error(error as string),
    }
  }
}
