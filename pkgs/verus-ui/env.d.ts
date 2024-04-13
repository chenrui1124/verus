/// <reference types="vite/client" />

declare module 'vue' {
  interface DialogHTMLAttributes {
    onClose?: (payload: Event) => void | undefined
    onCancel?: (payload: Event) => void | undefined
  }
}

export {}
