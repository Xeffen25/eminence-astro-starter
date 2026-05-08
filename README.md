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

### 2. Rename the project

Update the project name in these files:

- `wrangler.jsonc` the `name` and `route` if you have a custom domain or delete the route property and set `workers_dev` to true.
- `package.json` name

### 3. Delete unnecessary files

Delete the following files:

- LICENSE
- CONTRIBUTING.md
- README.md
- .github/SUPPORT.md
- .github/SECURITY.md

I recommend you create an Issue with these as a checklist so you later read them depending on your project needs. If it is open source you should probably add all. If it isn't just a CONTRIBUTING.md and README.md to inform your team.

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

Publish it to github

### 5. Link to Cloudflare

Link your github repo with Clouflare Workers application so you it deploys.

### 6. Make it yours

Now you can just make it yours. Change the icon.svg, the homepage, use the eminence-astro-suite config which logs warnings when you build your project. See the wiki for more details on the features of this template and how to use them or how to add integrations as Clouflare being an edge environment has some bugs that need workarounds like when using React.

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
