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
        <section className="py-16 md:py-24 bg-slate-50 flex justify-center items-center">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Thực đơn</h1>
              <p className="max-w-3xl text-lg text-muted-foreground mb-12">
                Khám phá các món ăn đặc sắc của Bảo Hoa Viên
              </p>
            </div>
            
            <Tabs defaultValue="sui-cao" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 lg:max-w-xl lg:mx-auto">
                <TabsTrigger value="sui-cao">Sủi cảo</TabsTrigger>
                <TabsTrigger value="mi">Mì</TabsTrigger>
                <TabsTrigger value="dimsum">Dimsum</TabsTrigger>
                <TabsTrigger value="mon-xao">Món xào</TabsTrigger>
                <TabsTrigger value="com-mi-xao">Cơm</TabsTrigger>
                <TabsTrigger value="rau-nom">Rau-Nộm</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sui-cao" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <FoodCard
                    name="Sủi cảo chiên"
                    description="Fried Dumplings"
                    price="59k"
                    image="/dish-1.jpg"
                    badge="Bán chạy"
                  />
                  <FoodCard name="Sủi cảo hấp" description="Steamed Dumplings" price="49k" image="/dish-2.jpg" />
                  <FoodCard name="Hoành thánh chiên" description="Fried Wontons" price="49k" image="/dish-3.jpg" />
                  <FoodCard name="Sủi cảo nước" description="Boiled Dumplings" price="49k" image="/dish-1.jpg" />
                  <FoodCard name="Sủi cảo tôm" description="Shrimp Dumplings" price="59k" image="/dish-2.jpg" badge="Mới" />
                  <FoodCard name="Hoành thánh hấp" description="Steamed Wontons" price="49k" image="/dish-3.jpg" />
                </div>
              </TabsContent>
              
              <TabsContent value="mi" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <FoodCard
                    name="Mì sủi cảo bò hành"
                    description="Beef Dumpling with Onion Noodle"
                    price="69k"
                    image="/dish-4.jpg"
                  />
                  <FoodCard
                    name="Mì sủi cảo tôm"
                    description="Shrimp Dumpling Noodle"
                    price="69k"
                    image="/dish-5.jpg"
                    badge="Mới"
                  />
                  <FoodCard name="Mì vịt quay" description="Roasted Duck Noodle" price="79k" image="/dish-6.jpg" />
                  <FoodCard name="Mì hoành thánh" description="Wonton Noodle" price="69k" image="/dish-4.jpg" />
                  <FoodCard name="Mì xá xíu" description="Char Siu Noodle" price="69k" image="/dish-5.jpg" />
                  <FoodCard name="Mì gà quay" description="Roasted Chicken Noodle" price="69k" image="/dish-6.jpg" />
                </div>
              </TabsContent>
              
              <TabsContent value="dimsum" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <FoodCard name="Há cảo tôm" description="Shrimp Har Gow" price="49k" image="/dish-1.jpg" badge="Bán chạy" />
                  <FoodCard name="Xíu mại" description="Siu Mai" price="49k" image="/dish-2.jpg" />
                  <FoodCard name="Bánh bao xá xíu" description="Char Siu Bao" price="39k" image="/dish-3.jpg" />
                  <FoodCard name="Bánh cuốn Quảng Đông" description="Chee Cheong Fun" price="49k" image="/dish-4.jpg" />
                  <FoodCard name="Chân gà hấp" description="Steamed Chicken Feet" price="59k" image="/dish-5.jpg" />
                  <FoodCard name="Bánh trôi nước" description="Sweet Rice Ball" price="39k" image="/dish-6.jpg" badge="Mới" />
                </div>
              </TabsContent>
              
              <TabsContent value="mon-xao" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <FoodCard name="Bò xào nấm" description="Stir-fried Beef with Mushrooms" price="99k" image="/dish-1.jpg" />
                  <FoodCard name="Gà xào sả ớt" description="Stir-fried Chicken with Lemongrass" price="89k" image="/dish-2.jpg" />
                  <FoodCard name="Tôm xào rau củ" description="Stir-fried Shrimp with Vegetables" price="109k" image="/dish-3.jpg" badge="Bán chạy" />
                  <FoodCard name="Thịt heo xào chua ngọt" description="Sweet and Sour Pork" price="89k" image="/dish-4.jpg" />
                  <FoodCard name="Vịt xào gừng hành" description="Duck with Ginger and Scallion" price="99k" image="/dish-5.jpg" />
                  <FoodCard name="Mực xào cay" description="Spicy Stir-fried Squid" price="109k" image="/dish-6.jpg" badge="Mới" />
                </div>
              </TabsContent>
              
              <TabsContent value="com-mi-xao" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <FoodCard name="Cơm chiên Dương Châu" description="Yangzhou Fried Rice" price="59k" image="/dish-1.jpg" badge="Bán chạy" />
                  <FoodCard name="Cơm chiên hải sản" description="Seafood Fried Rice" price="69k" image="/dish-2.jpg" />
                  <FoodCard name="Mì xào hải sản" description="Seafood Fried Noodles" price="69k" image="/dish-3.jpg" />
                  <FoodCard name="Mì xào bò" description="Beef Fried Noodles" price="69k" image="/dish-4.jpg" />
                  <FoodCard name="Cơm chiên tỏi" description="Garlic Fried Rice" price="49k" image="/dish-5.jpg" />
                  <FoodCard name="Cơm chiên đặc biệt" description="Special Fried Rice" price="79k" image="/dish-6.jpg" badge="Mới" />
                </div>
              </TabsContent>
              
              <TabsContent value="rau-nom" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <FoodCard name="Rau xào thập cẩm" description="Stir-fried Mixed Vegetables" price="49k" image="/dish-1.jpg" />
                  <FoodCard name="Cải làn xào tỏi" description="Stir-fried Pak Choi with Garlic" price="49k" image="/dish-2.jpg" />
                  <FoodCard name="Nộm gà xé phay" description="Shredded Chicken Salad" price="69k" image="/dish-3.jpg" badge="Bán chạy" />
                  <FoodCard name="Nộm hoa chuối" description="Banana Flower Salad" price="59k" image="/dish-4.jpg" />
                  <FoodCard name="Rau muống xào tỏi" description="Stir-fried Morning Glory" price="49k" image="/dish-5.jpg" />
                  <FoodCard name="Nộm đu đủ tôm khô" description="Papaya Salad with Dried Shrimp" price="59k" image="/dish-6.jpg" badge="Mới" />
                </div>
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