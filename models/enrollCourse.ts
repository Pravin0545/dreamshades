import mongoose, { Schema, model, models } from "mongoose";

const enrollCourseSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    course: { type: String, required: [true, "Course is required"] },
    experience: { type: String, required: [true, "Experience is required"] },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export const EnrollCourse =
  models.EnrollCourse || model("EnrollCourse", enrollCourseSchema);
