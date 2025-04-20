"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { FoodCard } from "@/components/food-card"
import menuData from "@/data/menu.json"

export default function MenuPage() {
  
  const [activeTab, setActiveTab] = useState(menuData.categories[0].id)

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handleSelectChange = (value: string) => {
    setActiveTab(value)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-8 md:py-16 bg-slate-50 flex justify-center items-center">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">Thực đơn</h1>
              <p className="max-w-3xl text-base text-muted-foreground mb-8">
                Khám phá các món ăn đặc sắc của Bảo Hoa Viên
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              {/* Mobile Dropdown */}
              <div className="md:hidden w-full mb-4">
                <Select value={activeTab} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Chọn danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    {menuData.categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop Tabs */}
              <div className="relative mb-4 w-full hidden md:block">
                <TabsList className="flex w-full overflow-x-auto scrollbar-hide p-1">
                  {menuData.categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="min-w-[120px] rounded-full data-[state=active]:bg-[#dc141e] data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {menuData.categories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
                >
                  {category.items.map((item) => (
                    <FoodCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      badge={item.badge}
                    />
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
