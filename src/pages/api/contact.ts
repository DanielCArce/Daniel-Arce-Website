import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Faltan campos" }), { status: 400 });
    }

    await resend.emails.send({
      from: "Contacto <no-reply@tu-dominio.com>",
      to: "tucorreo@empresa.com", // donde recibís los mensajes
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error al enviar correo" }), { status: 500 });
  }
};
