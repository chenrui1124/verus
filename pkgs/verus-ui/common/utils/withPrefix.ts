const PREFIX = 'V'

export function withPrefix<T extends string>(componentName: T): `${typeof PREFIX}${T}` {
  return `${PREFIX}${componentName}`
}
