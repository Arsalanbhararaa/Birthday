# Design Guidelines: Cinematic Love Story Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from cinematic storytelling platforms (Netflix's interactive stories), luxury brand experiences (Tiffany & Co., Cartier), and premium portfolio sites (Awwwards winners). The aesthetic merges film-like narrative flow with romantic elegance.

## Core Design Principles
- **Cinematic Immersion**: Full-viewport sections that feel like movie scenes
- **Emotional Pacing**: Controlled reveal animations that build emotional resonance
- **Tactile Elegance**: Soft, touchable visual elements that invite interaction
- **Narrative Flow**: Each section transitions like chapters in a romantic film

## Color Palette

### Primary Colors (Light Mode Only - Dark Romantic Theme)
- **Background**: Deep burgundy-black gradient (0 20% 8% to 340 25% 12%)
- **Primary Accent**: Soft rose gold (15 75% 75%)
- **Secondary Accent**: Blush pink (350 60% 85%)
- **Romantic Highlight**: Warm champagne (45 65% 88%)
- **Text Primary**: Cream white (40 15% 95%)
- **Text Secondary**: Soft gold (35 35% 75%)

### Gradient Overlays
- Hero gradient: Radial from burgundy center to deep purple edges
- Section transitions: Soft rose gold to blush fade
- Interactive elements: Subtle champagne glow on hover

## Typography

**Primary Font**: Playfair Display (Google Fonts) - for headlines, romantic moments
- Hero/Section Titles: 3.5-4.5rem, font-weight 600, letter-spacing -0.02em
- Subheadings: 1.75-2.25rem, font-weight 500

**Secondary Font**: Cormorant Garamond (Google Fonts) - for body, narrative text
- Body text: 1.125-1.25rem, font-weight 400, line-height 1.8
- Captions: 0.95rem, font-weight 300, letter-spacing 0.02em

**Accent Font**: Dancing Script (Google Fonts) - for personal messages, signature
- Personal notes: 1.5rem, font-weight 400
- Signature elements: 2rem, font-weight 600

## Layout System

**Spacing Units**: Use Tailwind units 4, 8, 12, 16, 24 for consistent rhythm
- Section padding: py-24 to py-32
- Component spacing: gap-8 to gap-12
- Micro-spacing: p-4, m-6

**Viewport Strategy**:
- Full-height immersive sections: 100vh for intro, "How We Met," final birthday section
- Natural flow sections: Auto-height with py-24/32 for galleries and message sections
- Breathing room: Never cramped, always elegant spacing between elements

## Component Library

### Navigation
- **Floating Chapter Navigation**: Semi-transparent pill-shaped bar, blurred backdrop, soft shadow
- Position: Fixed right edge (right-8), vertical center
- Chapters indicated with small hearts (filled = current section)
- Smooth scroll behavior with easing

### Intro Section
- Full viewport with radial gradient background
- Centered title animation: fade-up with scale (0.95 to 1)
- Floating particle hearts: 20-30 particles, gentle float animation, varying sizes
- Audio player: Elegant control bar at bottom, waveform visualization
- Entry CTA: "Begin Our Story" button with soft glow

### Section 1: How We Met
- Split-screen diagonal design: Two paths (his/hers) merging at center
- Animated path lines: SVG stroke-dasharray animation from edges to center
- Photo frames: Vintage polaroid style with subtle rotation (-2° to 2°)
- Text overlays: Fade-in with typewriter effect for key moments

### Section 2: Best Moments Gallery
- Masonry grid layout: 3 columns desktop (lg:grid-cols-3), 2 tablet (md:grid-cols-2), 1 mobile
- Photo cards: Rounded corners (rounded-2xl), soft drop shadow
- Hover interaction: Gentle lift (translate-y-2), scale 1.02, increase shadow
- Parallax scroll: Images move at 0.7x scroll speed for depth
- Captions: Overlay on hover with blurred backdrop

### Section 3: Heartfelt Message
- Centered max-w-3xl container with generous padding
- Typewriter animation: Word-by-word reveal, 80ms per word
- Background: Animated rose petals falling (20 petals, varying speeds)
- Message frame: Subtle border with corner flourishes (decorative SVG elements)
- Glowing accent: Soft box-shadow pulse on key phrases

### Section 4: Our Future
- Horizontal timeline: Left-to-right progression with connecting line
- Milestone cards: Illustrated icons (line-drawn style), staggered reveal
- Interactive hover: Card expands slightly, reveals more detail
- Illustrations: Use lucide-react icons with custom styling (home, plane, baby)
- Connecting line: Animated stroke-dasharray from left to right

### Section 5: Happy Birthday Finale
- Full viewport celebration scene
- Fireworks animation: Canvas-based particles, multiple bursts
- Name display: Large elegant script (Dancing Script), fade-in with glow
- "Play Our Song" button: Prominent, rounded-full, gradient background, pulse animation
- Audio integration: Bruno Mars "Just the Way You Are" with play/pause controls

### Message Vault (Hidden Feature)
- Floating heart icon: Bottom-left corner, subtle pulse
- Modal overlay: Centered card with blurred backdrop
- Message cards: Stack of note cards, swipe/tap to reveal next
- Each note: Personal message placeholder, date stamp, small decorative element

### Countdown Timer
- Elegant placement: Top-right corner of "What You Mean to Me" section
- Format: "We've been saying 'I love you' for [X] days, [Y] hours, [Z] minutes"
- Styling: Soft glow numbers, thin separator lines

### Forever Us Signature
- Final animation after birthday section
- Two initials: Appear from left and right
- Merge animation: Transform and combine into single glowing heart
- Heart glow: Radial gradient with animation (pulse, 2s duration)

## Animation Guidelines

**Scroll Animations**: Use Intersection Observer with stagger delays
- Fade-up: opacity 0 to 1, translateY(40px) to 0, duration 0.8s
- Scale-in: scale 0.95 to 1, duration 0.6s
- Stagger: 150ms delay between grouped elements

**Particle Systems**:
- Heart particles: Random spawn, float upward with drift, fade out
- Rose petals: Gentle fall with rotation, wind drift effect
- Fireworks: Burst pattern, particle decay, color trails

**Micro-interactions**:
- Button hover: Scale 1.05, brightness increase, glow intensify
- Image hover: Lift effect with shadow increase
- Text reveal: Smooth typewriter with cursor blink

**Parallax Layers**:
- Background: 0.3x scroll speed
- Mid-ground images: 0.7x scroll speed
- Foreground content: 1x scroll speed

## Images

### Hero/Intro Section
- No large hero image - use particle animation background with gradient

### Section-Specific Images
- **How We Met**: Two circular portrait placeholders (her and him), vintage frame treatment
- **Best Moments Gallery**: 12-15 polaroid-style photo placeholders, mix of landscape/portrait orientations
- **Our Future**: Use illustrated icons instead of photos for dream milestones
- **Birthday Section**: No background image - fireworks animation is the visual

### Image Treatment
- Border radius: rounded-xl to rounded-2xl
- Soft shadow: shadow-xl with blur
- Aspect ratios: Vary between 4:3, 3:4, and 1:1 for visual interest
- Overlay gradients: Subtle dark gradient on bottom for text legibility

## Audio Integration
- Background music: Auto-play with mute option on load
- "Play Our Song" button: Triggers Bruno Mars track, replaces background music
- Audio controls: Minimalist, always accessible, volume slider included
- Waveform visualization: Canvas animation synced to audio

## Accessibility Notes
- All animations respect prefers-reduced-motion
- Color contrast: Minimum 4.5:1 for all text
- Keyboard navigation: Tab through all interactive elements
- Screen reader labels: Descriptive aria-labels for decorative elements

This design creates an emotionally immersive, cinematic experience that feels like a romantic film - elegant, deeply personal, and visually stunning.