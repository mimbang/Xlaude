# François Noah — Engineering Portfolio

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> A minimalist, production-ready engineering portfolio focused on system design, real-time architectures, geospatial infrastructure, and data integrity.

Unlike classic creative portfolios, this platform is designed as an **engineering product showcase**. It emphasizes core backend reasoning, database atomicity, and infrastructure decisions over decorative UI.

---

## 🏗️ Architecture & Philosophy

The project is built from scratch with efficiency and raw performance in mind:

- **Static Site Generation (SSG):** Powered by **Astro** to ensure maximum Lighthouse scores (100/100 performance) and near-instantaneous load times.
- **Design System:** Built using **Tailwind CSS** following a "Precision Engineering" aesthetic—features a deep native dark mode theme, low-contrast blueprint grid layout overlays, and a single emerald green accent color.
- **Typography:** Uses modern sans-serif fonts for documentation layout paired with monospace fonts for infrastructure variables, technical badges, and system metrics.

---

## 🛠️ Tech Stack Highlighted

The portfolio showcases deep technical expertise in the following domains:
- **Backend & GIS:** Django, Django REST Framework, PostgreSQL, PostGIS, GeoDjango
- **Mobile & Real-Time:** React Native (Expo), WebSockets (Django Channels)
- **Infrastructure & Task Automation:** Docker, Celery, Redis, Linux environments

---

## 📂 Project Structure

```text
├── public/
│   └── CV - Noah Francois.pdf   # Production resume asset
├── src/
│   ├── components/
│   │   ├── Hero.astro           # Technical elevator pitch & core badges
│   │   ├── Skills.astro         # Expertise domain modular cards
│   │   └── Projects.astro       # Engineering case studies container
│   ├── layouts/
│   │   └── Layout.astro         # Main shell with blueprint background pattern
│   └── pages/
│       └── index.astro          # Landing view entrypoint
├── tailwind.config.mjs          # Customized theme configuration
└── package.json