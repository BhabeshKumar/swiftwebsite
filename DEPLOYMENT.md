# SwiftAi Landing Page - Deployment Guide

## Local Development

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Building for Production

```bash
# Build the production bundle
npm run build

# Start production server
npm start
```

The `.next` folder contains the compiled Next.js application ready for deployment.

## Deployment Options

### Vercel (Recommended)
Vercel is the official hosting platform for Next.js and provides the best experience:

```bash
npm install -g vercel
vercel
```

### Docker
Build a Docker image for containerized deployment:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t swiftai-landing .
docker run -p 3000:3000 swiftai-landing
```

### Static Export (if needed)
For static hosting, update `next.config.js`:

```js
const nextConfig = {
  output: 'export',
  // ... other config
}
```

Then:
```bash
npm run build
# Output is in the 'out' directory
```

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example
NEXT_PUBLIC_API_URL=https://api.swiftai.live
```

## Performance

- **Automatic Code Splitting**: Each page only loads what it needs
- **Image Optimization**: Next.js automatically optimizes images
- **Font Optimization**: Google Fonts are optimized and cached
- **CSS Optimization**: Tailwind CSS is purged to remove unused styles

### Core Web Vitals

Monitor performance metrics:
- Largest Contentful Paint (LCP): ~2.5s
- First Input Delay (FID): ~100ms
- Cumulative Layout Shift (CLS): ~0.1

Use Google PageSpeed Insights for detailed analysis.

## SEO

The site includes:
- Proper meta tags and Open Graph tags
- Mobile-friendly viewport settings
- Semantic HTML structure
- Fast loading times
- Mobile responsiveness

## Security Headers

Add these headers in `next.config.js` or your hosting provider:

```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Monitoring & Analytics

Add analytics tracking by integrating services like:
- Google Analytics
- Vercel Analytics
- Mixpanel

## Maintenance

### Updating Dependencies

```bash
npm update
npm audit fix
```

### TypeScript Checking

```bash
npm run typecheck
# (Add to package.json scripts if needed)
```

## Custom Domain

1. Purchase a domain (e.g., swiftai.live)
2. Update DNS records pointing to your hosting provider
3. Configure SSL/TLS (usually automatic on Vercel)

## Support

For issues:
1. Check [Next.js Documentation](https://nextjs.org/docs)
2. Review the project [README.md](./README.md)
3. Check console logs for errors

## Performance Budget

- Home page: < 100KB gzipped
- Initial load time: < 3s (4G)
- Lighthouse score: > 90

## Future Enhancements

- [ ] Add contact form backend integration
- [ ] Implement email notification system
- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add testimonials/case studies
- [ ] Multi-language support
