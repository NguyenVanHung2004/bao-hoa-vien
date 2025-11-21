"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white py-8 text-center border-t border-gray-100">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo nhỏ hơn (w-12 thay vì w-16) */}
        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 shadow-sm border border-gray-100">
           <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        </div>
        
        <h3 className="text-brand-red font-bold text-lg mb-1 tracking-tight">Bảo Hoa Viên</h3>
        <p className="text-gray-500 text-xs mb-5 max-w-md font-medium">
          Tinh hoa ẩm thực Trung Hoa.
        </p>
        
        {/* Links gọn gàng hơn */}
        <div className="flex gap-6 mb-5">
          <Link href="/" className="text-gray-500 hover:text-brand-red text-xs font-bold uppercase tracking-wider transition-colors">
            Trang chủ
          </Link>
          <Link href="/menu" className="text-gray-500 hover:text-brand-red text-xs font-bold uppercase tracking-wider transition-colors">
            Thực đơn
          </Link>
          <Link href="/#contact" className="text-gray-500 hover:text-brand-red text-xs font-bold uppercase tracking-wider transition-colors">
            Liên hệ
          </Link>
        </div>

        <div className="w-full h-px bg-gray-100 max-w-[150px] mx-auto mb-4"></div>
        
        <p className="text-[10px] text-gray-400 font-medium">
          © {new Date().getFullYear()} Bảo Hoa Viên.
        </p>
      </div>
    </footer>
  )
}