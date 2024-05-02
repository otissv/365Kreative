import * as React from 'react'

import { ScrollLink } from '@/components/scroll-link'
import { Logo365k } from '@/app/(features)/365kreative'
import { cn } from '@/lib/utils'
import { SocialLinks } from '@/app/(features)/social-links'
import {
  NavSheet,
  NavSheetContent,
  NavSheetItem,
  NavSheetList
} from '@/components/nav/nav-sheet'

export const setSelectedNavItem =
  ({
    items,
    setActive
  }: {
    items: NavItemType[]
    setActive: (navItem: NavItemType) => void
  }) =>
  (id: string) => {
    const item = items.find((item) => item.to === id)
    setActive(item || ({} as any))
  }

export type NavItemType = {
  label: string
  to: string
}

export interface NavMenuButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'id'> {
  as?: React.ElementType<any, keyof React.JSX.IntrinsicElements>
  id: string
  iconProps?: NavToggleIconProps
  reverse?: boolean
}
export const NavMenuButton = React.forwardRef<
  HTMLButtonElement,
  NavMenuButtonProps
>(
  (
    {
      as: Tag = 'button',
      id,
      className,
      iconProps,
      children,
      reverse,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      onClick && onClick(e)
    }

    return (
      <Tag
        type="button"
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center h-10 w-10 py-2 mr-2 px-0 text-base  whitespace-nowrap rounded-sm font-medium transition-colors',
          'disabled:pointer-events-none disabled:opacity-50',
          'hover:text-white hover:bg-transparent hover:border',
          'focus-visible:outline-none focus-visible:ring-ring focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
          className
        )}
        onClick={handleOnClick}
        {...props}
      >
        <NavToggleIcon reverse={reverse} {...iconProps} />
        <span className="sr-only">{children}</span>
      </Tag>
    )
  }
)
NavMenuButton.displayName = 'NavMenuButton'

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
NavToggleIcon.displayName = 'NavToggleIcon'

export interface NavItemProps extends React.HTMLAttributes<HTMLLIElement> {
  // active: NavItemType
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  isStack?: boolean
  // setActiveLink: (id: string) => void
  to: string
}
export const NavItem = ({
  // active,
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  isStack,
  children,
  // setActiveLink,
  to,
  ...props
}: NavItemProps) => {
  return (
    <li
      className={buttonClassName}
      style={{
        transformStyle: 'preserve-3d'
      }}
      {...props}
    >
      {/* {active.label === children && (
        <motion.div
          layoutId="navItemActive"
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className={cn('absolute inset-0  rounded-sm ', activeButtonClassName)}
        />
      )} */}
      <ScrollLink
        to={to}
        className={cn(
          'relative block w-full px-4 py-2 rounded-sm transition-all duration-1000',
          // active.label === children && isStack && activeButtonClassName,
          buttonLabelClassName
        )}
      >
        {children}
      </ScrollLink>
    </li>
  )
}

export interface NavListProps extends React.HTMLAttributes<HTMLUListElement> {
  isStack?: boolean
}
export const NavList = ({
  children,
  className,
  isStack,
  ...props
}: NavListProps) => {
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
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  isMainMenu?: boolean
  items?: NavItemType[]
  label: string
}
export function Nav({
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  className,
  isMainMenu,
  items = [],
  label,
  ...props
}: NavProps) {
  return (
    <nav
      className={cn('flex items-center h-16 w-full z-30', className)}
      {...props}
      aria-label={label}
    >
      <NavSheet>
        <NavSheetContent id="main-mobile-nav" label="Main mobile menu">
          <Logo365k className="ml-6 h-10 w-36" fill="white" />
          <div className="p-4">
            <NavSheetList>
              {items.map(({ label, to }, index) => {
                return (
                  <NavSheetItem
                    key={`${label}${to}`}
                    activeButtonClassName="bg-nav-button-active dark:bg-nav-button-active hover:bg-nav-button-active"
                    buttonClassName={buttonClassName}
                    buttonLabelClassName={buttonLabelClassName}
                    to={to}
                  >
                    {label}
                  </NavSheetItem>
                )
              })}
            </NavSheetList>
          </div>
        </NavSheetContent>
      </NavSheet>

      <Logo365k className="h-10 w-36" fill="white" />

      <NavList>
        {items.map(({ label, to }) => {
          return (
            <NavItem
              key={`${label}${to}`}
              activeButtonClassName="bg-nav-button-active dark:bg-nav-button-active"
              buttonClassName={buttonClassName}
              buttonLabelClassName={buttonLabelClassName}
              to={to}
            >
              {label}
            </NavItem>
          )
        })}
      </NavList>

      <SocialLinks className="hidden xl:flex ml-auto" />
    </nav>
  )
}
