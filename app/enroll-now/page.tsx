/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
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
  GraduationCap,
  User,
  Mail,
  Phone,
  MessageSquare,
  Award,
  Loader2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { enrollCourse } from "@/services/enrollcourse";
import { courses, experienceLevels } from "@/constant/constant";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { useRouter } from "next/navigation";

const EnrollNow = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.course.trim() !== "";

  const router = useRouter();

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
      await enrollCourse(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        message: "",
      });
      router.push("/thank-you?type=enroll");
    } catch (error) {
      toast({
        title: "❌ Enrollment Failed",
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
            Enroll in Our Training Program
          </h1>
          <p className="text-[color:var(--muted-foreground)] text-lg">
            Start your professional makeup artistry journey with certified
            training
          </p>
        </div>

        {/* Enrollment Form */}
        <Card className="bg-[color:var(--muted)]">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-[color:var(--foreground)] flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6 text-[color:var(--accent)]" />
              Course Enrollment
            </CardTitle>
            <CardDescription className="text-[color:var(--muted-foreground)]">
              Join thousands of successful makeup artists who started their
              journey with us
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

              {/* Course Selection */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-[color:var(--foreground)]">
                  <Award className="w-4 h-4 text-[color:var(--accent)]" />
                  Course Selection *
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => handleInputChange("course", value)}
                >
                  <SelectTrigger className="text-[color:var(--foreground)]">
                    <SelectValue placeholder="Choose your course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Experience Level */}
              <div className="space-y-2">
                <Label className="text-[color:var(--foreground)]">
                  Experience Level
                </Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) =>
                    handleInputChange("experience", value)
                  }
                >
                  <SelectTrigger className="text-[color:var(--foreground)]">
                    <SelectValue placeholder="Select your current level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="flex items-center gap-2 text-[color:var(--foreground)]"
                >
                  <MessageSquare className="w-4 h-4 text-[color:var(--accent)]" />
                  Why do you want to join this course? (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your goals and aspirations..."
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
                    Enrolling in Course...
                  </>
                ) : (
                  "Enroll Now - Start Your Journey"
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 p-6 bg-[color:var(--background)]/80 rounded-lg border border-[color:var(--border)]">
              <h3 className="font-semibold text-[color:var(--foreground)] mb-3">
                What You'll Get:
              </h3>
              <ul className="space-y-2 text-sm text-[color:var(--muted-foreground)]">
                <li>✓ Industry-recognized certification</li>
                <li>✓ Hands-on practical training</li>
                <li>✓ Professional makeup kit included</li>
                <li>✓ Job placement assistance</li>
                <li>✓ Lifetime access to course materials</li>
                <li>✓ One-on-one mentorship sessions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-[color:var(--muted-foreground)]">
            Have questions? Call us at{" "}
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

export default EnrollNow;
