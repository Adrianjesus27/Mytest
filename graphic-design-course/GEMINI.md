# Graphic Design Course App

A comprehensive web application for a Graphic Design Course, built with SvelteKit, Tailwind CSS, and Shadcn UI.

## Tech Stack
- **Framework**: SvelteKit (Svelte 5)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (bits-ui, lucide-svelte)
- **Language**: TypeScript

## Features
- **Landing Page**: Modern hero section, features list, instructor bio, and pricing.
- **Curriculum**: Interactive accordion displaying course modules.
- **Responsive Design**: Mobile-friendly layout.
- **Dark Mode Support**: Built-in CSS variables for dark mode (configurable).

## Project Structure
- `src/routes/`: Application routes.
  - `+page.svelte`: Home/Landing page.
  - `login/`, `signup/`, `dashboard/`: Placeholder routes for future implementation.
- `src/lib/components/ui/`: Reusable UI components (Button, Card, Badge, etc.).
- `src/app.css`: Global styles and Tailwind configuration.
- `src/lib/utils.ts`: Utility functions (cn, types).

## Setup & Run
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

## Changelog
- Initialized project with SvelteKit.
- Configured Tailwind CSS and Shadcn UI.
- Implemented Landing Page with Hero, Features, Curriculum, and Pricing sections.
