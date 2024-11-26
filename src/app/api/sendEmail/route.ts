import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, email, contact, subject, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL,
    subject: `Contact Form Submission: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h2 style="background-color: #0051BA; color: white; padding: 10px 20px;">Contact Form Submission 
        </h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Description:</strong> ${description}</p>
      </div>
    `,
  };

  const replyMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting us",
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <h2 style="background-color: #0051BA; color: white; padding: 20px; text-align: center; margin: 0;">Thank you for contacting us</h2>
        <div style="padding: 20px;">
          <p>Hi ${fullName},</p>
          <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>
          <p>Regards,</p>
          <p>Team</p>
          <p>SHREE SINGHADEVI SECONDARY SCHOOL</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(replyMailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
