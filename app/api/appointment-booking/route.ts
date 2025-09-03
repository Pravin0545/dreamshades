import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { BookAppointment } from "@/models/bookAppointmentModel";
import transporter from "@/lib/transporter";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    // Optional: basic validation
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.service ||
      !data.date ||
      !data.time ||
      !data.message
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newAppointment = await BookAppointment.create(data);

    const ownerEmail = "pravinch007@gmail.com";

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: data.email,
      subject: "Thank you for your inquiry!",
      text:
        `Hi ${data.name},\n\nThank you for your inquiry for the service "${data.service}".\n` +
        `Service: ${data.service}\nTime: ${data.time}\nDate: ${data.date}\n` +
        `Message: ${data.message}\n\n` +
        `We will contact you at ${data.phone} soon.\n\nBest regards,\nAcademy Team`,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: ownerEmail,
      subject: "New Inquiry Received",
      text:
        `New inquiry received:\n\n` +
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n` +
        `Service: ${data.service}\nTime: ${data.time}\nDate: ${data.date}\n` +
        `Message: ${data.message}`,
    });
    // WhatsApp Deep Link
    const countryCode = "91"; // Change if not India
    const phoneNumber = data.phone.replace(/\D/g, ""); // Remove non-digits
    const message = encodeURIComponent(
      `Hello ${data.name}, thank you for booking "${data.service}". We'll contact you within 24 hours.`
    );
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;
    console.log("newAppointment", whatsappUrl);
    return NextResponse.json({
      status: 201,
      message:
        "We'll contact you within 24 hours to discuss your course details.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("Error creating enrollment:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
