export type ValueOfEnum<T extends string> = `${T}`

export function generatePropOptions<T extends string[]>(options: T) {
  return (...args: T) => (args.length === 0 ? options : args)
}
