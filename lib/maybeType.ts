export const maybeType =
  <Type>(none: Type) =>
  (type: string) =>
  <Value>(value: Value): Type =>
    typeof value === type ? (value as any) : none
