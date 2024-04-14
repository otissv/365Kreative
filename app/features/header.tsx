import { TypographyH1 } from "@/components/typography/h1.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation"
import { Box } from "@/components/box"
import { ArrowDown } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { cn } from "@/lib/utils"
import { useElementScrollPosition } from "./section"
import React from "react"

export interface Hero1Props extends React.HTMLAttributes<HTMLElement> {
  title: string
  subTitle: string
  onInView?: (id: string) => void
}

export const Hero1 = ({
  className,
  children,
  title,
  subTitle,
  onInView,
  id,
  ...props
}: Hero1Props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  useElementScrollPosition(scrollRef, () => onInView && onInView(id as string))

  return (
    <header
      {...props}
      ref={scrollRef}
      className={cn(
        "relative h-[100vh] flex  flex-col overflow-hidden",
        className
      )}
    >
      <BackgroundGradientAnimation />

      <span
        className={cn(
          "365-Watermark  absolute bottom-0 flex flex-col  w-full max-font-[20vw,264px] font-bold leading-none "
        )}
      >
        <Box as="span" className="mix-blend-overlay" parallax={30}>
          365Kreative
        </Box>

        <ScrollLink to="services" className="self-center z-[9]">
          <ArrowDown className="animate-bounce h-10 w-10" />
        </ScrollLink>
      </span>

      <div
        className={cn(
          "absolute container inset-0 text-white pointer-events-none p-4 pt-28",
          "md:p-6 md:grid md:grid-cols-2 md:gap-6 md:items-center md:justify-center lg:rtl",
          "lg:px-20"
        )}
      >
        <div>{children}</div>

        <Box parallax={100}>
          <TypographyH1
            className="opacity-0 translate-y-40 font-bold"
            enter="opacity-1 -translate-y-10 md:translate-y-0"
          >
            {title}
          </TypographyH1>

          <TypographyParagraph
            className={cn(
              "max-w-[700px] mt-2 mb-2 opacity-0 translate-y-40 delay-200",
              "lg:text-2xl "
            )}
            enter="opacity-1 -translate-y-10 md:translate-y-0"
          >
            {subTitle}
          </TypographyParagraph>
        </Box>
      </div>
    </header>
  )
}
