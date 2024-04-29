'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'

import { ScrollLink } from '@/components/scroll-link'
import { Logo365k } from '@/app/(features)/365kreative'

export type NaveItemType = {
  label: string
  to: string
}

const social = [
  {
    href: 'https://www.facebook.com/365kreative',
    name: 'Facebook',
    Icon: (props: Record<string, any>) => <Facebook {...props} />
  },
  {
    href: 'https://twitter.com/365kreative',
    name: ' X formerly known as Twitter',
    Icon: (props: Record<string, any>) => <Twitter {...props} />
  },
  {
    href: 'https://www.instagram.com/365kreative',
    name: 'Instagram',
    Icon: (props: Record<string, any>) => <Instagram {...props} />
  }
] as const

export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={cn('flex gap-1', className)}>
      {social.map(({ href, Icon, name }, index) => {
        return (
          <li key={index}>
            <Link
              href={href}
              className="inline-flex justify-center items-center rounded-full w-10 h-10 bg-background border bg-nav-button-hover"
            >
              <Icon />
              <span className="sr-only">{name}</span>
            </Link>
          </li>
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
    className={cn('h-5 w-5', reverse && 'scale-x-[-1]', className)}
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
    setActive
  }: {
    items: NaveItemType[]
    setActive: (navItem: NaveItemType) => void
  }) =>
  (id: string) => {
    const item = items.find((item) => item.to === id)
    setActive(item || ({} as any))
  }

export interface NaveItemProps extends React.HTMLAttributes<HTMLLIElement> {
  active: NaveItemType
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  isStack?: boolean
  setActiveLink: (id: string) => void
  to: string
}

export const NaveItem = ({
  active,
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  isStack,
  children,
  setActiveLink,
  to,
  ...props
}: NaveItemProps) => {
  // const [hovering, _] = React.useState<string>("")

  return (
    <li
      onClick={() => {
        setActiveLink(to)
      }}
      className={buttonClassName}
      style={{
        transformStyle: 'preserve-3d'
      }}
      {...props}
    >
      {active.label === children && (
        <motion.div
          layoutId="navItemActive"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className={cn('absolute inset-0  rounded-sm ', activeButtonClassName)}
        />
      )}
      <ScrollLink
        to={to}
        onClick={() => {
          setActiveLink(to)
        }}
        className={cn(
          'relative block w-full px-4 py-2 rounded-sm transition-all duration-1000',
          // hovering === to && activeButtonClassName,
          active.label === children && isStack && activeButtonClassName,
          buttonLabelClassName
        )}
      >
        {children}
      </ScrollLink>
    </li>
  )
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
        'hidden [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-1',
        isStack
          ? 'flex flex-col'
          : 'xl:flex md:flex-row md:items-center md:justify-center',
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
  setActiveLink: (id: string) => void
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
      className={cn('flex items-center h-16 w-full z-30', className)}
      {...props}
      aria-label={label}
    >
      <div className="xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={cn(
                'inline-flex items-center justify-center h-10 w-10 py-2 mr-2 px-0 text-base  whitespace-nowrap rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
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
              <ScrollLink to="hero"></ScrollLink>
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

      <ScrollLink to="hero">
        <Logo365k className="h-10 w-36" fill="white" />
        <span className="sr-only">365 Kreative logo</span>
      </ScrollLink>

      <NavList>
        {items.map(({ label, to }) => {
          return (
            <NaveItem
              key={`${label}${to}`}
              active={active}
              activeButtonClassName="bg-nav-button-active dark:bg-nav-button-active"
              buttonClassName={buttonClassName}
              buttonLabelClassName={buttonLabelClassName}
              setActiveLink={setActiveLink}
              to={to}
            >
              {label}
            </NaveItem>
          )
        })}
      </NavList>

      <SocialLinks className="hidden xl:flex ml-auto" />
    </nav>
  )
}
