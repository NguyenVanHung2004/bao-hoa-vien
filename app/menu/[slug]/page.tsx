"use client"
import React, { useState, useEffect, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Utensils, Star, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"
import menuData from "@/data/menu.json"
import { getDishDetails } from "@/lib/dish-details"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"


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

type RelatedDish = {
  id: string
  name: string
  description: string
  price: string
  image?: string
  badge?: string
}

export default function DishPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)

  const [isScrolled, setIsScrolled] = useState(false)
  const { addItem } = useCart()

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 100px
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Find the dish across all categories
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


  // Find related dishes (same category, excluding current dish)
  const relatedDishes = categoryData?.items.filter((item: Dish) => item.id !== slug).slice(0, 3) || []

  const handleAddToCart = () => {
    addItem({
      name: dish.name,
      description: dish.description,
      price: dish.price,
      image: dish.image || "/placeholder.svg",
    })

    // Kiểm tra xem thiết bị có phải là mobile không
    const isMobile = window.innerWidth < 640

    toast.success(`Đã thêm ${dish.name} vào giỏ hàng!`, {
      position: isMobile ? "bottom-left" : "top-left",
      duration: 2000,
    })
  }

  return (
    <>
      <Navbar />
      {/* Sticky back button that appears when scrolled */}
      <div className={`fixed top-0 left-0 w-full z-10 bg-background/95 backdrop-blur-sm shadow-sm transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container max-w-5xl mx-auto py-3 px-4">
          <Link href="/menu">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Quay lại thực đơn
            </Button>
          </Link>
        </div>
      </div>

      <main className="container md:max-w-5xl max-w-4xl py-8 px-4 mx-auto md:py-16 md:px-8 flex-1">
        <div className="mb-6">
          <Link href="/menu">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Quay lại thực đơn
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={dish.image || "/placeholder.svg"} alt={dish.name} fill priority className="object-cover" />
            {dish.badge && <Badge className="absolute top-4 right-4 bg-primary text-white">{dish.badge}</Badge>}
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{dish.name}</h1>
            <p className="text-muted-foreground mt-1">{dish.description}</p>

            <div className="mt-4 flex items-center gap-2">
              <Badge variant="outline" className="text-primary border-primary">
                {categoryData?.name || "Unknown Category"}
              </Badge>
              {dishDetails.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">{dish.price}</div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{dishDetails.rating}/5</span>
                <span className="text-muted-foreground">({dishDetails.reviewCount} đánh giá)</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{dishDetails.prepTime} phút</span>
              </div>
              <div className="flex items-center gap-1">
                <Utensils className="h-4 w-4" />
                <span>{dishDetails.servingSize} người</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-[#dc141e] hover:bg-[#dc141e]/90" onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Mô tả</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: dishDetails.description }} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nguyên liệu</h2>
            <ul className="grid gap-2">
              {dishDetails.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {dishDetails.nutritionFacts && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Giá trị dinh dưỡng</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.entries(dishDetails.nutritionFacts).map(([key, value]) => (
                  <Card key={key}>
                    <CardContent className="p-4 text-center">
                      <div className="text-lg font-bold">{value}</div>
                      <div className="text-sm text-muted-foreground">{key}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Món ăn liên quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {relatedDishes.map((relatedDish: RelatedDish) => (
              <Link key={relatedDish.id} href={`/menu/${relatedDish.id}`}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedDish.image || "/placeholder.svg"}
                      alt={relatedDish.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    {relatedDish.badge && (
                      <Badge className="absolute top-2 right-2 bg-primary text-white">{relatedDish.badge}</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold line-clamp-1">{relatedDish.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{relatedDish.description}</p>
                    <div className="mt-2 font-medium text-primary">{relatedDish.price}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
        </p>
      </footer>
    </>
  )
}