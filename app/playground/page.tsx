'use client'
import React from 'react'

import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useElementScrollPosition } from '../../hooks/useElementScrollPosition'

export default function PlayGround() {
  const unStickRef = React.useRef(null)
  const unStickIsInView = useInView(unStickRef)

  const [stick, setStick] = React.useState<boolean>(false)
  const stickRef = React.useRef(null)
  const [elementTopInView, setElementTop] = React.useState<number>()

  useElementScrollPosition(stickRef, (isInView, elementTop) => {
    if (
      !stick &&
      elementTop >= -10 &&
      elementTop <= 10 &&
      isInView
      // &&
      // elementTop >= -10 &&
      // elementTop <= 10
    ) {
      setStick(!stick)
    }
    setElementTop(elementTop)
  })

  if (stick && unStickIsInView && (elementTopInView || 0) < 0) {
    console.log({ stick, unStickIsInView, elementTopInView })
    setStick(false)
  }

  console.log('sticky', stick)

  return (
    <>
      <style>
        {`
      body {
        overflow: ${stick ? 'hidden' : 'auto'}
      }
      `}
      </style>
      <div className="h-[101vh] w-full bg-gray-500"></div>

      <aside
        className={cn(
          'bg-red-300 h-[80vh]',
          stick ? 'overflow-y-scroll' : 'overflow-y-hidden'
        )}
        ref={stickRef}
      >
        hello
        <div>
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
      </aside>

      <main className="bg-gray-700 p-4"></main>

      <div className="h-[100vh] w-full bg-gray-500"></div>
    </>
  )
}
