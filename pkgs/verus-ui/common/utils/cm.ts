/**
 * If value doesn't match, rollback to rollbackValue.
 */
export function cm<T extends Record<string, string | string[]>, V extends T[keyof T]>(mapping: T) {
  let rollbackValue: V

  return {
    rollback(prop: V) {
      rollbackValue = prop
      return this
    },
    match(prop: V) {
      const value = new Set(Object.values(mapping).flat()).has(prop as string)
        ? prop
        : rollbackValue
      const result: Record<string, string> = {}
      const mapper: Record<string, boolean> = {}

      for (const i in mapping) {
        if (typeof mapping[i] == 'string') {
          result[mapping[i] as string] = i
        }
        if (Array.isArray(mapping[i])) {
          mapper[i] = mapping[i].includes(value as string)
        }
      }

      return [result[value as string], mapper]
    }
  }
}
