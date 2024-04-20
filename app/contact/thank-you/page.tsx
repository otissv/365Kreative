import { CircleCheck, Mail, MoveDown } from "lucide-react"
import Link from "next/link"

import { SocialLinks } from "@/app/features/nav"
import { TypographyH1 } from "@/components/typography/h1.typography"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { Button } from "@/components/ui/button"
import { Testimonials } from "@/app/features/testimonials"
import { TypographyH2 } from "@/components/typography/h2.typography"
import { Divider } from "@/components/divider"

export default function ThankYou() {
  return (
    <div className="container grid justify-center pt-6 pb-20 gap-20">
      <div className="max-w-[800px] grid center gap-6">
        <div className="center mx-auto relative w-40 h-40 mb-10">
          <Mail className="absolute w-40 h-40 mx-auto app-gradient-color" />
          <CircleCheck
            fill="black"
            className="absolute bottom-0 right-0 w-14 h-14 text-green-800"
          />
        </div>

        <TypographyH1 className="center mb-6">
          Thank you <br />
          for contacting us
        </TypographyH1>

        <TypographyParagraph className="text-xl center ">
          You will here from us shortly.
        </TypographyParagraph>

        <TypographyParagraph className="inline-block center ">
          In the mean time, check out what our clients have to say
          <MoveDown className="inline w-4" />
        </TypographyParagraph>
      </div>

      <Divider />

      <div className=" grid md:grid-cols-2 gap-6 center">
        <Button
          variant="outline"
          className="app-gradient-border hover:app-bg-gradient hover:text-foreground focus:app-bg-gradient  border-2  w-48"
          asChild
        >
          <Link href="/">Back to home page</Link>
        </Button>
        <div className="grid gap-2 center">
          <TypographyParagraph>Let&apos;s connect</TypographyParagraph>
          <SocialLinks />
        </div>
      </div>

      <Divider />

      <section id="hero">
        <TypographyH2 className="flex center">
          What our Clients Say
        </TypographyH2>
        <Testimonials />
      </section>
    </div>
  )
}
