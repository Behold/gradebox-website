# Gradebox Landing Page

A modern, responsive landing page for Gradebox built with Next.js, shadcn/ui, and GSAP animations.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: GSAP with ScrollTrigger
- **TypeScript**: Full type safety

## Project Structure

```
gradebox-landing/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx       # Button component
│   │   └── container.tsx    # Layout container (1280px max-width)
│   └── sections/            # Page sections
│       └── hero-section.tsx # Hero section component
├── hooks/
│   └── use-gsap-animations.ts # Custom GSAP animation hook
└── lib/
    └── utils.ts             # Utility functions
```

## Key Features

### Responsive Design

- **Container**: 1280px max-width with responsive padding
- **Mobile-first**: Scales beautifully across all devices
- **Accessible**: WCAG compliant with proper semantic HTML

### Animation System

- **GSAP Integration**: Smooth scroll-based animations
- **Custom Hook**: Reusable animation logic (`useGSAPAnimations`)
- **Performance**: Optimized with proper cleanup and context management

### Component Architecture

- **Modular**: Easy to extend with new sections
- **Reusable**: Container and animation components
- **Type-safe**: Full TypeScript support

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## Customization

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and use the `Container` component for consistent layout
3. Use the `useGSAPAnimations` hook for animations
4. Add the section to `app/page.tsx`

### Animation Types

The `useGSAPAnimations` hook supports:

- `fadeIn`: Simple opacity animation
- `slideUp`: Slide up with fade
- `slideDown`: Slide down with fade
- `scaleIn`: Scale with fade
- `custom`: Custom animation properties

### Scroll Animations

- `fadeOut`: Fade out on scroll
- `parallax`: Parallax effect
- `scale`: Scale effect
- `custom`: Custom scroll animations

## Next Steps

1. **Add your hero section code** - Replace the placeholder content
2. **Integrate Figma design** - Apply your visual design
3. **Add SVGs and assets** - Replace placeholder content
4. **Extend with more sections** - Features, testimonials, etc.

## Performance

- **Lazy loading**: Components load as needed
- **Animation optimization**: GSAP context management
- **Bundle optimization**: Tree-shaking and code splitting
- **Image optimization**: Next.js Image component ready

## Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: Screen reader support
- **Keyboard navigation**: Full keyboard accessibility
- **Color contrast**: WCAG AA compliant
