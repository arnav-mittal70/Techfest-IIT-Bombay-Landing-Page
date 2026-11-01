# Techfest IIT Bombay – Landing Page

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind%20CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide%20React](https://img.shields.io/badge/Lucide_React-0.468-FAFAFA?logo=feather&logoColor=black)](https://lucide.dev/)

---

## Overview
A modern, responsive landing page inspired by the official **Techfest IIT Bombay** website. The project demonstrates a futuristic UI built with **React**, **Vite**, and **Tailwind CSS**, showcasing smooth animations, a glass‑morphic navigation bar, and a hero section with orbital ring effects.

---

## Features
- **Hero Section** – Animated orbital rings, glowing elements, and two CTA buttons.
- **Navigation Bar** – Glass‑morphic header with smooth scrolling and a fully functional mobile drawer.
- **About Section** – Editorial‑style layout describing Techfest.
- **Events Section** – Interactive cards with hover animations.
- **Experience Section** – Visual showcase of festival experiences.
- **Gallery** – Responsive image grid (placeholder data).
- **Footer** – Social links and a link to the official Techfest site.
- **Responsive Design** – Works on desktop, tablet, and mobile devices.

---

## Technologies
| Technology | Version |
|------------|---------|
| React | ^18.3.1 |
| Vite | ^6.0.3 |
| Tailwind CSS | ^3.4.16 |
| Lucide React | ^0.468.0 |

---

## Project Structure
```
src/
├─ App.jsx                # Root component
├─ main.jsx               # Application entry point
├─ index.css              # Global Tailwind styles
├─ components/            # Reusable UI components
│   ├─ About.jsx
│   ├─ ContactSection.jsx
│   ├─ EventModal.jsx
│   ├─ Events.jsx
│   ├─ Experience.jsx
│   ├─ Footer.jsx
│   ├─ Gallery.jsx
│   ├─ Hero.jsx
│   ├─ Navbar.jsx
│   └─ StatsBanner.jsx
├─ data/                 # Static data used by the app
│   ├─ eventsData.js
│   ├─ experiencesData.js
│   ├─ galleryData.js
│   └─ statsData.js
```

---

## Live Demo
> **⚠️** A live deployment is not yet available. Replace this placeholder with the URL once the site is hosted.

## Screenshots
> No screenshots are currently committed to the repository. Add image files to a `screenshots/` directory and reference them here when available.

---

## Installation
Prerequisites: **Node.js** (v18 or later) and **npm**.
```bash
# Clone the repository
git clone https://github.com/arnav-mittal70/Techfest-IIT-Bombay-Landing-Page.git
cd Techfest-IIT-Bombay-Landing-Page

# Install dependencies
npm install
```

---

## Development
```bash
npm run dev
```
This starts the Vite development server (by default at `http://localhost:5173`). Open the URL in your browser to view the site with hot‑module reloading.

---

## Build & Preview
```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```
The `dist/` folder will contain the compiled assets.

---

## Repository
- **GitHub**: https://github.com/arnav-mittal70/Techfest-IIT-Bombay-Landing-Page
- **Issues**: Use the GitHub Issues page for bug reports and feature requests.

---

## License
This project does **not** include a license file. If you wish to add licensing, create a `LICENSE` file and update the repository accordingly.
