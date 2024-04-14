import { Box, BoxProps } from "@/components/box"
import { ShapeDivider } from "@/components/shape-divider"
import { TypographyH2 } from "@/components/typography/h2.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { cn } from "@/lib/utils"
import React from "react"

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  content?: React.ReactNode
  hasContainer?: boolean
  heading?: string
  watermarkClassName?: string
  onInView?: (id: string) => void
}

export interface SectionHeadingProps extends BoxProps {
  heading?: string
  className?: string
  children?: React.ReactNode
  headingClassName?: string
}

export const SectionHeading = ({
  children,
  className,
  heading = "",
  headingClassName,
  ...props
}: SectionHeadingProps) => {
  return (
    <Box
      className={cn(
        "356-SectionHeading relative flex items-center z-[2] mb-6 px-4",
        "lg:px-0",
        className
      )}
      {...props}
    >
      <Box
        className={cn(
          "absolute bg-purple-700 h-4 w-4 rounded-full opacity-0 -translate-x-5 top-5"
        )}
        enter="opacity-100 "
      ></Box>
      <TypographyH2
        className={cn(
          "inline-flex text-6xl leading-none translate-y-40 opacity-10 duration-500 delay-100",
          headingClassName
        )}
        enter="opacity-100 translate-y-0"
      >
        {children}
        {heading}
      </TypographyH2>
    </Box>
  )
}

export const SectionWatermark = ({
  className,
  children,
}: {
  isColumns?: boolean
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div
      aria-hidden={true}
      className={cn(
        "356-WaterMark absolute font-bold translate-y-[-1vh] overflow-x-hidden w-[calc(100%-8px)] h-full",

        "lg:w-[calc(100%-5rem)] xl:w-[calc(100%-1rem)] lg:translate-y-[-3vh] lg:w-[calc(100%-80px) ",
        className
      )}
    >
      <TypographyParagraph
        className={cn(
          "whitespace-nowrap leading-none duration-1000 delay-500 text-nowrap",
          "opacity-0 scale-50 max-font-[15vw,264px]"
        )}
        enter="opacity-[0.05] scale-100"
      >
        {children}
      </TypographyParagraph>
    </div>
  )
}

export const useElementScrollPosition = (
  elementRef: React.RefObject<HTMLElement>,
  onTopPosition: () => void
) => {
  const checkPosition = React.useCallback(() => {
    if (!elementRef.current) return false

    const elementTop = elementRef.current.getBoundingClientRect().top
    const elementHeight = elementRef.current.getBoundingClientRect().height
    const scrollPosition = window.scrollY || window.pageYOffset

    // When the top of the element is reached
    if (
      elementTop / 2 <= (scrollPosition - window.outerHeight) * 0.33 * 0.33 &&
      elementTop + elementHeight / 2 > 0
    ) {
      onTopPosition()
    }

    return elementTop === scrollPosition
  }, [elementRef, onTopPosition])

  React.useEffect(() => {
    window.addEventListener("scroll", checkPosition, { passive: true })
    return () => window.removeEventListener("scroll", checkPosition)
  }, [checkPosition])

  return checkPosition
}

export function Section({
  children,
  className,
  content,
  id,
  onInView,
  ...props
}: SectionProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  useElementScrollPosition(scrollRef, () => onInView && onInView(id as string))

  return (
    <section
      className={cn(
        "356-Section relative min-h-[400px] flex items-center ",
        "xl:justify-center",
        className
      )}
      id={id}
      {...props}
      ref={scrollRef}
    >
      <ShapeDivider
        type="waves"
        width="153%"
        flipVertical={true}
        className="-translate-y-[calc(100%-1px)]"
      />
      <ShapeDivider type="waves" width="156%" />

      <div className="absolute h-full" id={id}></div>
      <div
        className={cn(
          "365-SectionContent relative flex flex-col w-full z-[2]  gap-x-2 gap-y-6"
        )}
      >
        {children}
      </div>
    </section>
  )
}
