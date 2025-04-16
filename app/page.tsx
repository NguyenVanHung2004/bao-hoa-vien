import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Clock, Instagram, Facebook, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { HeroSection } from "@/components/hero-section"
import { FoodCard } from "@/components/food-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col  ">
      <header className="sticky top-0 flex justify-center items-center z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={40} height={40} className="rounded-full"/>
            <span>Bảo Hoa Viên</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Trang chủ
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Giới thiệu
            </Link>
            <Link href="#menu" className="text-sm font-medium hover:text-primary">
              Thực đơn
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Đánh giá
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Liên hệ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Đặt bàn
            </Button>
            <Button size="sm" className="hidden md:flex">
              Gọi ngay
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 py-6">
                  <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                    <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={30} height={30} className="rounded-full" />
                    <span>Bảo Hoa Viên</span>
                  </Link>
                  <Separator />
                  <div className="grid gap-4">
                    <Link href="#" className="text-sm font-medium hover:text-primary">
                      Trang chủ
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-primary">
                      Giới thiệu
                    </Link>
                    <Link href="#menu" className="text-sm font-medium hover:text-primary">
                      Thực đơn
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                      Đánh giá
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary">
                      Liên hệ
                    </Link>
                  </div>
                  <Separator />
                  <div className="grid gap-2">
                    <Button variant="outline" className="w-full">
                      Đặt bàn
                    </Button>
                    <Button className="w-full">Gọi ngay</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
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
              <Tabs defaultValue="dumplings" className="w-full">
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
            </div>
            <div className="mt-12 flex justify-center">
              <Button className="gap-2">
                Xem toàn bộ thực đơn
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 flex justify-center items-center ">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <Badge className="mb-4">Đánh giá</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Khách hàng nói gì về chúng tôi
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Những đánh giá từ khách hàng đã trải nghiệm ẩm thực tại Bảo Hoa Viên
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Nguyễn Văn A"
                role="Khách hàng thường xuyên"
                content="Món ăn ở đây rất ngon và đúng vị Trung Hoa. Tôi đặc biệt thích món sủi cảo chiên, vỏ giòn mà nhân thì mọng nước."
                rating={5}
                image="/avatar-1.jpg"
              />
              <TestimonialCard
                name="Trần Thị B"
                role="Foodie"
                content="Không gian nhà hàng rất đẹp và sang trọng. Nhân viên phục vụ nhiệt tình, chu đáo. Các món ăn được trình bày đẹp mắt và hương vị tuyệt vời."
                rating={4}
                image="/avatar-2.jpg"
              />
              <TestimonialCard
                name="Lê Văn C"
                role="Doanh nhân"
                content="Tôi thường xuyên đưa đối tác đến đây để gặp gỡ và thảo luận công việc. Không gian yên tĩnh, món ăn ngon và dịch vụ chuyên nghiệp."
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
                <Badge className="mb-4">Liên hệ</Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Liên hệ với chúng tôi</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Đặt bàn, đặt món hoặc gửi thắc mắc của bạn cho chúng tôi
                </p>
                <ContactForm />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2311880889824!2d105.82288491493247!3d21.02288998599832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zMTE0QTEgR2nhuqNuZyBWw7UsIELDoCDEkMOsbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1650123456789!5m2!1svi!2s"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={40} height={40} className="rounded-full" />
                <span>Bảo Hoa Viên</span>
              </div>
              <p className="mt-4 text-slate-300">Nhà hàng ẩm thực Trung Hoa chính thống tại Hà Nội</p>
              <div className="mt-6 flex gap-4">
                <a href="#" className="text-white hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Liên hệ</h3>
              <div className="mt-4 space-y-3 text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>114A1 Giảng Võ, Ba Đình, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+84 96 933 98 58</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>10:00 - 22:00 hàng ngày</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold">Dịch vụ</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>
                  <a href="#" className="hover:text-primary">
                    Đặt bàn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Đặt món mang về
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Giao hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Tổ chức tiệc
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Bảo Hoa Viên. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
