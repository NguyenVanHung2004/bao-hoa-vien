"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"
import { useHasMounted } from "@/hooks/useHasMounted"
import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { totalItems } = useCart()
  const hasMounted = useHasMounted()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!hasMounted) return null

  const handleLogoClick = () => { router.push("/"); setIsOpen(false) }
  const isHomePage = pathname === "/"

  // Thay text-black bằng text-gray-800
  const textColorClass = (isScrolled || !isHomePage) ? "text-gray-800 hover:text-brand-red" : "text-white hover:text-brand-red"
  const logoBorderClass = (isScrolled || !isHomePage) ? "border-brand-red" : "border-white"

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        (isScrolled || !isHomePage) ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-6"
      )}
    >
      <div className="container flex h-14 items-center justify-between px-4 py">
        <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
          <div className={cn("relative overflow-hidden rounded-full border-2 transition-all", logoBorderClass, (isScrolled || !isHomePage) ? "h-10 w-10" : "h-12 w-12")}>
            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          {/* Thay text-black bằng text-gray-900 */}
          <span className={cn("font-bold text-xl tracking-tight transition-colors", (isScrolled || !isHomePage) ? "text-gray-900" : "text-white")}>
            Bảo Hoa Viên
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          {[
            { name: "Trang chủ", href: "/" },
            { name: "Giới thiệu", href: "/#about" },
            { name: "Thực đơn", href: "/menu" },
            { name: "Liên hệ", href: "/#contact" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-sm font-bold uppercase tracking-wider transition-colors", textColorClass)}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className={cn("relative hover:bg-transparent", textColorClass)}>
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 px-1.5 h-5 min-w-5 flex items-center justify-center rounded-full bg-brand-red text-white border border-white">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Link href="/menu" className="hidden md:block">
            {/* Hover:bg-brand-dark-red thay vì hover:bg-black */}
            <Button className="bg-brand-red text-white hover:bg-brand-dark-red border-none rounded-full font-bold px-6 transition-colors shadow-md">
              Đặt món
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("md:hidden", textColorClass)}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[300px] bg-white border-l border-gray-100">
               {/* ... Sheet Content giữ nguyên, đảm bảo text-black chuyển thành text-gray-900 ... */}
               <SheetHeader className="p-6 border-b flex flex-row items-center justify-between">
                  <div className="flex items-center gap-3" onClick={handleLogoClick}>
                    <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
                    <SheetTitle className="font-bold text-lg text-gray-900">Bảo Hoa Viên</SheetTitle>
                  </div>
                </SheetHeader>
                <nav className="flex-1 p-6 space-y-4">
                   {[
                      { name: "Trang chủ", href: "/" },
                      { name: "Giới thiệu", href: "/#about" },
                      { name: "Thực đơn", href: "/menu" },
                      { name: "Liên hệ", href: "/#contact" },
                    ].map((item) => (
                      <div key={item.href} onClick={() => { router.push(item.href); setIsOpen(false); }} className="block py-2 text-lg font-medium text-gray-800 hover:text-brand-red cursor-pointer border-b border-gray-50">
                        {item.name}
                      </div>
                    ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}