# Paradise Nursery

Paradise Nursery is a responsive plant shopping application built with React. Browse a curated collection of houseplants, add favorites to a Redux-powered cart, and update quantities or remove items before checkout.

## Technologies used

- React and JavaScript JSX
- Vite
- Redux Toolkit and React Redux
- React Router DOM
- Responsive CSS

## Features

- A welcoming home page with the Paradise Nursery story
- Three plant collections with six plants in each collection
- Product photos, descriptions, prices, and add-to-cart controls
- A shared cart count and cart state across pages
- Quantity controls, line totals, order total, and item removal
- A responsive layout for desktop and mobile screens
- Checkout feedback: “Coming Soon”

## Installation

1. Install Node.js 20.19+ or 22.12+.
2. Open a terminal in the project folder.
3. Install the dependencies:

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

The plant and garden photos are bundled locally in `public/images` so the site does not depend on an external image host at runtime. They were sourced from Unsplash. See the [Unsplash License](https://unsplash.com/license) for the applicable terms.
