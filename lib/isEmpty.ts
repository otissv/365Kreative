import { isNullOrUndefined } from "./isNullOrUndefined"

export const isEmpty = <Value>(value: Value): boolean => {
  const type: string = typeof value

  switch (true) {
    case isNullOrUndefined(value):
    case (value as any).length === 0:
    case Array.isArray(value) &&
      value.filter(<V>(v: V) => typeof v === "undefined").length ===
        value.length:
      return true

    case type == "boolean":
    case type == "number":
      return false

    case type == "object":
      return !Object.keys(value as object).length

    default:
      return !value
  }
}
