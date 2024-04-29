'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { variants } from '@/components/typography/variants.typography'
import { TypographyHeadingProps } from '@/components/typography/types.typography'
import { Box } from '../box'

export const TypographyH2 = ({
  children,
  className,
  muted,
  variant = 'default',
  ...props
}: TypographyHeadingProps) => {
  return (
    <Box
      {...props}
      as="h2"
      className={cn(
        'inline-flex sscroll-m-20 text-3xl font-semibold tracking-tight text-balance align-top first:mt-0',
        variant && variants.variant[variant],
        muted && 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Box>
  )
}
TypographyH2.displayName = 'TypographyH2'
