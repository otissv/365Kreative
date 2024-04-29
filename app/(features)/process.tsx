import { ourProcess } from '@/content/data'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import { TypographyH3 } from '@/components/typography/h3.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'

export default function Process(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{ourProcess.title}</SectionWatermark>
        <Box className="Section-container Section-content-main">
          <SectionHeading
            className="mb-16 "
            headingClassName="grid mb-2"
            heading={ourProcess.heading}
          >
            {ourProcess.title}
          </SectionHeading>

          <ul>
            {ourProcess.steps.map(({ step, heading, content }: any) => {
              return (
                <Box as="li" key={step} className="grid mb-6">
                  <Box
                    className="opacity-0 translate-y-40"
                    enter="translate-y-0 opacity-100"
                  >
                    <TypographyH3>
                      <span className="mr-2">{step} </span>
                      {heading}
                    </TypographyH3>
                    <div className="h-[1px] w-full mt-2 bg-white opacity-20"></div>
                  </Box>

                  <Box
                    className="mt-4 mb-6 grid lg:grid-cols-2 items-center opacity-0 translate-y-40 "
                    enter="translate-y-0 opacity-70"
                  >
                    <TypographyParagraph className="lg:grid lg:col-start-2 ">
                      {content}
                    </TypographyParagraph>
                  </Box>
                </Box>
              )
            })}
          </ul>
        </Box>
      </div>
    </Section>
  )
}
