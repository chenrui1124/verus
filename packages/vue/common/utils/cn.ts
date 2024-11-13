import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...classNameValues: Parameters<typeof clsx>): ReturnType<typeof twMerge> {
  return twMerge(clsx(...classNameValues))
}
