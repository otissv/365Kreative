import { AnimateImage } from '@/components/animate-image'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import { webFeatures } from '@/content/data'
import { TypographyH3 } from '@/components/typography/h3.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { TypographyUList } from '@/components/typography/u-list.typography'

export default function WebFeatures(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{webFeatures.title}</SectionWatermark>
        <div className="Section-container Section-content-main">
          <SectionHeading
            className="mb-16 lg:mb-0"
            headingClassName="flex-col grid mb-2"
            heading={webFeatures.heading}
          >
            <span className="mb-1">{webFeatures.title}</span>
            <span className="text-4xl opacity-70">{webFeatures.title2}</span>
          </SectionHeading>

          <div className="md:grid md:gap-6 md:justify-center md:grid-cols-2 lg:pl-0 lg:translate-y-32 lg:mb-20 ">
            <ul className="flex flex-col gap-8">
              {webFeatures.items.map(({ heading, content, benefit, value }) => (
                <Box
                  as="li"
                  key={heading}
                  className="bg-background-3 py-6 px-4 rounded border w-full opacity-0 translate-y-40"
                  enter="opacity-100 translate-y-0"
                >
                  <TypographyH3 className="mb-4">{heading}</TypographyH3>
                  <TypographyParagraph className="opacity-70">
                    {content}
                  </TypographyParagraph>

                  <TypographyUList className="opacity-70 p-0 ml-0">
                    <li className="grid">
                      <strong>Benefit: </strong> {benefit}
                    </li>
                    <li className="grid">
                      <strong>Value: </strong> {value}
                    </li>
                  </TypographyUList>
                </Box>
              ))}
            </ul>

            <AnimateImage
              className="w-full flex justify-center items-start pt-10 md:pt-0"
              imageProps={{
                src: '/images/Home-Kanti-Ria.webp',
                alt: 'Kanti ria website design',
                width: 250,
                height: 1548,
                className: 'rounded-sm object-fill',
                style: { height: 'auto', width: '250px' }
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
