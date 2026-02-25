import nodemailer from 'nodemailer';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { firstName, lastName, email, phone, service, message } = data;

  // Configure your SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `IKS Website <${process.env.SMTP_USER}>`,
      to: 'info@iksnigeria.ng',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${firstName} ${lastName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Service:</b> ${service}</p><p><b>Message:</b><br/>${message}</p>`
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // Log the full error for debugging
    console.error('Nodemailer error:', error);
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : error, details: error }), { status: 500 });
  }
}
