import { courses, navItems, services } from "@/constant/constant";
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
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
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
            <p className="text-gray-400 leading-relaxed">
              Professional makeup services and certified training courses at
              DreamShades Makeover Studio & Unisex Professional Academy.
              Transform your beauty journey with expert guidance and premium
              services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="bg-pink-500 p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="bg-red-600 p-2 rounded-full hover:scale-110 transition-transform"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
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
                <span className="text-gray-400">
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
                <a href="tel:+919876543210" className="text-gray-400">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@dreamshades.com" className="text-gray-400">
                  info@dreamshades.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Training Courses */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h3 className="font-semibold text-lg mb-4 text-center">
            Training Courses
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {courses.map((course) => (
              <span
                key={course}
                className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 DreamShades Makeover Studio & Unisex Professional Academy.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 text-accent mx-1" /> for beauty
            enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
