'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { TypographyBlockquoteProps } from '@/components/typography/types.typography'
import { variants } from '@/components/typography/variants.typography'
import { Box } from '../box'

export const TypographyBlockquote = ({
  children,
  className,
  muted,
  variant = 'default',
  ...props
}: TypographyBlockquoteProps) => {
  return (
    <Box
      {...props}
      as="blockquote"
      className={cn(
        'inline-flex mt-6 border-l-2 pl-6 text-balance align-top',
        variant && variants.variant[variant],
        muted && 'text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
}
TypographyBlockquote.displayName = 'TypographyBlockquote'
