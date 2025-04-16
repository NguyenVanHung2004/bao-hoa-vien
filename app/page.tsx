import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { HeroSection } from "@/components/hero-section"
import { FoodCard } from "@/components/food-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <section id="about" className="py-16 mx-10 md:py-24 bg-white flex justify-center items-center"> 
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <Badge className="mb-4">Về chúng tôi</Badge>
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
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Giờ mở cửa</h3>
                        <p className="text-sm text-muted-foreground">10:00 - 22:00 hàng ngày</p>
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
                        <Phone className="h-5 w-5 text-primary" />
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
                <Image src="/section-2.jpg" alt="Không gian nhà hàng" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 md:py-24 bg-slate-50 flex justify-center items-center">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Thực đơn của chúng tôi</h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Khám phá các món ăn đặc sắc của Bảo Hoa Viên
              </p>
            </div>
            <div className="mt-12">
              <Tabs defaultValue="sui-cao" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 lg:max-w-xl lg:mx-auto">
                  <TabsTrigger value="sui-cao">Sủi cảo</TabsTrigger>
                  <TabsTrigger value="mi">Mì</TabsTrigger>
                  <TabsTrigger value="dimsum">Dimsum</TabsTrigger>
                  <TabsTrigger value="mon-xao">Món xào</TabsTrigger>
                  <TabsTrigger value="com-mi-xao">Cơm</TabsTrigger>
                  <TabsTrigger value="rau-nom">Rau-Nộm</TabsTrigger>
                </TabsList>
                <TabsContent value="sui-cao" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <FoodCard
                      name="Sủi cảo chiên"
                      description="Fried Dumplings"
                      price="59k"
                      image="/dish-1.jpg"
                      badge="Bán chạy"
                    />
                    <FoodCard name="Sủi cảo hấp" description="Steamed Dumplings" price="49k" image="/dish-2.jpg" />
                    <FoodCard name="Sủi cảo hấp" description="Steamed Dumplings" price="49k" image="/dish-2.jpg" />
                    <FoodCard name="Hoành thánh chiên" description="Fried Wontons" price="49k" image="/dish-3.jpg" />
                  </div>
                </TabsContent>
                <TabsContent value="mi" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <FoodCard
                      name="Mì sủi cảo bò hành"
                      description="Beef Dumpling with Onion Noodle"
                      price="69k"
                      image="/dish-4.jpg"
                    />
                    <FoodCard
                      name="Mì sủi cảo tôm"
                      description="Shrimp Dumpling Noodle"
                      price="69k"
                      image="/dish-5.jpg"
                      badge="Mới"
                    />
                    <FoodCard name="Mì dac biet" description="Roasted Duck Noodle" price="79k" image="/dish-6.jpg" />
                  </div>
                </TabsContent>
                <TabsContent value="com-mi-xao" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <FoodCard
                      name="Cơm gà hấp tảo xì"
                      description="Chicken rice steamed"
                      price="59k"
                      image="/dish-7.jpg"
                    />
                    <FoodCard
                      name="Cơm xá xíu"
                      description="Char Siu Rice"
                      price="65k"
                      image="/dish-8.jpg"
                      badge="Đặc biệt"
                    />
                    <FoodCard
                      name="Cơm chiên Dương Châu"
                      description="Yangzhou Fried Rice"
                      price="55k"
                      image="/dish-9.jpg"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="dimsum" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <FoodCard
                      name="Chả giò Quảng Đông"
                      description="Cantonese Spring Rolls"
                      price="45k"
                      image="/dish-10.jpg"
                    />
                    <FoodCard
                      name="Há cảo tôm"
                      description="Shrimp Dumplings"
                      price="55k"
                      image="/dish-11.jpg"
                      badge="Bán chạy"
                    />
                    <FoodCard name="Bánh bao xá xíu" description="Char Siu Bao" price="35k" image="/dish-12.jpg" />
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-12 text-center">
                <Link href="/menu">
                  <Button className="gap-2">
                    Xem tất cả thực đơn
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-white flex justify-center items-center">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Khách hàng nói gì</h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Cảm nhận của thực khách sau khi trải nghiệm dịch vụ của Bảo Hoa Viên
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Nguyễn Văn A"
                role="Khách hàng thường xuyên"
                content="Sủi cảo tại đây thật sự rất ngon, nhân nhiều và thơm. Không gian nhà hàng rộng rãi, thoáng mát."
                rating={5}
                image="/avatar-1.jpg"
              />
              <TestimonialCard
                name="Trần Thị B"
                role="Foodie"
                content="Đồ ăn ngon, giá cả hợp lý. Nhân viên phục vụ nhiệt tình, chu đáo. Chắc chắn sẽ quay lại!"
                rating={4}
                image="/avatar-2.jpg"
              />
              <TestimonialCard
                name="Lê Văn C"
                role="Doanh nhân"
                content="Đồ ăn Trung Hoa chính thống, không bị Việt hóa. Hương vị đúng điệu, sẽ giới thiệu cho bạn bè."
                rating={5}
                image="/avatar-3.jpg"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-slate-50 flex justify-center items-center">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Liên hệ với chúng tôi</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Hãy liên hệ với chúng tôi để đặt bàn, tổ chức tiệc hoặc đặt món mang về.
                </p>
                <div className="mt-8 grid gap-4">
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
                </div>
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
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
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
