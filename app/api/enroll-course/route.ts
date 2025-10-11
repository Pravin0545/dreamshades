import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { EnrollCourse } from "@/models/enrollCourse";
import transporter from "@/lib/transporter";
import { enrollCourseSchema } from "@/lib/validations";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate request body with Zod
    const validatedData = enrollCourseSchema.parse(body);

    const newEnrollment = await EnrollCourse.create(validatedData);

    const ownerEmail = process.env.OWNER_EMAIL || "dreamshades.hyd@gmail.com";
    const fromEmail = process.env.SMTP_USER;

    // Send confirmation email to customer
    await transporter.sendMail({
      from: fromEmail,
      to: validatedData.email,
      subject: "Thank you for your course inquiry!",
      text:
        `Hi ${validatedData.name},\n\nThank you for your inquiry for the course "${validatedData.course}".\n` +
        `Course: ${validatedData.course}\nExperience: ${validatedData.experience}\n` +
        `Message: ${validatedData.message}\n\n` +
        `We will contact you at ${validatedData.phone} soon.\n\nBest regards,\nDreamShades Academy Team`,
    });

    // Send notification email to owner
    await transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      subject: "New Course Enrollment Inquiry",
      text:
        `New course enrollment inquiry received:\n\n` +
        `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\n` +
        `Course: ${validatedData.course}\nExperience: ${validatedData.experience}\n` +
        `Message: ${validatedData.message}\n` +
        `Enrollment ID: ${newEnrollment._id}`,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "We'll contact you within 24 hours to discuss your course details.",
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
      console.error("Error creating enrollment:", error.message);

      // Check for duplicate key error
      if (error.message.includes("duplicate key")) {
        return NextResponse.json(
          { success: false, error: "This enrollment already exists" },
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
