import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { BookAppointment } from "@/models/bookAppointmentModel";
import transporter from "@/lib/transporter";
import { appointmentSchema } from "@/lib/validations";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate request body with Zod
    const validatedData = appointmentSchema.parse(body);

    const newAppointment = await BookAppointment.create(validatedData);

    const ownerEmail = process.env.OWNER_EMAIL || "dreamshades.hyd@gmail.com";
    const fromEmail = process.env.SMTP_USER;

    // Send confirmation email to customer
    await transporter.sendMail({
      from: fromEmail,
      to: validatedData.email,
      subject: "Thank you for your inquiry!",
      text:
        `Hi ${validatedData.name},\n\nThank you for your inquiry for the service "${validatedData.service}".\n` +
        `Service: ${validatedData.service}\nTime: ${validatedData.time}\nDate: ${validatedData.date}\n` +
        `Message: ${validatedData.message}\n\n` +
        `We will contact you at ${validatedData.phone} soon.\n\nBest regards,\nDreamShades Team`,
    });

    // Send notification email to owner
    await transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      subject: "New Appointment Booking Received",
      text:
        `New appointment booking received:\n\n` +
        `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\n` +
        `Service: ${validatedData.service}\nTime: ${validatedData.time}\nDate: ${validatedData.date}\n` +
        `Message: ${validatedData.message}\n` +
        `Booking ID: ${newAppointment._id}`,
    });

    // WhatsApp Deep Link
    const countryCode = "91"; // Change if not India
    const phoneNumber = validatedData.phone.replace(/\D/g, "");
    const message = encodeURIComponent(
      `Hello ${validatedData.name}, thank you for booking "${validatedData.service}". We'll contact you within 24 hours.`
    );
    const whatsappUrl = `https://wa.me/${countryCode}${phoneNumber}?text=${message}`;

    return NextResponse.json(
      {
        success: true,
        message:
          "We'll contact you within 24 hours to discuss your appointment details.",
        whatsappUrl,
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle database errors
    if (error instanceof Error) {
      console.error("Error creating appointment:", error.message);

      // Check for duplicate key error
      if (error.message.includes("duplicate key")) {
        return NextResponse.json(
          { success: false, error: "This appointment already exists" },
          { status: 409 }
        );
      }
    }

    // Generic server error
    return NextResponse.json(
      { success: false, error: "Unable to process your request. Please try again later." },
      { status: 500 }
    );
  }
}
