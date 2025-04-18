import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();

  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Validaciones simples
  if (!email) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "El campo de email es obligatorio.",
        field: "email",
      }),
      { status: 400 }
    );
  }

  if (!subject) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "El campo de título es obligatorio.",
        field: "subject",
      }),
      { status: 400 }
    );
  }

  if (!message) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "El mensaje no puede estar vacío.",
        field: "message",
      }),
      { status: 400 }
    );
  }

  // Envío del correo
  const { data, error } = await resend.emails.send({
    from: `onboarding@resend.dev`,
    to: "arrozmickel@gmail.com",
    subject: `${subject}`,
    html: `<h3>Mensaje:</h3><p>${message}</p><br><p><strong>From: ${email}<strong></p>`,
  });

  if (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "No se pudo enviar el correo. Intenta más tarde.",
      }),
      { status: 500 }
    );
  }

  if (data)
    return new Response(
      JSON.stringify({
        success: true,
        message: "¡Correo enviado correctamente!",
      }),
      { status: 200 }
    );

  return new Response(
    JSON.stringify({
      success: false,
      message: "No se pudo enviar el correo. Intenta más tarde.",
    }),
    { status: 500 }
  );
};
