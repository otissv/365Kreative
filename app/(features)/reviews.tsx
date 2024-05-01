import { cn } from '@/lib/utils'
import { Box } from '@/components/box'
import { TypographyParagraph } from '@/components/typography/paragraph.typography'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { testimonials } from '@/content/data'

export const Reviews = ({ className }: { className?: string }) => {
  return (
    <Box
      className={cn(
        'grid gap-6 justify-center items-center w-full mt-10',
        'lg:grid-row-2',
        className
      )}
    >
      {testimonials.items.map(({ src, alt, fallback, review, name }, index) => (
        <Box key={index} className="translate-y-40" enter="translate-y-0">
          <Card className="w-full lg:max-w-[800px] rounded-sm bg-background-3">
            <CardContent className="px-6 pt-4 pb-6 w-full">
              <TypographyParagraph>&ldquo;{review}&rdquo;</TypographyParagraph>
            </CardContent>
            <CardFooter className="md:whitespace-nowrap">
              <Avatar className="h-[64px] w-[64px] mr-2">
                <AvatarImage loading="lazy" src={src} alt={alt} />
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
