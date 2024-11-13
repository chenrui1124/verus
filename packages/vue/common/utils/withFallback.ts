import type { OrReadonly } from 'mm3'

export function withFallback<T>({
  each,
  fallback,
  value
}: {
  each: OrReadonly<T[]>
  fallback: T
  value: T
}) {
  return each.includes(value) ? value : fallback
}
