interface DishDetails {
  description: string
  metaDescription: string
  ingredients: string[]
  nutritionFacts?: {
    Calories: string
    Protein: string
    Carbs: string
    Fat: string
  }
  prepTime: number
  servingSize: number
  rating: number
  reviewCount: number
  tags: string[]
}

const dishDetailsMap: Record<string, DishDetails> = {
  // Sủi cảo
  "sui-cao-heo-cai-thao": {
    description: `<p>Sủi cảo heo cải thảo, bắp là một món ăn truyền thống của ẩm thực Trung Hoa, được yêu thích tại nhà hàng Bảo Hoa Viên. Món ăn này kết hợp giữa thịt heo thơm ngon và cải thảo giòn ngọt, tạo nên hương vị đặc trưng khó quên.</p>
    <p>Sủi cảo được hấp chín đến độ hoàn hảo, giúp giữ nguyên hương vị tự nhiên của nguyên liệu. Lớp vỏ mỏng, dai và trong mờ bọc lấy phần nhân thịt heo và rau cải thảo thơm ngon, tạo nên một món ăn vừa đẹp mắt vừa hấp dẫn.</p>
    <p>Tại Bảo Hoa Viên, chúng tôi chỉ sử dụng những nguyên liệu tươi ngon nhất để chế biến món sủi cảo heo cải thảo, bắp, đảm bảo mang đến cho quý khách trải nghiệm ẩm thực đích thực của Trung Hoa.</p>`,
    metaDescription:
      "Sủi cảo heo cải thảo, bắp - Món ăn truyền thống Trung Hoa với nhân thịt heo và cải thảo thơm ngon, được hấp chín đến độ hoàn hảo tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Thịt heo xay",
      "Cải thảo",
      "Bắp ngọt",
      "Hành lá",
      "Gừng",
      "Dầu mè",
      "Nước tương",
      "Bột mì",
      "Muối",
      "Tiêu",
    ],
    nutritionFacts: {
      Calories: "220 kcal",
      Protein: "12g",
      Carbs: "28g",
      Fat: "8g",
    },
    prepTime: 20,
    servingSize: 2,
    rating: 4.7,
    reviewCount: 128,
    tags: ["Hấp", "Truyền thống"],
  },
  "sui-cao-heo-he": {
    description: `<p>Sủi cảo heo hẹ là một món ăn đặc trưng trong ẩm thực Trung Hoa, được yêu thích bởi hương vị đậm đà và thơm nồng đặc trưng. Tại Bảo Hoa Viên, món sủi cảo heo hẹ được chế biến theo công thức truyền thống, giữ nguyên hương vị đích thực.</p>
    <p>Phần nhân sủi cảo được làm từ thịt heo xay nhuyễn kết hợp với hẹ tươi băm nhỏ, tạo nên hương vị đặc trưng không thể nhầm lẫn. Hẹ không chỉ mang lại mùi thơm đặc biệt mà còn bổ sung thêm nhiều dưỡng chất có lợi cho sức khỏe.</p>
    <p>Sủi cảo được hấp chín đến độ hoàn hảo, lớp vỏ mỏng, dai và trong mờ bọc lấy phần nhân thịt heo và hẹ thơm ngon. Khi thưởng thức, bạn sẽ cảm nhận được vị ngọt tự nhiên của thịt heo hòa quyện với hương thơm nồng của hẹ, tạo nên trải nghiệm ẩm thực tuyệt vời.</p>`,
    metaDescription:
      "Sủi cảo heo hẹ - Món ăn truyền thống Trung Hoa với nhân thịt heo và hẹ thơm nồng, được hấp chín đến độ hoàn hảo tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Thịt heo xay",
      "Hẹ tươi",
      "Hành khô",
      "Gừng",
      "Dầu mè",
      "Nước tương",
      "Bột mì",
      "Muối",
      "Tiêu",
      "Rượu Thiệu Hưng",
    ],
    nutritionFacts: {
      Calories: "230 kcal",
      Protein: "13g",
      Carbs: "27g",
      Fat: "9g",
    },
    prepTime: 20,
    servingSize: 2,
    rating: 4.6,
    reviewCount: 112,
    tags: ["Hấp", "Truyền thống"],
  },
  "sui-cao-tom": {
    description: `<p>Sủi cảo tôm là một trong những món dimsum cao cấp và được yêu thích nhất tại nhà hàng Bảo Hoa Viên. Món ăn này nổi bật với phần nhân tôm tươi ngon, giòn ngọt, mang đến trải nghiệm ẩm thực tinh tế cho thực khách.</p>
    <p>Phần nhân sủi cảo được làm từ tôm tươi nguyên con, được xay nhuyễn vừa phải để giữ được độ giòn tự nhiên. Kết hợp với các gia vị đặc trưng của ẩm thực Trung Hoa, phần nhân tôm mang hương vị đậm đà, ngọt tự nhiên và vô cùng hấp dẫn.</p>
    <p>Sủi cảo tôm được hấp chín đến độ hoàn hảo, lớp vỏ mỏng, dai và trong mờ bọc lấy phần nhân tôm thơm ngon. Khi thưởng thức, bạn sẽ cảm nhận được vị ngọt tự nhiên của tôm tươi, tạo nên trải nghiệm ẩm thực đẳng cấp.</p>
    <p>Đây là một trong những món ăn bán chạy nhất tại Bảo Hoa Viên, được nhiều thực khách yêu thích và đánh giá cao về chất lượng cũng như hương vị.</p>`,
    metaDescription:
      "Sủi cảo tôm - Món dimsum cao cấp với nhân tôm tươi nguyên con, giòn ngọt, được hấp chín đến độ hoàn hảo tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Tôm tươi",
      "Mỡ lưng heo",
      "Hành lá",
      "Gừng",
      "Dầu mè",
      "Nước tương",
      "Bột mì",
      "Muối",
      "Tiêu",
      "Rượu Thiệu Hưng",
    ],
    nutritionFacts: {
      Calories: "210 kcal",
      Protein: "14g",
      Carbs: "26g",
      Fat: "7g",
    },
    prepTime: 25,
    servingSize: 2,
    rating: 4.9,
    reviewCount: 256,
    tags: ["Hấp", "Cao cấp", "Bán chạy"],
  },
  "sui-cao-bo-hanh": {
    description: `<p>Sủi cảo bò hành là một món ăn đặc biệt trong ẩm thực Trung Hoa, kết hợp giữa thịt bò thơm ngon và hành tây ngọt dịu. Tại Bảo Hoa Viên, món sủi cảo bò hành được chế biến theo công thức đặc biệt, mang đến hương vị độc đáo và khó quên.</p>
    <p>Phần nhân sủi cảo được làm từ thịt bò tươi ngon xay nhuyễn, kết hợp với hành tây băm nhỏ, tạo nên hương vị đậm đà và thơm ngon. Thịt bò giàu đạm, kết hợp với hành tây chứa nhiều vitamin và khoáng chất, tạo nên món ăn vừa ngon vừa bổ dưỡng.</p>
    <p>Sủi cảo được hấp chín đến độ hoàn hảo, lớp vỏ mỏng, dai và trong mờ bọc lấy phần nhân thịt bò và hành thơm ngon. Khi thưởng thức, bạn sẽ cảm nhận được vị ngọt tự nhiên của thịt bò hòa quyện với vị ngọt dịu của hành tây, tạo nên trải nghiệm ẩm thực tuyệt vời.</p>`,
    metaDescription:
      "Sủi cảo bò hành - Món ăn đặc biệt với nhân thịt bò tươi ngon và hành tây ngọt dịu, được hấp chín đến độ hoàn hảo tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Thịt bò xay",
      "Hành tây",
      "Hành lá",
      "Gừng",
      "Dầu mè",
      "Nước tương",
      "Bột mì",
      "Muối",
      "Tiêu",
      "Rượu Thiệu Hưng",
    ],
    nutritionFacts: {
      Calories: "240 kcal",
      Protein: "15g",
      Carbs: "26g",
      Fat: "10g",
    },
    prepTime: 25,
    servingSize: 2,
    rating: 4.8,
    reviewCount: 142,
    tags: ["Hấp", "Đặc biệt"],
  },
  "sui-cao-heo-cai-thao-chien": {
    description: `<p>Sủi cảo heo cải thảo chiên là phiên bản chiên giòn của món sủi cảo heo cải thảo truyền thống. Tại Bảo Hoa Viên, món ăn này được chế biến với kỹ thuật chiên đặc biệt, tạo nên lớp vỏ giòn tan bên ngoài và phần nhân mềm, thơm ngon bên trong.</p>
    <p>Phần nhân sủi cảo được làm từ thịt heo xay nhuyễn kết hợp với cải thảo giòn ngọt, tạo nên hương vị đặc trưng và hấp dẫn. Sau khi được gói trong lớp vỏ mỏng, sủi cảo được chiên trên chảo với nhiệt độ cao đến khi có màu vàng đẹp mắt và giòn tan.</p>
    <p>Khi thưởng thức, bạn sẽ cảm nhận được sự tương phản tuyệt vời giữa lớp vỏ giòn tan bên ngoài và phần nhân mềm, thơm ngon bên trong. Vị ngọt tự nhiên của thịt heo hòa quyện với vị ngọt dịu của cải thảo, tạo nên trải nghiệm ẩm thực độc đáo và khó quên.</p>`,
    metaDescription:
      "Sủi cảo heo cải thảo chiên - Phiên bản chiên giòn của món sủi cảo truyền thống với nhân thịt heo và cải thảo, tạo nên lớp vỏ giòn tan bên ngoài và phần nhân mềm thơm ngon bên trong.",
    ingredients: [
      "Thịt heo xay",
      "Cải thảo",
      "Bắp ngọt",
      "Hành lá",
      "Gừng",
      "Dầu mè",
      "Nước tương",
      "Bột mì",
      "Muối",
      "Tiêu",
      "Dầu ăn",
    ],
    nutritionFacts: {
      Calories: "280 kcal",
      Protein: "12g",
      Carbs: "28g",
      Fat: "15g",
    },
    prepTime: 30,
    servingSize: 2,
    rating: 4.7,
    reviewCount: 118,
    tags: ["Chiên", "Giòn"],
  },
  // Thêm chi tiết cho các món khác tương tự
  "mi-sui-cao-bo-hanh": {
    description: `<p>Mì sủi cảo bò hành là sự kết hợp hoàn hảo giữa mì truyền thống và sủi cảo bò hành thơm ngon. Tại Bảo Hoa Viên, món ăn này được chế biến công phu với nước dùng đậm đà, sợi mì dai ngon và sủi cảo bò hành đặc biệt.</p>
    <p>Nước dùng được ninh từ xương heo và các loại gia vị đặc trưng trong nhiều giờ, tạo nên vị ngọt tự nhiên và thơm ngon. Sợi mì được làm thủ công theo công thức truyền thống, có độ dai vừa phải và hút vị nước dùng.</p>
    <p>Điểm nhấn của món ăn là những viên sủi cảo bò hành thơm ngon, với phần nhân được làm từ thịt bò tươi ngon xay nhuyễn kết hợp với hành tây băm nhỏ. Khi thưởng thức, bạn sẽ cảm nhận được sự hòa quyện tuyệt vời giữa nước dùng đậm đà, sợi mì dai ngon và sủi cảo bò hành thơm ngon.</p>`,
    metaDescription:
      "Mì sủi cảo bò hành - Sự kết hợp hoàn hảo giữa mì truyền thống và sủi cảo bò hành thơm ngon, với nước dùng đậm đà và sợi mì dai ngon tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Mì trứng",
      "Thịt bò xay",
      "Hành tây",
      "Hành lá",
      "Gừng",
      "Xương heo",
      "Dầu mè",
      "Nước tương",
      "Bột mì",
      "Muối",
      "Tiêu",
      "Rau cải",
    ],
    nutritionFacts: {
      Calories: "450 kcal",
      Protein: "22g",
      Carbs: "65g",
      Fat: "12g",
    },
    prepTime: 35,
    servingSize: 1,
    rating: 4.8,
    reviewCount: 156,
    tags: ["Mì", "Nước dùng", "Đặc biệt"],
  },
  "ha-cao-tom": {
    description: `<p>Há cảo tôm là một trong những món dimsum nổi tiếng và được yêu thích nhất trong ẩm thực Quảng Đông. Tại Bảo Hoa Viên, há cảo tôm được chế biến theo công thức truyền thống, giữ nguyên hương vị đích thực của món ăn này.</p>
    <p>Phần nhân há cảo được làm từ tôm tươi nguyên con, được xay nhuyễn vừa phải để giữ được độ giòn tự nhiên. Kết hợp với mỡ lưng heo, nấm hương và các gia vị đặc trưng, phần nhân tôm mang hương vị đậm đà, ngọt tự nhiên và vô cùng hấp dẫn.</p>
    <p>Lớp vỏ há cảo được làm từ bột gạo, có độ trong mờ đặc trưng và mỏng đến mức có thể nhìn thấy phần nhân tôm bên trong. Sau khi được hấp chín, lớp vỏ có độ dai vừa phải, kết hợp hoàn hảo với phần nhân tôm giòn ngọt.</p>
    <p>Há cảo tôm thường được thưởng thức cùng với nước chấm đặc biệt, làm từ giấm đen, nước tương và ớt tươi, tạo nên hương vị chua ngọt cay nhẹ, làm tăng thêm độ ngon của món ăn.</p>`,
    metaDescription:
      "Há cảo tôm - Món dimsum nổi tiếng với nhân tôm tươi nguyên con, vỏ bánh trong mờ đặc trưng, được hấp chín đến độ hoàn hảo tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Tôm tươi",
      "Mỡ lưng heo",
      "Nấm hương",
      "Hành lá",
      "Gừng",
      "Dầu mè",
      "Bột gạo",
      "Tinh bột ngô",
      "Muối",
      "Tiêu",
      "Rượu Thiệu Hưng",
    ],
    nutritionFacts: {
      Calories: "220 kcal",
      Protein: "15g",
      Carbs: "25g",
      Fat: "8g",
    },
    prepTime: 30,
    servingSize: 2,
    rating: 4.9,
    reviewCount: 278,
    tags: ["Dimsum", "Cao cấp", "Bán chạy"],
  },
  "ga-cung-bao": {
    description: `<p>Gà Cung Bảo (Kung Pao Chicken) là một món ăn nổi tiếng trong ẩm thực Tứ Xuyên, Trung Quốc. Tại Bảo Hoa Viên, món ăn này được chế biến theo công thức truyền thống, mang đến hương vị đích thực của ẩm thực Tứ Xuyên.</p>
    <p>Món ăn gồm những miếng thịt gà được thái vuông vừa ăn, xào cùng với ớt khô, đậu phộng và các loại gia vị đặc trưng. Điểm đặc biệt của món ăn là sự kết hợp hài hòa giữa vị cay nồng của ớt, vị thơm béo của đậu phộng và vị ngọt đậm đà của thịt gà.</p>
    <p>Gà Cung Bảo tại Bảo Hoa Viên được chế biến với mức độ cay vừa phải, phù hợp với khẩu vị của người Việt Nam, nhưng vẫn giữ được hương vị đặc trưng của món ăn. Thịt gà được tẩm ướp kỹ lưỡng trước khi xào, giúp thịt mềm, ngọt và thấm vị.</p>
    <p>Món ăn thường được thưởng thức cùng với cơm trắng, tạo nên bữa ăn đầy đủ dinh dưỡng và ngon miệng.</p>`,
    metaDescription:
      "Gà Cung Bảo - Món ăn nổi tiếng của ẩm thực Tứ Xuyên với thịt gà xào cùng ớt khô, đậu phộng và các loại gia vị đặc trưng, mang đến hương vị cay nồng đặc trưng tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Th���t gà",
      "Ớt khô",
      "Đậu phộng",
      "Hành tây",
      "Hành lá",
      "Gừng",
      "Tỏi",
      "Dầu ớt",
      "Nước tương",
      "Đường",
      "Dầu mè",
      "Tiêu Tứ Xuyên",
    ],
    nutritionFacts: {
      Calories: "380 kcal",
      Protein: "28g",
      Carbs: "18g",
      Fat: "22g",
    },
    prepTime: 25,
    servingSize: 2,
    rating: 4.8,
    reviewCount: 215,
    tags: ["Món xào", "Cay", "Đặc trưng"],
  },
  "dau-phu-tu-xuyen": {
    description: `<p>Đậu phụ Tứ Xuyên (Mapo Tofu) là một món ăn truyền thống nổi tiếng của ẩm thực Tứ Xuyên, Trung Quốc. Tại Bảo Hoa Viên, món ăn này được chế biến theo công thức chuẩn, mang đến hương vị đích thực của ẩm thực Tứ Xuyên.</p>
    <p>Món ăn gồm đậu phụ mềm được nấu trong nước sốt cay đặc trưng, kết hợp với thịt băm nhỏ và các loại gia vị đặc biệt. Điểm nổi bật của món ăn là sự kết hợp giữa vị cay nồng của ớt, vị tê của tiêu Tứ Xuyên và vị mềm mịn của đậu phụ.</p>
    <p>Đậu phụ Tứ Xuyên tại Bảo Hoa Viên được chế biến với mức độ cay vừa phải, phù hợp với khẩu vị của người Việt Nam, nhưng vẫn giữ được hương vị đặc trưng của món ăn. Đậu phụ được chọn lựa kỹ càng, đảm bảo độ mềm mịn và thấm vị.</p>
    <p>Món ăn thường được thưởng thức cùng với cơm trắng, tạo nên bữa ăn đầy đủ dinh dưỡng và ngon miệng.</p>`,
    metaDescription:
      "Đậu phụ Tứ Xuyên - Món ăn truyền thống nổi tiếng của ẩm thực Tứ Xuyên với đậu phụ mềm nấu trong nước sốt cay đặc trưng, mang đến hương vị cay nồng tê đặc trưng tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Đậu phụ mềm",
      "Thịt heo băm",
      "Ớt băm",
      "Tỏi băm",
      "Gừng băm",
      "Hành lá",
      "Đậu đỏ lên men",
      "Tiêu Tứ Xuyên",
      "Dầu ớt",
      "Nước tương",
      "Đường",
      "Bột năng",
    ],
    nutritionFacts: {
      Calories: "320 kcal",
      Protein: "18g",
      Carbs: "12g",
      Fat: "24g",
    },
    prepTime: 20,
    servingSize: 2,
    rating: 4.7,
    reviewCount: 186,
    tags: ["Món xào", "Cay", "Đặc trưng"],
  },
  "com-chien-duong-chau": {
    description: `<p>Cơm chiên Dương Châu là một món ăn nổi tiếng trong ẩm thực Trung Hoa, đặc biệt là vùng Dương Châu. Tại Bảo Hoa Viên, món ăn này được chế biến theo công thức truyền thống, mang đến hương vị đích thực của ẩm thực Trung Hoa.</p>
    <p>Món ăn gồm cơm được chiên cùng với nhiều loại nguyên liệu như thịt xá xíu, tôm, trứng, đậu Hà Lan và các loại rau củ khác. Điểm đặc biệt của món ăn là sự kết hợp hài hòa giữa các nguyên liệu, tạo nên hương vị phong phú và đầy đủ dinh dưỡng.</p>
    <p>Cơm chiên Dương Châu tại Bảo Hoa Viên được chế biến với kỹ thuật chiên đặc biệt, giúp từng hạt cơm tơi xốp và thấm đều gia vị. Các nguyên liệu được chọn lựa kỹ càng, đảm bảo độ tươi ngon và chất lượng.</p>
    <p>Món ăn có thể thưởng thức một mình hoặc kết hợp với các món ăn khác, tạo nên bữa ăn đầy đủ dinh dưỡng và ngon miệng.</p>`,
    metaDescription:
      "Cơm chiên Dương Châu - Món ăn nổi tiếng trong ẩm thực Trung Hoa với cơm được chiên cùng thịt xá xíu, tôm, trứng và nhiều loại rau củ, mang đến hương vị phong phú tại nhà hàng Bảo Hoa Viên.",
    ingredients: [
      "Gạo tám thơm",
      "Thịt xá xíu",
      "Tôm tươi",
      "Trứng gà",
      "Đậu Hà Lan",
      "Cà rốt",
      "Hành lá",
      "Hành tím",
      "Dầu mè",
      "Nước tương",
      "Muối",
      "Tiêu",
    ],
    nutritionFacts: {
      Calories: "420 kcal",
      Protein: "18g",
      Carbs: "65g",
      Fat: "12g",
    },
    prepTime: 20,
    servingSize: 2,
    rating: 4.8,
    reviewCount: 230,
    tags: ["Cơm", "Truyền thống", "Đặc trưng"],
  },
}

// Hàm lấy thông tin chi tiết của món ăn
export function getDishDetails(dishId: string): DishDetails {
  // Nếu có thông tin chi tiết, trả về thông tin đó
  if (dishDetailsMap[dishId]) {
    return dishDetailsMap[dishId]
  }

  // Nếu không có thông tin chi tiết, trả về thông tin mặc định
  return {
    description: `<p>Món ăn đặc trưng của nhà hàng Bảo Hoa Viên, được chế biến từ những nguyên liệu tươi ngon nhất, theo công thức truyền thống của ẩm thực Trung Hoa.</p>
    <p>Hãy đến Bảo Hoa Viên để thưởng thức món ăn này và khám phá hương vị đích thực của ẩm thực Trung Hoa.</p>`,
    metaDescription:
      "Món ăn đặc trưng tại nhà hàng Bảo Hoa Viên, được chế biến từ nguyên liệu tươi ngon theo công thức truyền thống của ẩm thực Trung Hoa.",
    ingredients: ["Nguyên liệu tươi ngon", "Gia vị đặc trưng", "Công thức truyền thống"],
    prepTime: 20,
    servingSize: 2,
    rating: 4.5,
    reviewCount: 100,
    tags: ["Đặc trưng"],
  }
}
