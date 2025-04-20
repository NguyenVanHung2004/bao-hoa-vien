"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

interface FoodCardProps {
  id: string
  name: string
  description: string
  price: string
  image: string
  badge?: string
}

export function FoodCard({ id, name, description, price, image, badge }: FoodCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Ngăn chặn việc điều hướng khi nhấp vào nút
    e.stopPropagation() // Ngăn chặn sự kiện lan truyền lên các phần tử cha

    addItem({
      name,
      description,
      price,
      image,
    })

    // Kiểm tra xem thiết bị có phải là mobile không
    const isMobile = window.innerWidth < 640

    toast.success(`Đã thêm ${name} vào giỏ hàng!`, {
      position: isMobile ? "bottom-left" : "top-left",
      duration: 2000,
    })
  }

  return (
    <Link href={`/menu/${id}`}>
      <Card className="flex flex-col overflow-visible hover:shadow-lg">
        <div className="relative">
          <div className="aspect-square md:aspect-[1/1] overflow-hidden">
            <Image
              src={image || "/logo.png"}
              alt={name}
              width={400}
              height={400}
              loading="lazy"
              quality={80}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          {badge && <Badge className="absolute top-2 right-2 bg-white text-[#dc141e]">{badge}</Badge>}
        </div>
        <div className="flex flex-col p-2 pb-1.5 md:pt-2  md:px-4">
          <h3 className="text-sm font-bold line-clamp-1 md:text-base">{name}</h3>
          <p className="text-xs text-muted-foreground line-clamp-1 md:text-sm">{description}</p>
          <div className="text-sm font-bold text-primary mt-0.5 md:text-base md:mt-1">{price}</div>
          <Button
            variant="outline"
            size="sm"
            className="w-full gap-2 text-xs mt-1 h-7 md:h-8 md:text-sm"
            onClick={handleAddToCart}
            style={{ WebkitTransform: "translateZ(0)" }}
          >
            <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 text-[#dc141e]" />
            Đặt món
          </Button>
        </div>
      </Card>
    </Link>
  )
}
