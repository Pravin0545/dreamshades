import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { servicesDetails } from "@/constant/constant";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[color:var(--background)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[color:var(--foreground)]">
            Our Premium Services
          </h2>
          <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
            Experience luxury beauty and transformations with our expert team
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesDetails.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-[color:var(--muted)] hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                5
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-[color:var(--primary)]/70 backdrop-blur-sm rounded-full p-3 text-[color:var(--primary-foreground)]">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-[color:var(--foreground)]">
                    {service.title}
                  </CardTitle>
                  <span className="text-[color:var(--accent)] font-semibold text-sm">
                    {service.price}
                  </span>
                </div>
                <CardDescription className="text-base text-[color:var(--muted-foreground)]">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-[color:var(--muted-foreground)]"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="secondary" className="w-full group" asChild>
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
