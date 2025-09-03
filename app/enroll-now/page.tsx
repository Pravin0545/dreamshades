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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
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

      toast({
        title: "✅ Enrollment Submitted!",
        description:
          "We'll contact you within 24 hours to discuss your course details.",
        variant: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        message: "",
      });
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
    <div className="min-h-screen bg-gradient-primary py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Enroll in Our Training Program
          </h1>
          <p className="text-muted-foreground text-lg">
            Start your professional makeup artistry journey with certified
            training
          </p>
        </div>

        {/* Enrollment Form */}
        <Card className="bg-green-200/90">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif text-primary flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Course Enrollment
            </CardTitle>
            <CardDescription>
              Join thousands of successful makeup artists who started their
              journey with us
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
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
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
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
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
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
                <Label className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Course Selection *
                </Label>
                <Select
                  value={formData.course}
                  onValueChange={(value) => handleInputChange("course", value)}
                >
                  <SelectTrigger>
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
                <Label>Experience Level</Label>
                <Select
                  value={formData.experience}
                  onValueChange={(value) =>
                    handleInputChange("experience", value)
                  }
                >
                  <SelectTrigger>
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
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
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
                variant="luxury"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
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
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h3 className="font-semibold text-primary mb-3">
                What You'll Get:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
          <p className="text-muted-foreground">
            Have questions? Call us at{" "}
            <a
              href="tel:+919876543210"
              className="text-primary hover:underline font-semibold"
            >
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnrollNow;
