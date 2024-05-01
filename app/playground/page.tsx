'use client'
import React from 'react'

import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useElementScrollPosition } from '../../hooks/useElementScrollPosition'

export default function PlayGround() {
  const containerRef = React.useRef<HTMLElement | null>(null)

  const unStickRef = React.useRef<HTMLDivElement | null>(null)
  const unStickIsInView = useInView(unStickRef)

  const stickyRef = React.useRef<HTMLDivElement | null>(null)
  const stickyIsInView = useInView(stickyRef)

  const stickyTopRef = React.useRef<HTMLDivElement | null>(null)
  const stickyTopIsInView = useInView(stickyTopRef)

  const [stick, setStick] = React.useState<boolean>(false)

  useElementScrollPosition(containerRef, (isInView, elementTop) => {
    if (!stick && isInView && elementTop > 0) {
      console.log(!stick, isInView, elementTop > 0)
      if (containerRef.current) {
      }
      setStick(true)
    }
  })

  // if (elementTopInView < 0) {
  //   setStick(true)
  // }

  React.useEffect(() => {
    if (unStickIsInView && stick) {
      setStick(false)
    }
    if (stickyIsInView && !stickyTopIsInView && !unStickIsInView && !stick) {
      setStick(true)
    }

    if (
      stickyTopIsInView &&
      !unStickIsInView &&
      stick &&
      containerRef.current
    ) {
      // window.scrollTo = containerRef.current?.getClientRects()[0].top
      setStick(false)
    }
  }, [
    containerRef,
    stickyTopIsInView,
    unStickIsInView,
    stick,
    stickyIsInView,
    setStick
  ])

  return (
    <>
      <style>
        {`
      body {
        overflow: ${stick ? 'hidden' : 'auto'}
      }
      `}
      </style>
      <div
        className={cn('h-[100vh] w-full bg-gray-500', !stick && 'snap-start')}
      ></div>

      <section
        className={cn(
          'bg-red-300 h-[100vh]  py-10',
          stick ? 'overflow-y-scroll snap-none' : 'overflow-y-hidden snap-start'
        )}
        ref={containerRef}
      >
        <div ref={stickyTopRef} />

        <div className="relative">
          <div
            ref={stickyRef}
            className=" absolute top-[50%]  h-10 w-10 bg-red-600"
          ></div>

          <div className="grid gap-2 ">
            {[...new Array(20)].map((_, index) => (
              <div
                key={index}
                className="h-[100px] w-[100px] bg-gray-500 flex items-center justify-center "
              >
                {index}
              </div>
            ))}
          </div>
        </div>

        <div ref={unStickRef}>unstick</div>
      </section>

      <div
        className={cn(
          'h-[100vh] w-full bg-gray-500',
          stick ? 'snap-none' : 'snap-start'
        )}
      />
    </>
  )
}
