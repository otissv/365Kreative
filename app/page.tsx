"use client"

import * as React from "react"
import Image from "next/image"
import { MoveDown } from "lucide-react"

import { AuroraBackground } from "@/components/aceternity/aurora-background"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import {
  Nav,
  NaveItemType,
  SocialLinks,
  setSelectedNavItem,
} from "@/app/[features]/nav"
import {
  aboutUs,
  benefits,
  contact,
  faq,
  header,
  nav,
  ourProcess,
  seoFeatures,
  services,
  testimonials,
  webFeatures,
} from "@/content/data"
import { Section, SectionHeading, SectionWatermark } from "./[features]/section"
import { Box } from "@/components/box"
import { AnimateImage } from "@/components/animate-image"
import { cn } from "@/lib/utils"
import { TypographyH3 } from "@/components/typography/h3.typography"
import { TypographyBlockquote } from "@/components/typography/blockquote.typography"
import { Subscribe } from "@/app/[features]/subscribe/subscribe"
import { Contact } from "@/app/[features]/contact/contact"
import { Testimonials } from "@/app/[features]/testimonials"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TypographyUList } from "@/components/typography/u-list.typography"
import { ScrollLink } from "@/components/scroll-link"
import { Logo365k } from "@/app/[features]/365kreative"
import { Hero1 } from "@/app/[features]/hero1"

export default function Home() {
  const [active, setActive] = React.useState<NaveItemType>(nav[0])

  const setActiveLink = setSelectedNavItem({
    items: nav,
    setActive,
  })

  const handleOnInView = (id: string) => {
    const index = nav.findIndex((item) => item.to === id)
    if (index >= 0) {
      setActiveLink(id)
    }
  }
  return (
    <>
      <Nav
        label="Main Navigation"
        className="fixed backdrop-blur-lg px-2 z-10 lg:px-20"
        isMainMenu={true}
        active={active}
        setActiveLink={setActiveLink}
        items={nav}
      />
      <Hero1
        id="home"
        title={header.title}
        subTitle={header.subTitle}
        onInView={handleOnInView}
        className="section-gradient"
      />

      <main>
        <Section
          id="about"
          heading={aboutUs.title}
          className="section-gradient"
          onInView={handleOnInView}
          topDivider={{ type: "tilt", flipHorizontal: true }}
        >
          <SectionWatermark className="ml-2 top-[10%] lg:translate-x-16  lg:top-[20%] 2xl:top-[30%]">
            {aboutUs.title}
          </SectionWatermark>
          <div
            className={cn(
              "section-container pb-40 xl:pb-48 2xl:pb-60 lg:px-20 px-2 pt-[50%] md:pt-[25%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[14%]",
              "lg:grid lg:grid-cols-2 lg:grid-row-2 lg:gap-6 items-center"
            )}
          >
            <div className="mb-10">
              <SectionHeading headingClassName="grid mb-2">
                <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                  {aboutUs.heading}
                  <span className="text-transparent">,</span>
                </span>
                {aboutUs.title}
              </SectionHeading>
              {aboutUs.content.map((item, index) => (
                <TypographyParagraph
                  key={index}
                  className="mb-6 translate-y-40 duration-500 opacity-0 delay-100 ml-5 lg:ml-0"
                  enter="translate-y-0 opacity-80"
                >
                  {item}
                </TypographyParagraph>
              ))}
            </div>

            <Box
              className="relative h-[600px] w-full row-start-1 translate-y-40 opacity-30 scale-50 col-start-2"
              enter="translate-y-0 scale-100 opacity-1"
            >
              <Image
                className="object-cover rounded-sm shadow-2xl"
                src="/images/web-design-collaboration.webp"
                fill
                alt=""
              />
            </Box>
          </div>
        </Section>

        <Section
          id="about"
          onInView={handleOnInView}
          className="section-gradient"
          bottomDivider={{ type: "tilt" }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[5%] md:top-[10%] 2xl:top-[20%]">
            {benefits.title}
          </SectionWatermark>

          <div className="section-container pb-20 lg:px-20 px-2 pt-[50%] md:pt-[36%] lg:pt-[28%] xl:pt-[20%] 2xl:pt-[16%]">
            <SectionHeading headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                {benefits.heading}
                <span className="text-transparent">,</span>
              </span>
              {benefits.title}
            </SectionHeading>

            <Box
              className="opacity-1 translate-y-40"
              enter="opacity-100 translate-y-0"
            >
              {benefits.items.map(({ heading, content, src, alt }, index) => (
                <div
                  key={heading}
                  className="mb-32 md:mb-8 border py-6 px-4 bg-background-3 rounded-sm "
                >
                  <TypographyH3
                    className="mb-5 opacity-0 translate-y-40 ml-5 lg:ml-0"
                    enter="opacity-100 translate-y-0"
                  >
                    {heading}
                  </TypographyH3>
                  <div className="grid  md:grid-cols-2 gap-6">
                    <div>
                      {content.map((text) => {
                        return (
                          <TypographyParagraph
                            key={text}
                            className="opacity-0 translate-y-40 ml-5 mb-4 lg:ml-0"
                            enter="opacity-70 translate-y-0"
                          >
                            {text}
                          </TypographyParagraph>
                        )
                      })}
                    </div>

                    <AnimateImage
                      className="object-cover rounded-sm opacity-30 scale-50 duration-1000 ease-in-out"
                      src={src}
                      width={460}
                      height={306}
                      alt={alt}
                      enter="opacity-100 scale-100"
                      imageProps={{
                        className: "rounded-sm",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Box>
          </div>
        </Section>

        <Section
          id="services"
          className="section-gradient"
          onInView={handleOnInView}
          bottomDivider={{ type: "tilt" }}
          topDivider={{ type: "tilt", flipHorizontal: true }}
        >
          <SectionWatermark className="lg:translate-x-16  top-[9%] md:top-[13%] lg:top-[15%]">
            {services.title}
          </SectionWatermark>

          <div className="section-container pb-20  lg:px-20 px-2 pt-[30%] lg:pt-[28%] xl:pt-[20%] 2xl:pt-[10%]">
            <SectionHeading headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1">
                {services.heading}
                <span className="text-transparent">,</span>
              </span>
              {services.title}
            </SectionHeading>
            {/* <div className="grid xl:grid-cols-3 gap-6">
              {services.items.map(({ src, alt, title, content }, index) => (
                <Feature
                  key={index}
                  src={src}
                  alt={alt}
                  title={title}
                  content={content}
                  className={index % 2 ? "self-end" : ""}
                />
              ))}
            </div> */}

            <ul className="grid md:grid-cols-2 xl:grid-cols-3 text-xl gap-6 mt-10 w-full">
              {services.services.map((service) => (
                <Box
                  as="li"
                  key={service}
                  className="w-full h-20 border flex center items-center rounded-sm bg-background-2 opacity-1 translate-y-40"
                  enter="opacity-100 translate-y-0"
                >
                  {service}
                </Box>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="services"
          heading={webFeatures.title}
          onInView={handleOnInView}
          className="section-gradient"
          topDivider={{ type: "tilt", flipHorizontal: true }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[7%] md:top-[10%] lg:top-[15%]">
            {webFeatures.title}
          </SectionWatermark>
          <div className="section-container pb-20 px-2 lg:px-20 pt-[40%] md:mt-[2%] lg:pt-[40%] xl:pt-[25%] 2xl:pt-[10%]">
            <SectionHeading
              className="mb-16 lg:mb-0"
              headingClassName="flex-col grid mb-2"
            >
              <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                {webFeatures.heading}
                <span className="text-transparent">,</span>
              </span>
              <span className="mb-1">{webFeatures.title}</span>
              <span className="text-4xl opacity-70"> {webFeatures.title2}</span>
            </SectionHeading>

            <div className="pl-5 md:grid md:grid-cols-2 lg:pl-0 lg:translate-y-32 lg:mb-20">
              <ul className="flex flex-col gap-8">
                {webFeatures.items.map(
                  ({ heading, content, benefit, value }) => (
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
                  )
                )}
              </ul>
              <div className="flex justify-center">
                <Image
                  width={300}
                  height={1000}
                  src="/images/Home-Kanti-Ria.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          heading={seoFeatures.title}
          onInView={handleOnInView}
          className="section-gradient font-medium"
          bottomDivider={{ type: "tilt" }}
        >
          <SectionWatermark className="ml-2 top-[5%] md:top-[10%] lg:translate-x-16  2xl:top-[20%]">
            {seoFeatures.title}
          </SectionWatermark>
          <div className="section-container pb-40 xl:pb-48 2xl:pb-60 lg:px-20 px-2 pt-[30%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[14%]">
            <SectionHeading headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                {seoFeatures.heading}
                <span className="text-transparent">,</span>
              </span>
              {seoFeatures.title}
            </SectionHeading>

            <div className="md:grid md:grid-cols-2 ml-5 lg:ml-0">
              <ul className="flex flex-col gap-y-6">
                {seoFeatures.items.map(
                  ({ heading, content, benefit, value }) => (
                    <Box
                      as="li"
                      key={heading}
                      className="bg-background-3 py-6 px-4 rounded border w-full opacity-0 translate-y-40"
                      enter="opacity-100 translate-y-0"
                    >
                      <TypographyH3 className="mb-4">{heading}</TypographyH3>
                      <TypographyParagraph className="opacity-70 ">
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
                  )
                )}
              </ul>

              <div className="flex justify-center">
                <Image
                  width={150}
                  height={8000}
                  src="/images/Yogini-studio-mobile.webp"
                  alt="yogini yoga studio website"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* <Section
          id="projects"
          className="section-gradient"
          heading={projects.title}
          onInView={handleOnInView}
          topDivider={{ type: "tilt", flipHorizontal: true }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[7%] 2xl:top-[20%]">
            {projects.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container px-2 lg:px-20 pb-20 pt-[36%] md:pt-[20%] lg:pt-[15%]",
              "lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
            )}
          >
            <SectionHeading
              className="mb-16 lg:mb-0"
              headingClassName="grid mb-2"
            >
              <span className="text-2xl uppercase font-normal tracking-wide mb-1">
                {projects.heading}
                <span className="text-transparent">,</span>
              </span>
              {projects.title}
            </SectionHeading>
            <Box
              className={cn(
                "grid gap-6 justify-center items-center w-full mt-10",
                "lg:grid-row-2"
              )}
            >
              {projects.items.map(({ src, alt }, index) => (
                <AnimateImage
                  key={index}
                  className="relative opacity-30 translate-y-40 w-full lg:max-w-[800px] scale-0"
                  enter="opacity-100 translate-y-0 scale-100"
                  src={src}
                  alt={alt}
                  width={580}
                  height={580}
                  parallax={70}
                  imageProps={{
                    className: "rounded-sm",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Section> */}

        <Section
          id="process"
          className="section-gradient"
          heading={ourProcess.title}
          onInView={handleOnInView}
          bottomDivider={{ type: "tilt" }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[7%] 2xl:top-[20%]">
            {ourProcess.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container px-2 lg:px-20 pb-20 pt-[36%] md:pt-[20%] lg:pt-[15%]"
            )}
          >
            <SectionHeading className="mb-16 " headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                {ourProcess.heading}
                <span className="text-transparent">,</span>
              </span>
              {ourProcess.title}
            </SectionHeading>

            <ul>
              {ourProcess.steps.map(({ step, heading, content }: any) => {
                return (
                  <Box as="li" key={step} className="grid mb-6 ml-5 lg:ml-0">
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
        </Section>

        <Section
          id="testimonials"
          className="section-gradient"
          heading={testimonials.title}
          onInView={handleOnInView}
          bottomDivider={{ type: "tilt" }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[7%] 2xl:top-[20%]">
            {testimonials.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container px-2 lg:px-20 pb-20 pt-[36%] md:pt-[20%] lg:pt-[15%]",
              "lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
            )}
          >
            <SectionHeading
              className="mb-16 lg:mb-0"
              headingClassName="grid mb-2"
            >
              <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                {testimonials.heading}
                <span className="text-transparent">,</span>
              </span>
              {testimonials.title}
            </SectionHeading>

            <Testimonials />
          </Box>
        </Section>

        <Section
          id="faq"
          className="section-gradient"
          heading={faq.title}
          onInView={handleOnInView}
          topDivider={{ type: "tilt", flipHorizontal: true }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[7%] 2xl:top-[20%]">
            {faq.title}
          </SectionWatermark>

          <Box
            className={cn(
              "section-container px-2 lg:px-20 pb-20 pt-[36%] md:pt-[20%] lg:pt-[15%]"
            )}
          >
            <SectionHeading headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1 opacity-70">
                {faq.heading}
                <span className="text-transparent">,</span>
              </span>
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
          </Box>
        </Section>

        <Section id="testimonials" className="h-[100vh]">
          <AuroraBackground>
            <TypographyBlockquote
              className=" flex justify-center text-white border-0 text-6xl font-extrabold italic max-font-[6vw,264px] w-full opacity-0 scale-0 "
              enter="opacity-100 scale-100"
            >
              The best way to predict <br />
              the future is to create it
            </TypographyBlockquote>
          </AuroraBackground>
        </Section>

        <Contact id="contact" onInView={handleOnInView} className="lg:pt-40 " />

        <div className="relative h-[300px] w-full overflow-hidden">
          <AuroraBackground />
        </div>

        <Subscribe id="contact" />
      </main>

      <footer className="container relative text-sm z-[2] pt-20 pb-4 px-8 lg:px-20 grid items-end xl:h-[50vh]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="grid gap-4 w-full ">
            <Logo365k className="h-10 w-36" fill="white" />
            <a className="flex" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="flex" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="mt-10 mb-1 md:flex justify-center xl:flex">
          © Copyright 2024 all right reserved
        </div>
      </footer>
    </>
  )
}
