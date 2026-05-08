# Eminence Astro Starter

The best starter template for Astro projects deployed to Cloudflare Workers because it ships with a full site structure, Cloudflare-ready configuration, and a setup flow tuned for fast project launches.

## Improvements

The template includes:

- [Full Project Structure](https://github.com/Xeffen25/eminence-astro-starter/wiki/Full-Project-Structure)
- [Automatic Formatting](https://github.com/Xeffen25/eminence-astro-starter/wiki/Formatting)
- [Layout Ready](https://github.com/Xeffen25/eminence-astro-starter/wiki/Layout-Ready)
- [SEO Ready with eminence-astro-suite](https://github.com/Xeffen25/eminence-astro-starter/wiki/SEO-Ready)
- [pnpm config improvements](https://github.com/Xeffen25/eminence-astro-starter/wiki/PNPM-Config-Improvements)
- [TypeScript Config](https://github.com/Xeffen25/eminence-astro-starter/wiki/TypeScript-Config)
- [Wrangler Config](https://github.com/Xeffen25/eminence-astro-starter/wiki/Wrangler-Configured)
- [Better commands for easier DX](https://github.com/Xeffen25/eminence-astro-starter/wiki/Better-Commands)
- [AI ready](https://github.com/Xeffen25/eminence-astro-starter/wiki/AI-Ready)
- [GitHub labels for websites](https://github.com/Xeffen25/eminence-astro-starter/wiki/GitHub-Labels)
- [GitHub related files](https://github.com/Xeffen25/eminence-astro-starter/wiki/GitHub-Related-Files)
- [VS Code settings](https://github.com/Xeffen25/eminence-astro-starter/wiki/VS-Code-Settings)

## Project Structure

```text
/
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── public/
├── src/
│   ├── actions/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── fonts/
│   ├── forms/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   ├── tests/
│   ├── types/
│   └── env.d.ts
├── tsconfig.json
├── worker-configuration.d.ts
└── wrangler.jsonc
```

## Getting Started

### 1. Use the template

Create your project from this template with:

```sh
pnpm create astro@latest --template Xeffen25/eminence-astro-starter
```

Follow the prompts to create the new project from this repository template.

### 2. Rename the site

Update the project name in these files:

- `package.json`
- `wrangler.jsonc`

At minimum, change:

- The `name` field in `package.json`
- The `name` field in `wrangler.jsonc`
- The `route.pattern` value in `wrangler.jsonc` if you are using a custom domain

### 3. Format the project

Run:

```sh
pnpm format
```

### 4. Create your initial commit

After renaming and formatting the project, create your first commit:

```sh
git add .
git commit -m "Initial commit"
```

## Available Commands

All commands are run from the project root.

| Command               | Action                                       |
| :-------------------- | :------------------------------------------- |
| `pnpm dev`            | Start the Astro dev server                   |
| `pnpm build`          | Build the site                               |
| `pnpm preview`        | Preview the production build locally         |
| `pnpm generate-types` | Generate Wrangler types                      |
| `pnpm format`         | Format the codebase with Prettier            |
| `pnpm test`           | Run tests                                    |
| `pnpm ci`             | Run formatting check, Astro check, and tests |
