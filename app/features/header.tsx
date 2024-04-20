import { TypographyH1 } from "@/components/typography/h1.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { BackgroundGradientAnimation } from "@/components/aceternity/background-gradient-animation"
import { Box } from "@/components/box"
import { ArrowDown } from "lucide-react"
import { ScrollLink } from "@/components/scroll-link"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "@/components/ui/button"
import { useElementScrollPosition } from "../hooks/useElementScrollPosition"
import { Section } from "./section"

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
  id,
  ...props
}: Hero1Props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  return (
    <header>
      <Section
        {...props}
        id={id}
        className={cn(
          "relative h-[100vh] flex  flex-col overflow-hidden",
          className
        )}
      >
        <BackgroundGradientAnimation />

        <Box className="absolute inset-0 container p-4 flex flex-col center items-center gap-6 mt-20 md:p-6 lg:px-20 ">
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
          <div className="flex flex-col gap-2 center items-center mt-10">
            <Button
              asChild
              size="lg"
              className="text-2xl font-bold rounded-sm max-w-96"
            >
              <ScrollLink to="contact">Hire Us</ScrollLink>
            </Button>

            <Box
              as="span"
              className="mix-blend-overlay w-full max-font-[10vw,264px] font-bold leading-none"
              parallax={30}
            >
              365Kreative
            </Box>
          </div>

          <ScrollLink
            to="services"
            className="absolute bottom-6 mx-auto z-[9] mt-10"
          >
            <ArrowDown className="animate-bounce h-10 w-10" />
          </ScrollLink>
        </Box>
      </Section>
    </header>
  )
}
