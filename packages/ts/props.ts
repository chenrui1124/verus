import type { ValueOfEnum } from './utils'

import { generatePropOptions } from './utils'

export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}
export type DirectionProp<T extends ValueOfEnum<Direction> = ValueOfEnum<Direction>> = T
const directionOptions = Object.values(Direction) as ValueOfEnum<Direction>[]
export const eachDirection = generatePropOptions(directionOptions)

export enum FontWeight {
  Normal = 'normal',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold'
}
export type FontWeightProp<T extends ValueOfEnum<FontWeight> = ValueOfEnum<FontWeight>> = T
const fontWeightOptions = Object.values(FontWeight) as ValueOfEnum<FontWeight>[]
export const eachFontWeight = generatePropOptions(fontWeightOptions)

export enum Marker {
  Arabic = 'arabic',
  Roman = 'roman'
}
export type MarkerProp<T extends ValueOfEnum<Marker> = ValueOfEnum<Marker>> = T
const markerOptions = Object.values(Marker) as ValueOfEnum<Marker>[]
export const eachMarker = generatePropOptions(markerOptions)

export enum Position {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}
export type PositionProp<T extends ValueOfEnum<Position> = ValueOfEnum<Position>> = T
const positionOptions = Object.values(Position) as ValueOfEnum<Position>[]
export const eachPosition = generatePropOptions(positionOptions)

export enum Size {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl'
}
export type SizeProp<T extends ValueOfEnum<Size> = ValueOfEnum<Size>> = T
const sizeOptions = Object.values(Size) as ValueOfEnum<Size>[]
export const eachSize = generatePropOptions(sizeOptions)

export enum Status {
  Default = 'default',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}
export type StatusProp<T extends ValueOfEnum<Status> = ValueOfEnum<Status>> = T
const statusOptions = Object.values(Status) as ValueOfEnum<Status>[]
export const eachStatus = generatePropOptions(statusOptions)

export enum TextTransform {
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
  Capitalize = 'capitalize'
}
export type TextTransformProp<T extends ValueOfEnum<TextTransform> = ValueOfEnum<TextTransform>> = T
const textTransformOptions = Object.values(TextTransform) as ValueOfEnum<TextTransform>[]
export const eachTextTransform = generatePropOptions(textTransformOptions)

export enum Theme {
  Auto = 'auto',
  Light = 'light',
  Dark = 'dark'
}
export type ThemeProp<T extends ValueOfEnum<Theme> = ValueOfEnum<Theme>> = T
const themeOptions = Object.values(Theme) as ValueOfEnum<Theme>[]
export const eachTheme = generatePropOptions(themeOptions)

export enum Variant {
  Solid = 'solid',
  Outlined = 'outlined',
  Tonal = 'tonal',
  Clean = 'clean'
}
export type VariantProp<T extends ValueOfEnum<Variant> = ValueOfEnum<Variant>> = T
const variantOptions = Object.values(Variant) as ValueOfEnum<Variant>[]
export const eachVariant = generatePropOptions(variantOptions)
