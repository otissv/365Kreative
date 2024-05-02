'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'

import { AuroraBackground } from '@/components/aceternity/aurora-background'
import { Nav, NavItemType, setSelectedNavItem } from '@/app/(features)/nav'
import { header, nav } from '@/content/data'
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

export default function Home() {
  const [active, setActive] = React.useState<NavItemType>(nav[0])

  const setActiveLink = setSelectedNavItem({
    items: nav,
    setActive
  })

  const handleOnInView = (id: string) => {
    //TODO: fix
    // const index = nav.findIndex((item) => item.to === id)
    // if (index >= 0 && active.to !== id) {
    //   console.log('handleOnInView: ', id)
    //   setActiveLink(id)
    // }
  }
  return (
    <>
      <Nav
        label="Main Navigation"
        className="absolute backdrop-blur-lg px-2 z-10 lg:px-20"
        isMainMenu={true}
        active={active}
        setActiveLink={setActiveLink}
        items={nav}
        buttonLabelClassName="hover:bg-nav-button-active"
      />

      <Hero1
        id="home"
        title={header.title}
        subTitle={header.subTitle}
        onInView={handleOnInView}
      />

      <main>
        <Projects
          id="projects"
          onInView={handleOnInView}
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <About
          id="about"
          onInView={handleOnInView}
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />

        <Benefits
          id="about"
          onInView={handleOnInView}
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <Services
          id="services"
          onInView={handleOnInView}
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />

        <WebFeatures
          id="services"
          onInView={handleOnInView}
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <SeoFeatures
          id="services"
          onInView={handleOnInView}
          className="section font-medium"
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />
        <Process
          id="process"
          onInView={handleOnInView}
          topDivider={{ type: 'tilt', flipHorizontal: true }}
          backToTop={true}
        />

        <Testimonials
          id="testimonials"
          onInView={handleOnInView}
          bottomDivider={{ type: 'tilt' }}
          backToTop={true}
        />

        <Faq
          id="faq"
          onInView={handleOnInView}
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
          onInView={handleOnInView}
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
