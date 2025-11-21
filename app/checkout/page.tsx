"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, MapPin, Phone, User, CheckCircle2, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deliveryFee = 30
  const totalWithDelivery = totalPrice + deliveryFee

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    setLoading(false)
    clearCart()
    router.push("/order-success")
    
    const isMobile = window.innerWidth < 640
    toast.success("Đặt hàng thành công!", {
        position: isMobile ? "bottom-center" : "bottom-right",
        className: "bg-white border-l-4 border-brand-red text-gray-900"
    })
  }

  if (items.length === 0) return null 

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 pt-24">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="gap-2 pl-0 hover:bg-transparent text-gray-500 hover:text-brand-red transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                   <ArrowLeft className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">Quay lại giỏ hàng</span>
              </Button>
            </Link>
          </div>

          <form onSubmit={handlePlaceOrder} className="grid gap-10 md:grid-cols-12">
            
            {/* Cột trái: Thông tin giao hàng */}
            <div className="md:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Thông tin giao hàng</h2>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Họ và tên</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        id="name" name="name" required 
                        placeholder="Ví dụ: Nguyễn Văn A" 
                        className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20"
                        value={formData.name} onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Số điện thoại</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        id="phone" name="phone" required type="tel" 
                        placeholder="Ví dụ: 0912 345 678" 
                        className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20"
                        value={formData.phone} onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address" className="text-gray-700 font-semibold">Địa chỉ nhận hàng</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input 
                        id="address" name="address" required 
                        placeholder="Số nhà, ngõ, tên đường..." 
                        className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20"
                        value={formData.address} onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="note" className="text-gray-700 font-semibold">Ghi chú (Tùy chọn)</Label>
                    <Textarea 
                      id="note" name="note" 
                      placeholder="Ví dụ: Không cay, nhiều ớt, gọi trước khi giao..." 
                      className="min-h-[100px] rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20 resize-none"
                      value={formData.note} onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Phương thức thanh toán</h2>
                <RadioGroup defaultValue="cod" className="grid gap-4">
                  <div className="relative">
                    <RadioGroupItem value="cod" id="cod" className="peer sr-only" />
                    <Label
                      htmlFor="cod"
                      className="flex items-center gap-4 rounded-2xl border-2 border-gray-100 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-brand-red peer-data-[state=checked]:bg-red-50/50 cursor-pointer transition-all"
                    >
                      <div className="h-10 w-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                        <Image src="/logo.png" alt="COD" width={24} height={24} className="opacity-80" />
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-gray-900 block">Chuyển khoản ngân hàng</span>
                        <span className="text-sm text-gray-500">Chúng tôi sẽ sớm liên hệ để gửi mã QR cho bạn.</span>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-brand-red opacity-0 peer-data-[state=checked]:opacity-100 transition-opacity" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Cột phải: Tóm tắt đơn hàng - ĐÃ SỬA THÀNH NỀN TRẮNG */}
            <div className="md:col-span-5">
              <div className="sticky top-24">
                {/* Card nền trắng, viền xám, shadow đẹp */}
                <Card className="border border-gray-100 shadow-xl rounded-3xl bg-white overflow-hidden">
                  <CardHeader className="border-b border-gray-50 pb-6 bg-gray-50/50">
                    <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                      <ShoppingBag className="h-5 w-5 text-brand-red" />
                      Đơn hàng của bạn
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-4 group">
                          <div className="h-14 w-14 relative rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0 py-0.5">
                            <div className="flex justify-between items-start gap-2">
                                <p className="font-bold text-sm text-gray-900 line-clamp-2 leading-tight group-hover:text-brand-red transition-colors">{item.name}</p>
                                <p className="text-sm font-bold text-brand-red shrink-0">{item.price}k</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 font-medium bg-gray-100 inline-block px-2 py-0.5 rounded-full">x{item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-gray-100" />

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-gray-500">
                        <span>Tạm tính</span>
                        <span className="font-medium text-gray-900">{totalPrice}k</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Phí giao hàng</span>
                        <span className="font-medium text-gray-900">{deliveryFee}k</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 mt-2 border-t border-dashed border-gray-200">
                        <span className="font-bold text-lg text-gray-900">Tổng thanh toán</span>
                        <span className="font-bold text-2xl text-brand-red">{totalWithDelivery}k</span>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-red hover:bg-brand-dark-red text-white rounded-full h-14 text-lg font-bold shadow-lg hover:shadow-red-200 transition-all mt-2"
                      disabled={loading}
                    >
                      {loading ? "Đang xử lý..." : "Đặt hàng ngay"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}