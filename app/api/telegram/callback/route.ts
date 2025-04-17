// /app/api/telegram/callback/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.callback_query) {
    const callback = body.callback_query;
    const messageId = callback.message?.message_id;
    const chatId = callback.message?.chat.id;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    const updatedText = `✅ *ĐƠN ĐÃ HOÀN THÀNH*\n\n${callback.message?.text}`;

    const res = await fetch(
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

    const data = await res.json();
    console.log("Edit message result:", data);

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false });
}
