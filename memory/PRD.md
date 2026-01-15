# PRD - Inseminar de Colombia

## Original Problem Statement
Crear y configurar un sitio web para "Inseminar de Colombia", una empresa colombiana de genética bovina. El proyecto fue importado desde GitHub (`https://github.com/salomeli23/inseminar2025`) y expandido con múltiples categorías de razas de toros.

## Core Requirements
1. Sitio web para catálogo de genética bovina
2. Categorías: Holstein, Jersey, Pardo Suizo, Ayrshire, GYR
3. Páginas de detalle para cada toro con información genética
4. Hero section con slider de imágenes rotativas
5. Header con logos de socios
6. Tarjetas de categoría con imágenes de fondo temáticas
7. Botón de WhatsApp flotante para contacto

## Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data Management**: Hardcoded data in components (no backend/database)
- **Deployment**: Vercel compatible

## Architecture
```
/app
├── app/
│   ├── page.tsx           # Homepage with hero, categories, contact
│   └── globals.css
├── components/
│   ├── BullDetailPage.tsx # ALL bull data + detail view rendering
│   ├── HolsteinPage.tsx   # Holstein bulls grid
│   ├── JerseyPage.tsx     # Jersey bulls grid
│   ├── PardoSuizoPage.tsx # Brown Swiss bulls grid
│   ├── AyrshirePage.tsx   # Ayrshire bulls grid
│   └── GyrPage.tsx        # Gyr bulls grid
├── public/                # All static images
├── .env.local             # Environment variables (WhatsApp number)
└── package.json
```

## What's Been Implemented (Jan 15, 2025)

### Core Features
- [x] Homepage with hero slider (3 rotating images)
- [x] Partner logos in header
- [x] Category cards with thematic backgrounds
- [x] All breed pages (Holstein, Jersey, Pardo Suizo, Ayrshire, GYR)
- [x] Bull detail pages with genetic information
- [x] Dynamic "Back to Category" button
- [x] Floating WhatsApp contact button

### Recent Updates (This Session)
- [x] **EDANK Page Cleanup**: Hidden sections (PRODUCCIÓN, CARACTERÍSTICAS DE SALUD, CARACTERÍSTICAS DE PARTO, FERTILIDAD DEL TORO, ICC, Conformación, Pedigrí) for EDANK bull
- [x] **WhatsApp URL Refactoring**: Moved hardcoded WhatsApp number to `.env.local` (`NEXT_PUBLIC_WHATSAPP_NUMBER`)

## Configuration
- **WhatsApp Number**: Set in `.env.local` as `NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567`

## Known Technical Debt
1. **BullDetailPage.tsx is fragile**: The massive `bullsData` object should be extracted to separate data files
2. **Duplicate bull entries**: Some bulls appear twice in `bullsData` object (TypeScript shows errors for duplicate properties)

## Future/Backlog Tasks
- [ ] Extract bull data from BullDetailPage.tsx to separate JSON/TS data files
- [ ] Fix duplicate property errors in bullsData object
- [ ] Add search/filter functionality
- [ ] Add more bull breeds if needed
- [ ] Add contact form backend integration

## User's Preferred Language
Spanish
