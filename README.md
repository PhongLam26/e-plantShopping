# e-plantShopping — Paradise Nursery

**Project name:** e-plantShopping

Paradise Nursery is a responsive plant shopping application. Browse a curated collection of houseplants, add favorites to a Redux-powered cart, and adjust quantities or remove items before checkout.

## Technologies used

- React and JavaScript JSX
- Vite
- Redux Toolkit and React Redux
- React Router DOM
- Responsive CSS

## Features

- Paradise Nursery landing page with a welcome message and Get Started button
- Three plant categories with six products in each category
- Product images, descriptions, costs, and Add to Cart controls
- A shared Redux cart count and synchronized cart state
- Quantity controls, item totals, cart total, and item removal
- Responsive layouts for desktop and mobile screens
- Checkout feedback: “Coming Soon”

## Installation

1. Install Node.js 20.19+ or 22.12+.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

## Run the application

Start the local development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser. To create a production build, run:

```bash
npm run build
```

## Plant photos

Plant and garden photos are bundled locally in `public/images` so the site does not depend on an external image host at runtime. Photo sources are listed in `public/images/IMAGE-SOURCES.md`. The photos were sourced from Unsplash under its [license](https://unsplash.com/license).
