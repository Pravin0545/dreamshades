import mongoose, { Schema, model, models } from "mongoose";

const bookAppointmentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
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
    service: {
      type: String,
      required: [true, "Service is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
  //   {
  //     name: { type: String, required: true },
  //     email: { type: String, required: true },
  //     phone: { type: String, required: true },
  //     service: { type: String, required: true },
  //     date: { type: Date, required: true },
  //     time: { type: String, required: true },
  //     message: { type: String, required: true },
  //   },
  //   {
  //     timestamps: true,
  //     toJSON: {
  //       transform: (doc, ret) => {
  //         ret.id = ret._id.toString(); // ✅ convert _id to id
  //         delete ret._id;
  //         delete ret.__v;
  //       },
  //     },
  //     toObject: {
  //       transform: (doc, ret) => {
  //         ret.id = ret._id.toString();
  //         delete ret._id;
  //         delete ret.__v;
  //       },
  //     },
  //   }
);

export const BookAppointment =
  models.BookAppointment || model("BookAppointment", bookAppointmentSchema);
