import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("InquiryModel", inquirySchema);
