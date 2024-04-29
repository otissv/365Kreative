import { cn } from '@/lib/utils'
import { AnimateImage } from '@/components/animate-image'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { aboutUs } from '@/content/data'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'

export default function About(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{aboutUs.title}</SectionWatermark>
        <div
          className={cn(
            'Section-container Section-content-main',
            'lg:grid lg:grid-cols-2 lg:grid-row-2 lg:gap-6 items-center'
          )}
        >
          <div className="mb-10">
            <SectionHeading
              headingClassName="grid mb-2"
              heading={aboutUs.heading}
            >
              {aboutUs.title}
            </SectionHeading>
            {aboutUs.content.map((item, index) => (
              <TypographyParagraph
                key={index}
                className="mb-6 translate-y-40 duration-500 opacity-0 delay-100"
                enter="translate-y-0 opacity-80"
              >
                {item}
              </TypographyParagraph>
            ))}
          </div>

          <AnimateImage
            className="relative h-[600px] w-full row-start-1 translate-y-40 opacity-30 scale-50 col-start-2 -ml-1 md:ml-0"
            enter="opacity-100 translate-y-0 scale-100"
            imageProps={{
              src: '/images/web-design-collaboration.webp',
              alt: 'Colleagues and clients collaborating',
              fill: true,
              className: 'md:rounded-sm',
              sizes: '100vw, (max-width: 1024px) 628px'
            }}
            parallax={70}
          />
        </div>
      </div>
    </Section>
  )
}
