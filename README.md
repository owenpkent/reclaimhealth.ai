# ReclAIm Landing Page

A modern, responsive landing page for ReclAIm - AI-powered appeals to reclaim your right to care.

## Features

- **Static HTML**: Simple, fast-loading single page
- **Tailwind CSS v3**: Modern utility-first CSS framework via CDN
- **Vanilla JavaScript**: Stable, dependency-free interactions
- **Google Forms Integration**: Easy lead collection without backend
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Vanta.js Animation**: Animated wave background with fallback
- **Error Handling**: Comprehensive fallback support

## Sections

- **Hero** - Main headline and CTAs with animated background
- **Problem** - Insurance denial statistics and impact
- **Solution** - How ReclAIm works (4-step process)
- **Features** - Key product features with icons
- **Impact** - Market size and year 1 goals
- **Credibility** - Testimonials and partnerships
- **Signup** - Google Forms integration for lead collection
- **Footer** - Links and contact info

## Tech Stack

- **HTML5** - Semantic, accessible markup
- **Tailwind CSS v3** - Utility-first CSS via CDN
- **Vanilla JavaScript** - No frameworks or dependencies
- **Vanta.js** - 3D animated backgrounds via CDN
- **Google Forms** - Lead collection (no backend needed)

## Getting Started

### Prerequisites
- Any modern web browser
- Python 3 (for local development server)

### Local Development

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd reclaimhealth.ai
   ```

2. **Start a local server**:
   ```bash
   python -m http.server 8000
   ```

3. **Open** [http://localhost:8000](http://localhost:8000) in your browser

## Google Forms Setup

1. Create a Google Form with fields for:
   - Name
   - Email
   - Role (Patient, Caregiver, Advocate, Hospital Admin, Investor, Other)
   - Optional message

2. Get the embed URL from Google Forms

3. Update the iframe src in `index.html`:
   ```html
   src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
   ```

## Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: (leave empty - static site)
3. Publish directory: `/` (root directory)
4. Deploy automatically on push to main branch

The `netlify.toml` file is already configured for static deployment.

## Customization

### Colors
Colors are defined in the Tailwind configuration within the HTML file. Modify the `tailwind.config` object to match your brand colors.

### Content
All content is contained within `index.html`. Edit the HTML directly to update text, images, and structure.

### JavaScript
Modify `script.js` to adjust interactions, animations, and functionality.

## Project Structure

```
├── index.html              # Main HTML file with all content
├── script.js               # JavaScript for interactions
├── netlify.toml           # Netlify deployment configuration
├── public/                # Static assets (favicon, images)
├── .gitignore            # Git ignore rules
└── README.md             # This documentation
```

## Copyright

Copyright (c) 2025 Owen Kent. All rights reserved.

This software and associated files are proprietary and confidential. 
No part of this software may be used, copied, modified, merged, published, 
distributed, sublicensed, or sold without prior written permission from the copyright holder.
