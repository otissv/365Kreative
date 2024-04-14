import { Breadcrumb, BreadCrumbs } from "@/components/breadcrumbs"
import { Maybe } from "@/components/maybe"
import { TypographyH1 } from "@/components/typography/h1.typography"
import { TypographyH2 } from "@/components/typography/h2.typography"
import { TypographyH3 } from "@/components/typography/h3.typography"
import { TypographyH4 } from "@/components/typography/h4.typography"

export interface PageProps {
  heading?: string
  breadcrumbs?: Breadcrumb[]
  as?: "h1" | "h2" | "h3" | "h4"
}

export const PageHeader = ({
  as = "h1",
  breadcrumbs,
  heading,
  ...props
}: PageProps) => {
  let Heading = TypographyH1

  if (heading === "h2") Heading = TypographyH2
  if (heading === "h3") Heading = TypographyH3
  if (heading === "h4") Heading = TypographyH4

  return (
    <>
      <Maybe check={heading} {...props}>
        <Heading className="mb-4">{heading}</Heading>
      </Maybe>
      <Maybe check={breadcrumbs}>
        <BreadCrumbs className="mb-8" crumbs={breadcrumbs as Breadcrumb[]} />
      </Maybe>
    </>
  )
}

PageHeader.displayName = "PageHeader"
