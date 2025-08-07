# ReclAIm Landing Page

A production-ready landing page for ReclAIm, an AI-powered platform that helps patients fight back against insurance denials and reclaim their right to care.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **shadcn/ui** components for consistent design
- **Netlify Forms** integration with honeypot spam protection
- **Mobile-first** responsive design
- **SEO optimized** with proper meta tags
- **Accessible** design following WCAG guidelines

## Pages

- **Home** (`/`) - Main landing page with all sections
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Contact** (`/contact`) - Contact form and company info
- **Thank You** (`/thank-you`) - Post-signup confirmation

## Sections

1. **Hero** - Main headline and CTAs
2. **Problem** - Statistics about insurance denials
3. **Solution** - How ReclAIm works
4. **Features** - Platform capabilities
5. **Impact** - Market statistics and goals
6. **Credibility** - Founder and company info
7. **Partner CTA** - Call for partnerships and investment
8. **Signup Form** - Lead capture with role selection
9. **Footer** - Links and legal disclaimers

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/reclaim-landing.git
cd reclaim-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Netlify

This project is configured for deployment on Netlify with:

- `netlify.toml` configuration
- Next.js plugin
- Form handling
- Honeypot spam protection

To deploy:

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment variables (if needed) can be set in Netlify dashboard

### Build for Production

```bash
npm run build
npm start
```

## Form Integration

The signup form includes:

- **Netlify Forms** integration
- **Honeypot protection** against spam
- **Role selection** dropdown
- **Required fields** validation
- **Privacy notice** microcopy

Form submissions will appear in your Netlify dashboard under the "Forms" tab.

## Customization

### Content

All content is located in the component files under `components/sections/`. Update the text directly in these files.

### Styling

The project uses Tailwind CSS with custom CSS variables. Main styling is in:
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.js` - Tailwind configuration
- Component-specific styles in each component

### Components

UI components are built with shadcn/ui and located in `components/ui/`. These can be customized or extended as needed.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Forms**: Netlify Forms
- **Deployment**: Netlify
- **Language**: TypeScript

## License

This project is proprietary to ReclAIm. All rights reserved.

## Contact

For questions about this landing page, contact hello@reclaim.health.
