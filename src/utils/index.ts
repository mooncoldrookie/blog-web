import settings from '@/settings'

type Device = 'desktop' | 'mobile'

export function getDevice(width: number): Device {
  return width >= 768 ? 'desktop' : 'mobile'
}

/**
 * 返回一个两个数之间的随机数(包括这两个数)
 * @param min
 * @param max
 * @returns 随机数
 */
export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function filterSearchInput(value) {
  return !(
    value == null ||
    value.trim() === '' ||
    value.indexOf('%') !== -1 ||
    value.indexOf('_') !== -1 ||
    value.indexOf('[') !== -1 ||
    value.indexOf('#') !== -1 ||
    value.indexOf('*') !== -1 ||
    value.trim().length > 20
  )
}

export function setPageTitle(title: string) {
  if (window !== undefined) {
    window.document.title = `${title} - ${settings.title}`
  }
}
