import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FoodCard } from "@/components/food-card"

export const metadata = {
  title: "Thực đơn - Bảo Hoa Viên",
  description: "Khám phá các món ăn đặc sắc của nhà hàng Bảo Hoa Viên",
}

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-8 md:py-16 bg-slate-50 flex justify-center items-center">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4">Thực đơn</h1>
              <p className="max-w-3xl text-base text-muted-foreground mb-8">
                Khám phá các món ăn đặc sắc của Bảo Hoa Viên
              </p>
            </div>
            
            <Tabs defaultValue="sui-cao" className="w-full">
              <div className="relative mb-4 w-full">
                <TabsList className="flex w-full overflow-x-auto scrollbar-hide p-1">
                  <TabsTrigger
                    value="sui-cao"
                    className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    Sủi cảo
                  </TabsTrigger>
                  <TabsTrigger
                    value="mi"
                    className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    Mì
                  </TabsTrigger>
                  <TabsTrigger
                    value="dimsum"
                    className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    Dimsum
                  </TabsTrigger>
                  <TabsTrigger
                    value="mon-xao"
                    className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    Món xào
                  </TabsTrigger>
                  <TabsTrigger
                    value="com"
                    className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    Cơm
                  </TabsTrigger>
                  <TabsTrigger
                    value="do-uong"
                    className="min-w-[120px] rounded-full data-[state=active]:bg-red-600 data-[state=active]:text-white"
                  >
                    Đồ uống
                  </TabsTrigger>
                </TabsList>
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent md:hidden"></div>
              </div>
              
              <TabsContent
                value="sui-cao"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
              >
                <FoodCard
                  name="Sủi cảo heo cải thảo, bắp"
                  description="Pork Dumpling with Napa Cabbage"
                  price="39k"
                  image="/dish-1.jpg"
                />
                <FoodCard
                  name="Sủi cảo heo hẹ"
                  description="Pork Dumpling with Chives"
                  price="39k" 
                  image="/dish-2.jpg"
                />
                <FoodCard
                  name="Sủi cảo tôm"
                  description="Shrimp Dumpling"
                  price="49k"
                  image="/dish-3.jpg"
                  badge="Bán chạy"
                />
                <FoodCard
                  name="Sủi cảo bò hành"
                  description="Beef Dumpling with Onion"
                  price="49k"
                  image="/dish-4.jpg"
                />
              </TabsContent>
              
              <TabsContent
                value="mi"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
              >
                <FoodCard
                  name="Mì sủi cảo heo cải thảo, bắp"
                  description="Pork Dumpling with Napa Cabbage Noodle"
                  price="39k"
                  image="/dish-9.jpg"
                />
                <FoodCard
                  name="Mì sủi cảo heo hẹ"
                  description="Pork Dumpling with Chives Noodle"
                  price="39k"
                  image="/dish-10.jpg"
                />
                <FoodCard
                  name="Mì sủi cảo tôm"
                  description="Shrimp Dumpling Noodle"
                  price="49k"
                  image="/dish-11.jpg"
                  badge="Bán chạy"
                />
                <FoodCard
                  name="Mì sủi cảo bò hành"
                  description="Beef Dumpling with Onion Noodle"
                  price="49k"
                  image="/dish-12.jpg"
                />
                <FoodCard
                  name="Mì hoành thánh"
                  description="Wonton Noodle"
                  price="49k"
                  image="/dish-13.jpg"
                />
                <FoodCard
                  name="Mì xá xíu"
                  description="Chinese BBQ Pork Noodle"
                  price="49k"
                  image="/dish-14.jpg"
                />
                <FoodCard
                  name="Mì tôm tươi"
                  description="Shrimp Noodle"
                  price="59k"
                  image="/dish-15.jpg"
                />
                <FoodCard
                  name="Mì bò cay tê"
                  description="Spicy Beef Noodle"
                  price="59k"
                  image="/dish-16.jpg"
                  badge="Cay"
                />
                <FoodCard
                  name="Mì đặc biệt"
                  description="Special Noodle"
                  price="59k"
                  image="/dish-17.jpg"
                />
              </TabsContent>
              
              <TabsContent
                value="dimsum"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
              >
                <FoodCard
                  name="Há cảo tôm"
                  description="Shrimp dumpling"
                  price="55k"
                  image="/dish-18.jpg"
                  badge="Bán chạy"
                />
                <FoodCard
                  name="Há cảo sò điệp"
                  description="Scallop dumpling"
                  price="59k"
                  image="/dish-19.jpg"
                />
                <FoodCard
                  name="Chân gà hấp tàu xì"
                  description="Chicken feet dimsum"
                  price="59k"
                  image="/dish-20.jpg"
                />
                <FoodCard
                  name="Hoành thánh chiên"
                  description="Fried Wontons"
                  price="49k"
                  image="/dish-21.jpg"
                />
                <FoodCard
                  name="Tàu hủ ky cuốn tôm chiên"
                  description="Fried tofu skin roll with shrimp"
                  price="49k"
                  image="/dish-22.jpg"
                />
                <FoodCard
                  name="Xíu mại"
                  description="Siu Mai"
                  price="49k"
                  image="/dish-23.jpg"
                />
              </TabsContent>
              
              <TabsContent
                value="mon-xao"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
              >
                <FoodCard
                  name="Đậu phụ tứ xuyên"
                  description="Mapo Tofu"
                  price="59k"
                  image="/dish-26.jpg"
                />
                <FoodCard
                  name="Gà cung bảo"
                  description="Kung Pao Chicken"
                  price="89k"
                  image="/dish-27.jpg"
                  badge="Cay"
                />
                <FoodCard
                  name="Gà cay trùng khánh"
                  description="Chongqing Spicy Chicken"
                  price="89k"
                  image="/dish-28.jpg"
                  badge="Cay"
                />
                <FoodCard
                  name="Thịt lợn xào chua ngọt"
                  description="Sweet & Sour Pork"
                  price="89k"
                  image="/dish-29.jpg"
                />
              </TabsContent>
              
              <TabsContent
                value="com"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
              >
                <FoodCard
                  name="Cơm trắng"
                  description="Rice"
                  price="25k"
                  image="/dish-39.jpg"
                />
                <FoodCard
                  name="Cơm chiên Dương Châu"
                  description="Yangzhou Fried Rice"
                  price="59k"
                  image="/dish-40.jpg"
                  badge="Bán chạy"
                />
                <FoodCard
                  name="Cơm chiên xá xíu"
                  description="Chinese BBQ Pork Fried Rice"
                  price="59k"
                  image="/dish-41.jpg"
                />
                <FoodCard
                  name="Mì xào bò"
                  description="Stir-fried Noodle with Beef"
                  price="69k"
                  image="/dish-42.jpg"
                />
                <FoodCard
                  name="Mì xào hải sản"
                  description="Stir-fried Noodle with Seafood"
                  price="79k"
                  image="/dish-43.jpg"
                  badge="Đặc biệt"
                />
              </TabsContent>
              
              <TabsContent
                value="do-uong"
                className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4"
              >
                <FoodCard
                  name="Trà đào"
                  description="Peach Tea"
                  price="39k"
                  image="/dish-7.jpg"
                />
                <FoodCard
                  name="Trà sữa"
                  description="Milk Tea"
                  price="35k"
                  image="/dish-8.jpg"
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="py-6 md:py-0 md:px-8 md:h-24 border-t flex items-center justify-center">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bảo Hoa Viên. All rights reserved.
        </p>
      </footer>
    </div>
  )
} 