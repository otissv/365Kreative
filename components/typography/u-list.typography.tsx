"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { TypographyUListProps } from "@/components/typography/types.typography"
import { variants } from "@/components/typography/variants.typography"
import { Box } from "../box"

export const TypographyUList = ({
  children,
  className,
  inView,
  muted,
  variant = "default",
  ...props
}: TypographyUListProps) => {
  return (
    <Box
      {...props}
      as="ul"
      className={cn(
        "my-6 ml-6 list-disc [&>li]:mt-2 text-pretty align-top",
        variant && variants.variant[variant],
        muted && "text-muted-foreground",
        className
      )}
    >
      {children}
    </Box>
  )
}
TypographyUList.displayName = "TypographyUList"
