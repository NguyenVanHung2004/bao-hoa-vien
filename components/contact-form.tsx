"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
// import toast from "react-hot-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
    //   toast.success("Gửi thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.")
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Họ tên</Label>
          <Input id="name" placeholder="Nguyễn Văn A" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input id="phone" placeholder="0912345678" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="example@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Nội dung</Label>
        <Textarea id="message" placeholder="Nhập nội dung tin nhắn của bạn..." className="min-h-[120px]" required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
      </Button>
    </form>
  )
}
