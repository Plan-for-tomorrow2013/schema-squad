# Schema Squad
Created by Tania, Carol, Nyree, Ezra, Justin

Schema Squad is a group project built as a full-stack restaurant ordering app. The goal of the project was to practise working as a team across the full web stack while building a product that lets users browse a menu, customise items, manage a cart, and complete a simple checkout flow.

## Project Overview

This app simulates a digital restaurant ordering experience. Users can:

- view menu items loaded from a backend API
- open an item modal to read the description and see the price
- choose optional customisations for selected menu items
- add items to a cart
- update quantities or clear the cart
- complete checkout and view a receipt summary

The project uses a React frontend, an Express API, and a SQLite database managed with Knex.

## Tech Stack

- React
- TypeScript
- Vite
- Sass
- Express
- Knex
- SQLite3
- TanStack React Query
- Vitest

## Features

### Frontend

- slideshow-style landing page for featured menu images
- menu dropdown with pricing
- item detail modal
- optional item customisations
- in-app cart management
- receipt modal after checkout

### Backend

- `GET /api/v1/menu` to fetch all menu items
- `GET /api/v1/customMenu` to fetch all customisation items
- `GET /api/v1/customMenu/:id` to fetch customisations for a menu item

### Database

The database schema includes tables for:

- `menu_items`
- `custom_items`
- `menu_order`
- `customisation_order`
- `table_order`
- `receipt`

The app currently uses seeded menu and customisation data. Cart behaviour is handled on the client side.

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:pikopiko-2025/schema-squad.git
cd schema-squad
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run database migrations

```bash
npm run knex -- migrate:latest
```

### 4. Seed the database

```bash
npm run knex -- seed:run
```

### 5. Start the development servers

```bash
npm run dev
```

The app will run at:

- client: http://localhost:5173
- server: http://localhost:3000

## Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
npm test
```

## Project Structure

```text
client/
	apis/          API request helpers
	components/    React components
	hooks/         React Query hooks and cart state
	styles/        Sass styling

models/          Shared TypeScript interfaces

server/
	routes/        Express routes
	db/
		migrations/  Database schema
		seeds/       Seed data
```

## Seeded Menu Examples

The project includes seeded sample items such as:

- Salmon Bowl
- Sushi
- Spring Rolls
- Sundae
- Smoothie
- Smash Burger
- Steak
- Sliders

Some menu items also include optional extras, such as sprinkles, side salad, secret sauce, and swiss cheese.

## What We Learned

This project helped us build experience with:

- working in Git as a team
- keeping frontend and backend data structures aligned
- designing a database schema for menu and order data
- managing client-side state cleanly
- iterating on UI features from a starter template


## Note

This project began from a Dev Academy full-stack starter and was adapted by our group into a restaurant ordering application.
