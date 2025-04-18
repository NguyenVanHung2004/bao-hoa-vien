import { NextResponse } from "next/server";

type OrderData = {
  customerInfo: {
    name: string;
    phone: string;
    email?: string;
    address: string;
    note?: string;
  };
  items: {
    id: string;
    name: string;
    price: string;
    quantity: number;
  }[];
  totalPrice: number;
};

export async function POST(request: Request) {
  try {
    const data: OrderData = await request.json();
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    if (!botToken || !chatId) {
      return NextResponse.json(
        { success: false, message: "Missing bot configuration" },
        { status: 500 }
      );
    }

    const orderId = `BHV${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 1000)}`;
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

    const { customerInfo, items, totalPrice } = data;
    
    let message = `🚨 *ĐƠN HÀNG MỚI* 🚨\n\n`;
    message += `*Mã đơn:* ${orderId}\n`;
    message += `*Thời gian:* ${formattedTime} - ${formattedDate}\n\n`;
    message += `*Thông tin khách hàng:*\n`;
    message += `- Họ tên: ${customerInfo.name}\n`;
    message += `- SĐT: ${customerInfo.phone}\n`;
    message += `- Địa chỉ: ${customerInfo.address}\n`;
    
    if (customerInfo.email) {
      message += `- Email: ${customerInfo.email}\n`;
    }
    
    if (customerInfo.note) {
      message += `- Ghi chú: ${customerInfo.note}\n`;
    }
    
    message += `\n*Chi tiết đơn hàng:*\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity}x${item.price} \n`;
    });
    
    message += `\n*Tổng tiền:* ${totalPrice}k + 30k phí ship = ${totalPrice + 30}k`;
    
    // Tạo inline button "Đánh dấu Hoàn Thành"
    const inlineKeyboard = {
      inline_keyboard: [
        [
          {
            text: "Đánh dấu hoàn thành",
            callback_data: `complete_${orderId}`, // Data callback cho tin nhắn này
          },
        ],
      ],
    };

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramMessageData = {
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
      reply_markup: JSON.stringify(inlineKeyboard),
    };
    
    const telegramResponse = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(telegramMessageData),
    });

    const telegramResult = await telegramResponse.json();
    
    if (!telegramResult.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to send Telegram message" },
        { status: 500 }
      );
    }

    // Lưu lại ID tin nhắn đã gửi để sử dụng cho việc cập nhật sau
    const messageId = telegramResult.result.message_id;

    return NextResponse.json({ success: true, orderId: orderId, messageId: messageId });

  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
