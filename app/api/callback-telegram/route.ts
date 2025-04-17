import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { callback_query } = body;

    if (!callback_query || !callback_query.data) {
      return NextResponse.json({ success: false, message: "Invalid callback" }, { status: 400 });
    }

    const { message, data } = callback_query;
    const orderId = data.split('_')[1]; // lấy orderId từ callback data

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { success: false, message: "Missing bot configuration" },
        { status: 500 }
      );
    }

    const updatedMessage = {
      chat_id: chatId,
      message_id: message.message_id, // ID của tin nhắn cần chỉnh sửa
      text: `🍜 *ĐƠN HÀNG ${orderId} (Đã Hoàn Thành)* 🍜\n\n*Đơn đã hoàn thành!*`,
      parse_mode: "Markdown",
    };

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/editMessageText`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMessage),
    });

    const telegramResult = await telegramResponse.json();

    if (!telegramResult.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to update Telegram message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Order marked as completed" });

  } catch (error) {
    console.error("Error processing callback:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
