import { maybeString } from '@/lib/maybeString'

const isDev =
  // @ts-ignore
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'

export function env() {
  return {
    isDev,
    isProd: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    baseUrl: isDev
      ? (maybeString(process.env.LOCAL_BASE_URL) as any as URL)
      : (maybeString(process.env.BASE_URL) as any as URL),
    resend365ApiKey: maybeString(process.env.RESEND_365_API_KEY),
    testEmailAddress: maybeString(process.env.TEST_EMAIL_ADDRESS),
    xataApiKey: maybeString(process.env.XATA_API_KEY),
    xataBranch: maybeString(process.env.XATA_BRANCH)
  } as const
}
