import { AnimateImage } from '@/components/animate-image'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import { benefits } from '@/content/data'
import { TypographyH3 } from '@/components/typography/h3.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'

export default function Benefits(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{benefits.title}</SectionWatermark>

        <div className="Section-container Section-content-main">
          <SectionHeading
            headingClassName="grid mb-2"
            heading={benefits.heading}
          >
            {benefits.title}
          </SectionHeading>

          <Box
            className="grid gap-6 xl:gap-8 opacity-1 translate-y-40"
            enter="opacity-100 translate-y-0"
          >
            {benefits.items.map(({ heading, content, src, alt }, index) => (
              <div
                key={heading}
                className="border py-6 px-4 bg-background-3 rounded-sm "
              >
                <TypographyH3
                  className="mb-5 opacity-0 translate-y-40"
                  enter="opacity-100 translate-y-0"
                >
                  {heading}
                </TypographyH3>

                <div className="grid lg:grid-cols-2 gap-6">
                  <AnimateImage
                    className="h-[186px] md:h-[350px] w-full lg:order-2 mb-6 rounded-sm opacity-30 scale-50 duration-1000 ease-in-out"
                    enter="opacity-100 scale-100"
                    imageProps={{
                      src,
                      alt,
                      fill: true,
                      className: 'rounded-sm',
                      sizes: '100vw, (max-width: 1024px) 611px'
                    }}
                  />
                  <div className="lg:order-1">
                    {content.map((text) => {
                      return (
                        <TypographyParagraph
                          key={text}
                          className="opacity-0 translate-y-40 mb-4"
                          enter="opacity-70 translate-y-0"
                        >
                          {text}
                        </TypographyParagraph>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </Box>
        </div>
      </div>
    </Section>
  )
}
