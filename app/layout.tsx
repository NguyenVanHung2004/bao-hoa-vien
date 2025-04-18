import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { CartProvider } from "@/lib/cart-context";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bảo Hoa Viên - Ẩm thực Trung Hoa",
  description: "Bảo Hoa Viên - Không gian ẩm thực đậm chất truyền thống Việt Nam.",
  other: {
    'google-site-verification': 'P-aKY8rm0gnIFHUsKfOp1nx3F0GyVRyl6xoJUHBsPHc',
  },
  keywords: ["Bảo Hoa Viên","Bảo Hoa Viên - Ẩm thực Trung Hoa", "Nhà hàng Bảo Hoa Viên", "Bao Hoa Vien", "Nha hang Bao Hoa Vien"],
  openGraph: {
    title: "Bảo Hoa Viên",
    description: "Trải nghiệm ẩm thực Việt Nam tinh tế tại Bảo Hoa Viên.",
    url: "https://bao-hoa-vien.vercel.app/",
    siteName: "Bảo Hoa Viên",
    images: [
      {
        url: "https://bao-hoa-vien.vercel.app/og-image.jpg", // bạn nên có 1 ảnh preview
        width: 1200,
        height: 630,
        alt: "Nhà hàng Bảo Hoa Viên",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Toaster 
            position="top-left" 
            closeButton
            toastOptions={{
              duration: 2000
            }} 
          />
        </CartProvider>
      </body>
    </html>
  );
}
