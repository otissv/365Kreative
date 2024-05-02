'use client'

import React from 'react'
import { X } from 'lucide-react'

import { ScrollLink } from '@/components/scroll-link'
import { cn } from '@/lib/utils'
import { NavMenuButton } from '@/components/nav/nav'

const NavSheetContext = React.createContext<{
  expanded: boolean
  state: 'open' | 'closed'
  setExpanded: (expanded: boolean) => void
}>({
  expanded: false,
  state: 'closed',
  setExpanded: () => undefined
})

export interface NavSheetProps extends React.HTMLAttributes<HTMLDivElement> {}
export const NavSheet = ({ children, className, ...props }: NavSheetProps) => {
  const [expanded, setExpanded] = React.useState(false)

  if (expanded) {
    document.body.classList.add('scroll-locked')
  } else {
    document.body.classList.remove('scroll-locked')
  }

  return (
    <NavSheetContext.Provider
      value={{
        expanded,
        state: expanded ? 'open' : 'closed',
        setExpanded
      }}
    >
      <div className={cn('xl:hidden', className)} {...props}>
        <NavSheetTrigger>Open</NavSheetTrigger>

        {children}
      </div>
    </NavSheetContext.Provider>
  )
}

export interface NavSheetTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {}
export const NavSheetTrigger = (props: NavSheetTriggerProps) => {
  const { expanded, state, setExpanded } = React.useContext(NavSheetContext)

  return (
    <NavMenuButton
      {...props}
      id="nav-toggle"
      onClick={(e) => {
        setExpanded(true)
      }}
      aria-haspopup="dialog"
      aria-controls="nav-close"
      aria-expanded={expanded}
      data-state={state}
    >
      <span className="sr-only">Open Navigation menu</span>
    </NavMenuButton>
  )
}

export interface NavSheetListProps
  extends React.HTMLAttributes<HTMLUListElement> {
  isStack?: boolean
}
export const NavSheetList = ({
  children,
  className,
  isStack,
  ...props
}: NavSheetListProps) => {
  return (
    <ul
      className={cn(
        '[perspective:1000px] flex flex-col relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full gap-1',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export interface NavSheetItemProps extends React.HTMLAttributes<HTMLLIElement> {
  activeButtonClassName?: string
  buttonClassName?: string
  buttonLabelClassName?: string
  isStack?: boolean
  to: string
}
export const NavSheetItem = ({
  activeButtonClassName,
  buttonClassName,
  buttonLabelClassName,
  isStack,
  children,
  to,
  ...props
}: NavSheetItemProps) => {
  const { setExpanded } = React.useContext(NavSheetContext)

  return (
    <li
      className={buttonClassName}
      style={{
        transformStyle: 'preserve-3d'
      }}
      {...props}
    >
      <ScrollLink
        to={to}
        className={cn(
          'relative block w-full px-4 py-2 rounded-sm transition-all duration-1000',
          buttonLabelClassName
        )}
        onClick={() => setExpanded(false)}
      >
        {children}
      </ScrollLink>
    </li>
  )
}

export interface NavSheetCloseButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}
export const NavSheetCloseButton = ({ children }: NavSheetCloseButtonProps) => {
  const { setExpanded } = React.useContext(NavSheetContext)
  return (
    <button
      className="absolute right-0  h-12 w-12 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
      type="button"
      onClick={(e) => {
        e.preventDefault()
        setExpanded(false)
      }}
    >
      {children}
    </button>
  )
}

export interface NavSheetContent extends React.HTMLAttributes<HTMLDivElement> {
  closeButton?: any
  overlayClassName?: string
  dialogClassName?: string
  id: string
  label: string
}
export const NavSheetContent = ({
  className,
  children,
  closeButton: CloseButton,
  overlayClassName,
  dialogClassName,
  id,
  label,
  ...props
}: NavSheetContent) => {
  const { expanded, state, setExpanded } = React.useContext(NavSheetContext)

  return (
    <div
      className={cn(
        'hidden',
        expanded && 'fixed inset-0 z-50 h-[100vh] flex justify-start',
        className
      )}
      {...props}
    >
      <div
        data-state={state}
        className={cn(
          'fixed h-inherit inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in',
          expanded && '',
          overlayClassName
        )}
        data-aria-hidden="true"
        aria-hidden="true"
        style={{ pointerEvents: 'auto' }}
        onClick={() => setExpanded(false)}
      />
      <div
        role="dialog"
        id={`nav-sheet${id}`}
        aria-describedby={`nav-sheet${id}`}
        aria-labelledby={`nav-sheet${id}`}
        data-state={state}
        className={cn(
          'fixed z-50 scale-100  flex flex-col gap-4 h-inherit  opacity-100 shadow-lg border animate-in slide-in-from-left duration-300  bg-black w-4/5 max-w-96',
          dialogClassName
        )}
        tabIndex={-1}
        style={{ pointerEvents: 'auto' }}
      >
        <NavSheetCloseButton>
          <X />
        </NavSheetCloseButton>

        {children}
      </div>
    </div>
  )
}
