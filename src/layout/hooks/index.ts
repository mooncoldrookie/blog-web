import { useMedia } from 'react-use'

export function useDevice() {
  return useMedia('(min-width:768px)')
}
