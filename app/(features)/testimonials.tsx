import { testimonials } from '@/content/data'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import { Reviews } from './reviews'

export default function Testimonials(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{testimonials.title}</SectionWatermark>

        <Box className="Section-container Section-content-main lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start">
          <SectionHeading
            className="mb-16 lg:mb-0"
            headingClassName="grid mb-2"
            heading={testimonials.heading}
          >
            {testimonials.title}
          </SectionHeading>

          <Reviews />
        </Box>
      </div>
    </Section>
  )
}
