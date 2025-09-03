import { ArrowRight, Palette, Users, Camera, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import makeupServiceImage from "@/assets/makeup-service.jpg";
import bridalMakeupImage from "@/assets/bridal-makeup.jpg";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Bridal Makeup",
      description:
        "Complete bridal makeover with HD makeup, hairstyling, and pre-wedding trials",
      price: "Starting from ₹15,000",
      image: bridalMakeupImage,
      features: [
        "HD/3D Makeup",
        "Hair Styling",
        "Pre-wedding Trial",
        "Touch-up Kit",
      ],
    },
    {
      icon: Camera,
      title: "Party & Event Makeup",
      description:
        "Glamorous makeup for parties, events, and special occasions",
      price: "Starting from ₹5,000",
      image: makeupServiceImage,
      features: [
        "Party Makeup",
        "Event Styling",
        "Photo Ready",
        "Long Lasting",
      ],
    },
    {
      icon: Scissors,
      title: "Hair Styling",
      description:
        "Professional hair styling, cuts, and treatments for all occasions",
      price: "Starting from ₹2,500",
      image: makeupServiceImage,
      features: ["Styling", "Cutting", "Treatment", "Color"],
    },
    {
      icon: Users,
      title: "Group Bookings",
      description:
        "Special packages for bridal parties, family functions, and group events",
      price: "Custom Pricing",
      image: bridalMakeupImage,
      features: [
        "Group Discount",
        "On-location",
        "Multiple Artists",
        "Package Deals",
      ],
    },
  ];

  return (
    <section id="services" className="py-20  bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury beauty treatments and transformations with our
            expert team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:bg-emerald-300 bg-green-200/90  transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <span className="text-primary font-semibold text-sm">
                    {service.price}
                  </span>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant={"luxury"} className="w-full group" asChild>
                  <Link href="/book-now">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
