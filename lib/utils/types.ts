import type { Slot } from 'vue'

export type WithSlots<Comp, S> = Comp & {
  new (): {
    $slots: {
      [name in keyof S]: Slot<S[name]>
    }
  }
}
