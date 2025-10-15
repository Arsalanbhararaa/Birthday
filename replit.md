# Our Love Story - Cinematic Birthday Website

## Project Overview
A beautifully animated, cinematic one-page website created as a romantic birthday gift. This immersive web experience tells a love story through elegant animations, smooth transitions, and heartfelt content.

## Theme & Design
- **Visual Style**: Dark romantic with burgundy-black gradients
- **Color Palette**: Rose gold (#ecb5b5), blush pink (#f4d4d4), champagne (#e8a9a9)
- **Typography**: 
  - Display: Playfair Display (elegant headers)
  - Body: Cormorant Garamond (readable narrative text)
  - Script: Dancing Script (personal touches)

## Features

### 1. Intro Section
- Floating heart particle animations
- Radial gradient background
- Fade-in title and subtitle animations
- Audio control buttons for background music
- "Begin Our Story" call-to-action button

### 2. How We Met
- Animated SVG paths merging from both sides
- Circular portrait frames with subtle rotation
- Animated heart icon at the intersection
- Smooth reveal animations triggered by scroll

### 3. Best Moments Gallery
- Polaroid-style photo cards with rotation effects
- Parallax hover effects
- Masonry grid layout (responsive: 3 columns → 2 → 1)
- Staggered fade-up animations on scroll
- Gentle box shadow glows on hover

### 4. Heartfelt Message
- Typewriter animation (word-by-word reveal at 80ms intervals)
- Floating heart particles in background
- Decorative quotation marks
- Countdown timer showing time since "I love you"
- Elegant card with blurred backdrop

### 5. Our Future Timeline
- Vertical timeline with connecting line
- Illustrated milestone cards with icons
- Alternating left-right layout
- Staggered reveal animations
- Interactive hover effects

### 6. Birthday Finale
- Animated fireworks bursts
- Glowing script typography for "Happy Birthday"
- "Play Our Song" button (Bruno Mars - "Just the Way You Are")
- Pulsing glow effects
- Audio player integration

### 7. Forever Us Signature
- Merging initials animation (H ❤ S)
- Glowing heart with pulse effect
- Final romantic message

### 8. Additional Features
- **Floating Navigation**: Heart-based navigation with tooltips
- **Message Vault**: Hidden modal with swipeable love notes (bottom-left heart icon)
- **Countdown Timer**: Live timer showing days/hours/minutes/seconds since first "I love you"
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Accessibility**: Respects prefers-reduced-motion, proper ARIA labels

## Technical Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Routing**: Wouter (single-page app)
- **Build**: Vite
- **Components**: Shadcn UI library

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── IntroSection.tsx
│   │   ├── FloatingHearts.tsx
│   │   ├── HowWeMetSection.tsx
│   │   ├── BestMomentsGallery.tsx
│   │   ├── HeartfeltMessageSection.tsx
│   │   ├── CountdownTimer.tsx
│   │   ├── OurFutureSection.tsx
│   │   ├── BirthdayFinaleSection.tsx
│   │   ├── Fireworks.tsx
│   │   ├── FloatingNavigation.tsx
│   │   ├── MessageVault.tsx
│   │   └── ForeverUsSignature.tsx
│   ├── pages/
│   │   └── home.tsx
│   ├── App.tsx
│   └── index.css
└── index.html
```

## Key Animations
- `float` / `float-slow`: Floating particle effects
- `fade-in` / `fade-up`: Content reveal animations
- `scale-in`: Scaling entrance animations
- `pulse-glow`: Pulsing glow effects
- `draw-line`: SVG path drawing animation
- `firework`: Particle burst animations
- `typewriter`: Text typing effect
- `heart-beat`: Heartbeat pulsing

## Customization Guide

### Updating Personal Content

**1. Change Names/Initials (ForeverUsSignature.tsx)**
- Edit the `H` and `S` letters in ForeverUsSignature component
- Line 38-48: Update initials
- Line 78: Update "Forever Us" text if desired

**2. Update Photos**
- Replace Unsplash URLs in BestMomentsGallery.tsx (lines 13-66)
- Replace portrait URLs in HowWeMetSection.tsx (lines 86 and 100)
- Use your own images or update captions

**3. Customize Messages**
- HeartfeltMessageSection.tsx line 15: Edit the main heartfelt message
- MessageVault.tsx lines 21-50: Update the 4 personal notes
- BirthdayFinaleSection.tsx line 57: Change recipient name

**4. Adjust Countdown Timer**
- CountdownTimer.tsx line 13: Set your "I love you" date
- Format: `new Date("YYYY-MM-DDTHH:MM:SS")`

**5. Change Color Scheme**
- Edit CSS custom properties in `client/src/index.css` (lines 20-83)
- Dark mode colors (lines 135-195)

**6. Music Integration**
- Add actual audio files to handle music playback
- Update IntroSection.tsx and BirthdayFinaleSection.tsx with audio element refs

## Recent Changes
- Initial build: Complete cinematic love story website with all sections
- Design system: Romantic dark theme with rose gold and blush accents
- Animations: Full suite of scroll-triggered and interactive animations
- Responsive: Mobile-first design with breakpoints at md and lg

## Audio Integration

The site includes a custom `useAudio` hook that provides full audio playback control:

**Features:**
- Play/pause functionality
- Volume control
- Mute/unmute toggle
- Loop support
- Automatic cleanup on component unmount
- Browser autoplay fallback handling

**Current Setup:**
- Background Music (IntroSection): Uses placeholder from SoundHelix
- "Our Song" (BirthdayFinaleSection): Uses placeholder from SoundHelix

**To Add Your Own Music:**

1. Add your audio files to the project:
   ```
   client/public/audio/
   ├── background-music.mp3
   └── bruno-mars-just-the-way-you-are.mp3
   ```

2. Update the audio sources:
   - **IntroSection.tsx** (line 11): Change to `"/audio/background-music.mp3"`
   - **BirthdayFinaleSection.tsx** (line 11): Change to `"/audio/bruno-mars-just-the-way-you-are.mp3"`

3. Supported formats: MP3, WAV, OGG, AAC

**Note:** Some browsers block autoplay. Users may need to interact with the page (click the play button) before audio starts.

## Next Steps (Optional Enhancements)
- Add actual music files (background music + "Just the Way You Are" by Bruno Mars)
- Implement photo upload interface for easy content replacement
- Add download/share functionality
- Create print-friendly version
- Add more interactive elements (confetti, additional particle effects)
- Add fade-in/fade-out transitions between audio tracks
