// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/contact";
import transporter from "@/lib/transporter";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    // Basic validation
    const { name, email, phone, service, message } = data ?? {};
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "name, email and phone are required" },
        { status: 400 }
      );
    }

    const saved = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    const ownerEmail = process.env.OWNER_EMAIL ?? "owner@example.com";

    // Acknowledgement to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "We received your message",
      text:
        `Hi ${name},\n\n` +
        `Thanks for contacting us about "${
          service ?? "General Inquiry"
        }".\n\n` +
        `Message: ${message ?? "(no message)"}\n\n` +
        `We will contact you at ${phone} soon.\n\nRegards,\nTeam`,
    });

    // Notification to owner
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: ownerEmail,
      subject: "New contact form submission",
      text:
        `New contact submission:\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${
          service ?? "-"
        }\nMessage: ${message ?? "-"}\nID: ${saved._id}\n`,
    });

    return NextResponse.json(
      { status: 201, message: "Message saved. We'll contact you shortly." },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
