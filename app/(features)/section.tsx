import React from 'react'
import Image, { ImageProps } from 'next/image'

import { cn } from '@/lib/utils'
import { Box, BoxProps } from '@/components/box'
import { ShapeDivider, ShapeDividerProps } from '@/components/shape-divider'
import { TypographyH2 } from '@/components/typography/h2.typography'
import { useElementScrollPosition } from '@/hooks/useElementScrollPosition'
import { ScrollLink } from '@/components/scroll-link'
import { MoveUpIcon } from 'lucide-react'

export interface SectionHeadingProps extends BoxProps {
  heading?: string
  className?: string
  children?: React.ReactNode
  headingClassName?: string
}

export const SectionHeading = ({
  children,
  className,
  heading = '',
  headingClassName,
  ...props
}: SectionHeadingProps) => {
  return (
    <Box
      className={cn(
        'Section-heading relative flex items-center z-[2] mb-6',
        'lg:px-0',
        className
      )}
      {...props}
    >
      <TypographyH2
        className={cn(
          'inline-flex text-6xl leading-none translate-y-40 duration-500 delay-100',
          headingClassName
        )}
        enter="translate-y-0"
      >
        <span className="text-2xl mb-2 uppercase font-normal tracking-wide">
          {heading}
          <span className="text-transparent">,</span>
        </span>
        {children}
      </TypographyH2>
    </Box>
  )
}

export const SectionWatermark = ({
  className,
  children
}: {
  isColumns?: boolean
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <>
      <div
        aria-hidden={true}
        className={cn(
          'Section-waterMark absolute font-bold overflow-x-hidden w-[calc(100%-9px)] h-[50%] pointer-events-none',
          className
        )}
      >
        <Box
          className={cn(
            'inline-flex align-top transition-all text-xl whitespace-nowrap leading-none duration-1000 delay-500 text-nowrap',
            'opacity-0 scale-50 max-font-[15vw,264px]'
          )}
          enter="opacity-[0.05] scale-100"
        >
          {children}
        </Box>
      </div>
      <div className="absolute h-[50%] w-full backdrop-blur-md pointer-events-none" />
    </>
  )
}

export interface SectionBackground
  extends React.HTMLAttributes<HTMLDivElement> {
  image?: ImageProps
}

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  backToTop?: boolean
  background?: SectionBackground
  bottomDivider?: ShapeDividerProps
  content?: React.ReactNode
  contentClassName?: string
  hasContainer?: boolean
  heading?: string
  topDivider?: ShapeDividerProps
  onInView?: (id: string) => void
}

export function Section({
  backToTop = false,
  background,
  bottomDivider,
  children,
  className,
  content,
  contentClassName,
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
        'Section relative min-h-[400px] flex items-center ',
        'xl:justify-center',
        className
      )}
      id={id}
      {...props}
      ref={scrollRef}
    >
      {background ? (
        <div className="overflow-hidden w-full initial" {...backgroundProps}>
          <Image
            className={cn('100vh brightness-50', image?.className)}
            fill
            {...image}
            src={image?.src || ''}
            alt={image?.alt || ''}
          />
        </div>
      ) : null}
      {topDivider ? (
        <ShapeDivider
          width="153%"
          flipVertical={true}
          className="-translate-y-[calc(100%-1px)] z-[2]"
          {...topDivider}
        />
      ) : null}
      {bottomDivider ? (
        <ShapeDivider
          width="156%"
          className="-translate-y-[1px] z-[2]"
          {...bottomDivider}
        />
      ) : null}
      <div className="absolute h-full" id={id}></div>
      <div
        className={cn(
          'SectionContent relative w-full gap-x-2 gap-y-6',
          contentClassName
        )}
      >
        {children}

        {backToTop ? (
          <div className=" Section-content-main absolute bottom-10 z-[3]">
            <ScrollLink to="home" className="h-12">
              Back to top <MoveUpIcon className="inline-flex ml-1 h-4 w-4" />
            </ScrollLink>
          </div>
        ) : null}
      </div>
    </section>
  )
}
