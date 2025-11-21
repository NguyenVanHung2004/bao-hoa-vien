"use client"

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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 bg-white group h-full flex flex-col rounded-2xl hover:-translate-y-1">
      <CardContent className="p-6 flex-1">
        <div className="flex gap-1 mb-4">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-brand-red text-brand-red" />
          ))}
          {rating % 1 !== 0 && <StarHalf className="h-4 w-4 fill-brand-red text-brand-red" />}
        </div>
        <p className="text-gray-600 line-clamp-4 italic leading-relaxed"> &quot;{content}&quot;</p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center gap-4 mt-auto">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-sm text-black group-hover:text-brand-red transition-colors">{name}</h4>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}