import { useEffect, RefObject } from 'react'

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [ref, callback])
}
