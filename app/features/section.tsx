import React from "react"

import { Box, BoxProps } from "@/components/box"
import { ShapeDivider, ShapeDividerProps } from "@/components/shape-divider"
import { TypographyH2 } from "@/components/typography/h2.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"
import { useElementScrollPosition } from "../hooks/useElementScrollPosition"
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
        "356-WaterMark absolute font-bold translate-y-[-1vh] overflow-x-hidden w-[calc(100%-9px)] h-full",

        "lg:w-[calc(100%-5rem)] xl:w-[calc(100%-4rem)] lg:translate-y-[-3vh] lg:w-[calc(100%-80px) ",
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

export interface SectionBackground
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: ImageProps
}

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  background?: SectionBackground
  bottomDivider?: ShapeDividerProps
  content?: React.ReactNode
  hasContainer?: boolean
  heading?: string
  topDivider?: ShapeDividerProps
  onInView?: (id: string) => void
}

export function Section({
  background,
  bottomDivider,
  children,
  className,
  content,
  id,
  topDivider,
  onInView,
  ...props
}: SectionProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  useElementScrollPosition(
    scrollRef,
    (inInView) => inInView && onInView && onInView(id as string)
  )

  const { image, ...backgroundProps } = background || { image: {} }

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
      {background ? (
        <div className="overflow-hidden w-full initial" {...backgroundProps}>
          <Image
            className={cn("100vh brightness-50", image?.className)}
            fill
            {...image}
            src={image?.src || ""}
            alt={image?.alt || ""}
          />
        </div>
      ) : null}
      {topDivider ? (
        <ShapeDivider
          width="153%"
          flipVertical={true}
          className="-translate-y-[calc(100%-1px)]"
          {...topDivider}
        />
      ) : null}
      {bottomDivider ? <ShapeDivider width="156%" {...bottomDivider} /> : null}
      <div className="absolute h-full" id={id}></div>
      <div className={cn("365-SectionContent relative w-full gap-x-2 gap-y-6")}>
        {children}
      </div>
    </section>
  )
}
