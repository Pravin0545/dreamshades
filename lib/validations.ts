import { z } from "zod";

// Phone number validation (Indian format)
const phoneRegex = /^[6-9]\d{9}$/;

// Appointment booking validation schema
export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  email: z.string().email("Invalid email address").toLowerCase().trim(),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid phone number (must be 10 digits starting with 6-9)")
    .trim(),
  service: z.string().min(1, "Service is required").trim(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required").trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long")
    .trim(),
});

// Course enrollment validation schema
export const enrollCourseSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  email: z.string().email("Invalid email address").toLowerCase().trim(),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid phone number (must be 10 digits starting with 6-9)")
    .trim(),
  course: z.string().min(1, "Course is required").trim(),
  experience: z.string().min(1, "Experience level is required").trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long")
    .trim(),
});

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .trim(),
  email: z.string().email("Invalid email address").toLowerCase().trim(),
  phone: z
    .string()
    .regex(phoneRegex, "Invalid phone number (must be 10 digits starting with 6-9)")
    .trim(),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long")
    .trim()
    .optional(),
});

// Export types
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type EnrollCourseInput = z.infer<typeof enrollCourseSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
