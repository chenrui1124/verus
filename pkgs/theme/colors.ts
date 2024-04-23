export const vColors = {
  bsc: ['255, 255, 255', '18, 17, 20'] /* basic */,
  'on-bsc': ['25, 25, 30', '240, 240, 248'] /* on basic */,
  'bsc-var': ['245, 246, 247', '31, 32, 33'],

  pri: ['0, 94, 177', '166, 200, 255'] /* primary */,
  'on-pri': ['255, 255, 255', '0, 48, 96'] /* on primary */,
  'pri-ctr': ['236, 247, 255', '32, 38, 55'] /* primary container */,

  'pri-var': ['195, 230, 255', '50, 70, 115'] /* primary variant */,
  'on-pri-var': ['0, 20, 40', '213, 227, 255'] /* on primary variant */,

  err: ['152, 64, 97', '255, 177, 200'] /* error */,
  'on-err': ['255, 255, 255', '94, 17, 51'] /* on error */,

  'err-var': ['255, 217, 226', '123, 41, 73'] /* error variant */,
  'on-err-var': ['62, 0, 29', '255, 217, 226'] /* on error variant */,

  'err-ctr': ['255, 243, 246', '59, 31, 43'] /* error container */,

  'suc-ctr': ['230, 244, 234', '33, 55, 50'] /* success container */,
  'on-suc-ctr': ['32, 70, 43', '166, 222, 133'] /* on success container */,

  'wan-ctr': ['254, 247, 224', '59, 52, 43'] /* warning container */,
  'on-wan-ctr': ['199, 69, 17', '250, 214, 204'] /* on warning container */,

  otl: ['130, 125, 135', '140, 135, 145'] /* border */,
  dis: ['200, 200, 200', '80, 80, 80'] /* disabled */
}

export type VColors = keyof typeof vColors

export const toVar = (v: VColors) => `--color-${v}`

export const VERUS_COLOR = {
  /* basic */
  bsc: {
    lt: 'rgb(255, 255, 255)',
    dk: 'rgb(18, 17, 20)'
  },
  /* on basic */
  'on-bsc': {
    lt: 'rgb(25, 25, 30)',
    dk: 'rgb(240, 240, 248)'
  },
  /* basic variant */
  'bsc-var': {
    lt: 'rgb(245, 246, 247)',
    dk: 'rgb(31, 32, 33)'
  },
  /* primary */
  pri: {
    lt: 'rgb(0, 94, 177)',
    dk: 'rgb(166, 200, 255)'
  },
  /* on primary */
  'on-pri': {
    lt: 'rgb(255, 255, 255)',
    dk: 'rgb(0, 48, 96)'
  },
  /* primary container */
  'pri-ctr': {
    lt: 'rgb(236, 247, 255)',
    dk: 'rgb(32, 38, 55)'
  },
  /* primary variant */
  'pri-var': {
    lt: 'rgb(195, 230, 255)',
    dk: 'rgb(50, 70, 115)'
  },
  /* on primary variant */
  'on-pri-var': {
    lt: 'rgb(0, 20, 40)',
    dk: 'rgb(213, 227, 255)'
  },
  /* error */
  err: {
    lt: 'rgb(152, 64, 97)',
    dk: 'rgb(255, 177, 200)'
  },
  /* on error */
  'on-err': {
    lt: 'rgb(255, 255, 255)',
    dk: 'rgb(94, 17, 51)'
  },
  /* error variant */
  'err-var': {
    lt: 'rgb(255, 217, 226)',
    dk: 'rgb(123, 41, 73)'
  },
  /* on error variant */
  'on-err-var': {
    lt: 'rgb(62, 0, 29)',
    dk: 'rgb(255, 217, 226)'
  },
  /* error container */
  'err-ctr': {
    lt: 'rgb(255, 243, 246)',
    dk: 'rgb(59, 31, 43)'
  },
  /* success container */
  'suc-ctr': {
    lt: 'rgb(230, 244, 234)',
    dk: 'rgb(33, 55, 50)'
  },
  /* on success container */
  'on-suc-ctr': {
    lt: 'rgb(32, 70, 43)',
    dk: 'rgb(166, 222, 133)'
  },
  /* warning container */
  'wan-ctr': {
    lt: 'rgb(254, 247, 224)',
    dk: 'rgb(59, 52, 43)'
  },
  /* on warning container */
  'on-wan-ctr': {
    lt: 'rgb(199, 69, 17)',
    dk: 'rgb(250, 214, 204)'
  },
  /* border */
  otl: {
    lt: 'rgb(130, 125, 135)',
    dk: 'rgb(140, 135, 145)'
  },
  /* disabled */
  dis: {
    lt: 'rgb(200, 200, 200)',
    dk: 'rgb(80, 80, 80)'
  }
}

const PREFIX = '--color'

export function extractRGBValue(rgb: string): string {
  const [value] = rgb.match(/(?<=rgb\()[0-9\,\ ]+(?=\))/)!
  return value
}

export function withColorPrefix(name: string): string {
  return `${PREFIX}-${name}`
}
