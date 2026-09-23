# Arthur Franklin | Portfolio

A modern professional portfolio focused on IT Infrastructure, Technical Support, Monitoring, Automation, and Software Development.

Built with TanStack Start, React, TypeScript, and Tailwind CSS, with server-side contact handling, internationalization, theme preferences, legal pages, and a production architecture designed for Cloudflare Workers.

> 🚧 This project is under active development and receives continuous improvements.

## Overview

This repository contains the source code for my professional portfolio.

The project serves as the central hub for my professional presence, bringing together my background, technical skills, areas of expertise, projects, and contact channels in a responsive and multilingual interface.

Beyond presenting professional information, the portfolio is also developed as a complete web application, with reusable components, file-based routing, server-side functionality, user preferences, legal and consent interfaces, dedicated project pages, and custom system pages.

## Features

- Responsive professional interface
- Light and dark themes
- Multilingual content
- Persistent user preferences
- Professional background and academic timeline
- Technical skills grouped by area
- Services and areas of expertise
- Featured projects and complete project catalog
- Dedicated project pages
- Server-side contact form
- Cloudflare Turnstile verification
- Email delivery through Resend
- Privacy Policy, Terms of Use, and Cookie Policy
- Consent preferences interface
- Custom system and error pages
- SEO metadata with localized content
- Production deployment architecture for Cloudflare Workers

## Tech Stack

| Technology | Purpose |
| --- | --- |
| TanStack Start | Full-stack React application architecture |
| React 19 | User interface |
| TypeScript | Static typing |
| Vite 8 | Development and build tooling |
| TanStack Router | File-based routing |
| TanStack Query | Data management infrastructure |
| Tailwind CSS 4 | Styling and responsive design |
| Motion | Interface animations and transitions |
| Lucide React | Interface icons |
| Cloudflare Workers | Production runtime |
| Cloudflare Turnstile | Contact form verification |
| Resend | Transactional email delivery |

The project uses **npm** as its package manager.

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon-16x16.png
│   ├── favicon-180x180.png
│   ├── favicon-192x192.png
│   ├── favicon-32x32.png
│   ├── favicon-48x48.ico
│   ├── favicon-500x500.png
│   ├── favicon-512x512.png
│   └── preferences-init.js
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── legal/
│   │   ├── motion/
│   │   ├── shared/
│   │   └── system/
│   ├── context/
│   ├── data/
│   │   └── locales/
│   ├── hooks/
│   ├── lib/
│   │   └── contact/
│   ├── routes/
│   ├── sections/
│   ├── types/
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
├── .env.example
├── eslint.config.js
├── LICENSE
├── package.json
├── README.md
├── README.pt-BR.md
├── SECURITY.md
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc
```

## Internationalization

The portfolio currently supports four locales:

- Portuguese — `pt-BR`
- English — `en-US`
- Spanish — `es-ES`
- French — `fr-FR`

Localized content covers the main interface as well as SEO metadata, navigation, professional information, projects, services, contact content, legal pages, consent interfaces, and footer content.

The locale structure is centralized under:

```text
src/data/locales/
```

## Contact Infrastructure

The contact form uses a server-side endpoint implemented at:

```text
/api/contact
```

Contact requests pass through multiple validation stages before email delivery.

The endpoint verifies the request origin, requires JSON content, enforces a request body size limit, validates the submitted payload, verifies the Cloudflare Turnstile token, and only then attempts to deliver the message.

Email delivery is handled through Resend.

The Turnstile implementation also distinguishes local test credentials from production credentials and validates the expected production hostname and contact action.

## Security & Privacy

Security and privacy considerations are integrated into the application architecture.

The contact endpoint includes:

- Same-origin request validation
- Content-Type validation
- Request body size limits
- Payload validation
- Cloudflare Turnstile verification
- Turnstile hostname validation in production
- Turnstile action validation in production
- Server-side secret handling
- Controlled email delivery

Sensitive configuration is accessed exclusively from server-side code and is not intentionally exposed to the browser.

The project also includes dedicated interfaces for:

- Privacy Policy
- Terms of Use
- Cookie Policy
- Consent preferences

Security vulnerabilities should be reported according to the repository's [`SECURITY.md`](SECURITY.md) policy rather than through public issues or discussions.

## System Pages

The project includes reusable system page configurations for common HTTP and operational states:

- `401` — Unauthorized
- `403` — Forbidden
- `404` — Not Found
- `500` — Internal Server Error
- `502` — Bad Gateway
- `503` — Service Unavailable
- `504` — Gateway Timeout
- Maintenance mode

These pages share a common system-page architecture while supporting state-specific content and presentation.

## Development

### Requirements

- Node.js
- npm

### Clone the repository

```bash
git clone https://github.com/arthurcfranklin/portfolio.git
cd portfolio
```

### Install dependencies

```bash
npm install
```

### Configure the environment

Create a local environment file based on the provided example:

```bash
cp .env.example .env
```

Configure the required variables:

```env
VITE_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
```

`VITE_TURNSTILE_SITE_KEY` is public build-time configuration used by the client-side Turnstile integration.

`TURNSTILE_SECRET_KEY` and `RESEND_API_KEY` are server-side secrets and must not be exposed to client-side code.

### Start the development server

```bash
npm run dev
```

The development server is configured to run on:

```text
http://localhost:3000
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the application |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the codebase with Prettier |
| `npm run cf-typegen` | Generate Cloudflare environment types |

## Production Build

Create a production build with:

```bash
npm run build
```

Production builds require `VITE_TURNSTILE_SITE_KEY` to be configured. The Vite configuration intentionally rejects a production build when this value is missing.

This prevents a production artifact from being generated without the public configuration required by the contact verification interface.

## Deployment

The application is configured for a Cloudflare Workers runtime.

The Worker entrypoint is:

```text
src/server.ts
```

Cloudflare configuration is defined in:

```text
wrangler.jsonc
```

The project uses the Cloudflare Vite integration alongside TanStack Start's server architecture.

Runtime secrets such as the Turnstile secret key and Resend API key must be configured securely in the deployment environment rather than committed to the repository.

## Security

If you discover a security vulnerability in the source code or deployed portfolio, please follow the responsible disclosure process described in [`SECURITY.md`](SECURITY.md).

Do not report security vulnerabilities through public issues, discussions, or pull requests.

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

Developed by **Arthur Franklin** · [Português](README.pt-BR.md) · [MIT License](LICENSE)
