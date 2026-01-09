import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail (you'll need to configure this)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'natanmuleta77@gmail.com',
        pass: process.env.EMAIL_PASS, // You'll need to set up an app password for Gmail
      },
    });

    // Email to you (natanmuleta77@gmail.com)
    const mailToYou = {
      from: process.env.EMAIL_USER || 'natanmuleta77@gmail.com',
      to: 'natanmuleta77@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
    };

    // Email confirmation to the sender
    const mailToSender = {
      from: process.env.EMAIL_USER || 'natanmuleta77@gmail.com',
      to: email,
      subject: 'Thank you for contacting Natan Muleta',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting me through my portfolio. I have received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 3px solid #ccc; padding-left: 20px; margin: 20px 0;">
          <p>${message}</p>
        </blockquote>
        <p>Best regards,<br>Natan Muleta</p>
        <br>
        <p><em>This is an automated response from natanmuleta77@gmail.com</em></p>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToSender);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}