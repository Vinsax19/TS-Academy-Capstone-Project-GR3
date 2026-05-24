# TS-Academy-Capstone-Project-GR3
Official Repo for Group 3 Capstone Project

## VideoSection Component

The `VideoSection` component renders a visually-rich section that explains how planetary data helps users understand space.

### Features

- Autoplaying, looping, muted video player
- Responsive layout with mobile-first styling
- Motion animation on scroll with `motion/react`
- Play icon overlay decoration for visual emphasis
- Gradient and scanning effect overlays for polished presentation

### Implementation

- File: `src/components/VideoSection.jsx`
- Video source: `src/assets/video/planet.mp4`
- Uses Tailwind CSS utility classes for spacing, typography, and layout
- Uses `motion` from `motion/react` for fade-in and entrance animation

### Purpose

This section is designed to:

- provide context about planetary data
- emphasize planetary science concepts like mass, diameter, gravity, and density
- create an engaging visual experience with video content and layered overlays

### Notes

- The video is muted and set to `playsInline` for a seamless background experience.
- The design uses a group hover state to enhance visual feedback on desktop devices.
- The component is fully centered and optimized for both desktop and mobile breakpoints.

