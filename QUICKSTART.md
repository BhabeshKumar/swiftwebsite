# Quick Start Guide

## 1️⃣ Install & Run

```bash
# Navigate to project directory
cd swiftai-website

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 2️⃣ Make Changes

Edit components in `app/components/`:
- **Hero.tsx** - Main hero section with CTA
- **Services.tsx** - Service offerings
- **Process.tsx** - 5-step process timeline
- **Contact.tsx** - Email contact section
- **Footer.tsx** - Footer with company info

All changes auto-reload in the browser.

## 3️⃣ Customize

### Update Company Info
Edit `app/components/Contact.tsx` and `app/components/Footer.tsx`:
```tsx
support@swiftai.live  // Change email here
21ABKPM7707M1ZE      // Change GSTIN here
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  accent: '#06b6d4',      // Cyan
  'accent-dark': '#0891b2',
  // ... modify as needed
}
```

### Modify Content
Update text directly in component files. Example in `Hero.tsx`:
```tsx
<h1>Build AI Systems That Actually Work in Production</h1>
```

## 4️⃣ Build for Production

```bash
npm run build
npm start
```

Output is in the `.next/` directory.

## 5️⃣ Deploy

### To Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### To Docker
```bash
docker build -t swiftai .
docker run -p 3000:3000 swiftai
```

### To Any Node Host
Upload the entire project after `npm run build`.

## File Structure

```
app/
├── components/          # Reusable React components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── UseCases.tsx
│   ├── Experience.tsx
│   ├── TechStack.tsx
│   ├── CTA.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── TrustStrip.tsx
│   ├── WhySwiftAi.tsx
│   └── Button.tsx
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Home page

public/                 # Static files
next.config.js          # Next.js config
tailwind.config.js      # Tailwind CSS config
package.json            # Dependencies
```

## Common Tasks

### Add a New Section
1. Create `app/components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to the page JSX

### Add Images
Place in `public/images/` and reference:
```tsx
<img src="/images/logo.png" alt="Logo" />
```

### Update Metadata
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description',
}
```

### Modify Animations
Edit Framer Motion props in components:
```tsx
animate={{ y: [0, 30, 0] }}
transition={{ duration: 8, repeat: Infinity }}
```

## Troubleshooting

**Server won't start?**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

**Styles not showing?**
```bash
# Rebuild Tailwind
npm run build
```

**Port 3000 in use?**
```bash
# Kill the process
lsof -i :3000
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

## Next Steps

- [ ] Customize company info and contact details
- [ ] Update colors to match brand guidelines
- [ ] Add logo/images in public folder
- [ ] Set up domain name
- [ ] Deploy to hosting provider
- [ ] Set up analytics
- [ ] Add contact form backend
- [ ] Implement SEO meta tags

## Support

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)

---

**Happy building! 🚀**
