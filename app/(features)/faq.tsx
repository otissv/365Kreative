import { MoveDown } from 'lucide-react'

import { faq } from '@/content/data'
import {
  SectionWatermark,
  SectionHeading,
  Section,
  SectionProps
} from './section'
import { Box } from '@/components/box'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { ScrollLink } from '@/components/scroll-link'

export default function Faq(props: SectionProps) {
  return (
    <Section {...props}>
      <div className="Section-content-wrapper">
        <SectionWatermark>{faq.title}</SectionWatermark>

        <div className="Section-container Section-content-main">
          <SectionHeading headingClassName="grid mb-2" heading={faq.heading}>
            {faq.title}
          </SectionHeading>

          <Box
            className="opacity-0 translate-y-40"
            enter="translate-y-0 opacity-100"
          >
            <Accordion type="single" collapsible className="w-full">
              {faq.items.map(({ heading, content }) => {
                return (
                  <AccordionItem key={heading} value={heading}>
                    <AccordionTrigger className="text-xl">
                      {heading}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg opacity-70 max-w-[800px] ">
                      {content}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}

              <AccordionItem value="interested">
                <AccordionTrigger className="text-xl">
                  What if I&apos;m interested?
                </AccordionTrigger>
                <AccordionContent className="text-lg opacity-70 max-w-[800px] ">
                  <ScrollLink
                    to="contact"
                    className="inline-flex border-b-2 border-accent-foreground"
                  >
                    Let&apos;s chat <MoveDown className="" />
                  </ScrollLink>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Box>
        </div>
      </div>
    </Section>
  )
}
