import { cn } from "@/lib/utils"
import { Box } from "@/components/box"
import { TypographyParagraph } from "@/components/typography/paragraph.typography"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { testimonials } from "@/content/data"

export const Testimonials = ({ className }: { className?: string }) => {
  return (
    <Box
      className={cn(
        "grid gap-6 justify-center items-center w-full mt-10",
        "lg:grid-row-2",
        className
      )}
    >
      {testimonials.items.map(({ src, alt, fallback, review, name }, index) => (
        <Box
          key={index}
          className="opacity-30 translate-y-40"
          enter="opacity-100 translate-y-0"
        >
          <Card className="w-full lg:max-w-[800px] rounded-sm bg-background-2">
            <CardHeader></CardHeader>
            <CardContent className="px-6 pb-6 w-full">
              <TypographyParagraph>{review}</TypographyParagraph>
            </CardContent>
            <CardFooter className="md:whitespace-nowrap">
              <Avatar className="h-[64px] w-[64px] mr-2">
                <AvatarImage src={src} alt={alt} />
                <AvatarFallback>{fallback}</AvatarFallback>
              </Avatar>
              &mdash;{name}
            </CardFooter>
          </Card>
        </Box>
      ))}
    </Box>
  )
}
