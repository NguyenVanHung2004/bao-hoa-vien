"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { FoodCard } from "@/components/food-card"
import { Footer } from "@/components/footer"
import menuData from "@/data/menu.json"

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(menuData.categories[0].id)
  const handleTabChange = (value: string) => setActiveTab(value)
  const handleSelectChange = (value: string) => setActiveTab(value)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Section: Nền xám rất nhạt, chữ xám đậm */}
        <section className="py-12 md:py-16 bg-gray-50 ">
          <div className=" px-4 md:px-8 justify-center items-center md:mx-20 mx-4 ">
            <div className="flex flex-col items-center text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Thực đơn</h1>
              <div className="w-12 h-1.5 bg-brand-red rounded-full mb-4"></div>
              <p className="max-w-3xl text-base text-gray-500 font-medium">
                Khám phá thế giới ẩm thực Trung Hoa đa dạng và phong phú
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              {/* Mobile Dropdown: Bo tròn */}
              <div className="md:hidden w-full mb-6 flex justify-center">
                <div className="w-full max-w-xs">
                  <Select value={activeTab} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full bg-white border-gray-200 rounded-full px-4 text-gray-700 shadow-sm">
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
              </div>

              {/* Desktop Tabs: Bo tròn, Active màu ĐỎ (không dùng đen) */}
              <div className="hidden md:flex justify-center items-center mb-10">
                <TabsList className="bg-white p-1.5 border border-gray-100 rounded-full shadow-sm h-auto flex-wrap justify-center gap-2">
                  {menuData.categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-6 py-2.5 rounded-full text-gray-500 font-bold transition-all duration-300 
                        data-[state=active]:bg-brand-red data-[state=active]:text-white data-[state=active]:shadow-md
                        hover:text-brand-red hover:bg-red-50"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Danh sách món ăn */}
              {menuData.categories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-0 animate-in fade-in duration-500"
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

      <Footer />
    </div>
  )
}