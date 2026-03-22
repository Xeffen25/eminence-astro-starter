# Copilot Instructions

These instructions apply to all changes in this repository.

## Project Basics

- Runtime: Node.js >= 22.12.0
- Package manager: pnpm
- Framework: Astro
- Deploy target: Cloudflare

## Workflow Rules

Follow the contribution policy in CONTRIBUTING.md.

- Treat main as production-ready. Do not propose unstable or partial work for main.
- Use branch naming: issue-number-type/brief-description
- Keep branch type and commit type aligned.
- Use Conventional Commits format: type(scope): description
- Supported commit types: feat, fix, docs, refactor, deps and test.

## Coding Expectations

- Prefer minimal, focused changes.
- Keep behavior stable unless the task explicitly changes behavior.
- Match existing style and patterns in nearby files.
- Keep TypeScript strict-safe and avoid type weakening.

## Command Playbook

Use these commands from the repository root.

### Setup

- Install deps: pnpm install
- Generate Cloudflare types (if bindings or worker environment types changed always run this command): pnpm generate-types

### Day-to-day

- Start dev server: pnpm dev
- Format check: pnpm format:check
- Format fix: pnpm format:fix
- Full quality check: pnpm check
- Build: pnpm build
- Preview production build: pnpm preview

### Before finishing a code change

- Run pnpm format:fix
- Run pnpm check
- Run pnpm build for changes that affect runtime behavior

## Agent Behavior Guidance

- Prefer pnpm scripts over raw tool commands when an equivalent script exists.
- Do not introduce new dependencies unless necessary for the task.
- If adding dependencies, use pnpm and update lockfile.
