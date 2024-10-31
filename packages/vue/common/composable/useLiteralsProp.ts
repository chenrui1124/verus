import type { PropType } from 'vue'

export const useLiteralsProp = <T extends string | undefined>({
  default: dv,
  optional
}: {
  default: T
  optional: T[]
}) => ({
  type: String as unknown as PropType<T>,
  default: dv,
  validator: (value: T) => optional.includes(value)
})
