import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { CardCarousel } from "@/components/ui/card-carousel";
import { achievements, certifications } from "@/constant/constant";

const About = () => {
  const images = [
    { src: "/images/aboutImg/image1.jpg", alt: "Image 1" },
    { src: "/images/aboutImg/image2.jpg", alt: "Image 2" },
    { src: "/images/aboutImg/image3.jpg", alt: "Image 3" },
    { src: "/images/aboutImg/image4.jpg", alt: "Image 4" },
    { src: "/images/aboutImg/image5.jpg", alt: "Image 5" },
    { src: "/images/aboutImg/image6.jpg", alt: "Image 6" },
    { src: "/images/aboutImg/image8.jpg", alt: "Image 8" },
    { src: "/images/aboutImg/image10.jpg", alt: "Image 10" },
    { src: "/images/aboutImg/image11.jpg", alt: "Image 11" },
    { src: "/images/aboutImg/award1.jpg", alt: "Image 7" },
    { src: "/images/aboutImg/award2.jpg", alt: "Image 9" },
  ];

  return (
    <Section id="about" variant="soft">
      <Container size="xl">
        <div className="max-w-6xl grid grid-cols-2 gap-2 mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up col-span-2">
            <Heading size="xl" className="mb-6 text-[color:var(--foreground)]">
              About DreamShades Makeover Studio
            </Heading>
            <p className="text-xl text-[color:var(--muted-foreground)] max-w-3xl mx-auto">
              Experience the perfect blend of artistry and expertise—delivering
              breathtaking transformations today, while inspiring and shaping
              tomorrow’s makeup professionals.
            </p>
          </div>

          {/* Content + Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 col-span-2">
            <div className="animate-fade-in-up">
              <h3 className="font-serif text-3xl font-bold mb-6 text-[color:var(--foreground)]">
                Meet Our Lead Artist & Trainer
              </h3>

              <div className="space-y-4 text-[color:var(--muted-foreground)] text-lg leading-relaxed mb-8">
                <p>
                  Welcome to DreamShades Makeover Studio & Unisex Professional
                  Academy. Where passion meets perfection in the world of beauty
                  and makeup artistry.
                </p>
                <p>
                  Founded by renowned professionals DR.CH Rajesh and CH Uma
                  Maheshwari, DreamShades is more than a studio—it’s a
                  destination where artistry, expertise, and recognition come
                  together.
                </p>
                <p>
                  Our team has collaborated with celebrities, fashion shows,
                  magazine shoots and high-profile weddings, gaining trust and
                  acclaim for exceptional skills and visionary artistry. From
                  bridal transformations to editorial shoots, our work reflects
                  both precision and creativity.
                </p>
                <p>
                  DreamShades is also a center of excellence in training,
                  empowering aspiring makeup artists with personalized guidance
                  and international standards. With certifications and honors
                  including:
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h4 className="font-semibold text-lg mb-4 text-[color:var(--foreground)]">
                  Professional Certifications:
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center text-[color:var(--muted-foreground)]"
                    >
                      <Star
                        className="h-4 w-4 mr-3 flex-shrink-0 text-[color:var(--accent)]"
                        aria-hidden
                      />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image carousel placed inside a dark translucent panel for lower glare */}
            <div className="animate-scale-in">
              <div className="rounded-lg overflow-hidden bg-black/40 backdrop-blur-md border border-white/6 p-2">
                <CardCarousel
                  images={images}
                  autoplayDelay={2000}
                  showPagination
                  showNavigation
                />
              </div>
            </div>
          </div>

          {/* Achievements Grid - muted card backgrounds */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 col-span-2">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="text-center bg-[color:var(--muted)] hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="icon-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-[color:var(--primary-foreground)]" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-[color:var(--foreground)]">
                    {achievement.title}
                  </h4>
                  <p className="text-[color:var(--muted-foreground)] text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & Vision - muted cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 col-span-2">
            <Card className="transition-all duration-300 bg-[color:var(--muted)]">
              <CardContent className="p-8 text-center">
                <h4 className="font-serif text-2xl font-bold mb-4 text-[color:var(--foreground)]">
                  Our Mission
                </h4>
                <p className="text-[color:var(--muted-foreground)] leading-relaxed">
                  To provide exceptional beauty services while empowering
                  aspiring makeup artists with professional skills and industry
                  knowledge to build successful careers.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 bg-[color:var(--muted)]">
              <CardContent className="p-8 text-center">
                <h4 className="font-serif text-2xl font-bold mb-4 text-[color:var(--foreground)]">
                  Our Vision
                </h4>
                <p className="text-[color:var(--muted-foreground)] leading-relaxed">
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
