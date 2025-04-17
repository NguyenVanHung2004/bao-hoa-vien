"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { FoodCard } from "@/components/food-card"
import { TestimonialCard } from "@/components/testimonial-card"
// import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import menuData from "@/data/menu.json"

export default function Home() {
  // Lấy một số món nổi bật cho trang chủ
  // const featuredCategories = ['sui-cao', 'mi', 'mon-xao', 'dimsum', 'com-mi-xao'];
  const [activeTab, setActiveTab] = useState('sui-cao');
  
  // Hàm lấy một số món từ mỗi danh mục
  // const getFeaturedItems = (categoryId: string, limit: number = 4) => {
  //   const category = menuData.categories.find(cat => cat.id === categoryId);
  //   if (!category) return [];
  //   return category.items.slice(0, limit);
  // };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleSelectChange = (value: string) => {
    setActiveTab(value);
  };
  const locations = [
    {
      name: "Cơ sở Giảng Võ",
      address: "114A1 Giảng Võ, Ba Đình, Hà Nội",
      phone: "+84 96 933 98 58",
      mapUrl: "https://maps.app.goo.gl/Pdr6eW8qbbj5koKp7",
      image: "/co-so-giang-vo.jpg",
    },
    {
      name: "Cơ sở Tô Ngọc Vân",
      address: "44/52 Tô Ngọc Vân, Tây Hồ, Hà Nội",
      phone: "+84 96 933 98 58",
      mapUrl: "https://maps.app.goo.gl/kDt9yHzK8zDRVTcL8",
      image: "/co-so-to-ngoc-van.jpg",
    },
  ]
  return (
    <div className="flex w-full min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <section id="about" className="py-16 mx-10 md:py-24 bg-white flex justify-center items-center"> 
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Về Bảo Hoa Viên</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Nhà hàng Bảo Hoa Viên tự hào mang đến cho quý khách những món ăn Trung Hoa chính thống với hương vị
                  đặc trưng và nguyên liệu tươi ngon.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  Với đội ngũ đầu bếp giàu kinh nghiệm và không gian sang trọng, chúng tôi cam kết mang đến cho quý
                  khách trải nghiệm ẩm thực tuyệt vời nhất.
                </p>
                <div className="mt-8 grid gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full  bg-red-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#dc141e]" />
                      </div>
                      <div>
                        <h3 className="font-medium ">Giờ mở cửa</h3>
                        <p className="text-sm text-muted-foreground">10:00 - 22:00 hàng ngày</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-[#dc141e] " />
                      </div>
                      <div>
                        <h3 className="font-medium">Địa chỉ</h3>
                        <p className="text-sm text-muted-foreground">114A1 Giảng Võ, Ba Đình, Hà Nội</p>
                        <p className="text-sm text-muted-foreground">46/52 Tô Ngọc Vân, Tây Hồ, Hà Nội</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#de141e]" />
                      </div>
                      <div>
                        <h3 className="font-medium">Liên hệ</h3>
                        <p className="text-sm text-muted-foreground">+84 96 933 98 58</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src="/section-2.jpg" alt="Không gian nhà hàng" fill className="object-cover"/>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-8 md:py-16 bg-slate-50 flex justify-center items-center">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Thực đơn của chúng tôi</h2>
              <p className="mt-3 max-w-3xl text-base text-muted-foreground">
                Khám phá các món ăn đặc sắc của Bảo Hoa Viên
              </p>
            </div>
            <div className="mt-8">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                {/* Mobile Dropdown */}
                <div className="md:hidden w-full mb-4">
                  <Select value={activeTab} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      {menuData.categories.slice(0, 6).map((category) => (
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
                    {menuData.categories.slice(0, 6).map((category) => (
                      <TabsTrigger 
                        key={category.id}
                        value={category.id} 
                        className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent"></div>
                </div>
                
                {menuData.categories.slice(0, 6).map((category) => (
                  <TabsContent 
                    key={category.id}
                    value={category.id} 
                    className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4"
                  >
                    {category.items.slice(0, 4).map((item) => (
                      <FoodCard
                        key={item.id}
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
              <div className="mt-8 text-center">
                <Link href="/menu">
                  <Button className="gap-2 bg-[#dc141e]">
                    Xem tất cả thực đơn
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-white flex justify-center items-center px-4">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Khách hàng nói gì</h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Cảm nhận của thực khách sau khi trải nghiệm dịch vụ của Bảo Hoa Viên
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                href="https://maps.app.goo.gl/GZ17VMXJotbx3BuY8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TestimonialCard
                  name="Nguyễn Hằng"
                  role="Local Guide"
                  content="Giá khá rẻ so với chất lượng , đồ ăn ngon . Nhất là món đậu phụ tứ xuyên , và cơm rang rất nên thử."
                  rating={5}
                  image="/avatar-1.png"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/GTJfRHkBfmJR19YH7"
                target="_blank"
                rel="noopener noreferrer"
                >
                <TestimonialCard
                  name="Perry Nguyen"
                  role="Local Guide"
                  content="An authentic chinese restaurant with reasonable prices and handmade delicacies. The taste of the spicy food are hot but no burn. Absolutely delicious."
                  rating={5}
                  image="/avatar-2.png"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/3W5nhLCyAdpLuCkU8"
                target="_blank"
                rel="noopener noreferrer"
              >
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

        <section id="contact" className="py-16 md:py-24 bg-slate-50 flex justify-center items-center px-4">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Liên hệ với chúng tôi</h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Hãy liên hệ với chúng tôi để đặt bàn, tổ chức tiệc hoặc đặt món mang về.
              </p>
            </div>

            {/* Hai cơ sở nhà hàng */}
            <div className="grid gap-8 md:grid-cols-2 mb-12 md:mx-8">
              {locations.map((location, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                      src={location.image || "/placeholder.svg"}
                      alt={location.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-cover"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{location.name}</h3>
                      <p className="text-sm opacity-90">{location.address}</p>
                    </div>
                  </div>
                  <CardContent className="p-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-[#de141e]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{location.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#dc141e]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">9:00 - 22:00 hàng ngày</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full gap-2">
                        <MapPin className="h-4 w-4 text-[#dc141e]" />
                        Xem trên Google Maps
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
              <div>
                <ContactForm />
                <div className="mt-6 flex items-center gap-4">
                  <Link href="https://www.facebook.com/baohoanviennhahang" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://www.instagram.com/baohoanvien" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div> */}
{/* 
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Hotline</h3>
                      <p className="text-sm text-muted-foreground">+84 96 933 98 58</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Địa chỉ</h3>
                      <p className="text-sm text-muted-foreground">114A1 Giảng Võ, Ba Đình, Hà Nội</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Giờ mở cửa</h3>
                      <p className="text-sm text-muted-foreground">10:00 - 22:00 hàng ngày</p>
                    </div>
                  </CardContent>
                </Card>
              </div> */}
            {/* </div> */}
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
