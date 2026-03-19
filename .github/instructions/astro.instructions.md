---
description: "Use when writing Astro components, pages, layouts, or modifying .astro files. Covers component patterns, server/client boundaries, TypeScript safety, and best practices for content-driven websites."
applyTo: "**/*.astro"
---

# Astro Component Patterns & Best Practices

## Component Structure

Every Astro component has two parts: **frontmatter** (server-side code) and **template** (HTML + expressions).

```astro
---
// Frontmatter: TypeScript, imports, server-only logic
import SomeComponent from "./SomeComponent.astro";
const { title } = Astro.props;
interface Props {
	title: string;
}
---

<!-- Template: HTML + JS expressions -->
<div>
	<h1>{title}</h1>
	<SomeComponent />
</div>
```

**Rules:**

1. Always define a `Props` interface for components that receive props.
2. Use destructuring with defaults: `const { title = "Default" } = Astro.props;`
3. Keep frontmatter focused on data fetching, imports, and prop setup.
4. Do not import or reference `Astro.props` in the template; use destructured variables.

## Pages vs. Components

- **Pages** (`src/pages/*.astro`): Full-page documents. Astro auto-wraps with `<!DOCTYPE html>`, `<head>`, `<body>`.
- **Layouts** (`src/layouts/*.astro`): Reusable page templates. Receive `frontmatter` for `.md` pages. Use `<slot />` for child content.
- **Components** (`src/components/*.astro`): Reusable UI units. No auto-wrapping.

Use layouts for shared structure (header, footer, nav). Use components for widgets (cards, buttons, sidebars).

## Server vs. Client JavaScript

- **By default**: Astro strips all client-side JavaScript. Components render to static HTML.
- **Interactive components**: Import UI framework components (React, Vue) and add a `client:*` directive:
    ```astro
    import MyReactButton from "./MyReactButton.jsx"
    <MyReactButton client:load />
    <!-- Hydrates on page load -->
    <MyReactButton client:idle />
    <!-- Hydrates when browser
    is idle -->
    <MyReactButton client:visible />
    <!-- Hydrates when visible in viewport -->
    ```
- **Server islands**: For personalized server-rendered content, use `server:defer`:
    ```astro
    import UserProfile from "./UserProfile.astro"
    <UserProfile server:defer />
    <!-- Renders in parallel, non-blocking -->
    ```

**When to hydrate:**

- `client:load`: Critical interactive features (forms, animated headers).
- `client:idle`: Lower-priority features (analytics, lazy carousels).
- `client:visible`: Below-the-fold widgets (infinite-scroll lists).

## Styling

- **Scoped CSS**: Use `<style>` tags for component-scoped styles. CSS is automatically scoped to that component only.
    ```astro
    <style>
    	.card {
    		border: 1px solid #ccc;
    	}
    </style>
    <div class="card">...</div>
    ```
- **Global CSS**: Import in layouts or pages:
    ```astro
    import "../styles/global.css";
    ```
- **CSS variables with JS values**: Use `define:vars`:

    ```astro
    ---
    const primaryColor = "#ff0000";
    ---

    <style define:vars={{ primaryColor }}>
    	.button {
    		color: var(--primaryColor);
    	}
    </style>
    ```

## Props & Slots

```astro
---
// Props must be destructured from Astro.props
interface Props {
	title: string;
	description?: string;
}
const { title, description } = Astro.props;
---

<div>
	<h1>{title}</h1>
	{description && <p>{description}</p>}
	<!-- <slot> for child content -->
	<slot />
</div>
```

- **Default props**: Use destructuring: `const { title = "Default" } = Astro.props;`
- **Passing props**: `<MyComponent title="Hello" description="World" />`
- **Named slots**: `<slot name="header" />` and `<SomeComponent><h2 slot="header">Title</h2></SomeComponent>`
- **Slot fallback**: Content inside `<slot>` renders if no child is passed.

## TypeScript Safety

1. Always add a `Props` interface.
2. Add return types to functions.
3. Use strict mode in `tsconfig.json`.
4. Run `astro check` before committing.

```astro
---
interface Props {
	items: string[];
	count: number;
}

function getItemLabel(item: string): string {
	return item.toUpperCase();
}

const { items, count } = Astro.props;
---
```

## Content Collections

For Markdown/MDX pages, define a schema in `src/content/config.ts`:

```astro
---
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
---
```

Query with `getCollection()`:

```astro
---
import { getCollection } from "astro:content";

const posts = await getCollection("blog");
const filtered = posts.filter((p) => p.data.tags?.includes("astro"));
---
```

## Safe Edits & Anti-patterns

✅ **Do:**

- Use `client:visible` for below-the-fold features.
- Keep frontmatter pure (no side effects).
- Use layouts for shared page shell.
- Scoop CSS within `<style>` tags.
- Leverage static HTML and pre-rendering.

❌ **Don't:**

- Mix server and client logic in the same component without clear boundaries.
- Hydrate entire pages with a UI framework; use islands sparingly.
- Import server-side code in UI framework components.
- Modify `Astro.cookies` or `Astro.locals` in components; do this in middleware or endpoints.
- Forget to define `Props` interfaces.

## Deployment Target: Cloudflare

This project deploys to Cloudflare Pages. Consult `wrangler.jsonc` and `worker-configuration.d.ts` for available bindings (KV, Durable Objects, etc.). Use `astro build && wrangler deploy` to build and deploy.
