export const isNullOrUndefined = <Value>(value: Value): boolean =>
  Object.is(value, null) || Object.is(value, undefined)
