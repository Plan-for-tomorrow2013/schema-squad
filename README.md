# Schema Squad 🍽️

A full-stack restaurant ordering app built as a group project at Dev Academy Aotearoa.

Created by Tania, Carol, Nyree, Ezra and Justin.

## What it does

Schema Squad simulates a digital restaurant ordering experience. 
Users can:
- Browse menu items loaded from a backend API
- Open an item modal to read descriptions and see prices
- Choose optional customisations for selected menu items
- Add items to a cart
- Update quantities or clear the cart
- Complete checkout and view a receipt summary

## Tech Stack
TypeScript · React · Vite · Sass · Express · Knex · SQLite3 · TanStack React Query · Vitest

## Features

**Frontend**
- Slideshow-style landing page for featured menu images
- Menu dropdown with pricing
- Item detail modal
- Optional item customisations
- In-app cart management
- Receipt modal after checkout

**Backend**
- `GET /api/v1/menu` — fetch all menu items
- `GET /api/v1/customMenu` — fetch all customisation items
- `GET /api/v1/customMenu/:id` — fetch customisations for a specific menu item

**Database**
Schema includes tables for menu items, customisations, orders and receipts. App uses seeded menu and customisation data with client-side cart state management.

## Getting Started

```bash
git clone git@github.com:Plan-for-tomorrow2013/schema-squad.git
cd schema-squad
npm install
npm run knex -- migrate:latest
npm run knex -- seed:run
npm run dev
```

Client runs at http://localhost:5173  
Server runs at http://localhost:3000

## What We Learned
- Working in Git as a team
- Keeping frontend and backend data structures aligned
- Designing a database schema for menu and order data
- Managing client-side state cleanly
- Iterating on UI features from a starter template

## Team Roles
- 🌟 **Vibes Watcher** — Carol
- 🔐 **Git Keeper** — Nyree  
- 👑 **Product Owner** — Ezra
- 🏃 **Scrum Facilitator** — Justin
- ⚡ **Super 2IC** — Tania (that's me!)

## Status
✅ Completed — Dev Academy group project
