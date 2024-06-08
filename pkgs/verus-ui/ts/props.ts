import type { ValueOfEnum } from './utils'

export enum Direction {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}
export type DirectionProp<T extends ValueOfEnum<Direction> = ValueOfEnum<Direction>> = T

export enum Position {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}
export type PositionProp<T extends ValueOfEnum<Position> = ValueOfEnum<Position>> = T

export enum Theme {
  Auto = 'auto',
  Light = 'light',
  Dark = 'dark'
}
export type ThemeProp<T extends ValueOfEnum<Theme> = ValueOfEnum<Theme>> = T

export enum Variant {
  Solid = 'solid',
  Outlined = 'outlined',
  Tonal = 'tonal',
  Clean = 'clean'
}
export type VariantProp<T extends ValueOfEnum<Variant> = ValueOfEnum<Variant>> = T

export enum Status {
  Normal = 'normal',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}
export type StatusProp<T extends ValueOfEnum<Status> = ValueOfEnum<Status>> = T

export enum TextTransform {
  Uppercase = 'uppercase',
  Lowercase = 'lowercase',
  Capitalize = 'capitalize'
}
export type TextTransformProp<T extends ValueOfEnum<TextTransform> = ValueOfEnum<TextTransform>> = T

export enum FontWeight {
  Normal = 'normal',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold'
}
export type FontWeightProp<T extends ValueOfEnum<FontWeight> = ValueOfEnum<FontWeight>> = T

export enum Marker {
  Arabic = 'arabic',
  Roman = 'roman'
}
export type MarkerProp<T extends ValueOfEnum<Marker> = ValueOfEnum<Marker>> = T
