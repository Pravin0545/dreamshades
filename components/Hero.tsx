"use client";

import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import heroImage from "@/assets/hero-makeup-studio.jpg";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { stats } from "@/constant/constant";

const Hero = () => {
  return (
    <Section
      variant="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Professional Makeup Studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/10 dark:from-black/90 dark:via-black/60 dark:to-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Heading
            as="h1"
            size="2xl"
            className="mb-6 leading-tight text-gray-900 dark:text-white"
          >
            Transform Your
            <span className="block bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: [
                    "Beauty Journey",
                    "Radiant Glow",
                    "Elegant You",
                    "Style",
                    "Confidence",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </Heading>

          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed text-gray-700 dark:text-white/90">
            Professional makeover services and certified makeup training courses
            by industry experts with 10+ years of experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="luxury" size="lg" className="group" asChild>
              <Link href="/book-now">
                Book Your Makeover
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/20 text-gray-900 dark:text-white hover:bg-white/40"
              asChild
            >
              <Link href="/training">Explore Training Courses</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map(({ icon: Icon, value, label, delay }) => (
              <div
                key={label}
                className={`text-center animate-scale-in ${delay}`}
              >
                <div className="flex items-center justify-center mb-2">
                  <Icon className="h-6 w-6 text-pink-500 mr-2" />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {value}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 dark:bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
