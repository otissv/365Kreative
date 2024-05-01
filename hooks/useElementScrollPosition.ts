import React from 'react'
import { useInView } from 'framer-motion'

export const useElementScrollPosition = (
  elementRef: React.RefObject<HTMLElement>,
  onTopPosition?: (isInView: boolean, elementTop: number) => void
) => {
  const isInView = useInView(elementRef)

  const checkPosition = React.useCallback(() => {
    if (!elementRef.current) return false

    const elementTop = elementRef.current.getBoundingClientRect().top

    const elTop = Math.round(elementTop / 2)
    const scroll = window.scrollY - window.innerHeight

    // When the top of the element is reached
    if (elTop <= scroll) {
      onTopPosition && onTopPosition(isInView, elTop)
    }

    return elTop <= scroll
  }, [elementRef, isInView, onTopPosition])

  React.useEffect(() => {
    window.addEventListener('scroll', checkPosition, { passive: true })
    return () => window.removeEventListener('scroll', checkPosition)
  }, [checkPosition])

  return checkPosition
}
