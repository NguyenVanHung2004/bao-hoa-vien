"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { FoodCard } from "@/components/food-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import menuData from "@/data/menu.json"
import { motion } from "framer-motion"

export default function Home() {
  const [activeTab, setActiveTab] = useState('sui-cao');
  
  const handleTabChange = (value: string) => setActiveTab(value);
  const handleSelectChange = (value: string) => setActiveTab(value);

  const locations = [
    {
      name: "Cơ sở Giảng Võ",
      address: "114A1 Giảng Võ, Ba Đình, Hà Nội",
      phone: "096 933 98 58",
      mapUrl: "https://maps.app.goo.gl/Pdr6eW8qbbj5koKp7",
      image: "/co-so-giang-vo.jpg",
    },
    {
      name: "Cơ sở Tô Ngọc Vân",
      address: "44/52 Tô Ngọc Vân, Tây Hồ, Hà Nội",
      phone: "096 933 98 58",
      mapUrl: "https://maps.app.goo.gl/kDt9yHzK8zDRVTcL8",
      image: "/co-so-to-ngoc-van.jpg",
    },
    {
      name: "Cơ sở Yên Lãng",
      address: "48 Yên Lãng, Đống Đa, Hà Nội",
      phone: "0929 24 26 28",
      mapUrl: "https://www.google.com/maps/place/48+P.Y%C3%AAn+L%C3%A3ng,+L%C3%A1ng+H%E1%BA%A1,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i+100000/data=!4m2!3m1!1s0x3135ab7d3351248d:0x3a2bce319f738026?sa=X&ved=1t:242&ictx=111",
      image: "/co-so-yen-lang.jpg",
    },
  ]

  return (
    <div className="flex w-full min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Section: Giới thiệu */}
        <section id="about" className="py-20 overflow-hidden"> 
          <div className="container mx-auto px-4">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-red-50 text-brand-red text-xs font-bold uppercase tracking-widest rounded-full border border-red-100">
                  <span>Về chúng tôi</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Tinh hoa ẩm thực <br/> <span className="text-brand-red">Trung Hoa</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed border-l-4 border-brand-red pl-4">
                  Bảo Hoa Viên mang đến hương vị Dimsum và Mì tươi trứ danh. Từng chiếc sủi cảo được gói tay tỉ mỉ, nước dùng hầm xương ngọt thanh.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {["Nguyên liệu tươi ngon mỗi ngày", "Đầu bếp người Hoa giàu kinh nghiệm", "Không gian ấm cúng, sang trọng"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-red" />
                      <span className="font-medium text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/menu">
                  <Button className="bg-brand-red hover:bg-brand-dark-red text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-full font-bold">
                    Khám phá thực đơn <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[4/3] border-[8px] border-white shadow-2xl shadow-red-900/5 rounded-[2rem] overflow-hidden">
                  <Image src="/hero-section.png" alt="Không gian nhà hàng" fill className="object-cover"/>
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-red -z-10 rounded-full blur-2xl opacity-20"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Menu Nổi Bật */}
        <section id="menu" className="py-20 bg-brand-gray relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-3 text-gray-900">Thực đơn đặc sắc</h2>
              <div className="w-16 h-1.5 bg-brand-red mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600">Được chế biến từ những nguyên liệu tươi ngon nhất</p>
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <div className="flex justify-center mb-10">
                <div className="md:hidden w-full max-w-xs">
                  <Select value={activeTab} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full bg-white border-gray-200 rounded-full px-4 text-gray-700">
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {menuData.categories.slice(0, 6).map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="hidden md:block">
                  <TabsList className="bg-white p-1.5 border border-gray-100 rounded-full shadow-sm h-auto">
                    {menuData.categories.slice(0, 6).map((category) => (
                      <TabsTrigger 
                        key={category.id}
                        value={category.id} 
                        className="px-6 py-2.5 rounded-full text-gray-600 data-[state=active]:bg-brand-red data-[state=active]:text-white transition-all duration-300 font-bold"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>
              
              {menuData.categories.slice(0, 6).map((category) => (
                <TabsContent 
                  key={category.id}
                  value={category.id} 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  {category.items.slice(0, 4).map((item) => (
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
            
            <div className="mt-12 text-center">
              <Link href="/menu">
                <Button size="lg" variant="outline" className="border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-10 h-12 text-base rounded-full font-bold transition-all">
                  Xem toàn bộ thực đơn
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Reviews */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2">Reviews</span>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Khách hàng nói gì</h2>
              <div className="w-16 h-1.5 bg-gray-200 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-500 max-w-2xl">
                Cảm nhận chân thực từ những thực khách đã trải nghiệm
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <a href="https://maps.app.goo.gl/GZ17VMXJotbx3BuY8" target="_blank" rel="noopener noreferrer" className="h-full block">
                <TestimonialCard
                  name="Nguyễn Hằng"
                  role="Local Guide"
                  content="Giá khá rẻ so với chất lượng, đồ ăn ngon. Nhất là món đậu phụ tứ xuyên, và cơm rang rất nên thử."
                  rating={5}
                  image="/avatar-1.png"
                />
              </a>
               <a href="https://maps.app.goo.gl/GTJfRHkBfmJR19YH7" target="_blank" rel="noopener noreferrer" className="h-full block">
                <TestimonialCard
                  name="Perry Nguyen"
                  role="Local Guide"
                  content="An authentic chinese restaurant with reasonable prices and handmade delicacies. The taste of the spicy food are hot but no burn."
                  rating={5}
                  image="/avatar-2.png"
                />
              </a>
              <a href="https://maps.app.goo.gl/3W5nhLCyAdpLuCkU8" target="_blank" rel="noopener noreferrer" className="h-full block">
                <TestimonialCard
                  name="Mai Xuan"
                  role="Local Guide"
                  content="Đồ ăn khá ngon, hợp khẩu vị mình. Thấy ông chủ bảo bánh bao kim sa này là men tự nhiên, ăn cũng ngon lắm"
                  rating={5}
                  image="/avatar-3.png"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Section: Hệ thống nhà hàng */}
        <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-2">Locations</span>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Hệ thống nhà hàng</h2>
              <p className="text-gray-500 max-w-2xl">Ghé thăm 3 cơ sở tại Hà Nội để thưởng thức hương vị chuẩn Trung Hoa</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {locations.map((location, index) => (
                <Card key={index} className="group overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 rounded-2xl">
                  <div className="relative h-60 overflow-hidden border-b border-gray-100">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Badge: Trắng + Đỏ */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-brand-red text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      CƠ SỞ {index + 1}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-brand-red transition-colors flex items-center gap-2">
                      {location.name}
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-red">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Địa chỉ</p>
                          <p className="text-sm font-medium text-gray-700 mt-0.5">{location.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-red">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Hotline</p>
                          <p className="text-sm font-medium text-gray-700 mt-0.5">{location.phone}</p>
                        </div>
                      </div>
                    </div>

                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="block mt-6">
                      {/* NÚT MÀU SÁNG: Nền trắng, viền xám, hover viền đỏ chữ đỏ */}
                      <Button variant="outline" className="w-full bg-white text-gray-700 border-gray-200 hover:bg-white hover:border-brand-red hover:text-brand-red h-10 rounded-full transition-all font-bold uppercase text-xs tracking-widest shadow-sm">
                        Xem bản đồ
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}