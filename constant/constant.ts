import {
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Youtube,
  Star,
  Palette,
  Camera,
  Scissors,
} from "lucide-react";

import makeupServiceImage from "@/assets/makeup-service.jpg";
import bridalMakeupImage from "@/assets/bridal-makeup.jpg";

export const certifications = [
  "International Makeup Artist Certification",
  "Bridal Makeup Specialist Certification",
  "Airbrush Makeup Expert",
  "Hair Styling Professional",
  "Beauty Business Management",
];
export const achievements = [
  {
    icon: Award,
    title: "Industry Expert",
    description: "10+ years in professional makeup artistry",
  },
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Trusted by celebrities and brides",
  },
  {
    icon: Calendar,
    title: "200+ Students Trained",
    description: "Successful makeup artists across India",
  },
  {
    icon: Star,
    title: "Award Winner",
    description: "Best Makeup Artist Award 2023",
  },
];

export const services = [
  "Bridal Makeup",
  "Party Makeup",
  "HD/3D Makeup",
  "Glossy Makeup",
  "Hair Styling",
  "Skin Treatment",
  "Full Makeover Package",
];

export const servicesDetails = [
  {
    icon: Palette,
    title: "Bridal Makeup",
    description:
      "Complete bridal makeover with HD makeup, hairstyling, and pre-wedding trials",
    price: "Starting from ₹15,000",
    image: bridalMakeupImage,
    features: [
      "HD/3D Makeup",
      "Hair Styling",
      "Pre-wedding Trial",
      "Touch-up Kit",
    ],
  },
  {
    icon: Camera,
    title: "Party & Event Makeup",
    description: "Glamorous makeup for parties, events, and special occasions",
    price: "Starting from ₹5,000",
    image: makeupServiceImage,
    features: ["Party Makeup", "Event Styling", "Photo Ready", "Long Lasting"],
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Professional hair styling, cuts, and treatments for all occasions",
    price: "Starting from ₹2,500",
    image: makeupServiceImage,
    features: ["Styling", "Cutting", "Treatment", "Color"],
  },
  {
    icon: Users,
    title: "Group Bookings",
    description:
      "Special packages for bridal parties, family functions, and group events",
    price: "Custom Pricing",
    image: bridalMakeupImage,
    features: [
      "Group Discount",
      "On-location",
      "Multiple Artists",
      "Package Deals",
    ],
  },
];

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

export const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    content:
      "Bhagya Laxmi Residence, 1st floor\nManikonda Rd, near Bhimas Hotel\nOU Colony, Shaikpet\nHyderabad, Telangana 500008",
    action: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 98765 43210\n+91 98765 43211",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@dreamshades.com\nbookings@dreamshades.com",
    action: "Send Email",
  },
  {
    icon: Clock,
    title: "Studio Hours",
    content: "Mon-Sat: 9:00 AM - 8:00 PM\nSun: 10:00 AM - 6:00 PM",
    action: "Book Appointment",
  },
];

export const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/dreamshades.hyd/",
    color: "bg-pink-500",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/people/dreamshadeshyd/61550059456992/#",
    color: "bg-blue-600",
  },
  {
    icon: Youtube,
    name: "YouTube",
    href: "https://www.youtube.com/@dreamshades.hyd.",
    color: "bg-red-600",
  },
];

export const courses = [
  "Basic Makeup Course (1 Month)",
  "Professional Makeup Diploma (3 Months)",
  "Advanced Bridal Makeup (6 Weeks)",
  "HD & 3D Makeup Masterclass (2 Weeks)",
  "Hair Styling Course (1 Month)",
  "Complete Beauty Package (6 Months)",
];

export const coursesDetails = [
  {
    title: "Basic Makeup Artistry",
    description:
      "Foundation course covering basic makeup techniques and color theory",
    duration: "4 Weeks",
    students: "15",
    price: "₹25,000",
    level: "Beginner",
    modules: [
      "Skin prep and base makeup",
      "Eye makeup basics",
      "Color theory",
      "Basic tools and hygiene",
      "Client consultation",
    ],
  },
  {
    title: "Professional Makeup Diploma",
    description:
      "Comprehensive program covering all aspects of professional makeup artistry",
    duration: "12 Weeks",
    students: "12",
    price: "₹75,000",
    level: "Advanced",
    featured: true,
    modules: [
      "Advanced makeup techniques",
      "Bridal and party makeup",
      "HD and airbrush makeup",
      "Portfolio development",
      "Business and marketing",
      "Internship opportunities",
    ],
  },
  {
    title: "Bridal Makeup Specialist",
    description:
      "Specialized course focusing on bridal makeup trends and techniques",
    duration: "6 Weeks",
    students: "10",
    price: "₹45,000",
    level: "Intermediate",
    modules: [
      "Bridal makeup trends",
      "Long-lasting techniques",
      "Hair styling basics",
      "Client management",
      "Regional bridal styles",
    ],
  },
];

export const certificationBenefits = [
  "Industry-recognized certificate",
  "Lifetime placement assistance",
  "Professional makeup kit included",
  "Master class with celebrity artists",
  "Business setup guidance",
  "Alumni network access",
];
export const experienceLevels = [
  "Complete Beginner",
  "Some Experience",
  "Intermediate Level",
  "Looking to Upgrade Skills",
];

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Training", href: "/training" },
  { name: "Contact", href: "/contact" },
];

export const testimonials = [
  {
    name: "Rajesh & Priya Wedding",
    role: "Bridal Client",
    content:
      "Absolutely stunning work! Priya made me look like a dream on my wedding day. The makeup lasted 12+ hours and looked flawless in all photos. Highly recommend!",
    rating: 5,
    image: "👰",
  },
  {
    name: "Sneha Kapoor",
    role: "Makeup Artist Graduate",
    content:
      "The professional diploma course changed my life! The training was comprehensive and now I run my own successful makeup studio. Thank you for the amazing mentorship!",
    rating: 5,
    image: "🎨",
  },
  {
    name: "Rohit & Meera",
    role: "Party Makeup Client",
    content:
      "Perfect party makeup for our anniversary celebration. The team was professional, punctual, and the results were gorgeous. Will definitely book again!",
    rating: 5,
    image: "✨",
  },
  {
    name: "Anjali Sharma",
    role: "Bridal Specialist Student",
    content:
      "Best investment I ever made! The bridal makeup course was detailed and practical. I'm now booked solid with bridal clients. Excellent training program!",
    rating: 5,
    image: "💄",
  },
  {
    name: "Kavya & Family",
    role: "Group Booking",
    content:
      "Booked for our family function - they handled 8 people perfectly! Everyone looked amazing and the service was top-notch. Very professional team.",
    rating: 5,
    image: "👨‍👩‍👧‍👦",
  },
  {
    name: "Deepika Rao",
    role: "Advanced Course Graduate",
    content:
      "The advanced techniques I learned here are incredible. HD makeup, airbrush training, everything was hands-on. Now working with top photographers!",
    rating: 5,
    image: "📸",
  },
];
