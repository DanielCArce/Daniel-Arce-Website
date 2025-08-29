import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    if (!name || !email || !message) {
      return new Response("Faltan campos", { status: 400 });
    }

    // 🚀 Configurar Nodemailer con Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.GMAIL_USERNAME,
        pass: import.meta.env.GMAIL_APP_PASSWORD,
      },
    });

    // 🚀 Enviar email
    await transporter.sendMail({
      from: `"${name}" <${import.meta.env.GMAIL_USERNAME}>`,
      to: [import.meta.env.GMAIL_USERNAME, email], // te lo mandás a vos mismo
      replyTo: email, // así podés responderle directo al remitente
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    // 🚀 Redirigir al home
    return new Response(null, {
      status: 303,
      headers: { Location: "/" },
    });
  } catch (err) {
    console.error("❌ Error al enviar correo:", err);
    return new Response("Error al enviar correo", { status: 500 });
  }
};
