import type { OrReadonly } from 'mm3'

export namespace VerusProps {
  type ItemType<A extends OrReadonly<unknown[]>> = A[number]

  export const EACH_DIRECTION = ['horizontal', 'vertical'] as const
  type EachDirection = ItemType<typeof EACH_DIRECTION>
  export type Direction<T extends EachDirection = EachDirection> = T

  export const EACH_POSITION = ['top', 'right', 'bottom', 'left'] as const
  type EachPosition = ItemType<typeof EACH_POSITION>
  export type Position<T extends EachPosition = EachPosition> = T

  export const EACH_THEME = ['auto', 'light', 'dark'] as const
  type EachTheme = ItemType<typeof EACH_THEME>
  export type Theme<T extends EachTheme = EachTheme> = T

  export const EACH_VARIANT = ['solid', 'outlined', 'tonal', 'clean'] as const
  type EachVariant = ItemType<typeof EACH_VARIANT>
  export type Variant<T extends EachVariant = EachVariant> = T
}

export const { EACH_DIRECTION, EACH_POSITION, EACH_THEME, EACH_VARIANT } = VerusProps
