# DreamShades Makeover Studio

A professional Next.js 15 website for DreamShades Makeover Studio - a beauty salon and makeup academy in Hyderabad offering bridal makeup services and certified makeup training courses.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript
- **Professional UI**: Custom design system with Tailwind CSS
- **Booking System**: Appointment booking and course enrollment forms
- **Email Notifications**: Automated email confirmations via Nodemailer
- **SEO Optimized**: Comprehensive metadata, structured data (JSON-LD), sitemap
- **Security First**: CSP headers, input validation with Zod, XSS protection
- **Analytics**: Google Tag Manager integration
- **Responsive**: Mobile-first design with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database
- Gmail account for SMTP (or other email service)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dreamshades
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and fill in your credentials:
- `MONGODB_URI`: Your MongoDB connection string
- `PRODUCTION_DB`: Your database name
- `SMTP_USER`: Your email address for sending emails
- `SMTP_PASS`: Your email app password
- `OWNER_EMAIL`: Email to receive form notifications
- `JWT_SECRET` & `REFRESH_TOKEN_SECRET`: Generate secure random strings

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes (appointment, contact, enroll)
│   ├── about/             # About page
│   ├── book-now/          # Booking page
│   ├── contact/           # Contact page
│   ├── training/          # Training courses page
│   └── services/          # Services page
├── components/            # React components
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
│   ├── mongodb.ts        # Database connection
│   ├── transporter.ts    # Email configuration
│   └── validations.ts    # Zod validation schemas
├── models/                # MongoDB models
├── public/                # Static assets
└── constant/              # Constants and configuration
```

## Security Features

- **Input Validation**: All forms validated with Zod schemas
- **Email Validation**: Regex validation in database models
- **Security Headers**: HSTS, CSP, X-Frame-Options, X-Content-Type-Options
- **Rate Limiting**: Recommended to add on production (e.g., with Vercel Edge Config)
- **Environment Variables**: Sensitive data stored in .env (never committed)

## Important Security Notes

⚠️ **BEFORE DEPLOYMENT:**

1. **Rotate all credentials** in your `.env` file
2. **Never commit** `.env` to version control
3. **Add rate limiting** to API routes in production
4. **Enable MongoDB authentication** in production
5. **Use strong passwords** for all services
6. **Review CSP headers** and adjust based on your needs

## API Routes

- `POST /api/appointment-booking` - Book appointment
- `POST /api/enroll-course` - Enroll in training course
- `POST /api/contact` - General contact form

All routes return JSON with proper status codes and validation error details.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Database Models

- **BookAppointment**: Appointment bookings with service, date, time
- **EnrollCourse**: Course enrollment with experience level
- **Contact**: General contact form submissions

All models include email validation and timestamps.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS 4
- **Validation**: Zod
- **Email**: Nodemailer
- **UI Components**: Radix UI, Lucide Icons
- **Animations**: Framer Motion, Typewriter Effect

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables in Production

Make sure to set all required environment variables in your hosting platform:
- MONGODB_URI
- PRODUCTION_DB
- SMTP_USER
- SMTP_PASS
- OWNER_EMAIL
- JWT_SECRET
- REFRESH_TOKEN_SECRET

## License

Private project for DreamShades Makeover Studio.

## Support

For issues or questions, contact the development team.
