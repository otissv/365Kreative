import { seoFeatures } from '@/content/data'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import { AnimateImage } from '@/components/animate-image'
import { TypographyH3 } from '@/components/typography/h3.typography'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { TypographyUList } from '@/components/typography/u-list.typography'

export default function SeoFeatures(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{seoFeatures.title}</SectionWatermark>
        <div className="Section-container Section-content-main">
          <SectionHeading
            headingClassName="grid mb-2"
            heading={seoFeatures.heading}
          >
            {seoFeatures.title}
          </SectionHeading>

          <div className="md:grid md:grid-cols-2 lg:pl-0 lg:translate-y-32l lg:mb-20">
            <ul className="flex flex-col gap-8">
              {seoFeatures.items.map(({ heading, content, benefit, value }) => (
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
              className="w-full flex justify-center pt-10 md:pt-0"
              imageProps={{
                src: '/images/Yogini-studio-mobile.webp',
                alt: 'yogini studio mobile website design',
                width: 150,
                height: 1878,
                className: 'rounded-sm object-fill',
                style: { height: '1878px', width: '150px' }
              }}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
