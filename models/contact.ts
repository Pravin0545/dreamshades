// models/Contact.ts
import mongoose, { Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  phone: string;
  email: string;
  service?: string;
  message?: string;
  createdAt: Date;
}

const ContactSchema = new mongoose.Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    service: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export const Contact: Model<IContact> =
  (mongoose.models.Contact as Model<IContact>) ||
  mongoose.model<IContact>("Contact", ContactSchema);
