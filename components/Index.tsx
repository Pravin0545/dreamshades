import Hero from "@/components/Hero";
import About from "@/app/about/page";
import Services from "@/app/services/page";
import Training from "@/app/training/page";
import Testimonials from "@/components/Testimonials";
import Contact from "@/app/contact/page";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Training />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
