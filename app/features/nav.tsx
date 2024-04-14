"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollLink } from "@/components/scroll-link"

export type NaveItemType = {
  label: string
  to: string
}

const social = [
  {
    href: "/",
    Icon: (props: Record<string, any>) => <Facebook {...props} />,
  },
  {
    href: "/",
    Icon: (props: Record<string, any>) => <Twitter {...props} />,
  },
  {
    href: "/",
    Icon: (props: Record<string, any>) => <Instagram {...props} />,
  },
] as const

export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={cn("flex gap-1", className)}>
      {social.map(({ href, Icon }, index) => {
        return (
          <Link key={index} href={href} className="w-10">
            <Icon />
          </Link>
        )
      })}
    </ul>
  )
}

export interface NavToggleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {
  reverse?: boolean
}

const NavToggleIcon = ({
  className,
  reverse,
  ...props
}: NavToggleIconProps) => (
  <svg
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-5 w-5", reverse && "scale-x-[-1]", className)}
    {...props}
  >
    <path
      d="M3 5H11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3 12H16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M3 19H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
)

export const setSelectedNavItem =
  ({
    items,
    setActive,
  }: {
    items: NaveItemType[]
    setActive: (navItem: NaveItemType) => void
  }) =>
  (index: number) => {
    const newLinks = [...items]
    const selectedLink = newLinks.splice(index, 1)
    newLinks.unshift(selectedLink[0])
    setActive(newLinks[0])
  }

export interface NaveItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active: NaveItemType
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  index: number
  isStack?: boolean
  setActiveLink: (navItemIndex: number) => void
  to: string
}

export const NaveItem = ({
  active,
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  index,
  isStack,
  children,
  setActiveLink,
  to,
  ...props
}: NaveItemProps) => {
  const [hovering, setHovering] = React.useState<number | null>(null)

  return (
    <li
      onClick={() => {
        setActiveLink(index)
      }}
      className={buttonClassName}
      style={{
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {active.label === children && (
        <motion.div
          layoutId="navItemActive"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className={cn(
            "absolute inset-0  rounded-full ",
            activeButtonClassName
          )}
        />
      )}

      <ScrollLink
        key={index}
        to={to}
        onClick={() => {
          setActiveLink(index)
        }}
        className={cn(
          "relative block w-full px-4 py-2 rounded-full transition-all duration-1000",
          hovering === index && activeButtonClassName,
          active.label === children && isStack && activeButtonClassName,

          buttonLabelClassName
        )}
      >
        {children}
      </ScrollLink>
    </li>
  )
}

export const NavItems = ({
  active,
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  items,
  setActiveLink,
}: {
  active: NaveItemType
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  items: NaveItemType[]
  setActiveLink: (navItemIndex: number) => void
}) => {
  return items.map(({ label, to }, index) => {
    return (
      <NaveItem
        key={`${label}${to}`}
        active={active}
        activeButtonClassName={activeButtonClassName}
        buttonClassName={buttonClassName}
        buttonLabelClassName={buttonLabelClassName}
        setActiveLink={setActiveLink}
        to={to}
        index={index}
      >
        {label}
      </NaveItem>
    )
  })
}

export interface NavContainerProps
  extends React.HTMLAttributes<HTMLUListElement> {
  isStack?: boolean
}

export const NavList = ({
  children,
  className,
  isStack,
  ...props
}: NavContainerProps) => {
  return (
    <ul
      className={cn(
        "hidden [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-1",
        isStack
          ? "flex flex-col"
          : "lg:flex md:flex-row md:items-center md:justify-center",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export type NavProps = React.HTMLAttributes<HTMLDivElement> & {
  active: NaveItemType
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  isMainMenu?: boolean
  items?: NaveItemType[]
  label: string
  setActiveLink: (navItemIndex: number) => void
}

export function Nav({
  active,
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  className,
  isMainMenu,
  items = [],
  label,
  setActiveLink,
  ...props
}: NavProps) {
  return (
    <nav
      className={cn("flex items-center h-16 w-full z-30", className)}
      {...props}
      aria-label={label}
    >
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                "inline-flex items-center justify-center h-10 w-10 py-2 mr-2 px-0 text-base  whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                // "md:hidden"
              )}
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R16u6la:"
              data-state="closed"
            >
              <NavToggleIcon />
              <span className="sr-only">Toggle Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            position="left"
            className="p-4 bg-black w-4/5 max-w-96 flex flex-col"
            closeIcon={<NavToggleIcon reverse />}
          >
            <div className="h-16 w-full">
              <ScrollLink to="hero">365Kreative</ScrollLink>
            </div>

            <NavList isStack={true}>
              {items.map(({ label, to }, index) => {
                return (
                  <NaveItem
                    key={`${label}${to}`}
                    active={active}
                    activeButtonClassName="bg-nav-button-active dark:bg-nav-button-active "
                    buttonClassName={buttonClassName}
                    buttonLabelClassName={buttonLabelClassName}
                    setActiveLink={setActiveLink}
                    to={to}
                    index={index}
                  >
                    <SheetClose className="justify-start">{label}</SheetClose>
                  </NaveItem>
                )
              })}
            </NavList>

            <SocialLinks className="mt-auto" />
          </SheetContent>
        </Sheet>
      </div>

      <ScrollLink to="hero">365Kreative</ScrollLink>

      <NavList>
        {items.map(({ label, to }, index) => {
          return (
            <NaveItem
              key={`${label}${to}`}
              active={active}
              activeButtonClassName="bg-nav-button-active dark:bg-nav-button-active "
              buttonClassName={buttonClassName}
              buttonLabelClassName={buttonLabelClassName}
              setActiveLink={setActiveLink}
              to={to}
              index={index}
            >
              {label}
            </NaveItem>
          )
        })}
      </NavList>

      <SocialLinks className="hidden lg:flex ml-auto" />
    </nav>
  )
}
