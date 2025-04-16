"use client";

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

interface FoodCardProps {
  name: string
  description: string
  price: string
  image: string
  badge?: string
}

export function FoodCard({ name, description, price, image, badge }: FoodCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ name, description, price, image });
    
    // Kiểm tra xem thiết bị có phải là mobile không
    const isMobile = window.innerWidth < 640;
    
    toast.success(`Đã thêm ${name} vào giỏ hàng!`, {
      position: isMobile ? "bottom-left" : "top-left",
      duration: 2000,
    });
  };

  return (
    <Card className="h-full flex flex-col overflow-visible transition-all hover:shadow-lg">
      <div className="relative">
        <div className="aspect-square sm:aspect-video overflow-hidden">
          <Image
            src={image || "/logo.png"}
            alt={name}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        {badge && <Badge className="absolute top-2 right-2 bg-primary text-white">{badge}</Badge>}
      </div>
      <CardHeader className="p-3 pb-0 sm:p-4 sm:pb-0">
        <h3 className="text-base font-bold sm:text-xl line-clamp-1">{name}</h3>
        <p className="text-xs text-muted-foreground sm:text-sm line-clamp-1">{description}</p>
      </CardHeader>
      <CardContent className="p-3 pt-2 sm:p-4 sm:pt-2">
        <div className="text-base font-bold text-primary sm:text-lg">{price}</div>
      </CardContent>
      <div className="p-3 pt-0 sm:p-4 sm:pt-0 mt-auto">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full gap-1 text-xs sm:text-sm sm:gap-2" 
          onClick={handleAddToCart}
          style={{ WebkitTransform: 'translateZ(0)' }}
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
          Đặt món
        </Button>
      </div>
    </Card>
  )
}
