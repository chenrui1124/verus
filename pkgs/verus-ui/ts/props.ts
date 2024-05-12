type EachDirection = 'horizontal' | 'vertical'
export type Direction<T extends EachDirection = EachDirection> = T

type EachPosition = 'top' | 'right' | 'bottom' | 'left'
export type Position<T extends EachPosition = EachPosition> = T

type EachTheme = 'auto' | 'light' | 'dark'
export type Theme<T extends EachTheme = EachTheme> = T

type EachVariant = 'solid' | 'outlined' | 'tonal' | 'clean'
export type Variant<T extends EachVariant = EachVariant> = T

type EachStatus = 'normal' | 'primary' | 'success' | 'warning' | 'error'
export type Status<T extends EachStatus = EachStatus> = T

type EachTextTransform = 'uppercase' | 'lowercase' | 'capitalize'
export type TextTransform<T extends EachTextTransform = EachTextTransform> = T

type EachFontWeight = 'normal' | 'medium' | 'semibold' | 'bold'
export type FontWeight<T extends EachFontWeight = EachFontWeight> = T
