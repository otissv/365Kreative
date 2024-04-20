"use client"

import { cn } from "@/lib/utils"
import React from "react"
import { Link, LinkProps } from "react-scroll"

export interface ScrollLinkProps extends Omit<LinkProps, "href" | "ref"> {}

export const ScrollLink = ({
  className,
  children,
  to: hostTo = "",
  duration = 500,
  ...props
}: ScrollLinkProps) => {
  const to = hostTo.replace("#", "")
  return (
    <Link
      {...props}
      to={to}
      smooth={true}
      duration={duration}
      className={cn("cursor-pointer", className)}
      href={`#${to}`}
    >
      {children}
    </Link>
  )
}
