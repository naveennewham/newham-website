# CCorex Website Architecture Documentation

## Overview
This project contains two separate Nuxt 3 applications:
1. **Main Newham Website** - The primary website with CCorex overview section
2. **Standalone CCorex Site** - A dedicated microsite for CCorex with complete product information

## Project Structure

```
newham-website/
├── apps/
│   └── ccorex-site/              # Standalone CCorex microsite
│       ├── components/
│       │   └── Navbar.vue        # CCorex site navigation
│       ├── layouts/
│       │   └── default.vue       # Default layout
│       ├── pages/
│       │   ├── index.vue         # Homepage (11 sections)
│       │   ├── platform.vue      # Platform overview
│       │   ├── products.vue      # Products hub
│       │   ├── products/
│       │   │   ├── deepcost.vue      # DeepCost product page
│       │   │   ├── deeptrack.vue     # DeepTrack product page
│       │   │   ├── deephr.vue        # DeepHR product page
│       │   │   └── deepplanai.vue    # DeepPlan AI product page
│       │   ├── solutions.vue     # Solutions page
│       │   ├── industries.vue    # Industries page
│       │   ├── resources.vue     # Resources hub
│       │   ├── pricing.vue       # Pricing page
│       │   ├── about.vue         # About page
│       │   └── contact.vue       # Contact page with demo form
│       ├── public/
│       │   └── ccorex-logo.png   # CCorex logo
│       ├── nuxt.config.ts        # Nuxt configuration
│       ├── tailwind.config.ts    # Tailwind configuration
│       └── package.json
│
├── components/
│   ├── layout/
│   │   └── Navbar.vue            # Main site navigation
│   ├── home/
│   │   └── ProductsSection.vue   # Products section with CCorex card
│   └── ccorex/
│       ├── CCorexHero.vue        # CCorex hero section
│       ├── CCorexSubnav.vue      # CCorex sub-navigation
│       ├── AppsShowcase.vue      # Apps showcase
│       └── CtaSection.vue        # CTA section
│
├── pages/
│   ├── index.vue                 # Main homepage
│   └── ccorex/
│       ├── index.vue             # CCorex overview page
│       ├── deepcost.vue          # DeepCost detail page
│       ├── deeptrack.vue         # DeepTrack detail page
│       ├── deephr.vue            # DeepHR detail page
│       └── deepplan-ai.vue       # DeepPlan AI detail page
│
├── assets/
│   ├── ccorex/
│   │   └── Corex_logo.png        # CCorex logo (used in main site)
│   ├── Newham_Logo.png
│   └── [other logos]
│
├── nuxt.config.ts                # Main site Nuxt config
├── tailwind.config.js            # Main site Tailwind config
└── package.json                  # Main site dependencies
```

## Architecture Decisions

### 1. Dual-Site Approach
- **Main Site**: Showcases all Newham services including CCorex overview
- **Standalone Site**: Dedicated CCorex microsite with complete product details
- **Benefit**: Separation of concerns, independent deployment, focused user experience

### 2. Logo Asset Management
- **Main Site**: Uses `~/assets/ccorex/Corex_logo.png` with Nuxt asset pipeline
- **Standalone Site**: Uses `/ccorex-logo.png` from public folder
- **CSS Filters**: `brightness-0 invert` applied for visibility on dark backgrounds

### 3. Navigation Flow
- Main site CCorex section has "Explore CCorex Site" button
- Opens standalone site in new tab via runtime config
- Default URL: `http://localhost:3000` (configurable via `CCOREX_BASE_URL` env var)

### 4. Port Configuration
- **Main Site**: Port 3005 (`npm run dev:main`)
- **Standalone CCorex Site**: Port 3000 (`npm run dev`)
- **No Conflicts**: Different ports allow both to run simultaneously

## Technology Stack

### Main Site
- **Framework**: Nuxt 3.11.0
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: animate.css 4.1.1
- **Components**: Swiper 11.2.10
- **Runtime**: Node.js with Vue 3.3.4

### Standalone CCorex Site
- **Framework**: Nuxt 3.21.2
- **Styling**: Tailwind CSS (via @nuxtjs/tailwindcss 6.12.0)
- **Runtime**: Node.js with Vue 3.5.30
- **Build Tool**: Vite 7.3.1

## Color Scheme

### Primary Colors (Cyan)
- `primary-400`: #22d3ee
- `primary-500`: #06b6d4

### Secondary Colors (Teal)
- `secondary-400`: #2dd4bf
- `secondary-500`: #14b8a6

### Background
- Dark slate gradients: `from-slate-900 via-slate-800 to-slate-900`
- Glass morphism effects with backdrop blur

## Key Features

### Standalone CCorex Site
1. **Homepage**: 11 comprehensive sections following Zoho One structure
2. **Platform Page**: Architecture, data flow, capabilities, API, security
3. **Products Hub**: Overview of all 4 apps with comparison table
4. **Detailed Product Pages**: 
   - DeepCost: Estimation & tendering
   - DeepTrack: Project management & budget control
   - DeepHR: Workforce management
   - DeepPlan AI: AI-powered takeoffs
5. **Solutions**: Role-based solutions (contractors, subcontractors, etc.)
6. **Industries**: Sector-specific content with case studies
7. **Resources**: Blog, guides, documentation hub
8. **Pricing**: 3-tier structure (Starter/Professional/Enterprise)
9. **About**: Mission, vision, team, company story
10. **Contact**: Demo request form with full fields

### Main Site Integration
- CCorex overview section on homepage
- Individual product detail pages
- Seamless navigation to standalone site
- Consistent branding and design language

## Development Commands

### Main Site
```bash
# Development (port 3005)
npm run dev:main

# Build
npm run build

# Preview
npm run preview
```

### Standalone CCorex Site
```bash
cd apps/ccorex-site

# Development (port 3000)
npm run dev

# Build
npm run build

# Preview
npm run preview
```

### Run Both Sites
```bash
# From root directory
npm run dev:all
```

## Configuration

### Runtime Config (Main Site)
```typescript
runtimeConfig: {
  public: {
    ccorexBaseUrl: process.env.CCOREX_BASE_URL || 'http://localhost:3000'
  }
}
```

### Environment Variables
- `CCOREX_BASE_URL`: URL for standalone CCorex site (default: http://localhost:3000)

## Best Practices

### 1. Asset Management
- Use Nuxt asset pipeline (`~/assets/`) for main site
- Use public folder for standalone site static assets
- Apply CSS filters for logo visibility on dark backgrounds

### 2. Component Organization
- Shared components in `/components`
- Page-specific components in page directories
- Reusable UI patterns extracted to components

### 3. Styling
- Tailwind utility classes for consistency
- Glass morphism effects for modern UI
- Responsive design with mobile-first approach
- Dark theme optimized

### 4. Performance
- Lazy loading for images and components
- Optimized bundle sizes
- Server-side rendering (SSR) enabled
- Static generation for production

## Known Issues & Solutions

### Issue 1: IPC Connection Closed
**Cause**: Nuxt dev server process crash
**Solution**: Restart dev server with `npm run dev`

### Issue 2: Logo Import Errors
**Cause**: Incorrect asset paths or missing files
**Solution**: 
- Main site: Use `~/assets/ccorex/Corex_logo.png`
- Standalone: Use `/ccorex-logo.png` from public folder
- Apply `brightness-0 invert` CSS filters

### Issue 3: Port Conflicts
**Cause**: Multiple dev servers on same port
**Solution**: 
- Kill all node processes: `pkill -9 node`
- Use designated ports (3005 for main, 3000 for CCorex)

## Deployment Considerations

### Main Site
- Deploy to production with environment variable for CCorex site URL
- Set `CCOREX_BASE_URL` to production CCorex URL

### Standalone CCorex Site
- Can be deployed independently
- Update main site config to point to production URL
- Consider subdomain: `ccorex.newham.com` or separate domain

## Future Enhancements

1. **Media Assets**: Replace placeholder tags with actual videos, screenshots, diagrams
2. **Backend Integration**: Connect contact forms to backend API
3. **Analytics**: Add tracking for user behavior and conversions
4. **SEO**: Optimize meta tags, structured data, sitemaps
5. **Performance**: Implement image optimization, lazy loading
6. **Testing**: Add unit tests, E2E tests with Playwright
7. **CMS Integration**: Consider headless CMS for content management

## Maintenance

### Regular Tasks
- Update dependencies quarterly
- Review and update content
- Monitor performance metrics
- Check for broken links
- Update screenshots and media

### Code Quality
- Follow Vue 3 Composition API patterns
- Use TypeScript for type safety
- Maintain consistent code formatting
- Document complex logic
- Keep components small and focused

## Support & Documentation

- **Nuxt 3**: https://nuxt.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vue 3**: https://vuejs.org/guide
- **Project Documentation**: See `SITE_STRUCTURE.md` for detailed content guide

---

**Last Updated**: March 16, 2026
**Version**: 1.0.0
**Maintainer**: Development Team
