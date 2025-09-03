import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Heart,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Bridal Makeup",
    "Party Makeup",
    "Hair Styling",
    "HD Makeup",
    "Group Bookings",
  ];

  const courses = [
    "Basic Makeup Course",
    "Professional Diploma",
    "Bridal Specialist",
    "Advanced Techniques",
    "Business Training",
  ];

  return (
    <footer className="bg-black text-white text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-accent" />
              <span className="font-display font-bold text-xl">
                DreamShades Makeover Studio
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Professional makeup services and certified training courses at
              DreamShades Makeover Studio & Unisex Professional Academy.
              Transform your beauty journey with expert guidance and premium
              services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-pink-500 text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-blue-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-red-600 text-white p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Bhagya Laxmi Residence, 1st floor
                  <br />
                  Manikonda Rd, near Bhimas Hotel
                  <br />
                  OU Colony, Shaikpet
                  <br />
                  Hyderabad, Telangana 500008
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/80">info@dreamshades.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Training Courses */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <h3 className="font-semibold text-lg mb-4 text-center">
            Training Courses
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {courses.map((course) => (
              <span
                key={course}
                className="bg-background/10 text-background px-3 py-1 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 DreamShades Makeover Studio & Unisex Professional Academy.
            All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-accent mx-1" /> for beauty
            enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
