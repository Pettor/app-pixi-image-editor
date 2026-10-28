# Pixi Image Editor

[![GitHub](https://img.shields.io/badge/license-MIT-green)](https://github.com/Pettor/app-pixi-image-editor/blob/main/LICENSE)
[![Actions Main](../../actions/workflows/main.yml/badge.svg)](../../actions/workflows/main.yml)
[![Coverage](https://img.shields.io/badge/coverage-%E2%89%A580%25-brightgreen)](../../actions/workflows/ci.yml)
[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://pettor.github.io/app-pixi-image-editor/storybook/)

A browser-based image editor built with [PixiJS](https://pixijs.com/) and React. Upload an image and apply filters, transform it, and interact with it in real time via a GPU-accelerated canvas.

## Live Demo

- **[Live Application Demo](https://pettor.github.io/app-pixi-image-editor/app/)** - See the main application
- **[Storybook Component Library](https://pettor.github.io/app-pixi-image-editor/storybook/)** - Explore the component documentation

## Features

- **GPU-accelerated rendering** via PixiJS WebGL canvas
- **Image filters** — blur, brightness, contrast, saturation, pixelate, and more via `pixi-filters`
- **Transform tools** — rotate (CW/CCW), flip horizontal/vertical, fit-to-view, fullscreen
- **Zoom controls** — pan and zoom via `pixi-viewport`
- **Drag-and-drop upload** — drop an image file directly onto the home screen
- **Dark/light theme** toggle
- **PWA** — installable and works offline
- **Internationalization** — all UI strings managed via React Intl

## Tech Stack

| Category | Technology |
|---|---|
| Rendering | [PixiJS 8](https://pixijs.com/), [@pixi/react](https://pixijs.io/pixi-react/), [pixi-viewport](https://github.com/davidfig/pixi-viewport), [pixi-filters](https://github.com/pixijs/filters) |
| UI framework | [React 19](https://react.dev/), [DaisyUI 5](https://daisyui.com/), [Tailwind CSS 4](https://tailwindcss.com/) |
| Routing | [TanStack Router v1](https://tanstack.com/router) |
| State | [Jotai 2](https://jotai.org/) |
| Build | [Vite 8](https://vite.dev/), [Turborepo](https://turbo.build/repo/) |
| Testing | [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/), [Storybook 10](https://storybook.js.org/) |

## Quick Start

[![Launch on PicoRunner](https://picorunner.com/badges/launch.svg)](https://picorunner.com/launch/?repository=https%3A%2F%2Fgithub.com%2FPettor%2Fapp-pixi-image-editor)

### Prerequisites

- Node.js 21–24
- pnpm 10 (`corepack enable`)

### Installation

```bash
git clone https://github.com/Pettor/app-pixi-image-editor.git
cd app-pixi-image-editor
corepack enable
pnpm install
pnpm dev
```

The app is available at `https://localhost:5173` (HTTPS — your browser will show a self-signed cert warning on first visit).

### Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm deploy` | Build and prepare deployment artifacts |
| `pnpm test` | Run unit/component tests (Vitest + Playwright) |
| `pnpm test:e2e` | Run Playwright E2E tests |
| `pnpm lint` | Run ESLint |
| `pnpm storybook` | Start Storybook on localhost:9050 |

## Project Structure

```
├── apps/
│   ├── web/       # Main React + PixiJS application
│   ├── storybook/    # Storybook configuration and stories
│   └── e2e/          # Playwright end-to-end tests
├── packages/
│   ├── ui/           # (@package/ui) Shared UI components
│   └── react/        # (@package/react) Reusable React hooks
├── configs/          # Shared ESLint, Tailwind, TypeScript, Vite configs
├── design/tokens/    # (@design/tokens) Style Dictionary design tokens
├── .github/workflows # CI/CD pipeline
└── output/           # Build artifacts (gitignored)
```

## GitHub Actions Setup

### CI

On every pull request, the `main` workflow runs lint, build, component tests, and E2E tests.

To enforce these as required checks:

1. **Settings** → **Actions** → enable "Allow all actions"
2. **Settings** → **Rules** → create a branch protection rule targeting the default branch with required status checks: `Lint`, `Build`, `Test Components`, `Test E2E`

### GitHub Pages Deployment

Merging to `main` triggers the `deploy` workflow, which builds the app and publishes to the `deploy/main` branch.

Setup:
1. **Settings** → **Pages** → Source: Deploy from a branch → Branch: `deploy/main`

## License

MIT — see the [LICENSE](LICENSE) file for details.
