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
- **Deployment**: GitHub Pages

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

This project is configured to deploy to GitHub Pages from a GitHub Actions workflow on pushes to `main`.

### GitHub Pages setup

1. In GitHub, open this repository and go to `Settings` -> `Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.
3. Push to `main`. The workflow at `.github/workflows/deploy.yml` will build the static export and publish it to Pages.

### Custom domain setup

GitHub Pages itself does not charge extra for custom domains. You only pay for the domain registration and DNS service at your registrar/provider.

For an apex domain like `alexalmansa.xyz`, configure these DNS records:

- `A` -> `185.199.108.153`
- `A` -> `185.199.109.153`
- `A` -> `185.199.110.153`
- `A` -> `185.199.111.153`
- `AAAA` -> `2606:50c0:8000::153`
- `AAAA` -> `2606:50c0:8001::153`
- `AAAA` -> `2606:50c0:8002::153`
- `AAAA` -> `2606:50c0:8003::153`
- `CNAME` for `www` -> `alexalmansa.github.io`

After the first successful deployment:

1. In `Settings` -> `Pages`, set the custom domain to `alexalmansa.xyz`.
2. If you also want `www.alexalmansa.xyz`, add it as a DNS alias to `alexalmansa.github.io` and configure your DNS provider to redirect either `www` -> apex or apex -> `www`, depending on your preferred canonical host.
3. Enable `Enforce HTTPS` once GitHub finishes issuing the certificate.

### Notes

- GitHub Pages can only host the static export of this Next.js app, so the site now builds with `output: 'export'`.
- Because this repo deploys with a custom GitHub Actions workflow, the custom domain is configured in the GitHub Pages settings rather than through a committed `CNAME` file.
- The generated site is intended to be served from the custom domain root. If you want the plain `alexalmansa.github.io/alexalmansa_portfolio/` project URL to work as a primary URL too, the app would need an additional `basePath` configuration.


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
