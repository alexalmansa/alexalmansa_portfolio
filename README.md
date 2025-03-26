# Alex Almansa Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This portfolio showcases Alex Almansa's professional work as a DevOps/Cloud Engineer, highlighting skills, work experience, education, and projects. The site features a responsive design that works well on all devices and screen sizes.

## Features

- Responsive layout optimized for all devices
- Dynamic image gallery for project showcases
- Blue-themed professional design
- Timeline-based experience and education sections
- Interactive project displays with screenshots
- Contact section with direct links

## Technologies Used

- **Framework**: Next.js 13.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alexalmansa/alexalmansa_portfolio.git
   cd alexalmansa_portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create an optimized production build:

```bash
pnpm build
# or
npm run build
```

To start the production server:

```bash
pnpm start
# or
npm start
```

## Deployment

This project is set up for seamless deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments on each push.


### Styling

Global styles are defined in `app/globals.css`. The theme uses a blue color palette which can be customized by adjusting the CSS variables in this file.

## Project Structure

- `/app` - Next.js app directory containing routes and layouts
- `/components` - Reusable UI components
- `/public` - Static assets (images, CV, etc.)
- `/lib` - Utility functions
- `/types` - TypeScript type definitions

## License

This project is available as open source under the terms of the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please contact Alex Almansa at [alexalmansa5@gmail.com](mailto:alexalmansa5@gmail.com). 