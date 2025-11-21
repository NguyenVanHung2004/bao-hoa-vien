"use client"
import React, { useState, useEffect, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Utensils, Star, ArrowLeft, ShoppingCart, Check, StarHalf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer" // Import Footer đồng bộ
import menuData from "@/data/menu.json"
import { getDishDetails } from "@/lib/dish-details"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface Dish {
  id: string
  name: string
  description: string
  price: string
  image?: string
  badge?: string
}

interface Category {
  name: string
  items: Dish[]
}

interface DishDetails {
  rating: number
  reviewCount: number
  prepTime: number
  servingSize: number
  tags: string[]
  description: string
  ingredients: string[]
  nutritionFacts?: Record<string, string>
  metaDescription?: string
}

export default function DishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const [isScrolled, setIsScrolled] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Tìm món ăn trong data
  let dish: Dish | null = null
  let categoryData: Category | null = null
  
  for (const category of menuData.categories as Category[]) {
    const foundDish = category.items.find((item) => item.id === slug)
    if (foundDish) {
      dish = foundDish
      categoryData = category
      break
    }
  }

  if (!dish) return notFound()

  const dishDetails: DishDetails = getDishDetails(slug)
  const relatedDishes = categoryData?.items.filter((item: Dish) => item.id !== slug).slice(0, 3) || []

  const handleAddToCart = () => {
    if (!dish) return
    addItem({
      name: dish.name,
      description: dish.description,
      price: dish.price,
      image: dish.image || "/placeholder.svg",
    })

    const isMobile = window.innerWidth < 640
    toast.success(`Đã thêm ${dish.name} vào giỏ hàng!`, {
      position: isMobile ? "bottom-center" : "bottom-right",
      className: "bg-white border-l-4 border-brand-red text-gray-900" // Toast màu sáng
    })
  }

  // Hàm render sao đỏ
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
        ))}
        {rating % 1 !== 0 && <StarHalf className="h-4 w-4 fill-brand-red text-brand-red" />}
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Sticky Header khi cuộn: Nền trắng, nút bo tròn */}
      <div className={cn(
        "fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md shadow-sm transform transition-transform duration-300 border-b border-gray-100", 
        isScrolled ? 'translate-y-0' : '-translate-y-full'
      )}>
        <div className="container max-w-5xl mx-auto py-3 px-4 flex items-center justify-between">
          <Link href="/menu">
            <Button variant="ghost" size="sm" className="gap-1 rounded-full hover:bg-gray-100 text-gray-600">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-bold text-xs uppercase tracking-wider">Thực đơn</span>
            </Button>
          </Link>
          <span className="font-bold text-gray-900 hidden md:block">{dish.name}</span>
          <Button size="sm" onClick={handleAddToCart} className="rounded-full bg-brand-red hover:bg-brand-dark-red text-white shadow-md">
            Thêm vào giỏ <ShoppingCart className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <main className="container md:max-w-5xl max-w-4xl py-8 px-4 mx-auto md:py-16 md:px-8 flex-1 pt-24">
        <div className="mb-8">
          <Link href="/menu">
            <Button variant="ghost" size="sm" className="gap-2 pl-0 pt-8 hover:bg-transparent text-gray-500 hover:text-brand-red transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                 <ArrowLeft className="h-4 w-4" />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider">Quay lại thực đơn</span>
            </Button>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2  mb-16">
          {/* Ảnh món ăn: Bo tròn 2xl */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
            <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill priority className="object-cover hover:scale-105 transition-transform duration-700" />
            {dish.badge && (
              <Badge className="absolute top-4 right-4 bg-brand-red text-white border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                {dish.badge}
              </Badge>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{dish.name}</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">{dish.description}</p>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="outline" className="text-brand-red border-brand-red/30 bg-red-50 rounded-full px-3 py-1">
                {categoryData?.name}
              </Badge>
              {dishDetails.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-3xl font-bold text-brand-red">{dish.price}</div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 mb-1">
                  <span className="font-bold text-gray-900 mr-1">{dishDetails.rating}</span>
                  {renderStars(dishDetails.rating)}
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{dishDetails.reviewCount} đánh giá</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-red">
                   <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Chuẩn bị</p>
                  <p className="font-bold text-gray-900">{dishDetails.prepTime} phút</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-red">
                   <Utensils className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Khẩu phần</p>
                  <p className="font-bold text-gray-900">{dishDetails.servingSize} người</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full bg-brand-red hover:bg-brand-dark-red text-white rounded-full h-14 text-lg font-bold shadow-lg hover:shadow-red-200 transition-all" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </Button>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3 mb-16">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Mô tả chi tiết</h2>
              <div className="prose max-w-none text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: dishDetails.description }} />
            </div>

            {dishDetails.nutritionFacts && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Giá trị dinh dưỡng</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(dishDetails.nutritionFacts).map(([key, value]) => (
                    <Card key={key} className="bg-white border-gray-100 shadow-sm rounded-2xl overflow-hidden">
                      <CardContent className="p-4 text-center">
                        <div className="text-lg font-bold text-brand-red">{value}</div>
                        <div className="text-xs text-gray-500 font-medium uppercase mt-1">{key}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Nguyên liệu chính</h2>
              <ul className="space-y-3">
                {dishDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <Check className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">Có thể bạn sẽ thích</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {relatedDishes.map((relatedDish) => (
              <Link key={relatedDish.id} href={`/menu/${relatedDish.id}`} className="group block h-full">
                <Card className="overflow-hidden h-full transition-all hover:shadow-xl hover:-translate-y-1 border-gray-100 bg-white rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedDish.image || "/placeholder.svg"}
                      alt={relatedDish.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {relatedDish.badge && (
                      <Badge className="absolute top-3 right-3 bg-white/90 backdrop-blur text-brand-red shadow-sm px-2 py-0.5 text-[10px] font-bold uppercase rounded-full">
                        {relatedDish.badge}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-gray-900 line-clamp-1 mb-1 group-hover:text-brand-red transition-colors">{relatedDish.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3 min-h-[2.5em]">{relatedDish.description}</p>
                    <div className="font-bold text-brand-red text-lg">{relatedDish.price}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer đồng bộ */}
      <Footer />
    </div>
  )
}