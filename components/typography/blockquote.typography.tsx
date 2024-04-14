"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { TypographyBlockquoteProps } from "@/components/typography/types.typography"
import { variants } from "@/components/typography/variants.typography"
import { Box } from "../box"

export const TypographyBlockquote = ({
  children,
  className,
  inView,
  muted,
  variant = "default",
  ...props
}: TypographyBlockquoteProps) => {
  return (
    <Box
      {...props}
      as="blockquote"
      className={cn(
        "mt-6 border-l-2 pl-6 italic text-pretty align-top",
        variant && variants.variant[variant],
        muted && "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
}
TypographyBlockquote.displayName = "TypographyBlockquote"
