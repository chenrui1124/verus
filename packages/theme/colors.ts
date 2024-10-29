type ColorsDict = Record<string, { light: string; dark: string }>

const PREFIX = '--color'

export const COLORS_WHEN_DANGER: ColorsDict = {
  /* error */
  pri: { light: 'rgb(152, 64, 97)', dark: 'rgb(255, 177, 200)' },
  /* on error */
  'on-pri': { light: 'rgb(255, 255, 255)', dark: 'rgb(94, 17, 51)' },
  /* error variant */
  'pri-var': { light: 'rgb(255, 217, 226)', dark: 'rgb(123, 41, 73)' },
  /* on error variant */
  'on-pri-var': { light: 'rgb(62, 0, 29)', dark: 'rgb(255, 217, 226)' },
  /* error container */
  'pri-ctr': { light: 'rgb(255, 243, 246)', dark: 'rgb(59, 31, 43)' }
}

export const COLORS: ColorsDict = {
  /* basic */
  bsc: { light: 'rgb(255, 255, 255)', dark: 'rgb(18, 17, 20)' },
  /* on basic */
  'on-bsc': { light: 'rgb(25, 25, 30)', dark: 'rgb(240, 240, 248)' },
  /* basic variant */
  'bsc-var': { light: 'rgb(235, 236, 237)', dark: 'rgb(41, 42, 43)' },
  /* primary */
  pri: { light: 'rgb(0, 94, 177)', dark: 'rgb(166, 200, 255)' },
  /* on primary */
  'on-pri': { light: 'rgb(255, 255, 255)', dark: 'rgb(0, 48, 96)' },
  /* primary container */
  'pri-ctr': { light: 'rgb(236, 247, 255)', dark: 'rgb(29, 33, 42)' },
  /* primary variant */
  'pri-var': { light: 'rgb(195, 230, 255)', dark: 'rgb(50, 70, 115)' },
  /* on primary variant */
  'on-pri-var': { light: 'rgb(0, 20, 40)', dark: 'rgb(213, 227, 255)' },
  /* error container */
  'err-ctr': { light: 'rgb(255, 243, 246)', dark: 'rgb(59, 31, 43)' },
  /* on error variant */
  'on-err-ctr': COLORS_WHEN_DANGER['on-pri-var'],
  /* success container */
  'suc-ctr': { light: 'rgb(230, 244, 234)', dark: 'rgb(33, 55, 50)' },
  /* on success container */
  'on-suc-ctr': { light: 'rgb(32, 70, 43)', dark: 'rgb(166, 222, 133)' },
  /* warning container */
  'wan-ctr': { light: 'rgb(254, 247, 224)', dark: 'rgb(59, 52, 43)' },
  /* on warning container */
  'on-wan-ctr': { light: 'rgb(199, 69, 17)', dark: 'rgb(250, 214, 204)' },
  /* border */
  otl: { light: 'rgb(130, 125, 135)', dark: 'rgb(140, 135, 145)' },
  /* border variant */
  'otl-var': { light: 'rgb(225, 230, 235)', dark: 'rgb(40, 45, 50)' },
  /* disabled */
  dis: { light: 'rgb(200, 200, 200)', dark: 'rgb(80, 80, 80)' }
}

export function withColorPrefix(name: string): string {
  return `${PREFIX}-${name}`
}

function extractRGBValue(rgb: string): string {
  const [value] = rgb.match(/(?<=rgb\()[0-9\,\ ]+(?=\))/)!
  return value
}

export function extractRGBValueReducer(colors: ColorsDict) {
  return Object.entries(colors).reduce<{
    light: Record<string, string>
    dark: Record<string, string>
  }>(
    (previous, current) => {
      const [name, { light: lt, dark: dk }] = current
      previous.light[withColorPrefix(name)] = extractRGBValue(lt)
      previous.dark[withColorPrefix(name)] = extractRGBValue(dk)
      return previous
    },
    { light: {}, dark: {} }
  )
}
