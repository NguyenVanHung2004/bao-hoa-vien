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
    'google-site-verification': 'zCLIJaB2mZKU71RmNIleCBuYdh_IFczETY3XCAODv-s',
  },
  keywords: ["Bảo Hoa Viên","Bảo Hoa Viên - Ẩm thực Trung Hoa", "Nhà hàng Bảo Hoa Viên", "Bao Hoa Vien", "Nha hang Bao Hoa Vien"],
  icons: {
    icon: '/favicon.png', // ← icon của bạn ở đây
  },
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://baohoavien.io.vn",
                name: "Bảo Hoa Viên",
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
