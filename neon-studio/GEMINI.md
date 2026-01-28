# Neón Studio

**Project:** Neón Studio
**Description:** A unified ecosystem for digital creators (Graphic Design, Web Design, Photo Editing, Video Editing).
**Stack:** React, Vite, Tailwind CSS, Shadcn UI, Zustand, React Query.

## Changelog

### v0.1.0 - Foundation & Architecture
- Initialized React + Vite project.
- Configured Tailwind CSS with "Neón" theme (Dark mode, Custom colors).
- Set up directory structure (Core, Modules, Layouts).
- Implemented Routing (React Router v6).
- Created Dashboard Layout with Sidebar.
- Created Landing Page.
- Created Placeholders for Graphic, Web, Photo, and Video Editors.

## Architecture

- **Core Shell**: Handles Authentication (mocked for now), Navigation, and Layouts.
- **Modules**: Independent features loaded via Routes.
    - `modules/graphic`: Vector Engine.
    - `modules/web`: Visual Builder.
    - `modules/photo`: Photo Engine.
    - `modules/video`: Video Timeline.

## Routes

See `router.json` for full list.
- `/`: Landing Page
- `/dashboard`: Project Hub
- `/studio/*`: Specialized Editors

## Next Steps

1. Implement Graphic Editor canvas logic (Fabric.js integration).
2. Build Web Editor DOM tree structure.
3. Integrate real authentication.
