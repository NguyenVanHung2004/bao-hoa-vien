import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface FoodCardProps {
  name: string
  description: string
  price: string
  image: string
  badge?: string
}

export function FoodCard({ name, description, price, image, badge }: FoodCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        {badge && <Badge className="absolute top-2 right-2 bg-primary text-white">{badge}</Badge>}
      </div>
      <CardHeader className="p-4 pb-0">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-lg font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Đặt món
        </Button>
      </CardFooter>
    </Card>
  )
}
