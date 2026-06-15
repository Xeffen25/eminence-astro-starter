# 🛠️ Support & Documentation

Before opening an issue or asking for help, please follow this guide to find the information you need. Our goal is to keep the issue tracker focused on actionable development tasks.

---

## 📖 1. Project Wiki (Primary Resource)

For detailed tutorials, architectural overviews, and integration nuances specific to this stack, please visit our **GitHub Wiki**.

[👉 Go to Project Wiki](https://github.com/Xeffen25/eminence-astro-starter/wiki)

**Use the Wiki for:**

- Step-by-step setup guides.
- Understanding how we handle Astro integrations.
- Nuances regarding our Cloudflare deployment flow.

---

## 📚 2. Official Technical Documentation

If your question is about a specific technology we use, the official docs are the fastest way to get an answer. We use the following stack (ordered by relevance):

- [Astro](https://docs.astro.build)
- [eminence-astro-suite](https://eminence-astro-suite.xeffen25.com)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare general platform docs](https://developers.cloudflare.com)
- [Svelte](https://svelte.dev/docs/svelte/overview)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [daisyUI](https://daisyui.com/docs/intro/)
- [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- [inlang CLI](https://inlang.com/m/r7kp499g/app-inlang-ide)
- [Vitest](https://vitest.dev/guide/)
- [@astrojs/check](https://docs.astro.build/en/guides/typescript/#astro-check)
- [@astrojs/svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/)
- [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Node.js](https://nodejs.org/docs/latest-v22.x/api/)
- [pnpm](https://pnpm.io/docs)
- [Prettier](https://prettier.io/docs/en/)
- [ESLint](https://eslint.org/docs/latest/)
- [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [concurrently](https://github.com/open-cli-tools/concurrently)
- [Sharp](https://sharp.pixelplumbing.com/)

---

## 🔍 3. Troubleshooting Workflow

If you encounter an error during development:

1. **Check the Wiki:** Ensure you aren't missing a project-specific step.
2. **Clean Install:** Try running `pnpm install` again to ensure dependencies are synced.
3. **Regenerate generated files:** If localization or Worker bindings look stale, run `pnpm paraglide` and `pnpm generate-types`.
4. **Run the project checks:** Use `pnpm github:ci` for the standard validation flow, or run `astro check`, `pnpm test`, and `pnpm build` individually to isolate the failure.
5. **Verify Git Hooks:** If your commit is failing, ensure your code passes the Prettier rules enforced by **Husky** and **Lint-staged**.
6. **Search Issues:** Check both [Open](https://github.com/Xeffen25/eminence-astro-starter/issues) and [Closed](https://github.com/Xeffen25/eminence-astro-starter/issues?q=is%3Aissue+is%3Aclosed) issues.

---

## ✉️ Still Need Help?

If you've exhausted the resources above:

- **Bug/Feature:** [Open a New Issue](https://github.com/Xeffen25/eminence-astro-starter/issues/new/choose) using the appropriate template.
- **Security:** Please refer to our [Security Policy](https://github.com/Xeffen25/eminence-astro-starter/blob/main/.github/SECURITY.md).
