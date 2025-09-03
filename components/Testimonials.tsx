/* eslint-disable react/no-unescaped-entities */
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/constant/constant";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our happy clients and successful students
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-green-200/90 hover:bg-emerald-300 backdrop-blur-sm hover:shadow-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 bg-pink-500 rounded-full p-3 shadow-md">
                <Quote className="h-4 w-4 text-white" />
              </div>

              <CardContent className="p-6 pt-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-pink-400 text-pink-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-black dark:text-black-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-black-800 dark:text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-black-500 dark:text-black">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-full px-8 py-4 shadow-md backdrop-blur-sm">
            <div className="flex items-center mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-pink-400 text-pink-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl text-neutral-800 dark:text-neutral-100">
                4.9/5
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                Based on 200+ reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
