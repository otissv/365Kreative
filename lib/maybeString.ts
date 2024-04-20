import { maybeType } from "./maybeType"

export const maybeString = (value: unknown): string =>
  maybeType("")("string")(value)
