"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowLeft, MapPin, Phone, User, Mail, CreditCard, CheckCircle2, ShoppingBag, Loader2 } from "lucide-react"
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
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Thêm state này để chặn redirect về cart khi đặt hàng thành công
  const [isSuccess, setIsSuccess] = useState(false) 

  const deliveryFee = 30
  const totalWithDelivery = totalPrice + deliveryFee

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  })

  // Redirect nếu giỏ hàng trống, NHƯNG bỏ qua nếu đã đặt hàng thành công (isSuccess = true)
  useEffect(() => {
    if (items.length === 0 && !isSuccess) {
      router.push("/cart")
    }
  }, [items.length, router, isSuccess])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // LOGIC GỌI API CỦA BẠN
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Vui lòng điền đầy đủ thông tin cần thiết")
      return
    }

    setIsSubmitting(true)

    try {
      const orderData = {
        customerInfo: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          address: formData.address,
          note: formData.note || undefined,
        },
        items: items.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        totalPrice: totalPrice,
      }

      // Gửi đơn hàng đến Telegram bot thông qua API
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || "Có lỗi xảy ra khi gửi đơn hàng")
      }

      toast.success(`Đặt hàng thành công! Mã đơn: ${result.orderId}`, {
        className: "bg-white border-l-4 border-brand-red text-gray-900"
      })
      
      // Đánh dấu là thành công TRƯỚC KHI xóa giỏ hàng
      setIsSuccess(true)
      clearCart()
      
      // Chuyển hướng sang trang success
      router.push(`/order-success?orderId=${result.orderId}`)
      
    } catch (error) {
      console.error("Error submitting order:", error)
      toast.error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Nếu không có items và chưa success thì return null (tránh flash content trước khi redirect)
  if (items.length === 0 && !isSuccess) return null

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 py-12 px-4 pt-24">
        <div className="container max-w-5xl mx-auto">
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

          <form onSubmit={handleSubmit} className="grid gap-12 md:grid-cols-12">
            
            {/* Cột trái: Thông tin giao hàng */}
            <div className="md:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                        <User className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Thông tin giao hàng</h2>
                </div>

                <div className="grid gap-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold pl-1">Họ và tên <span className="text-brand-red">*</span></Label>
                    <Input 
                      id="name" name="name" required 
                      placeholder="Ví dụ: Nguyễn Văn A" 
                      className="h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20 focus-visible:border-brand-red"
                      value={formData.name} onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold pl-1">Số điện thoại <span className="text-brand-red">*</span></Label>
                        <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input 
                            id="phone" name="phone" required type="tel" 
                            placeholder="09xx xxx xxx" 
                            className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20 focus-visible:border-brand-red"
                            value={formData.phone} onChange={handleInputChange}
                            disabled={isSubmitting}
                        />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-700 font-semibold pl-1">Email (Tùy chọn)</Label>
                        <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input 
                            id="email" name="email" type="email"
                            placeholder="email@example.com" 
                            className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20 focus-visible:border-brand-red"
                            value={formData.email} onChange={handleInputChange}
                            disabled={isSubmitting}
                        />
                        </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address" className="text-gray-700 font-semibold pl-1">Địa chỉ nhận hàng <span className="text-brand-red">*</span></Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <Input 
                        id="address" name="address" required 
                        placeholder="Số nhà, ngõ, tên đường, phường/xã..." 
                        className="pl-10 h-12 rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20 focus-visible:border-brand-red"
                        value={formData.address} onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="note" className="text-gray-700 font-semibold pl-1">Ghi chú (Tùy chọn)</Label>
                    <Textarea 
                      id="note" name="note" 
                      placeholder="Ví dụ: Không cay, nhiều ớt, gọi trước khi giao..." 
                      className="min-h-[100px] rounded-xl bg-gray-50 border-gray-200 focus-visible:ring-brand-red/20 focus-visible:border-brand-red resize-none p-3"
                      value={formData.note} onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                        <CreditCard className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Thanh toán</h2>
                </div>
                
                <RadioGroup defaultValue="cod" className="grid gap-4">
                  <div className="relative">
                    <RadioGroupItem value="cod" id="cod" className="peer sr-only" />
                    <Label
                      htmlFor="cod"
                      className="flex items-center gap-4 rounded-2xl border-2 border-gray-100 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-brand-red peer-data-[state=checked]:bg-red-50/30 cursor-pointer transition-all shadow-sm"
                    >
                      <div className="h-12 w-12 rounded-full bg-white border border-gray-100 flex items-center justify-center p-2">
                        <Image src="/logo.png" alt="COD" width={32} height={32} className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-gray-900 block text-base">Chuyển khoản ngân hàng</span>
                        <span className="text-sm text-gray-500">Chúng tôi sẽ sớm gửi thông tin thanh toán cho bạn</span>
                      </div>
                      <CheckCircle2 className="h-6 w-6 text-brand-red opacity-0 peer-data-[state=checked]:opacity-100 transition-all scale-90 peer-data-[state=checked]:scale-100" />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Cột phải: Tóm tắt đơn hàng (Sticky) */}
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <Card className="border border-gray-200 shadow-xl rounded-3xl bg-white overflow-hidden">
                  <CardHeader className="border-b border-gray-100 pb-5 bg-gray-50/50">
                    <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                      <ShoppingBag className="h-5 w-5 text-brand-red mb-0.5" />
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
                      <div className="flex justify-between text-gray-600">
                        <span>Tạm tính</span>
                        <span className="font-bold text-gray-900">{totalPrice}k</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Phí giao hàng</span>
                        <span className="font-bold text-gray-900">{deliveryFee}k</span>
                      </div>
                      <div className="flex justify-between items-center pt-4 mt-2 border-t border-dashed border-gray-200">
                        <span className="font-bold text-lg text-gray-900">Tổng thanh toán</span>
                        <span className="font-bold text-2xl text-brand-red">{totalWithDelivery}k</span>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-brand-red hover:bg-brand-dark-red text-white rounded-full h-14 text-lg font-bold shadow-lg hover:shadow-red-200 transition-all mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Đang xử lý...
                        </>
                      ) : (
                        "Đặt hàng ngay"
                      )}
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