"use client"

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Nav, NaveItemType, setSelectedNavItem } from "./features/nav"
import { Feature } from "./features/feature"
import { benefits, contact, nav } from "../content/data"

import {
  header,
  services,
  seoFeatures,
  wbeFeatures,
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
import { SendHorizontal } from "lucide-react"

export default function Home() {
  const [active, setActive] = React.useState<NaveItemType>(nav[0])

  const setActiveLink = setSelectedNavItem({
    items: nav,
    setActive,
  })

  const handleOnInView = (id: string) => {
    const index = nav.findIndex((item) => item.to === id)
    if (index >= 0) {
      setActiveLink(index)
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
      >
        <AnimateImage
          className="object-cover opacity-30 scale-50 duration-1000 ease-in-out"
          src="/images/photo-1587440871875-191322ee64b0.jpeg"
          alt=""
          width={600}
          height={500}
          enter="opacity-100 scale-100"
          parallax={70}
          imageProps={{
            className: "rounded-lg",
          }}
        />
      </Hero1>

      <main>
        <Section
          id="services"
          className="section-gradient"
          onInView={handleOnInView}
        >
          <SectionWatermark className="ml-2 lg:ml-16 top-[9%] md:top-[13%] lg:top-[15%]">
            {services.title}
          </SectionWatermark>

          <div className="section-container pb-20  lg:px-20 px-2 pt-[30%] lg:pt-[28%] xl:pt-[20%] 2xl:pt-[10%]">
            <SectionHeading parallax={30}>{services.title}</SectionHeading>
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
        >
          <SectionWatermark className="ml-2 lg:ml-16 top-[5%] md:top-[10%] 2xl:top-[20%]">
            {benefits.title}
          </SectionWatermark>

          <Box
            className="section-container pb-20 lg:px-20 px-2 pt-[50%] md:pt-[36%] lg:pt-[28%] xl:pt-[20%] 2xl:pt-[16%]"
            parallax={70}
          >
            <SectionHeading headingClassName="mb-10" parallax={30}>
              {benefits.title}
            </SectionHeading>

            <Box
              className="opacity-1 translate-y-40"
              enter="opacity-100 translate-y-0"
            >
              {benefits.items.map(({ heading, content, src, alt }, index) => (
                <Box
                  key={heading}
                  className="mb-32 md:mb-0 xl:mb-8"
                  parallax={30}
                >
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
                      className="object-cover rounded-lg opacity-30 scale-50 duration-1000 ease-in-out "
                      src={src}
                      width={460}
                      height={306}
                      alt={alt}
                      enter="opacity-100 scale-100"
                      imageProps={{
                        className: "rounded-lg",
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
          heading={wbeFeatures.title}
          onInView={handleOnInView}
          className="section-gradient"
        >
          <SectionWatermark className="ml-2 lg:ml-16 top-[7%] md:top-[10%] lg:top-[15%]">
            {wbeFeatures.title}
          </SectionWatermark>
          <Box
            className="section-container pb-20 px-2 lg:px-20 pt-[40%] md:mt-[2%] lg:pt-[40%] xl:pt-[25%] 2xl:pt-[10%]"
            parallax={70}
          >
            <SectionHeading
              parallax={30}
              className="mb-16 lg:mb-0"
              headingClassName="flex-col"
            >
              <span className="">{wbeFeatures.title}</span>
              <span className="text-4xl"> {wbeFeatures.title2}</span>
            </SectionHeading>

            <Box className="pl-5 md:grid md:grid-cols-2 lg:pl-0 lg:translate-y-32 lg:mb-20">
              <ul className="flex flex-col gap-8">
                {wbeFeatures.items.map(({ heading, content, src, alt }) => (
                  <Box as="li" key={heading} parallax={30}>
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
        >
          <SectionWatermark className="ml-2 top-[5%] md:top-[10%] lg:ml-16 2xl:top-[20%]">
            {seoFeatures.title}
          </SectionWatermark>
          <Box
            className="section-container pb-40 xl:pb-48 2xl:pb-60 lg:px-20 px-2 pt-[30%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[14%]"
            parallax={70}
          >
            <SectionHeading parallax={30}>{seoFeatures.title}</SectionHeading>

            <div className="md:grid md:grid-cols-2 ml-5 lg:ml-0">
              <ul className="flex flex-col gap-y-6">
                {seoFeatures.items.map(({ heading, content, src, alt }) => (
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
          onInView={handleOnInView}
        >
          <SectionWatermark className="ml-2 top-[5%] md:top-[10%] lg:ml-16">
            {projects.title}
          </SectionWatermark>
          {/* <Box className="px-2 pt-40 pb-20 my-20 md:py-80 lg:px-20" parallax={70}>
            <SectionHeading parallax={30}>{projects.title}</SectionHeading>
            <div className="365-Carousel flex justify-center">
              <Carousel className="w-full max-w-[800px] overflow-hidden lg:overflow-auto">
                <CarouselContent>
                  {projects.items.map(({ src, alt }, index) => (
                    <CarouselItem key={index} className="h-[100px] w-[100px]">
                      <Image
                        className=" rounded-lg "
                        src={src}
                        alt={alt}
                        height={320}
                        width={320}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-4">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </Box> */}
        </Section>

        <Section
          id="about"
          heading={aboutUs.title}
          className="section-gradient"
          onInView={handleOnInView}
        >
          <SectionWatermark className="ml-2 top-[10%] lg:ml-16 lg:top-[20%] 2xl:top-[30%]">
            {aboutUs.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container pb-40 xl:pb-48 2xl:pb-60 lg:px-20 px-2 pt-[50%] md:pt-[25%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[14%]",
              "lg:grid lg:grid-cols-2 lg:grid-row-2 lg:gap-6 items-center"
            )}
            parallax={70}
          >
            <div className="mb-10">
              <SectionHeading parallax={30}>{aboutUs.title}</SectionHeading>
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
              parallax={70}
            >
              <Image
                className="object-cover rounded-lg"
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
        >
          <SectionWatermark className="ml-2 lg:ml-16 top-[7%] 2xl:top-[20%]">
            {testimonials.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container px-2 lg:px-20 pb-20 pt-[36%] md:pt-[20%] lg:pt-[15%]",
              "lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
            )}
            parallax={70}
          >
            <SectionHeading parallax={30} className="mb-16 lg:mb-0">
              {testimonials.title}
            </SectionHeading>
            <Box
              className={cn(
                "grid gap-6 justify-center items-center w-full mt-10",
                "lg:grid-row-2"
              )}
            >
              {testimonials.items.map(
                ({ src, alt, fallback, review, name }, index) => (
                  <Box
                    key={index}
                    className="opacity-30 translate-y-40"
                    enter="opacity-100 translate-y-0"
                  >
                    <Card className="w-full lg:max-w-[800px]">
                      <CardHeader>
                        <Avatar className="h-[64px] w-[64px]">
                          <AvatarImage src={src} alt={alt} />
                          <AvatarFallback>{fallback}</AvatarFallback>
                        </Avatar>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 w-full">
                        <TypographyParagraph>{review}</TypographyParagraph>
                      </CardContent>
                      <CardFooter className="md:whitespace-nowrap">
                        - {name}
                      </CardFooter>
                    </Card>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Section>

        <Section className="section-gradient relative h-[100vh]">
          <Image
            className="object-cover opacity-30 scale-50 duration-1000 ease-in-out"
            src="/images/photo-1587440871875-191322ee64b0.jpeg"
            alt=""
            fill
            // parallax={70}
          />
        </Section>

        <Section
          id="contact"
          className="section-gradient"
          onInView={handleOnInView}
        >
          <SectionWatermark className="ml-2 lg:ml-16 top-[10%] md:top-[15%] lg:top-[20%] 2xl:top-[20%]">
            {contact.title}
          </SectionWatermark>
          <Box
            className={cn(
              "section-container px-2 lg:px-20 pb-20 pt-[36%] md:pt-[5%] lg:pt-[8%] xl:pt-[15%] 2xl:pt-[5%]",
              "lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
            )}
            parallax={70}
          >
            <div>
              <SectionHeading className="mb-8" parallax={30}>
                {contact.title}
              </SectionHeading>

              <TypographyParagraph
                className="mb-8 ml-5 lg:ml-0 duration-500 delay-100"
                parallax={30}
                enter="translate-y-0"
              >
                {contact.content}
              </TypographyParagraph>
            </div>

            <Box
              as="form"
              className={cn(
                "bg-black flex flex-col gap-6 ml-5 lg:ml-0  translate-y-40 duration-500 delay-100 rounded-lg",
                "lg:gird lg:col-start-2"
              )}
              enter="translate-y-0"
              parallax={30}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="flex mb-2">
                    Name
                  </Label>
                  <Input id="name" />
                </div>
                <div>
                  <Label htmlFor="email" className="flex mb-2">
                    Email
                  </Label>
                  <Input id="email" type="email" />
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="flex mb-2">
                  Message
                </Label>
                <Textarea id="message" placeholder="Enter message here.." />
              </div>
              <Button
                className={cn(
                  "grid grid-cols-[1fr_max-content] text-xl bg-purple-700 text-foreground w-full h-auto hover:bg-purple-500 focus:bg-purple-500 ",
                  "md:ml-auto md:w-auto"
                )}
              >
                {contact.button}
                <SendHorizontal className="ml-4 h-6 w-6" />
              </Button>
            </Box>
          </Box>
        </Section>
      </main>

      <footer className="container flex justify-center p-4 pt-20 md:pt-6  lg:pt-20 text-sm">
        <span>© 365Kreative</span>
      </footer>
    </>
  )
}
