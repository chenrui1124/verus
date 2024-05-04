export function onListener(...arg: Parameters<typeof document.body.addEventListener>) {
  document.body.addEventListener(...arg)

  return function off() {
    document.body.removeEventListener(...arg)
  }
}
