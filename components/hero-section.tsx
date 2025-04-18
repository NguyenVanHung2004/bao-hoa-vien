"use client"

// import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { format } from "date-fns"
// import { vi } from "date-fns/locale"
// import { CalendarIcon } from "lucide-react"

export function HeroSection() {
  // const [date, setDate] = useState<Date>()

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/section-2.jpg')" }}>
        <div className=" relative z-20 flex h-full w-full flex-col items-center justify-center text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-[#dc141e]/80 text-white hover:bg-[#dc141e]/70">Chào mừng đến với</Badge>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Bảo Hoa Viên
          </motion.h1>
          {/* <motion.p
            className="mt-4 max-w-3xl text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Đồ ăn Trung Hoa
          </motion.p> */}
          <motion.div
            className="pt-12 flex flex-wrap justify-center gap-4 relative z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Sử dụng thẻ a thuần túy với href để đảm bảo hoạt động trên mọi thiết bị */}
            <a
              href="/menu"
              className="inline-block pointer-events-auto relative z-50"
              onClick={(e) => {
                // Fallback nếu href không hoạt động
                e.preventDefault()
                window.location.href = "/menu"
              }}
            >
              <Button size="lg" className="bg-[#dc141e] hover:bg-[#dc141e]/90 text-white pointer-events-auto cursor-pointer">
                Xem thực đơn
              </Button>
            </a>

            {/* <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 relative z-50 pointer-events-auto"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP", { locale: vi }) : "Đặt bàn ngay"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white" align="center">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover> */}
          </motion.div>
        </div>
      </div>

      {/* Đảm bảo SVG wave không chặn các nút */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
