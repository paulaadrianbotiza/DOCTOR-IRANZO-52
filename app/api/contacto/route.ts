function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const { nombre, telefono, email, mensaje } = await req.json();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "RESEND_API_KEY no configurada" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Doctor Iranzo 52 <onboarding@resend.dev>",
      to: ["info@adrianbotiza.es"],
      ...(email ? { reply_to: email } : {}),
      subject: `Nueva consulta · Doctor Iranzo 52 — ${nombre}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#18181b">
          <div style="background:#EF3340;padding:20px 24px;border-radius:12px 12px 0 0">
            <h2 style="margin:0;color:#fff;font-size:18px">Nueva consulta · Doctor Iranzo 52</h2>
          </div>
          <div style="background:#f9f9f9;padding:24px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
              <tr><td style="padding:8px 0;color:#666;width:110px;font-size:13px">Nombre</td><td style="padding:8px 0;font-weight:600;font-size:14px">${escapeHtml(nombre)}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-size:13px">Teléfono</td><td style="padding:8px 0;font-size:14px">${escapeHtml(telefono || "—")}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-size:13px">Email</td><td style="padding:8px 0;font-size:14px">${escapeHtml(email || "—")}</td></tr>
            </table>
            <div style="background:#fff;border:1px solid #e4e4e7;border-radius:8px;padding:16px">
              <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.05em">Mensaje</p>
              <p style="margin:0;font-size:14px;line-height:1.6">${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>
            </div>
          </div>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return Response.json({ error: "Error al enviar" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
