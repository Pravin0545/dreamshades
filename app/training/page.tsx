/* eslint-disable @typescript-eslint/no-unused-vars */
import { Clock, Users, Award, BookOpen, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import trainingImage from "@/assets/training-classroom.jpg";
import Image from "next/image";
import Link from "next/link";

const Training = () => {
  const courses = [
    {
      title: "Basic Makeup Artistry",
      description:
        "Foundation course covering basic makeup techniques and color theory",
      duration: "4 Weeks",
      students: "15",
      price: "₹25,000",
      level: "Beginner",
      modules: [
        "Skin prep and base makeup",
        "Eye makeup basics",
        "Color theory",
        "Basic tools and hygiene",
        "Client consultation",
      ],
    },
    {
      title: "Professional Makeup Diploma",
      description:
        "Comprehensive program covering all aspects of professional makeup artistry",
      duration: "12 Weeks",
      students: "12",
      price: "₹75,000",
      level: "Advanced",
      featured: true,
      modules: [
        "Advanced makeup techniques",
        "Bridal and party makeup",
        "HD and airbrush makeup",
        "Portfolio development",
        "Business and marketing",
        "Internship opportunities",
      ],
    },
    {
      title: "Bridal Makeup Specialist",
      description:
        "Specialized course focusing on bridal makeup trends and techniques",
      duration: "6 Weeks",
      students: "10",
      price: "₹45,000",
      level: "Intermediate",
      modules: [
        "Bridal makeup trends",
        "Long-lasting techniques",
        "Hair styling basics",
        "Client management",
        "Regional bridal styles",
      ],
    },
  ];

  const certificationBenefits = [
    "Industry-recognized certificate",
    "Lifetime placement assistance",
    "Professional makeup kit included",
    "Master class with celebrity artists",
    "Business setup guidance",
    "Alumni network access",
  ];

  return (
    <section id="training" className="py-20 bg-background bg-gradient-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Training Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Launch your career in makeup artistry with our industry-leading
            certification programs
          </p>

          {/* Training Image */}
          <div className="relative max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-luxury">
            <Image
              src={trainingImage}
              alt="Professional Makeup Training"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white drop-shadow-lg">
                <Award className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-white">
                  Get Certified
                </h3>
                <p className="text-lg text-white">
                  Join 200+ successful makeup artists
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card
              key={course.title}
              className={`relative group hover:shadow hover:bg-emerald-300 bg-green-200/90 transition-all duration-300 hover:-translate-y-2 animate-scale-in ${
                course.featured ? "ring-2 ring-primary shadow-glow" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="text-2xl font-bold text-primary">
                    {course.price}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students} students
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm text-foreground">
                    Course Modules:
                  </h4>
                  {course.modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      {module}
                    </div>
                  ))}
                </div>

                <Button
                  variant={course.featured ? "luxury" : "default"}
                  className="w-full "
                  asChild
                >
                  <Link href="/enroll-now">Enroll Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Benefits */}
        <div className="bg-card rounded-lg p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold mb-4 text-foreground">
              Why Choose Our Certification?
            </h3>
            <p className="text-muted-foreground">
              Join the ranks of successful makeup artists with our comprehensive
              training programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center text-foreground animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Star className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
