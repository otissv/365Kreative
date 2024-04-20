"use client"

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Nav,
  NaveItemType,
  SocialLinks,
  setSelectedNavItem,
} from "./features/nav"
import { Feature } from "./features/feature"
import { benefits, contact, nav } from "../content/data"

import {
  header,
  services,
  seoFeatures,
  webFeatures,
  aboutUs,
  projects,
  testimonials,
} from "../content/data"
import { Section, SectionHeading, SectionWatermark } from "./features/section"
import { Box } from "@/components/box"
import { Hero1 } from "./features/header"
import { AnimateImage } from "@/components/animate-image"
import { cn } from "@/lib/utils"
import { TypographyH3 } from "@/components/typography/h3.typography"
import { TypographyBlockquote } from "@/components/typography/blockquote.typography"
import { QuoteMarks } from "./features/quote-marks"
import { Subscribe } from "./subscribe/subscribe"
import { Contact } from "./contact/contact"
import { Testimonials } from "./features/testimonials"

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
          id="services"
          className="section-gradient"
          onInView={handleOnInView}
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
          </div>
        </Section>

        <Section
          id="services"
          onInView={handleOnInView}
          className="section-gradient"
          bottomDivider={{ type: "tilt" }}
        >
          <SectionWatermark className="ml-2 lg:translate-x-16  top-[5%] md:top-[10%] 2xl:top-[20%]">
            {benefits.title}
          </SectionWatermark>

          <Box className="section-container pb-20 lg:px-20 px-2 pt-[50%] md:pt-[36%] lg:pt-[28%] xl:pt-[20%] 2xl:pt-[16%]">
            <SectionHeading headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1">
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
                <Box key={heading} className="mb-32 md:mb-0 xl:mb-8">
                  <TypographyH3
                    className="mb-4 opacity-0 translate-y-40 ml-5 lg:ml-0"
                    enter="opacity-100 translate-y-0"
                  >
                    {heading}
                  </TypographyH3>
                  <div className="grid  md:grid-cols-2 gap-6">
                    <TypographyParagraph
                      className="opacity-0 translate-y-40 ml-5 lg:ml-0"
                      enter="opacity-100 translate-y-0"
                    >
                      {content}
                    </TypographyParagraph>

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
                </Box>
              ))}
            </Box>
          </Box>
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
          <Box className="section-container pb-20 px-2 lg:px-20 pt-[40%] md:mt-[2%] lg:pt-[40%] xl:pt-[25%] 2xl:pt-[10%]">
            <SectionHeading
              className="mb-16 lg:mb-0"
              headingClassName="flex-col grid mb-2"
            >
              <span className="text-2xl uppercase font-normal tracking-wide mb-1">
                {webFeatures.heading}
                <span className="text-transparent">,</span>
              </span>
              <span className="mb-1">{webFeatures.title}</span>
              <span className="text-4xl"> {webFeatures.title2}</span>
            </SectionHeading>

            <Box className="pl-5 md:grid md:grid-cols-2 lg:pl-0 lg:translate-y-32 lg:mb-20">
              <ul className="flex flex-col gap-8">
                {webFeatures.items.map(({ heading, content }) => (
                  <Box as="li" key={heading}>
                    <TypographyH3
                      className="mb-2 opacity-0 translate-y-40"
                      enter="opacity-100 translate-y-0"
                    >
                      {heading}
                    </TypographyH3>
                    <TypographyParagraph
                      className="opacity-0 translate-y-40"
                      enter="opacity-100 translate-y-0"
                    >
                      {content}
                    </TypographyParagraph>
                  </Box>
                ))}
              </ul>
            </Box>
          </Box>
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
          <Box className="section-container pb-40 xl:pb-48 2xl:pb-60 lg:px-20 px-2 pt-[30%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[14%]">
            <SectionHeading headingClassName="grid mb-2">
              <span className="text-2xl uppercase font-normal tracking-wide mb-1">
                {seoFeatures.heading}
                <span className="text-transparent">,</span>
              </span>
              {seoFeatures.title}
            </SectionHeading>

            <div className="md:grid md:grid-cols-2 ml-5 lg:ml-0">
              <ul className="flex flex-col gap-y-6">
                {seoFeatures.items.map(({ heading, content }) => (
                  <Box as="li" key={heading}>
                    <TypographyH3 className="mb-4">{heading}</TypographyH3>
                    <TypographyParagraph>{content}</TypographyParagraph>
                  </Box>
                ))}
              </ul>
            </div>
          </Box>
        </Section>

        <Section
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
        </Section>

        <Section
          id="about"
          heading={aboutUs.title}
          className="section-gradient"
          onInView={handleOnInView}
          bottomDivider={{ type: "tilt" }}
        >
          <SectionWatermark className="ml-2 top-[10%] lg:translate-x-16  lg:top-[20%] 2xl:top-[30%]">
            {aboutUs.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container pb-40 xl:pb-48 2xl:pb-60 lg:px-20 px-2 pt-[50%] md:pt-[25%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[14%]",
              "lg:grid lg:grid-cols-2 lg:grid-row-2 lg:gap-6 items-center"
            )}
          >
            <div className="mb-10">
              <SectionHeading headingClassName="grid mb-2">
                <span className="text-2xl uppercase font-normal tracking-wide mb-1">
                  {aboutUs.heading}
                  <span className="text-transparent">,</span>
                </span>
                {aboutUs.title}
              </SectionHeading>
              {aboutUs.content.map((item, index) => (
                <TypographyParagraph
                  key={index}
                  className="mb-6 translate-y-40 duration-500 opacity-0 delay-100 ml-5 lg:ml-0"
                  enter="translate-y-0 opacity-1"
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
                src="/images/photo-1499951360447-b19be8fe80f5.jpeg"
                fill
                alt=""
              />
            </Box>
          </Box>
        </Section>

        <Section
          id="testimonials"
          className="section-gradient"
          heading={testimonials.title}
          onInView={handleOnInView}
          topDivider={{ type: "tilt", flipHorizontal: true }}
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
              <span className="text-2xl uppercase font-normal tracking-wide mb-1">
                {testimonials.heading}
                <span className="text-transparent">,</span>
              </span>
              {testimonials.title}
            </SectionHeading>

            <Testimonials />
          </Box>
        </Section>

        <Section
          id="testimonials"
          className="section-gradient h-[100vh] block"
          background={{
            image: {
              src: "/images/photo-1587440871875-191322ee64b0.jpeg",
              alt: "",
            },
          }}
          bottomDivider={{ type: "tilt" }}
        >
          <Box className="h-[100vh] max-w-[730px] mx-auto">
            <TypographyBlockquote
              className="relative border-0 text-6xl font-bold translate-y-0 opacity-0 scale-0 w-full"
              enter="opacity-100 translate-y-[50vh] scale-100"
            >
              <QuoteMarks
                className="w-28 absolute z-[0] -translate-y-16"
                side="right"
              />
              <span className=" z-[1] absolute">
                The best way to predict <br />
                the future is to create it
              </span>
            </TypographyBlockquote>
          </Box>
        </Section>

        <Contact
          id="contact"
          onInView={handleOnInView}
          topDivider={{ type: "tilt", flipHorizontal: true }}
        />

        <Subscribe id="contact" bottomDivider={{ type: "tilt" }} />
      </main>

      <footer className="container relative text-sm z-[2] pt-20 pb-4 px-8 lg:px-20 grid items-end xl:h-[50vh]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="grid gap-4 w-full ">
            <div>365Kreative</div>
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
