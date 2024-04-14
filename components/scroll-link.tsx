"use client"

import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import React from "react"
import { Link, animateScroll as scroll, LinkProps } from "react-scroll"

export interface ScrollLinkProps extends Omit<LinkProps, "href" | "ref"> {}

export const ScrollLink = ({
  className,
  children,
  to = "",
  duration = 500,
  ...props
}: ScrollLinkProps) => {
  return (
    <Link
      {...props}
      to={to.replace("#", "")}
      smooth={true}
      duration={duration}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </Link>
  )
}
