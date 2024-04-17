export namespace VerusProps {
  type EachVariant = 'solid' | 'outlined' | 'tonal' | 'clean'
  export type Variant<T extends EachVariant = EachVariant> = T

  type EachPosition = 'top' | 'right' | 'bottom' | 'left'
  export type Position<T extends EachPosition = EachPosition> = T

  type EachDirection = 'horizontal' | 'vertical'
  export type Direction<T extends EachDirection = EachDirection> = T
}
