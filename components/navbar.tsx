"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useRouter } from "next/navigation"

export function Navbar() {
  const { totalItems } = useCart()
  const hasMounted = useHasMounted()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  if (!hasMounted) return null // or show skeleton/loading state

  const handleLogoClick = () => {
    router.push("/")
    setIsOpen(false) // Đóng navbar mobile
  }

  const handleMenuClick = () => {
    router.push("/menu")
    setIsOpen(false) // Đóng navbar mobile
  }

  return (
    <header className="sticky top-0 flex justify-center items-center z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={40} height={40} className="rounded-full" />
            <span>Bảo Hoa Viên</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Trang chủ
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary">
            Giới thiệu
          </Link>
          <Link href="/menu" className="text-sm font-medium hover:text-primary">
            Thực đơn
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium hover:text-primary">
            Đánh giá
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary">
            Liên hệ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-[#dc141e]" />
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 px-2 py-1 h-6 min-w-6 flex items-center justify-center rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="outline" size="sm" className="hidden md:flex text-[#dc141e]">
              Thực đơn
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[300px]">
              <div className="flex flex-col h-full">
                {/* Header */}
                <SheetHeader className="p-4 border-b flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
                    <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={36} height={36} className="rounded-full" />
                    <SheetTitle className="font-bold text-lg text-primary m-0">Bảo Hoa Viên</SheetTitle>
                  </div>
                  {/* Không thêm nút đóng tùy chỉnh ở đây, để sử dụng nút đóng mặc định của SheetHeader */}
                </SheetHeader>

                {/* Navigation */}
                <nav className="flex-1 overflow-auto py-6 px-4">
                  <div className="space-y-4">
                    <div
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        router.push("/")
                        setIsOpen(false)
                      }}
                    >
                      Trang chủ
                    </div>
                    <div
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        router.push("/#about")
                        setIsOpen(false)
                      }}
                    >
                      Giới thiệu
                    </div>
                    <div
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        router.push("/menu")
                        setIsOpen(false)
                      }}
                    >
                      Thực đơn
                    </div>
                    <div
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        router.push("/#testimonials")
                        setIsOpen(false)
                      }}
                    >
                      Đánh giá
                    </div>
                    <div
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        router.push("/#contact")
                        setIsOpen(false)
                      }}
                    >
                      Liên hệ
                    </div>
                    <div
                      className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors cursor-pointer"
                      onClick={() => {
                        router.push("/cart")
                        setIsOpen(false)
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>Giỏ hàng</span>
                        {totalItems > 0 && <Badge className="ml-auto">{totalItems}</Badge>}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">+84 96 933 98 58</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">Cơ sở Giảng Võ</p>
                        <p className="text-muted-foreground">114A1 Giảng Võ, Ba Đình</p>
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t">
                  <div className="grid gap-2">
                    <Button className="w-full bg-[#dc141e] text-white hover:bg-primary/90" onClick={handleMenuClick}>
                      Xem menu
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
