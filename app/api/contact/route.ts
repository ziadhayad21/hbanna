
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      product,
      quantity,
      destination,
      shipping,
      packaging,
      company,
      email,
      whatsapp,
    } = data;

    // Basic validation
    if (!product || !quantity || !destination || !company || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.hbanna.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "marketing@hbanna.com",
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection/authentication
    await transporter.verify();

    const mailOptions = {
      from: process.env.SMTP_USER || "marketing@hbanna.com",
      to: process.env.MAIL_TO || "marketing@hbanna.com",
      replyTo: email,
      subject: "New Quote Request - HBanna Website",
      html: `
        <h2>New Quote Request from HBanna Website</h2>

        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp / Phone:</strong> ${whatsapp}</p>

        <br />

        <h3>Request Details</h3>

        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Expected Shipping Date:</strong> ${
          shipping || "Not specified"
        }</p>
        <p><strong>Packaging Requirements:</strong> ${
          packaging || "Not specified"
        }</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

