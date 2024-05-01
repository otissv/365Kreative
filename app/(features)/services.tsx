import { services } from '@/content/data'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'

export default function Services(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{services.title}</SectionWatermark>

        <div className="Section-container Section-content-main">
          <SectionHeading
            headingClassName="grid mb-2"
            heading={services.heading}
          >
            {services.title}
          </SectionHeading>
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 text-xl gap-6 mt-10 w-full">
            {services.services.map((service) => (
              <Box
                as="li"
                key={service}
                className="w-full h-20 border flex md:center p-4 items-center rounded-sm bg-background-2 opacity-1 translate-y-40"
                enter="opacity-100 translate-y-0"
              >
                {service}
              </Box>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
