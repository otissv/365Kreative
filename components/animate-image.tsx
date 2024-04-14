import Image, { ImageProps } from "next/image"
import { ComponentProps } from "./component.types"
import { Box } from "./box"

export interface AnimateImageProps extends ComponentProps<HTMLImageElement> {
  imageProps?: ImageProps & { className?: string }
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
        alt={imageProps?.alt || alt}
      />
    </Box>
  )
}
