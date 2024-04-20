import { cn } from "@/lib/utils"
import React from "react"

export interface LoadingProps extends React.HTMLAttributes<SVGElement> {
  color?: string
}

export const Loading = ({
  className,
  color = "#e15b64",
  ...props
}: LoadingProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={cn("animate-spin", className)}
    >
      <g data-idx="1">
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke={color}
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="matrix(0.4257737010524831,-0.9048296831404631,0.9048296831404631,0.4257737010524831,-16.530169209647312,73.95279910439899)"
        ></circle>
      </g>
    </svg>
  )
}
