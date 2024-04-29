'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { TypographyHeadingProps } from '@/components/typography/types.typography'
import { variants } from '@/components/typography/variants.typography'
import { Box } from '../box'

export const TypographyH4 = ({
  children,
  className,
  muted,
  variant = 'default',
  ...props
}: TypographyHeadingProps) => {
  return (
    <Box
      {...props}
      as="h4"
      className={cn(
        'inline-flex scroll-m-20 text-xl font-semibold tracking-tight text-balance align-top',
        variant && variants.variant[variant],
        muted && 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Box>
  )
}
TypographyH4.displayName = 'TypographyH4'
