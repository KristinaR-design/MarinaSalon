// Без кеша, всегда сервер
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const { name = "", phone = "", service = "", date = "" } = await req.json();

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!token || !chatId) {
            console.error("No TELEGRAM env vars");
            return new Response(JSON.stringify({ ok: false, error: "Missing TELEGRAM_* env vars" }), { status: 500 });
        }

        const text =
            `Neue Anfrage / New request / Новая заявка\n` +
            `Name: ${name}\n` +
            `Telefon: ${phone}\n` +
            `Service: ${service}\n` +
            `Date: ${date}`;

        // ВАЖНО: у Telegram Bot API надежнее отправлять либо form-urlencoded, либо multipart
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
            console.error("Telegram error:", data);
            return new Response(JSON.stringify({ ok: false, error: "Telegram API failed", data }), { status: 502 });
        }

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (e) {
        console.error("notify error:", e);
        return new Response(JSON.stringify({ ok: false }), { status: 500 });
    }
}
