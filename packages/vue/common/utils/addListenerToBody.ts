type RemoveListenerFunction = () => void

export function addListenerToBody(
  ...arg: Parameters<typeof document.body.addEventListener>
): RemoveListenerFunction {
  document.body.addEventListener(...arg)

  return () => {
    document.body.removeEventListener(...arg)
  }
}
