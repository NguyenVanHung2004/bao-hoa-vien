"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const [note, setNote] = useState("")

  const formattedTotalPrice = `${totalPrice}k`
  const deliveryFee = 15
  const totalWithDelivery = totalPrice + deliveryFee

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="text-center space-y-6 max-w-md">
            <div className="flex justify-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Giỏ hàng của bạn đang trống</h1>
            <p className="text-muted-foreground">Hãy thêm món ăn từ thực đơn để tiếp tục đặt hàng</p>
            <Link href="/menu">
              <Button className="gap-2 bg-[#dc141e]">
                Xem thực đơn
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>
        <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
          </p>
        </footer>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <Navbar />
      <main className="flex-1 md:py-12 py-6 px-4">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Giỏ hàng</h1>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
                          <div>
                            <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                            <div className="text-primary font-medium mt-1">{item.price}k</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-xl font-bold">Tổng đơn hàng</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tổng số món:</span>
                      <span>{totalItems}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tạm tính:</span>
                      <span>{formattedTotalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phí giao hàng:</span>
                      <span>{deliveryFee}k</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Tổng cộng:</span>
                    <span className="text-primary">{totalWithDelivery}k</span>
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Ghi chú đơn hàng" value={note} onChange={(e) => setNote(e.target.value)} />
                  </div>
                  <Link href="/checkout" className="block">
                    <Button className="w-full gap-2 bg-[#dc141e] hover:bg-[#dc141e]/90">
                      Tiến hành đặt hàng
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/menu" className="block">
                    <Button variant="outline" className="w-full">
                      Tiếp tục xem thực đơn
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
