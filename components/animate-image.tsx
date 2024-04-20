import Image, { ImageProps } from "next/image"
import { ComponentProps } from "./component.types"
import { Box } from "./box"

interface AnimateImagePropsProps extends Omit<ImageProps, "src" | "alt"> {
  className?: string
}

export interface AnimateImageProps extends ComponentProps<HTMLImageElement> {
  imageProps?: AnimateImagePropsProps
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
}

export const AnimateImage = ({
  src,
  alt,
  width,
  height,
  fill,
  imageProps,
  ...props
}: AnimateImageProps) => {
  const widthProps = width ? { width } : { fill }

  return (
    <Box {...props}>
      <Image
        src={src}
        height={height}
        {...widthProps}
        {...imageProps}
        alt={alt}
      />
    </Box>
  )
}
