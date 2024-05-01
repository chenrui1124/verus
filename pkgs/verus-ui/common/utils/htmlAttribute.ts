export function htmlAttribute<T extends string>(value: T | undefined, condition: any): T | undefined

export function htmlAttribute(value: boolean | undefined): '' | undefined

export function htmlAttribute(value: string | boolean | undefined, condition?: any) {
  if (typeof value == 'string') {
    return condition ? value : void 0
  }
  if (typeof value == 'boolean') {
    return value ? '' : void 0
  }
  return void 0
}
