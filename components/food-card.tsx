"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

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
    e.preventDefault()
    e.stopPropagation()
    addItem({ name, description, price, image })
    const isMobile = window.innerWidth < 640
    toast.success(`Đã thêm ${name} vào giỏ hàng!`, {
      position: isMobile ? "bottom-center" : "bottom-right",
      className: "bg-black text-white border-l-4 border-brand-red"
    })
  }

  return (
    <Link href={`/menu/${id}`} className="group h-full block">
      <Card className="flex flex-col h-full overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl">
        <div className="relative overflow-hidden aspect-square">
          <Image src={image || "/logo.png"} alt={name} fill loading="lazy" className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors duration-300" />
          
          {badge && (
            <Badge className={cn(
              "absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-0 rounded-full shadow-sm",
              // Badge dùng đỏ hoặc xám đậm, không dùng đen tuyền
              badge === "Bán chạy" ? "bg-brand-red text-white" : "bg-gray-700 text-white"
            )}>
              {badge}
            </Badge>
          )}
        </div>
        
        <div className="flex flex-col p-5 flex-1">
          {/* Tên món: Gray-900 */}
          <h3 className="font-bold text-base text-gray-900 line-clamp-1 group-hover:text-brand-red transition-colors mb-1">
            {name}
          </h3>
          {/* Mô tả: Gray-500 */}
          <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-1">
            {description}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="font-bold text-brand-red text-lg">{price}</span>
            <Button
              size="sm"
              /* Nút cộng: Hover thành đỏ, không đen */
              className="h-9 w-9 p-0 rounded-full bg-gray-100 hover:bg-brand-red text-gray-700 hover:text-white transition-all shadow-sm"
              onClick={handleAddToCart}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  )
}