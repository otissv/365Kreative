import { cn } from '@/lib/utils'
import { AnimateImage } from '@/components/animate-image'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import { projects } from '@/content/data'
import { getPlaiceholder } from 'plaiceholder'

//TODO: add to all sections
export async function fetchBlurDataURL(url: string) {
  try {
    const response = await fetch(`http:localhost:3000${url}`)
    if (!response.ok) {
      throw new Error('Failed to fetch image')
    }

    const buffer = await response.arrayBuffer()
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))

    return base64
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack)
    }
  }
}

export default async function Projects({ ...props }: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{projects.title}</SectionWatermark>

        <Box
          className={cn(
            'Section-container Section-content-main',
            'lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start'
          )}
        >
          <SectionHeading
            className="mb-16 lg:mb-0"
            headingClassName="grid mb-2"
            heading={projects.heading}
          >
            {projects.title}
          </SectionHeading>
          <Box
            className={cn(
              'grid gap-6 justify-center items-center w-full mt-10',
              'lg:grid-row-2'
            )}
          >
            {projects.items.map(async ({ src, alt }, index) => {
              const blurDataURL = await fetchBlurDataURL(src)
              return (
                <AnimateImage
                  key={index}
                  className="relative opacity-30 translate-y-40 w-full lg:max-w-[800px] scale-0"
                  enter="opacity-100 translate-y-0 scale-100"
                  parallax={70}
                  imageProps={{
                    src,
                    alt,
                    width: 580,
                    height: 580,
                    className: 'md:rounded-sm',
                    blurDataURL
                  }}
                />
              )
            })}
          </Box>
        </Box>
      </div>
    </Section>
  )
}
