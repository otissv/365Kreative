"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { TypographyHeadingProps } from "@/components/typography/types.typography"
import { variants } from "@/components/typography/variants.typography"
import { Box } from "../box"

export const TypographyH3 = ({
  children,
  className,
  inView,
  variant = "default",
  muted,
  ...props
}: TypographyHeadingProps) => {
  return (
    <Box
      {...props}
      as="h3"
      className={cn(
        "inline-flex scroll-m-20 text-3xl font-semibold tracking-tight text-balance align-top",
        variant && variants.variant[variant],
        muted && "text-muted-foreground",
        className
      )}
    >
      {children}
    </Box>
  )
}
TypographyH3.displayName = "TypographyH3"
