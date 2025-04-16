"use client";

import Link from "next/link";
import { CheckCircle, Home, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'Đang xử lý';
  
  return (
    <div className="max-w-md w-full text-center space-y-8">
      <div className="flex justify-center">
        <CheckCircle className="h-24 w-24 text-primary" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Đặt hàng thành công!</h1>
      <div className="bg-muted/30 rounded-lg p-4">
        <p className="text-sm font-medium text-muted-foreground">Mã đơn hàng của bạn</p>
        <p className="text-xl font-bold text-primary mt-1">{orderId}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Vui lòng lưu lại mã đơn hàng để tra cứu và đối chiếu khi nhận hàng
        </p>
      </div>
      <p className="text-muted-foreground">
        Cảm ơn bạn đã đặt hàng tại Bảo Hoa Viên. Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận đơn hàng.
      </p>
      <div className="pt-4 space-y-3">
        <Link href="/">
          <Button className="w-full gap-2">
            <Home className="h-4 w-4" />
            Về trang chủ
          </Button>
        </Link>
        <Link href="/menu">
          <Button variant="outline" className="w-full gap-2">
            <List className="h-4 w-4" />
            Xem thêm thực đơn
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6">
        <Suspense fallback={
          <div className="max-w-md w-full text-center space-y-8">
            <div className="flex justify-center">
              <CheckCircle className="h-24 w-24 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Đặt hàng thành công!</h1>
            <div className="animate-pulse bg-muted/30 rounded-lg p-4">
              <p className="text-sm font-medium text-muted-foreground">Đang tải thông tin đơn hàng...</p>
            </div>
          </div>
        }>
          <OrderSuccessContent />
        </Suspense>
      </main>
      <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
        </p>
      </footer>
    </div>
  );
} 