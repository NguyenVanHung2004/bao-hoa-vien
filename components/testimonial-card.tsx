import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export function TestimonialCard({ name, role, content, rating, image }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          {rating % 1 !== 0 && <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />}
        </div>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
