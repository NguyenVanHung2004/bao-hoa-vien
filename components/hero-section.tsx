"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/hero-section.png')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-4 px-4 py-1 border border-white/30 text-white text-sm uppercase tracking-[0.3em] backdrop-blur-sm rounded-full">
            EST. 2024
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Bảo Hoa Viên
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Hương vị <span className="font-semibold border-b-2 border-brand-red pb-1">Trung Hoa</span> đích thực.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/menu">
              {/* Nút BO TRÒN */}
              <Button size="lg" className="bg-brand-red hover:bg-white hover:text-brand-red text-white border-2 border-brand-red px-10 h-14 text-lg rounded-full transition-all duration-300 font-bold uppercase tracking-wide">
                Xem thực đơn
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}