'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { TypographyParagraphProps } from '@/components/typography/types.typography'
import { variants } from '@/components/typography/variants.typography'
import { Box } from '../box'

export const TypographyParagraph = ({
  children,
  className,
  muted,
  variant = 'default',
  ...props
}: TypographyParagraphProps) => {
  return (
    <Box
      {...props}
      as="p"
      className={cn(
        'inline-flex leading-7 text-pretty align-top transition-all text-xl',
        variant && variants.variant[variant],
        muted && 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Box>
  )
}
TypographyParagraph.displayName = 'TypographyParagraph'
