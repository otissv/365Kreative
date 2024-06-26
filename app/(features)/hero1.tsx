import { ArrowDown } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'
import { TypographyH1 } from '@/components/typography/h1.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { BackgroundGradientAnimation } from '@/components/aceternity/background-gradient-animation'
import { Box } from '@/components/box'
import { ScrollLink } from '@/components/scroll-link'
import { Button } from '@/components/ui/button'
import { Section } from '@/app/(features)/section'
import { Logo365M } from '@/app/(features)/365Milian'

export interface Hero1Props extends React.HTMLAttributes<HTMLElement> {
  title: string
  subTitle: string
  onInView?: (id: string) => void
}

export default function Hero1({
  className,
  children,
  title,
  subTitle,
  id,
  ...props
}: Hero1Props) {
  return (
    <header>
      <Section
        {...props}
        id={id}
        className={cn(
          'relative h-[100vh] flex  flex-col overflow-hidden',
          className
        )}
        contentClassName="h-[100vh] grid"
      >
        <BackgroundGradientAnimation containerClassName="absolute" />
        <div className="365-overlay h-[100vh] absolute top-0 bottom-0 left-0 right-0 bg-[#00007f] mix-blend-overlay"></div>

        <Box className="inset-0  container p-4 flex flex-col center items-center gap-6 mt-20 md:p-6 lg:px-20 ">
          <ScrollLink
            to="services"
            className="absolute bottom-0 lg:bottom-5 mx-auto z-[9] mt-8"
          >
            <ArrowDown className="animate-bounce h-10 w-10" />
            <span className="sr-only">MoveDown</span>
          </ScrollLink>

          <TypographyH1
            className="opacity-30 translate-y-40 font-bold"
            enter="opacity-1 -translate-y-10 md:translate-y-0"
          >
            {title}
          </TypographyH1>
          <TypographyParagraph
            className={cn(
              'max-w-[700px] mt-2 mb-2 opacity-30 translate-y-40 delay-200',
              'lg:text-2xl '
            )}
            enter="opacity-1 -translate-y-10 md:translate-y-0"
          >
            {subTitle}
          </TypographyParagraph>
          <Box
            className="365-Watermark-logo max-font-[15vw,264px] mix-blend-overlay flex items-end font-bold leading-none opacity-0 translate-y-40 delay-400"
            parallax={30}
            enter="opacity-1 -translate-y-10 md:translate-y-0"
          >
            <Logo365M className="w-[100vw] h-[30vh]" fill="white" />
          </Box>

          <div className="flex flex-col gap-2 center items-center mt-10">
            <Box
              className="opacity-30 translate-y-40 delay-300"
              enter="opacity-1 -translate-y-10 md:translate-y-0"
            >
              <Button
                size="lg"
                className="text-4xl font-bold rounded-sm px-10 py-8 bg-background-1 border-2 app-border-gradient text-white max-w-96 mb-20 transition-all hover:bg-[#34083a]  hover:scale-105"
              >
                <ScrollLink to="contact">Hire Us</ScrollLink>
              </Button>
            </Box>
          </div>
        </Box>
      </Section>
    </header>
  )
}
