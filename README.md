# Techfest IIT Bombay — Official Inspired Landing Page

> A modern, futuristic, and responsive landing page for **Techfest IIT Bombay** — Asia’s Largest Science and Technology Festival.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Lucide_React-0.468-F56565?logo=feather&logoColor=white)](https://lucide.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🌟 Overview

Inspired by the visual identity of the official [Techfest IIT Bombay](https://techfest.org/) website, this project delivers a futuristic web experience that captures the high-energy atmosphere of Asia’s largest science and technology festival.

Built with **React.js**, **Vite**, and **Tailwind CSS**, the application relies strictly on **pure CSS, vector SVGs, and 2D keyframe animations**—delivering performance with zero 3D models or WebGL overhead.

---

## ✨ Key Features & Sections

### 1. 🧭 Navigation Bar (`Navbar.jsx`)
- Sleek glassmorphic header with active section tracking.
- Interactive pill navigation with smooth scrolling.
- Direct CTA to explore festival competitions.
- Fully responsive mobile drawer with backdrop blur and smooth transitions.

### 2. ⚡ Hero Section (`Hero.jsx`)
- **Iconic Motto**: Preserves the high-impact `THINK. CREATE. INNOVATE.` display typography.
- **Quantum Astrolabe & Orbital Engine**: Custom vector SVG and CSS astrolabe with rotating cardinal degree dials (`000°`, `090°`, `180°`, `270°`), counter-rotating gyro tracks, and multi-speed orbiting particle beacons.
- **Integrated Telemetry**: Seamless vector callouts displaying coordinates (`19.1334° N, 72.9133° E · Powai, Mumbai`) and festival legacy.
- **Dual Action CTAs**: "Explore Competitions" and "The Techfest Experience".

### 3. 📊 Official Stats & Patronage Banner (`StatsBanner.jsx`)
- Real-time animated counters: `1998` (Est. Legacy), `1,75,000+` (Global Footfall), `2,500+` (Colleges Reached), and `INR 50L+` (Prizes & Grants).
- Honorary patronage strip highlighting **UNESCO**, **UNICEF**, **Make in India**, and **Digital India**.

### 4. 🏛️ Editorial About Section (`About.jsx`)
- Magazine-style narrative tracing Techfest’s evolution from 1998 into Asia’s largest student-led science conclave.
- **Three Core Pillars**:
  - `01 LEARN`: Nobel Laureate keynotes and deep-tech workshops.
  - `02 COMPETE`: High-stakes arenas (Robowars, autonomous algorithms, aeromodelling).
  - `03 INNOVATE`: Living hardware prototypes and TechConnect research conclaves.

### 5. 🤖 Competitions & Arenas (`Events.jsx` + `EventModal.jsx`)
- Authentic Techfest competitions:
  - **International Robowars** (60kg, 15kg & 8kg combat bots in bulletproof arena)
  - **Meshmerize** (Autonomous maze-mapping & shortest-path rovers)
  - **Cozmo Clench** (Manual dexterity & rugged obstacle navigation)
  - **Boeing Aeromodelling Challenge** (RC aircraft payload missions)
  - **CoDecode** (ICPC-styled algorithmic code sprints)
  - **HackAI & Agentic Summit** (36-hour autonomous AI agent hackathon)
  - **InnovateX Challenge** (Urban sustainability & green tech prototypes)
  - **TechConnect & ResCon Showcase** (IIT Bombay departmental R&D)
- Category filter tabs (`All Arenas`, `Combat & Robotics`, `AI & Algorithmic`, `Aerospace & Design`, `Grand Challenges`).
- Live search bar and interactive modal with full rules, parameters, and simulated team registration.

### 6. 🎆 The Techfest Experience (`Experience.jsx`)
- Interactive tabbed showcase spotlighting campus attractions:
  - **Technoholix**: EDM night shows, synchronized drone swarms, and laser pyrotechnics.
  - **International Exhibitions**: Humanoid bionics, supersonic drones, and mars rovers from 25+ nations.
  - **Keynote Summits**: Addresses by Nobel Laureates, astronauts, and industry icons.
  - **Ozone & Tech Carnivals**: VR combat arenas and escape rooms.
  - **TechConnect**: Indigenous lab-to-industry R&D prototypes.

### 7. 📸 Visual Archives (`Gallery.jsx`)
- Responsive dynamic image grid with hover zoom and cyber-frame brackets.
- Filterable categories with fullscreen lightbox modal preview.

### 8. 📬 Contact & Campus Dispatch (`ContactSection.jsx`)
- Official Students Activity Centre (SAC) coordinates at IIT Bombay.
- Departmental contact routing (Competitions, Hospitality, Sponsorship).
- Interactive query dispatch form with instant validation feedback.

### 9. 🌐 Footer (`Footer.jsx`)
- Quick navigation and legal affiliations.
- Direct links to the official [techfest.org](https://techfest.org/) portal and social media channels.
- Smooth "Back to Top" scrolling.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular component architecture and state management |
| **Vite 6** | Ultra-fast build tool and lightning-quick HMR |
| **Tailwind CSS 3.4** | Utility-first styling with custom futuristic neon extensions |
| **Lucide React** | Sleek, lightweight icon library |
| **CSS3 & SVG** | Custom 2D orbital keyframe animations (zero 3D / WebGL) |

---

## 📁 Project Structure

```text
Techfest-Landing-Page/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with active section tracking
│   │   ├── Hero.jsx            # Quantum Astrolabe & hero typography
│   │   ├── StatsBanner.jsx     # Official stats & patronage ribbon
│   │   ├── About.jsx           # Editorial layout with 3 pillars
│   │   ├── Events.jsx          # Competition cards & filter bar
│   │   ├── EventModal.jsx      # Modal dialog with rules & registration
│   │   ├── Experience.jsx      # Tabbed showcase for campus events
│   │   ├── Gallery.jsx         # Responsive image gallery & lightbox
│   │   ├── ContactSection.jsx  # Campus coordinates & dispatch form
│   │   └── Footer.jsx          # Affiliations, links & back to top
│   ├── data/
│   │   ├── eventsData.js       # Authentic competition metadata
│   │   ├── experiencesData.js  # Highlights of night shows & exhibitions
│   │   ├── galleryData.js      # Image archives & tags
│   │   └── statsData.js        # Verified legacy metrics & patronages
│   ├── App.jsx                 # Main layout assembly
│   ├── index.css               # Cyber grid, glows & orbital keyframes
│   └── main.jsx                # React DOM entry point
├── .gitignore                  # Git exclusions (node_modules, dist, env)
├── index.html                  # HTML entry with Google Fonts preloads
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS Tailwind setup
├── tailwind.config.js          # Custom colors, fonts & shadows
├── vite.config.js              # Vite server & build configurations
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (Tested on Node.js v24)
- **npm** or **pnpm** / **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/techfest-landing-page.git
cd techfest-landing-page
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Create Production Build
```bash
npm run build
```
Generates an optimized production bundle inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Design System

- **Background Palette**: Space Black (`#02040a`), Void (`#040816`), Cyber Navy (`#070f26`)
- **Accent Palette**: Electric Cyan (`#00f2fe`), Cyber Blue (`#4facfe`), Neon Violet (`#9d4edd`)
- **Typography**:
  - Headings: `Orbitron`, `Space Grotesk`
  - Body: `Inter`
  - Data / Telemetry: `JetBrains Mono`

---

## 📜 Credits & Disclaimer

- Inspired by the official identity of **Techfest, Indian Institute of Technology Bombay**.
- Official website: [https://techfest.org/](https://techfest.org/)
- Official channels: [linktr.ee/techfest_iitbombay](https://linktr.ee/techfest_iitbombay)
- Created for educational and showcase purposes. All rights and trademarks belong to their respective owners.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
