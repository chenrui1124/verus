import type { OrReadonly } from 'mm3'

export function withRollback<T>(inputValue: T, optionalValue: OrReadonly<T[]>) {
  if (optionalValue.length == 2) {
    return inputValue === optionalValue[1] ? inputValue : optionalValue[0]
  }
  return optionalValue.includes(inputValue) ? inputValue : optionalValue[0]
}
