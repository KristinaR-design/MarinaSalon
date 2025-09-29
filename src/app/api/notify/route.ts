// src/app/api/notify/route.ts

// Гарантируем обычный Node runtime и динамику (не статическая страница)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const { name = "", phone = "", service = "", date = "" } = await req.json();

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            // Вернём подробности — удобно для диагностики в Network → Response
            return new Response(
                JSON.stringify({
                    ok: false,
                    error: "Missing TELEGRAM_* env vars",
                    hasToken: !!token,
                    hasChat: !!chatId,
                }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        const text =
            `Neue Anfrage / New request / Новая заявка\n` +
            `Name: ${name}\n` +
            `Telefon: ${phone}\n` +
            `Service: ${service}\n` +
            `Date: ${date}`;

        const body = new URLSearchParams({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: "true",
        });

        const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
            cache: "no-store",
        });

        const data = await tgResp.json();
        if (!data.ok) {
            // Пробросим ошибку Telegram до клиента для видимости в Netlify/DevTools
            return new Response(JSON.stringify({ ok: false, source: "telegram", data }), {
                status: 502,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (e: any) {
        return new Response(JSON.stringify({ ok: false, error: String(e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
