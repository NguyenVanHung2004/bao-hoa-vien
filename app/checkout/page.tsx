"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowLeft, MapPin, Truck } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  useEffect(() => {
    if (items.length === 0) {
      router.push("/cart");
    }
  }, [items.length, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Vui lòng điền đầy đủ thông tin cần thiết");
      return;
    }

    setIsSubmitting(true);

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
      };

      // Gửi đơn hàng đến Telegram bot thông qua API
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Có lỗi xảy ra khi gửi đơn hàng");
      }

      toast.success(`Đặt hàng thành công! Mã đơn hàng của bạn là: ${result.orderId}`);
      clearCart();
      router.push(`/order-success?orderId=${result.orderId}`);
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return null;
  }

  const formattedTotalPrice = `${totalPrice}k`;
  const totalWithShipping = parseInt(formattedTotalPrice) + 30;

  return (
    <div className="flex min-h-screen flex-col px-4">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Thanh toán</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Thông tin giao hàng
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên <span className="text-destructive">*</span></Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nguyễn Văn A"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại <span className="text-destructive">*</span></Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0912345678"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Địa chỉ <span className="text-destructive">*</span></Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="note">Ghi chú</Label>
                      <Textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Thêm ghi chú về đơn hàng của bạn"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-primary" />
                      Phương thức vận chuyển
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 border rounded-md">
                      <div>
                        <h3 className="font-medium">Giao hàng tiêu chuẩn</h3>
                        <p className="text-sm text-muted-foreground">Nhận hàng trong 30-60 phút</p>
                      </div>
                      <div className="font-semibold">30k</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Đơn hàng của bạn</CardTitle>
                    <CardDescription>{totalItems} món</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium text-sm">{item.name}</h3>
                              <span className="text-sm">x{item.quantity}</span>
                            </div>
                            <div className="text-sm text-primary">{item.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tạm tính:</span>
                        <span>{formattedTotalPrice}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Phí giao hàng:</span>
                        <span>30k</span>
                      </div>
                    </div>

                    <div className="flex justify-between font-bold">
                      <span>Tổng cộng:</span>
                      <span className="text-primary">{totalWithShipping}k</span>
                    </div>

                    <Button type="submit" className="w-full gap-2 bg-[#dc141e] hover:bg-[#dc141e]/70" disabled={isSubmitting}>
                      {isSubmitting ? "Đang xử lý..." : "Đặt hàng ngay"}
                      {!isSubmitting && <Check className="h-4 w-4" />}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
      <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
        </p>
      </footer>
    </div>
  );
} 