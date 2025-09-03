import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { EnrollCourse } from "@/models/enrollCourse";
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
      !data.course ||
      !data.experience ||
      !data.message
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newEnrollment = await EnrollCourse.create(data);

    const ownerEmail = "pravinch007@gmail.com";

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: data.email,
      subject: "Thank you for your inquiry!",
      text:
        `Hi ${data.name},\n\nThank you for your inquiry for the course "${data.course}".\n` +
        `Course: ${data.course}\nExperience: ${data.experience}\n` +
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
        `Course: ${data.course}\nExperience: ${data.experience}\n` +
        `Message: ${data.message}`,
    });

    return NextResponse.json({
      status: 201,
      message:
        "We'll contact you within 24 hours to discuss your course details.",
    });
  } catch (error) {
    console.error("Error creating enrollment:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
