export const vColors = {
  bsc: ['255, 255, 255', '28, 27, 30'] /* basic */,
  'on-bsc': ['25, 25, 30', '240, 240, 245'] /* on-basic */,

  pri: ['0, 94, 177', '166, 200, 255'] /* primary */,
  'on-pri': ['255, 255, 255', '0, 48, 96'] /* on-primary */,
  'pri-var': ['195, 230, 255', '50, 70, 110'] /* primary-variant */,
  'on-pri-var': ['0, 20, 40', '213, 227, 255'] /* on-primary-variant */,

  err: ['152, 64, 97', '255, 177, 200'] /* error */,
  'on-err': ['255, 255, 255', '94, 17, 51'] /* on-error */,
  'err-var': ['255, 217, 226', '123, 41, 73'] /* error-variant */,
  'on-err-var': ['62, 0, 29', '255, 217, 226'] /* on-error-variant */,

  'pri-ctr': ['236, 247, 255', '35, 40, 55'] /* primary container */,
  'err-ctr': ['255, 243, 246', '59, 31, 43'] /* error container */,

  otl: ['148, 143, 153', '122, 117, 127'] /* border */,
  dis: ['200, 200, 200', '80, 80, 80'] /* disabled */
}

export type VColors = keyof typeof vColors

export const toVar = (v: VColors) => `--color-${v}`
