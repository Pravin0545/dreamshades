/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addAppointment } from "@/services/addAppointment";
import { services, timeSlots } from "@/constant/constant";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const BookNow = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.service.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await addAppointment(formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

      toast({
        title: "✅ Booking Submitted!",
        description: "We'll contact you shortly to confirm your appointment.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "❌ Booking Failed",
        description:
          error && typeof error === "object" && "message" in error
            ? (error as { message: string }).message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section variant="soft" className="min-h-screen py-16">
      <Container size="md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-[color:var(--foreground)] mb-4">
            Book Your Appointment
          </h1>
          <p className="text-[color:var(--muted-foreground)] text-lg">
            Schedule your perfect makeover experience with our expert team
          </p>
        </div>

        {/* Booking Form */}
        <Card className="bg-[color:var(--muted)]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-[color:var(--foreground)]">
              Reserve Your Slot
            </CardTitle>
            <CardDescription className="text-[color:var(--muted-foreground)]">
              Fill in your details and we'll confirm your appointment within 24
              hours
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="flex items-center gap-2 text-[color:var(--foreground)]"
                  >
                    <User className="w-4 h-4 text-[color:var(--accent)]" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-[color:var(--foreground)]"
                  >
                    <Phone className="w-4 h-4 text-[color:var(--accent)]" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="flex items-center gap-2 text-[color:var(--foreground)]"
                >
                  <Mail className="w-4 h-4 text-[color:var(--accent)]" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label className="text-[color:var(--foreground)]">
                  Service Type *
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => handleInputChange("service", value)}
                >
                  <SelectTrigger className="text-[color:var(--foreground)]">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                {" "}
                <div className="space-y-2">
                  {" "}
                  <Label
                    htmlFor="date"
                    className="flex items-center gap-2 text-[color:var(--foreground)]"
                  >
                    {" "}
                    <Calendar className="w-4 h-4 text-[color:var(--accent)]" />{" "}
                    Preferred Date{" "}
                  </Label>{" "}
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-auto bg-[color:var(--muted)] border border-[color:var(--border)] text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)] rounded-md px-3 py-2"
                  />{" "}
                </div>{" "}
                <div className="space-y-2">
                  {" "}
                  <Label className="flex items-center gap-2 text-[color:var(--foreground)]">
                    {" "}
                    <Clock className="w-4 h-4 text-[color:var(--accent)]" />{" "}
                    Preferred Time{" "}
                  </Label>{" "}
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleInputChange("time", value)}
                  >
                    {" "}
                    <SelectTrigger className="w-full bg-[color:var(--muted)] border border-[color:var(--border)] rounded-md px-3 py-2 text-[color:var(--foreground)]">
                      {" "}
                      <SelectValue
                        className="text-[color:var(--muted-foreground)]"
                        placeholder="Select time"
                      />{" "}
                    </SelectTrigger>{" "}
                    <SelectContent className="bg-[color:var(--muted)] border border-[color:var(--border)] rounded-md">
                      {" "}
                      {timeSlots.map((time) => (
                        <SelectItem
                          key={time}
                          value={time}
                          className="text-[color:var(--foreground)] hover:bg-[color:var(--primary)]/10"
                        >
                          {" "}
                          {time}{" "}
                        </SelectItem>
                      ))}{" "}
                    </SelectContent>{" "}
                  </Select>{" "}
                </div>{" "}
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="flex items-center gap-2 text-[color:var(--foreground)]"
                >
                  <MessageSquare className="w-4 h-4 text-[color:var(--accent)]" />
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Any special requests or additional information..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={isSubmitting || !isFormValid}
                aria-disabled={isSubmitting || !isFormValid}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Booking Your Appointment...
                  </>
                ) : (
                  "Book My Appointment"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-[color:var(--muted-foreground)]">
            Need help? Call us at{" "}
            <a
              href="tel:+919712366344"
              className="text-[color:var(--primary)] hover:underline font-semibold"
            >
              +91 9712366344
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BookNow;
