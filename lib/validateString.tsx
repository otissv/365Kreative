export const validateString = (value: string, length = 0): boolean =>
  Boolean(
    typeof value === "string" && value.trim() !== "" && value.length >= length
  )
