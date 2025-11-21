"use client"

import Link from "next/link"
import { CheckCircle2, ArrowRight, Home, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="border-none shadow-xl rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center text-center">
              {/* Icon thành công */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                   <CheckCircle2 className="h-12 w-12" />
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">Đặt hàng thành công!</h1>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 text-base leading-relaxed">
                  Cảm ơn bạn đã ủng hộ <span className="font-bold text-brand-red">Bảo Hoa Viên</span>.
                </p>
                
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 space-y-3">
                  <p className="text-gray-800 font-medium leading-snug">
                    "Đơn hàng của bạn đã được ghi nhận. Bạn chỉ cần chờ, nhân viên sẽ liên hệ lại ngay để gửi hóa đơn và xác nhận đơn hàng."
                  </p>
                  
                  {/* Dòng thông báo thêm theo yêu cầu */}
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Nếu sau 20 phút mà chưa thấy nhân viên liên hệ, vui lòng gọi ngay:
                    </p>
                    <a href="tel:0969339858" className="text-brand-red font-bold text-lg block mt-1 hover:underline">
                      0969339858
                    </a>
                     <a href="tel:0969339858" className="text-brand-red font-bold text-lg block mt-1 hover:underline">
                      0961438338
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="w-full space-y-3">
                <Link href="/" className="w-full block">
                  <Button className="w-full gap-2 bg-brand-red hover:bg-brand-dark-red text-white rounded-full h-12 font-bold shadow-md transition-all">
                    <Home className="h-4 w-4" />
                    Về trang chủ
                  </Button>
                </Link>
                
                <Link href="/menu" className="w-full block">
                  <Button variant="outline" className="w-full gap-2 rounded-full h-12 font-bold border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-brand-red hover:border-brand-red/30">
                    Đặt thêm món khác <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}