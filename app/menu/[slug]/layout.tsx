
import type { Metadata } from "next"
import menuData from "@/data/menu.json"
import { getDishDetails } from "@/lib/dish-details"
import { headers } from "next/headers"
import type React from "react"

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

interface GenerateMetadataProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { slug } = await params // Unwrap the Promise to get the slug

  // Find the dish across all categories
  let dish: Dish | null = null

  for (const category of menuData.categories as Category[]) {
    const foundDish = category.items.find((item) => item.id === slug)
    if (foundDish) {
      dish = foundDish
      break
    }
  }

  if (!dish) {
    return {
      title: "Món ăn không tồn tại | Bảo Hoa Viên",
      description: "Không tìm thấy món ăn yêu cầu",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const dishDetails: DishDetails = getDishDetails(slug)

  // Get current domain for canonical URL
  const headersList = await headers()
  const domain = headersList.get("host") || "baohoanvien.vn"
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"
  const currentUrl = `${protocol}://${domain}`
  const canonicalUrl = `${currentUrl}/menu/${slug}`

  return {
    title: `${dish.name} | Bảo Hoa Viên`,
    description: dishDetails.metaDescription || dish.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${dish.name} - Nhà hàng Bảo Hoa Viên`,
      description: dishDetails.metaDescription || dish.description,
      url: canonicalUrl,
      images: [
        {
          url: dish.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: dish.name,
        },
      ],
      type: "website",
      locale: "vi_VN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${dish.name} - Nhà hàng Bảo Hoa Viên`,
      description: dishDetails.metaDescription || dish.description,
      images: [dish.image || "/placeholder.svg" ],
    },
  }
}

export async function generateStaticParams() {
  const paths: { slug: string }[] = []

  menuData.categories.forEach((category: Category) => {
    category.items.forEach((item: Dish) => {
      paths.push({
        slug: item.id,
      })
    })
  })

  return paths
}

export default function DishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}