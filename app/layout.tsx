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
    'google-site-verification': 'AJu9TYwlcXluKqVVophUYIqqiV0YnVqxEnPY06Hgghk',
  },
  keywords: [
    "Bảo Hoa Viên", 
    "Bảo Hoa Viên Ẩm thực Trung Hoa", 
    "Nhà hàng Bảo Hoa Viên", 
    "Bao Hoa Vien", 
    "Nhà hàng Bao Hoa Vien", 
    "Bảo Hoa Viên Restaurant",
    "Ẩm thực Trung Hoa Bảo Hoa Viên"
  ],
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
    {
      url: "/favicon64x64.png",
      rel: "icon",
      type: "image/png",
      sizes: "64x64",
    }
  ],
  openGraph: {
    title: "Bảo Hoa Viên",
    description: "Trải nghiệm ẩm thực Việt Nam tinh tế tại Bảo Hoa Viên.",
    url: "https://baohoavien.io.vn",
    siteName: "Bảo Hoa Viên",
    images: [
      {
        url: "https://baohoavien.io.vn/logo.png", // bạn nên có 1 ảnh preview
        width: 1200,
        height: 630,
        alt: "Bảo Hoa Viên",
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
    <html lang="vi">
       <head>
        <link rel="icon" href="/favicon64x64.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://baohoavien.io.vn",
                name: "Bảo Hoa Viên",
                "image": "https://baohoavien.io.vn/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Hà Nội",
                  "addressCountry": "VN"
                },
                "sameAs": [
                  "https://www.facebook.com/bao.hoa.vien.2.0.2.4", 
                  "https://www.google.com/maps/place/B%E1%BA%A3o+Hoa+Vi%C3%AAn-+%E1%BA%A8m+th%E1%BB%B1c+Trung+Hoa/@21.027626,105.821622,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab668af85e05:0x4d9c7a92812b387f!8m2!3d21.027621!4d105.8242023!16s%2Fg%2F11w4gs5128?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                ]
              }),
            }}
          />
      </head>
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
