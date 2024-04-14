"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { TypographyHeadingProps } from "@/components/typography/types.typography"
import { variants } from "@/components/typography/variants.typography"
import { Box } from "../box"

export const TypographyH1 = ({
  children,
  className,
  inView,
  muted,
  variant = "default",
  ...props
}: TypographyHeadingProps) => {
  return (
    <Box
      as="h1"
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl text-balance align-top transition-all",
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
TypographyH1.displayName = "TypographyH1"
