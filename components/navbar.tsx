"use client";

import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 flex justify-center items-center z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-primary">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={40} height={40} className="rounded-full"/>
              <span>Bảo Hoa Viên</span>
            </div>
          </Link>
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
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 px-2 py-1 h-6 min-w-6 flex items-center justify-center rounded-full"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
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
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Image src="/logo.png" alt="Bảo Hoa Viên Logo" width={30} height={30} className="rounded-full" />
                  <span>Bảo Hoa Viên</span>
                </Link>
                <Separator />
                <div className="grid gap-4">
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
                  <Link href="/cart" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                    Giỏ hàng
                    {totalItems > 0 && (
                      <Badge>{totalItems}</Badge>
                    )}
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
  );
} 