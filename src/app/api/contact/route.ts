import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  // Simple but practical email validation; avoid heavy deps for this use case
  return /.+@.+\..+/.test(email);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL || fromEmail;

    if (!apiKey || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || '').trim();
    const message = (body.message || '').trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (email && !isValidEmail(email)) errors.email = 'Email is invalid';
    if (!subject) errors.subject = 'Subject is required';
    if (!message) errors.message = 'Message is required';
    if (message && message.length > 5000)
      errors.message = 'Message is too long';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    const html = `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[Portfolio Contact] ${subject}`,
      replyTo: email,
      html,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch {
    return NextResponse.json(
      { error: 'Unexpected server error' },
      { status: 500 }
    );
  }
}


