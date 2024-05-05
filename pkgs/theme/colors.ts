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
    lt: 'rgb(235, 236, 237)',
    dk: 'rgb(41, 42, 43)'
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
  /* border variant */
  'otl-var': {
    lt: 'rgb(225, 230, 235)',
    dk: 'rgb(40, 45, 50)'
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
