import { cn } from "@/lib/utils"

export interface BackgroundGridProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "type"> {
  type?: "square" | "dot"
  size: "default" | "sm"
}
export function BackgroundGrid({
  children,
  className,
  type = "square",
  size = "default",
}: BackgroundGridProps) {
  return (
    <div
      className={cn(
        "h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center",
        size === "sm" &&
          "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]",
        type === "dot" && "dark:bg-dot-white/[0.2] bg-dot-black/[0.2]",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        {children}
      </p>
    </div>
  )
}
