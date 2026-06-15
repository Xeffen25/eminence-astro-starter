# Eminence Astro Starter — Agent Instructions

## Tech Stack

| Layer           | Technology                                              |
| --------------- | ------------------------------------------------------- |
| Framework       | Astro 6, SSR (`output: "server"`)                       |
| Hosting         | Cloudflare Workers via `@astrojs/cloudflare`            |
| UI Frameworks   | Svelte 5 (`@astrojs/svelte`)                            |
| Styling         | Tailwind CSS 4 (`@tailwindcss/vite`) + daisyUI 5 plugin |
| i18n            | Paraglide JS 2 (`@inlang/paraglide-js`)                 |
| SEO / Head      | `eminence-astro-suite`                                  |
| Package Manager | pnpm                                                    |
| Testing         | Vitest                                                  |

## Key Commands

```bash
pnpm dev            # Start dev server (runs paraglide:watch + astro dev in parallel)
pnpm build          # Compile messages then build
pnpm format         # Prettier (runs on all files)
pnpm test           # Run Vitest tests once
pnpm paraglide      # Manually compile messages to src/paraglide/
```

> Always run `pnpm format` before committing. Husky enforces this via lint-staged.

## Project Structure

```
src/
  actions/        # Astro server actions
  assets/         # Static assets (flags/, icons)
  components/     # Reusable Astro & Svelte components
  content/        # Astro content collections
  fonts/          # Local font files
  forms/          # Form components
  layouts/        # BaseLayout.astro, DefaultLayout.astro
  lib/            # Shared utilities
  pages/          # File-based routes
  paraglide/      # ⚠️ AUTO-GENERATED — do not edit
  styles/         # global.css (Tailwind entry)
  tests/          # Vitest test files
  types/          # Shared TypeScript types
messages/         # Translation source files (edit these)
  es.json         # Base locale (Spanish)
  en.json         # English translations
project.inlang/   # Paraglide project config
```

`@/` is the TypeScript path alias for `src/`.

## i18n — Paraglide (Critical)

**Rule: Never use direct text strings in any page or component.** All visible text must come from Paraglide message functions.

### Usage

```astro
---
import { m } from "@/paraglide/messages";
---

<h1>{m.page_heading()}</h1>
<p>{m.page_description()}</p>
```

### Adding a new message

1. Add the key/value to `messages/es.json` (base locale — always edit this first)
2. Add the same key to `messages/en.json`
3. In dev, `paraglide:watch` auto-recompiles; for manual compile: `pnpm paraglide`
4. Import and use: `import { m } from "@/paraglide/messages"`

### Message key naming

Use `page_section_element` snake_case convention, e.g. `about_hero_title`, `contact_form_submit`.

### Runtime helpers (from `@/paraglide/runtime`)

```ts
import {
  getLocale,
  localizeHref,
  deLocalizeHref,
  locales,
} from "@/paraglide/runtime";
```

- `getLocale()` — current locale (e.g. `"es"`, `"en"`)
- `localizeHref(path, { locale })` — add locale prefix to a path
- `deLocalizeHref(path)` — strip locale prefix
- `locales` — array of all configured locales

### Locale config

- Base locale: `es` (no URL prefix)
- Additional locale: `en` (prefix: `/en/...`)
- Middleware (`src/middleware.ts`) handles routing automatically

## Layouts

Always wrap pages in a layout — never write a bare page without one.

```astro
---
import DefaultLayout from "@/layouts/DefaultLayout.astro";
import { m } from "@/paraglide/messages";
---

<DefaultLayout title={m.page_title()} description={m.page_description()}>
  ...
</DefaultLayout>
```

- `BaseLayout.astro` — sets `<html lang={getLocale()}>`, imports global CSS, fonts
- `DefaultLayout.astro` — extends BaseLayout with Header, SkipToContent, main, Footer

## Styling: Tailwind CSS 4 + daisyUI 5

- Tailwind is configured in `src/styles/global.css` via `@import "tailwindcss"`.
- daisyUI is loaded as a plugin with `dark` theme as default.
- Use daisyUI semantic class names (`btn`, `card`, `badge`, etc.) before writing custom Tailwind utilities.
- Font is available as `font-sans` (Inter).

## Svelte Components

Use Svelte 5 for interactive client-side components. Always add a `client:*` directive when using in Astro:

```astro
import MyWidget from "@/components/MyWidget.svelte";
<MyWidget client:load />
<!-- critical interactivity -->
<MyWidget client:idle />
<!-- lower priority -->
<MyWidget client:visible />
<!-- below fold -->
```

Pure display components that don't need interactivity should be `.astro` files instead.

## Commits & Branching

See [CONTRIBUTING.md](CONTRIBUTING.md) for full conventions. Summary:

- **Branches**: `issue-number-type/brief-description` (e.g. `42-feat/add-contact-page`)
- **Commits**: Conventional Commits — `type(scope): description`
- **Supported types**: `feat`, `fix`, `docs`, `refactor`, `deps`, `test`, `revert`
