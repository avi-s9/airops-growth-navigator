# AIROPS Growth Navigator

An interactive, single-page React presentation that analyzes onboarding activation, surfaces funnel blockers, proposes growth experiments, and models ROI for product investment decisions.

## Overview

AIROPS Growth Navigator is built as a narrative dashboard with three major sections:

1. **Aha Moment Analysis** – funnel performance, key blockers, and redesigned onboarding flow.
2. **Growth Engine** – experiment proposals and expected impact pathways.
3. **Investment Framework** – decision dashboard and ROI calculator for launch evaluation.

The app is optimized for clear storytelling, visual data communication, and stakeholder review.

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Primitives:** Radix UI + shadcn/ui-style components
- **Routing:** React Router
- **Data Visualization:** Recharts
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (or current LTS)
- npm 9+

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` – start Vite development server
- `npm run build` – create a production build
- `npm run build:dev` – create a development-mode build
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint
- `npm run test` – run tests once with Vitest
- `npm run test:watch` – run Vitest in watch mode

## Project Structure

```text
src/
  assets/          # Static images used in the presentation
  components/      # Reusable UI and domain components
  hooks/           # Custom React hooks
  lib/             # Shared utility functions
  pages/           # Route-level page components
  test/            # Test setup and test files
```

## Testing

Run the test suite:

```bash
npm run test
```

## Build for Production

```bash
npm run build
npm run preview
```

## Notes

- This project currently ships as a front-end application (no backend service required).
- Static assets are stored in `public/` and `src/assets/`.

## License

This repository does not currently declare a license.
