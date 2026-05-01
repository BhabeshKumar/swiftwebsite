# SwiftAi - Premium AI Agency Landing Page

A production-ready landing page for SwiftAi, a premium AI agency specializing in building production-grade AI systems for businesses.

## Features

- **Modern Design**: Dark premium theme with cyan/blue accents inspired by contemporary AI/SaaS platforms
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for interactive elements and scroll effects
- **Production-Grade**: Built with Next.js, TypeScript, and Tailwind CSS
- **SEO-Friendly**: Proper meta tags, semantic HTML, and structured content
- **Performance Optimized**: Fast load times with code splitting and image optimization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **UI Components**: Custom React components

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Hero.tsx        # Hero section with CTA
│   ├── TrustStrip.tsx  # Capabilities strip
│   ├── Services.tsx    # Services cards
│   ├── WhySwiftAi.tsx  # Value propositions
│   ├── Process.tsx     # Process timeline
│   ├── UseCases.tsx    # Real-world use cases
│   ├── Experience.tsx  # Portfolio/experience
│   ├── TechStack.tsx   # Technology stack
│   ├── CTA.tsx         # Call-to-action
│   ├── Contact.tsx     # Contact section
│   ├── Button.tsx      # Reusable button
│   └── Footer.tsx      # Footer
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## Sections

1. **Hero** - Main headline with animated background
2. **Trust Strip** - Key capabilities showcase
3. **Services** - Six service offerings with icons
4. **Why SwiftAi** - Value propositions and differentiators
5. **Process** - Five-step development process
6. **Use Cases** - Real-world application scenarios
7. **Experience** - Portfolio of project types
8. **Tech Stack** - Technologies and tools used
9. **CTA** - Call-to-action section
10. **Contact** - Email contact information
11. **Footer** - Company info and links

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
- `primary`: #0f172a (dark blue)
- `secondary`: #1e293b (slate)
- `accent`: #06b6d4 (cyan)

### Content
All section content is in the component files. Edit the text, descriptions, and links directly in each component.

### Animations
Framer Motion variants are customizable in each component. Adjust `duration`, `delay`, and `transition` properties.

## Building for Production

```bash
npm run build
npm start
```

## Performance Tips

- Use Next.js Image component for images
- Lazy load components with dynamic imports
- Monitor Core Web Vitals with Next.js Analytics
- Compress images and optimize assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 SwiftAi. All rights reserved.

## Contact

For inquiries: support@swiftai.live
