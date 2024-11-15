export function withTimeout() {
  let activated: boolean = false
  let abort: AbortController | null = null
  let timer: number

  function start<T extends (...args: any[]) => any>(
    task: T,
    timeout?: number,
    ...args: Parameters<T>
  ) {
    return new Promise<void>((resolve, reject) => {
      activated = true

      abort = new AbortController()
      if (abort.signal.aborted) reject()

      abort.signal.addEventListener('abort', () => {
        activated = false
        abort = null
        reject()
      })

      timer = window.setTimeout(
        () => {
          task()
          resolve()
        },
        timeout,
        ...args
      )
    })
  }

  function stop() {
    if (activated) return
    clearTimeout(timer)
    abort && abort.abort()
    activated = false
  }

  return [start, stop] as const
}
