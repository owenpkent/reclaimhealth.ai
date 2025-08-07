# ReclAIm Landing Page

A simple, high-conversion landing page for ReclAIm - AI-powered appeals to reclaim your right to care.

## Features

- **Simple Landing Page**: Clean, mobile-first design
- **Google Forms Integration**: Easy lead collection without complex backend
- **Responsive Design**: Works perfectly on all devices
- **Fast Performance**: Built with Next.js 14 and Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags and structured data

## Pages

- **Home** (`/`) - Main landing page with all sections
- **Privacy** (`/privacy`) - Privacy policy page
- **Terms** (`/terms`) - Terms of service page

## Sections

- **Hero** - Main headline and CTAs
- **Problem** - Insurance denial statistics and impact
- **Solution** - How ReclAIm works (4-step process)
- **Features** - Key product features with icons
- **Impact** - Market size and year 1 goals
- **Credibility** - Founder info and partnerships
- **Google Form Signup** - Lead collection form
- **Footer** - Links and contact info

## Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Google Forms** - Lead collection (no backend needed)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Google Forms Setup

1. Create a Google Form with fields for:
   - Name
   - Email
   - Role (Patient, Caregiver, Advocate, Hospital Admin, Investor, Other)
   - Optional message

2. Get the embed URL from Google Forms

3. Update the `GoogleFormSignup.tsx` component with your form URL:
   ```tsx
   src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
   ```

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy automatically on push to main branch

### Vercel

1. Import your GitHub repository to Vercel
2. Deploy automatically on push to main branch

## Customization

### Colors
Update the Tailwind config in `tailwind.config.js` to match your brand colors.

### Content
Edit the content in each section component in `components/sections/`.

### Styling
Modify the Tailwind classes in each component to adjust the design.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/
│   ├── sections/          # Landing page sections
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## License

MIT License - feel free to use this template for your own projects.
