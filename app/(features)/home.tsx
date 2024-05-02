import * as React from 'react'
import dynamic from 'next/dynamic'

import { AuroraBackground } from '@/components/aceternity/aurora-background'
import { header } from '@/content/data'
import { Section } from '@/app/(features)/section'
import { TypographyBlockquote } from '@/components/typography/blockquote.typography'

const Subscribe = dynamic(() => import('@/app/(features)/subscribe/subscribe'))
const Contact = dynamic(() => import('@/app/(features)/contact/contact'))
const Hero1 = dynamic(() => import('@/app/(features)/hero1'))
const About = dynamic(() => import('@/app/(features)/about'))
const Projects = dynamic(() => import('@/app/(features)/projects'))
const Benefits = dynamic(() => import('@/app/(features)/benefits'))
const Services = dynamic(() => import('@/app/(features)/services'))
const WebFeatures = dynamic(() => import('@/app/(features)/web-features'))
const SeoFeatures = dynamic(() => import('@/app/(features)/seo-features'))
const Process = dynamic(() => import('@/app/(features)/process'))
const Testimonials = dynamic(() => import('@/app/(features)/testimonials'))
const Faq = dynamic(() => import('@/app/(features)/faq'))

export default function Home({}) {
  return (
    <>
      <Hero1 id="home" title={header.title} subTitle={header.subTitle} />

      <main>
        <Projects
          id="projects"
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <About id="about" bottomDivider={{ type: 'tilt' }} backToTop={true} />

        <Benefits
          id="about"
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <Services
          id="services"
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />

        <WebFeatures
          id="services"
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <SeoFeatures
          id="services"
          className="section font-medium"
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />
        <Process
          id="process"
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <Testimonials
          id="testimonials"
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />

        <Faq
          id="faq"
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <Section
          id="faq"
          className="h-[100vh]"
          bottomDivider={{ type: 'tilt' }}
        >
          <AuroraBackground>
            <TypographyBlockquote
              className="flex center justify-center m-0 p-0 text-white border-0 text-6xl font-extrabold italic max-font-[6vw,264px] w-full opacity-0 scale-0 "
              enter="opacity-100 scale-100"
            >
              The best way to predict <br />
              the future is to create it
            </TypographyBlockquote>
          </AuroraBackground>
        </Section>

        <Contact
          id="contact"
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <div className="relative h-[100px] md:h-[300px] w-full overflow-hidden">
          <AuroraBackground />
        </div>

        <Subscribe id="contact" className="!bg-background-2" backToTop={true} />
      </main>
    </>
  )
}
