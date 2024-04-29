"use client"

import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { TypographyH3 } from "@/components/typography/h3.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { Box } from "@/components/box"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Feature({
  className,
  src,
  alt,
  title,
  content,
}: {
  className?: string
  src: string
  alt: string
  title: string
  content: string
}) {
  return (
    <Box
      className="mt-6 opacity-30 translate-y-40 "
      enter="opacity-100 translate-y-0"
    >
      <Card
        className={cn("inter-var w-full rounded-sm bg-background-3", className)}
      >
        <CardHeader className="font-bold mt-6 text-white">
          <TypographyH3>{title}</TypographyH3>
        </CardHeader>
        <CardContent>
          <TypographyParagraph className="mb-6">{content}</TypographyParagraph>
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
            alt={alt}
          />
        </CardContent>
      </Card>
    </Box>
  )
}

export interface FeaturesProps {
  className?: string
  heading: string
  items: any[]
}
