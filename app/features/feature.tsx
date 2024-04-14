"use client"

import React from "react"
import Image from "next/image"

import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/aceternity/3d-card"
import { TypographyH3 } from "@/components/typography/h3.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { cn } from "@/lib/utils"
import { Box } from "@/components/box"

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
      parallax={70}
      className="opacity-30 translate-y-40"
      enter="opacity-100 translate-y-0"
    >
      <CardContainer className={cn("inter-var w-full", className)}>
        <CardBody
          className={cn(
            "relative group/card h-auto rounded-xl p-6 border ",
            " w-full ",
            "bg-gray-50 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]"
          )}
        >
          <CardItem
            translateZ="50"
            className="font-bold text-neutral-600 dark:text-white"
          >
            <TypographyH3>{title}</TypographyH3>
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-neutral-500 mt-2 dark:text-neutral-300 "
          >
            <TypographyParagraph>{content}</TypographyParagraph>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={src}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={alt}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </Box>
  )
}

export interface FeaturesProps {
  className?: string
  heading: string
  items: any[]
}
