import React from "react"
import { useInView } from "framer-motion"

export const useElementScrollPosition = (
  elementRef: React.RefObject<HTMLElement>,
  onTopPosition?: (
    isInView: boolean,
    elementTop: number,
    scrollY: number
  ) => void
) => {
  const isInView = useInView(elementRef)

  const checkPosition = React.useCallback(() => {
    if (!elementRef.current) return false

    const elementTop = elementRef.current.getBoundingClientRect().top
    const scrollY = window.scrollY || window.pageYOffset

    // When the top of the element is reached
    if (elementTop / 2 <= scrollY - window.innerHeight) {
      onTopPosition && onTopPosition(isInView, elementTop, scrollY)
    } else {
    }

    return elementTop / 2 <= scrollY - window.innerHeight
  }, [elementRef, isInView, onTopPosition])

  React.useEffect(() => {
    window.addEventListener("scroll", checkPosition, { passive: true })
    return () => window.removeEventListener("scroll", checkPosition)
  }, [checkPosition])

  return checkPosition
}
