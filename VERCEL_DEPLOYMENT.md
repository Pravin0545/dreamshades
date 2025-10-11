# Vercel Deployment Guide for DreamShades

## ✅ Build Status: READY FOR DEPLOYMENT

Your project has been tested and builds successfully without errors!

---

## Pre-Deployment Checklist

### 1. Rotate All Credentials (CRITICAL!)

Before deploying, you MUST change all credentials in your `.env` file:

- MongoDB password
- SMTP password
- JWT secrets
- Any other sensitive data

**Never use development credentials in production!**

### 2. Add OWNER_EMAIL

Make sure your `.env` has:
```
OWNER_EMAIL=dreamshades.hyd@gmail.com
```

---

## Step-by-Step Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Add all changes
git add .

# Commit
git commit -m "Production-ready: Added security improvements and validation"

# Push to GitHub
git push origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

### Step 3: Configure Environment Variables

In Vercel dashboard, add ALL these environment variables:

```
MONGODB_URI=your_new_production_mongodb_uri
PRODUCTION_DB=dremshades
PORT=8088
JWT_SECRET=your_new_jwt_secret
REFRESH_TOKEN_SECRET=your_new_refresh_token_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
OWNER_EMAIL=dreamshades.hyd@gmail.com
```

**Important:**
- Use NEW credentials (not the ones from your `.env`)
- For Gmail SMTP, use an [App Password](https://support.google.com/accounts/answer/185833)
- Keep the PRODUCTION_DB name consistent with your MongoDB database

### Step 4: Deploy

Click "Deploy" and wait for the build to complete.

### Step 5: Test Your Deployment

After deployment, test these endpoints:

1. **Homepage**: `https://your-domain.vercel.app`
2. **Appointment API**: POST to `/api/appointment-booking`
3. **Enroll API**: POST to `/api/enroll-course`
4. **Contact API**: POST to `/api/contact`

---

## Build Warnings (Safe to Ignore)

Your build shows these warnings - they won't affect deployment:

1. **themeColor warnings** - This is a Next.js 15 API change. The site will work fine.
2. **Unused 'toast' variable** - Minor linting warning in contact page.

These are informational only and Vercel will deploy successfully.

---

## Post-Deployment Steps

### 1. Update Your Domain

If using a custom domain:
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

### 2. Test All Forms

Test each form with various inputs:
- Valid data
- Invalid email
- Invalid phone number
- Missing required fields

Verify:
- Form submissions work
- Email notifications are sent
- Validation errors are shown properly

### 3. Check Database

Verify data is being saved to MongoDB:
- Check your MongoDB Atlas dashboard
- Look for new entries in collections

### 4. Monitor Errors

Set up error monitoring:
- Check Vercel logs for any runtime errors
- Monitor MongoDB connection status
- Test email delivery

---

## Troubleshooting

### Build Fails on Vercel

**Issue**: TypeScript or build errors

**Solution**:
1. Run `npm run build` locally first
2. Fix any errors shown
3. Push changes and redeploy

### Database Connection Fails

**Issue**: Can't connect to MongoDB

**Solution**:
1. Check `MONGODB_URI` is correct in Vercel env vars
2. Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
3. Check `PRODUCTION_DB` name matches your database

### Emails Not Sending

**Issue**: Forms submit but no emails received

**Solution**:
1. Verify `SMTP_USER` and `SMTP_PASS` are correct
2. If using Gmail, must use an App Password (not regular password)
3. Check Vercel function logs for email errors

### API Returns 500 Errors

**Issue**: Forms fail with "Server Error"

**Solution**:
1. Check Vercel function logs
2. Verify all environment variables are set
3. Test database connection
4. Check email configuration

---

## Environment Variable Best Practices

### Development vs Production

Keep separate credentials for:
- Development (local `.env`)
- Production (Vercel environment variables)

### Security Tips

1. **Never commit** `.env` to git
2. **Rotate secrets** regularly (every 90 days)
3. **Use strong passwords** (20+ characters)
4. **Enable MongoDB authentication**
5. **Use Gmail App Passwords** for SMTP

### Required Variables Checklist

- [ ] MONGODB_URI (production connection string)
- [ ] PRODUCTION_DB (database name)
- [ ] SMTP_USER (your email)
- [ ] SMTP_PASS (app password)
- [ ] OWNER_EMAIL (notification recipient)
- [ ] JWT_SECRET (32+ character random string)
- [ ] REFRESH_TOKEN_SECRET (32+ character random string)

---

## Performance Optimization (Optional)

Once deployed, you can:

1. **Enable caching** in Vercel
2. **Add analytics** (Vercel Analytics)
3. **Set up monitoring** (Vercel Speed Insights)
4. **Configure CDN** for static assets

---

## Support

If you encounter issues during deployment:

1. Check Vercel deployment logs
2. Review [Vercel documentation](https://vercel.com/docs)
3. Check MongoDB Atlas connection
4. Verify all environment variables

---

## Success Indicators

Your deployment is successful when:

- ✅ Build completes without errors
- ✅ Website loads at your Vercel URL
- ✅ All forms submit successfully
- ✅ Emails are received
- ✅ Data appears in MongoDB
- ✅ No console errors in browser

---

**Last Updated**: October 11, 2025
**Status**: READY FOR PRODUCTION
**Build Test**: ✅ PASSED
