import { maybeString } from "@/lib/maybeString"

export function env() {
  return {
    isDev:
      // @ts-ignore
      process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev",
    isProd: process.env.NODE_ENV === "production",
    isTest: process.env.NODE_ENV === "test",
    baseUrl: maybeString(process.env.BASE_URL),
    resend365ApiKey: maybeString(process.env.RESEND_365_API_KEY),
    testEmailAddress: maybeString(process.env.TEST_EMAIL_ADDRESS),
    xataApiKey: maybeString(process.env.XATA_API_KEY),
    xataBranch: maybeString(process.env.XATA_BRANCH),
  } as const
}
