/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactInfo, socialLinks } from "@/constant/constant";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };
  return (
    <section id="contact" className="py-20 bg-background  bg-gradient-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your look or start your makeup career? Contact us
            today!
          </p>
        </div>

        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="bg-green-200/90 ">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone *
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Service Interested In
                      </label>
                      <Input
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        placeholder="Bridal makeup, Training course, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your requirements..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="luxury" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-scale-in">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="hover:bg-green-200 transition-all duration-300 cursor-pointer group bg-green-200/90  "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary rounded-full p-3 group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-foreground">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground whitespace-pre-line mb-3">
                          {info.content}
                        </p>
                        <Button
                          // variant="outline"
                          size="sm"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media Links */}
              <Card className="bg-green-200/90 ">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-foreground ">
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
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Follow us for daily makeup tips, student work, and
                    behind-the-scenes content!
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-green-200/90  ">
                <CardContent className="p-0">
                  <div className="bg-muted h-48 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Studio Location</p>
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
