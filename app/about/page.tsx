/* eslint-disable react/no-unescaped-entities */
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { CardCarousel } from "@/components/ui/card-carousel";
import { achievements, certifications } from "@/constant/constant";

const About = () => {
  const images = [
    { src: "/images/7073530.jpg", alt: "Image 5" },
    { src: "/images/short-hair.jpg", alt: "Image 6" },
  ];

  return (
    <Section id="about" variant="gradient">
      <Container size="xl">
        <div className="max-w-6xl grid grid-cols-2 gap-2 mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up col-span-2">
            <Heading size="xl" className="mb-6">
              About DreamShades Makeover Studio
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Where artistry meets expertise to create stunning transformations
              and nurture the next generation of makeup artists
            </p>
          </div>

          {/* Content + Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 col-span-2">
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-3xl font-bold mb-6 text-foreground">
                Meet Our Lead Artist & Trainer
              </h3>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Welcome to DreamShades Makeover Studio & Unisex Professional
                  Academy, where passion meets perfection in the world of beauty
                  and makeup artistry. Founded by experienced professionals with
                  years of expertise in the beauty industry.
                </p>
                <p>
                  Our team has worked with numerous celebrities, fashion shows,
                  and high-profile weddings, earning recognition for exceptional
                  skills and artistic vision. Our expertise spans across bridal
                  makeup, fashion photography, editorial work, and professional
                  training.
                </p>
                <p>
                  At DreamShades Makeover Studio, we believe in empowering
                  individuals through the art of makeup. Whether you're looking
                  for a stunning makeover or pursuing a career in makeup
                  artistry, we provide personalized attention and world-class
                  training.
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-4 text-foreground">
                  Professional Certifications:
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center text-muted-foreground"
                    >
                      <Star className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image carousel */}
            <div className="animate-scale-in">
              <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination
                showNavigation
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 col-span-2">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="text-center bg-green-200/90 hover:bg-emerald-300 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 col-span-2">
            <Card className="hover:bg-emerald-300/90 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h4 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Our Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional beauty services while empowering
                  aspiring makeup artists with professional skills and industry
                  knowledge to build successful careers.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:bg-emerald-300/90 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <h4 className="font-serif text-2xl font-bold mb-4 text-foreground">
                  Our Vision
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading makeup studio and training center,
                  recognized for excellence in beauty services and for nurturing
                  the next generation of makeup professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
