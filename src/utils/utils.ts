import axios, { AxiosError } from 'axios'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export const stringCompare = (a?: string, b?: string): number => {
  return !!a && !!b ? b.localeCompare(a) : !!a ? -1 : !!b ? 1 : 0
}

export const validJson = (jsonString: string) => {
  try {
    const o = JSON.parse(jsonString)
    if (o && typeof o === 'object') {
      return o
    }
  } catch (e) {
    console.log('Invalid JSON:', e)
  }
  return false
}

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}
