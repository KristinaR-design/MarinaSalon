export async function POST(req: Request) {
    try {
        const { name, phone, service, date } = await req.json();
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        if (!token || !chatId) {
            return new Response(JSON.stringify({ ok: true, message: "telegram not configured" }), { status: 200 });
        }
        const text = `Neue Anfrage:%0AName: ${encodeURIComponent(name)}%0ATelefon: ${encodeURIComponent(phone)}%0ALeistung: ${encodeURIComponent(service)}%0ADatum: ${encodeURIComponent(date)}`;
        await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`);
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch {
        return new Response(JSON.stringify({ ok: false }), { status: 500 });
    }
}
