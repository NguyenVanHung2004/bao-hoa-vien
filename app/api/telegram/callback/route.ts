import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Kiểm tra nếu là callback_query
    if (body.callback_query) {
      const callback = body.callback_query;
      const messageId = callback.message?.message_id;
      const chatId = callback.message?.chat.id;
      const botToken = process.env.TELEGRAM_BOT_TOKEN;

      if (!botToken || !chatId || !messageId) {
        console.error("Missing required fields for Telegram edit");
        return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
      }

      // Cập nhật nội dung tin nhắn với trạng thái đã hoàn thành
      const originalText = callback.message?.text || "";
      const updatedText = `✅ *ĐƠN ĐÃ HOÀN THÀNH*\n\n${originalText}`;

      const editResponse = await fetch(
        `https://api.telegram.org/bot${botToken}/editMessageText`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            message_id: messageId,
            text: updatedText,
            parse_mode: "Markdown",
          }),
        }
      );

      const result = await editResponse.json();

      if (!result.ok) {
        console.error("Failed to edit message:", result);
        return NextResponse.json({ success: false, error: "Failed to edit message" }, { status: 400 });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: "No callback_query found" }, { status: 400 });
  } catch (err) {
    console.error("Error in Telegram callback:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
