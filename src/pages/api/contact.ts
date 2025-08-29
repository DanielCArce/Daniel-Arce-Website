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
      from: "Acme <onboarding@resend.dev>",
      to: import.meta.env.EMAIL_FOR_CONTACT, // donde recibís los mensajes
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });
    return new Response(null, {
      status: 303,
      headers: { Location: "/" } });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error al enviar correo" }), { status: 500 });
  }
};
