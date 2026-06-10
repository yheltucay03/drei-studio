import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, business, siteType, message } = await req.json();

    if (!name || !business || !siteType || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Drei Studio <noreply@dreiwebstudio.com>',
      to: 'yhel.tucay03@gmail.com',
      subject: `New Inquiry from ${name} — ${business}`,
      html: `
        <h2>New Inquiry from Drei Studio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Type:</strong> ${siteType}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Inquiry email error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
