// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/contact";
import transporter from "@/lib/transporter";
import { contactSchema } from "@/lib/validations";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate request body with Zod
    const validatedData = contactSchema.parse(body);

    const saved = await Contact.create(validatedData);

    const ownerEmail = process.env.OWNER_EMAIL || "dreamshades.hyd@gmail.com";
    const fromEmail = process.env.SMTP_USER;

    // Send acknowledgement to user
    await transporter.sendMail({
      from: fromEmail,
      to: validatedData.email,
      subject: "We received your message",
      text:
        `Hi ${validatedData.name},\n\n` +
        `Thanks for contacting us${
          validatedData.service ? ` about "${validatedData.service}"` : ""
        }.\n\n` +
        `${validatedData.message ? `Message: ${validatedData.message}\n\n` : ""}` +
        `We will contact you at ${validatedData.phone} soon.\n\nBest regards,\nDreamShades Team`,
    });

    // Send notification to owner
    await transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      subject: "New Contact Form Submission",
      text:
        `New contact submission:\n\n` +
        `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\n` +
        `Service: ${validatedData.service || "N/A"}\n` +
        `Message: ${validatedData.message || "N/A"}\n` +
        `Contact ID: ${saved._id}`,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message saved. We'll contact you shortly.",
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
      console.error("Contact API error:", error.message);

      // Check for duplicate key error
      if (error.message.includes("duplicate key")) {
        return NextResponse.json(
          { success: false, error: "This contact already exists" },
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
