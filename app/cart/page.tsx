"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft, Clock } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart()
  const [note, setNote] = useState("")

  const deliveryFee = 30
  const totalWithDelivery = totalPrice + deliveryFee

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-6 pt-20">
          <div className="text-center space-y-6 max-w-md">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-300" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Giỏ hàng của bạn đang trống</h1>
            <p className="text-gray-500">Hãy thêm món ăn từ thực đơn để tiếp tục đặt hàng</p>
            <Link href="/menu">
              <Button className="gap-2 bg-brand-red hover:bg-brand-dark-red text-white rounded-full px-8 h-12 font-bold shadow-lg hover:shadow-red-200 transition-all">
                Xem thực đơn <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1 py-12 px-4 pt-24">
        <div className="container max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/menu">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 text-gray-500">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Giỏ hàng</h1>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold">{totalItems} món</span>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Danh sách món ăn */}
            <div className="md:col-span-2 space-y-6">
               {/* Cảnh báo giờ mở cửa - Giữ nguyên nội dung cũ */}
              <div className="mb-2 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm md:text-base shadow-sm">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                <div className="space-y-1.5">
                  <p className="font-bold text-gray-900">
                    Giờ mở cửa: 10:00 – 14:00 và 17:00 – 22:00 hằng ngày.
                  </p>
                  <p className="text-gray-600">
                    Nếu bạn đặt ngoài khung giờ trên, chúng tôi sẽ liên hệ lại trong giờ mở cửa gần nhất để xác nhận đơn hàng.
                  </p>
                </div>
              </div>

              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden border border-gray-100 shadow-sm rounded-3xl bg-white hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-5">
                      <div className="w-24 h-24 relative rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-24">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg line-clamp-1 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-brand-red font-bold text-lg">{item.price}</div>
                          
                          <div className="flex items-center gap-3 bg-gray-50 rounded-full p-1 pr-4 border border-gray-100">
                             <div className="flex items-center gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full hover:bg-white text-gray-500"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-6 text-center font-bold text-gray-900 text-sm">{item.quantity}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 rounded-full hover:bg-white text-gray-900"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                             </div>
                             <div className="w-px h-4 bg-gray-200 mx-1"></div>
                             <button
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tổng tiền & Thanh toán */}
            <div className="h-fit">
              <div className="sticky top-24">
                <Card className="border border-gray-100 shadow-lg rounded-3xl bg-white overflow-hidden">
                  <CardContent className="p-6 sm:p-8 space-y-6">
                    <h2 className="text-xl font-bold text-gray-900">Tổng đơn hàng</h2>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between text-gray-500">
                        <span>Tạm tính</span>
                        <span className="font-medium text-gray-900">{totalPrice}k</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Phí giao hàng (dự kiến)</span>
                        <span className="font-medium text-gray-900">{deliveryFee}k</span>
                      </div>
                      <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                        <span className="font-bold text-gray-900 text-base">Tổng cộng</span>
                        <span className="text-2xl font-bold text-brand-red">{totalWithDelivery}k</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Input 
                        placeholder="Ghi chú cho nhà hàng..." 
                        value={note} 
                        onChange={(e) => setNote(e.target.value)} 
                        className="rounded-xl border-gray-200 bg-gray-50 focus-visible:ring-brand-red/20 h-12"
                      />
                    </div>

                    <Link href="/checkout" className="block">
                      <Button className="w-full gap-2 bg-brand-red hover:bg-brand-dark-red text-white rounded-full h-14 text-lg font-bold shadow-lg hover:shadow-red-200 transition-all">
                        Tiến hành đặt hàng <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/menu" className="block">
                      <Button variant="outline" className="w-full rounded-full h-12 font-bold border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-red">
                        Tiếp tục xem thực đơn
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}