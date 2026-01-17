# PRD - Inseminar de Colombia

## Original Problem Statement
Crear y configurar un sitio web para "Inseminar de Colombia", una empresa colombiana de genética bovina. El proyecto fue importado desde GitHub (`https://github.com/salomeli23/inseminar2025`) y expandido con múltiples categorías de razas de toros.

## Core Requirements
1. Sitio web para catálogo de genética bovina
2. Categorías: Holstein, Jersey, Pardo Suizo, Ayrshire, GYR, GIROLANDO 3/4
3. Páginas de detalle para cada toro con información genética
4. Hero section con slider de imágenes rotativas
5. Header con logos de socios
6. Tarjetas de categoría con imágenes de fondo temáticas
7. Botón de WhatsApp flotante para contacto

## Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Data Management**: Separated data files (no backend/database)
- **Deployment**: Vercel compatible

## Architecture
```
/app
├── app/
│   ├── page.tsx           # Homepage with hero, categories, contact
│   └── globals.css
├── components/
│   ├── BullDetailPage.tsx # Legacy detail page (non-GYR/GIROLANDO breeds)
│   ├── EdankDetailPage.tsx # Custom detail page for EDANK bull
│   ├── GyrBullDetailPage.tsx # Reusable detail page for GYR bulls
│   ├── gyrBullsData.ts    # DATA FILE for all GYR bulls (14 bulls)
│   ├── GyrPage.tsx        # GYR category page (3-column grid)
│   ├── GirolandoBullDetailPage.tsx # Detail page for GIROLANDO bulls
│   ├── girolandoBullsData.ts # DATA FILE for GIROLANDO 3/4 bulls
│   ├── GirolandoPage.tsx  # GIROLANDO 3/4 category page
│   ├── HolsteinPage.tsx   # Holstein bulls grid
│   ├── JerseyPage.tsx     # Jersey bulls grid
│   ├── PardoSuizoPage.tsx # Brown Swiss bulls grid
│   └── AyrshirePage.tsx   # Ayrshire bulls grid
├── public/                # All static images (bull photos, pedigrees)
├── .env.local             # Environment variables (WhatsApp number)
└── package.json
```

## What's Been Implemented

### Core Features
- [x] Homepage with hero slider (3 rotating images)
- [x] Partner logos in header
- [x] Category cards with thematic backgrounds
- [x] All breed pages (Holstein, Jersey, Pardo Suizo, Ayrshire, GYR, GIROLANDO 3/4)
- [x] Bull detail pages with genetic information
- [x] Thumbnail gallery for bull images (main photo + pedigree)
- [x] Floating WhatsApp contact button
- [x] Dynamic "Back to Category" button

### GYR Category (14 bulls)
- EDANK (custom page), TROVÃO 2B, BENETON, ELVIS, UNO 2B, ÉDEN, GATILHO, NOLAN, JUPITER, GABEIRA, KROVIS, AMAROK, TESOURO 2B, JUMBO

### GIROLANDO 3/4 Category (NEW - Jan 17, 2025)
- [x] Created `GirolandoPage.tsx` - category page with purple/violet theme
- [x] Created `GirolandoBullDetailPage.tsx` - reusable detail component
- [x] Created `girolandoBullsData.ts` - data file for bulls
- [x] Added NEMO DAY bull with image
- [x] Updated main navigation in `page.tsx`

## Configuration
- **WhatsApp Number**: Set in `.env.local` as `NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567`

## Data Architecture Pattern
For new categories, follow this pattern:
1. Create `[Breed]BullsData.ts` - data file with bull information
2. Create `[Breed]BullDetailPage.tsx` - reusable detail component
3. Create `[Breed]Page.tsx` - category page with grid layout
4. Update `page.tsx` - add import and navigation handler

## Known Technical Debt
1. Data for non-GYR/GIROLANDO breeds still hardcoded in `BullDetailPage.tsx`
2. Should apply the separated data pattern to remaining breeds

## Future/Backlog Tasks
- [ ] Apply data separation pattern to Holstein, Jersey, Pardo Suizo, Ayrshire
- [ ] Deprecate legacy `BullDetailPage.tsx`
- [ ] Add search/filter functionality
- [ ] Add contact form backend integration

## User's Preferred Language
Spanish
