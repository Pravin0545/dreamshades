"use client";
import { useState } from "react";
import { MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactInfo, socialLinks } from "@/constant/constant";
import Link from "next/link";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-[color:var(--background)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[color:var(--foreground)]">
            Get In Touch
          </h2>
          <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
            Ready to transform your look or start your makeup career? Contact us
            today!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="bg-[color:var(--muted)]">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-[color:var(--foreground)]">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[color:var(--foreground)]">
                          Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[color:var(--foreground)]">
                          Phone *
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-[color:var(--foreground)]">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-[color:var(--foreground)]">
                        Service Interested In
                      </label>
                      <Input
                        value={formData.service}
                        onChange={(e) =>
                          handleChange("service", e.target.value)
                        }
                        placeholder="Bridal makeup, Training course, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-[color:var(--foreground)]">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Tell us about your requirements..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-full"
                    >
                      <Send className="mr-2 h-4 w-4" aria-hidden />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info + Socials */}
            <div className="space-y-6 animate-scale-in">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="group bg-[color:var(--muted)] hover:shadow-luxury transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full p-3 bg-[color:var(--primary)]/80 text-[color:var(--primary-foreground)] group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-[color:var(--foreground)]">
                          {info.title}
                        </h3>
                        <p className="text-[color:var(--muted-foreground)] whitespace-pre-line mb-3">
                          {info.content}
                        </p>
                        <Link href={info.link}>
                          <Button
                            size="sm"
                            variant="default"
                            className="transition-colors"
                          >
                            {info.action}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="bg-[color:var(--muted)]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-[color:var(--foreground)]">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`${social.color} text-white p-3 rounded-full hover:scale-110 transition-transform`}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-5 w-5 text-[color:var(--accent-foreground)]" />
                      </a>
                    ))}
                  </div>
                  <p className="text-[color:var(--muted-foreground)] text-sm mt-4">
                    Follow us for daily makeup tips, student work, and
                    behind-the-scenes content!
                  </p>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-[color:var(--muted)]">
                <CardContent className="p-0">
                  <div className="bg-[color:var(--muted)] h-48 flex items-center justify-center text-[color:var(--muted-foreground)]">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2 text-[color:var(--accent)]" />
                      <p className="text-[color:var(--foreground)]">
                        Interactive Map
                      </p>
                      <p className="text-sm text-[color:var(--muted-foreground)]">
                        Studio Location
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
