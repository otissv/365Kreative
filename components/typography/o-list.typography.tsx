"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { TypographyOListProps } from "@/components/typography/types.typography"
import { variants } from "@/components/typography/variants.typography"
import { Box } from "../box"

export const TypographyOList = ({
  children,
  className,
  inView,
  muted,
  variant = "default",
  ...props
}: TypographyOListProps) => {
  return (
    <Box
      {...props}
      as="ol"
      className={cn(
        "inline-flex my-6 ml-6 list-disc [&>li]:mt-2 text-balance align-top",
        variant && variants.variant[variant],
        muted && "text-muted-foreground",
        className
      )}
    >
      {children}
    </Box>
  )
}

TypographyOList.displayName = "TypographyOList"
