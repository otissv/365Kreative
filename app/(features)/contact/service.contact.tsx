import { getXataClient } from '@/xata'

import {
  Contact,
  contactValidate
} from '@/app/(features)/contact/validate.contract'
import { ErrorIssues } from '@/lib/formatValidationError'

const xata = getXataClient()

export async function contactCreate(
  data: Contact
): Promise<Contact | { error: Error }> {
  try {
    const validate = contactValidate(data)
    const errors = (validate as ErrorIssues).errors

    if (errors) {
      throw new Error('InValid data')
    }
    const result = await xata.db.contact_form.create(data)

    if (!result) {
      throw new Error('Contact not created')
    }

    return result as Contact
  } catch (error) {
    return {
      error: error instanceof Error ? error : new Error(error as string)
    }
  }
}
