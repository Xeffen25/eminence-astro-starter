# Copilot Instructions

These instructions apply to all changes in this repository.

## Project Basics

- Runtime: Node.js >= 22.12.0
- Package manager: pnpm
- Framework: Astro
- Deploy target: Cloudflare Workers

## Workflow Rules

- Treat main as production-ready. Do not propose unstable or partial work for main.
- Use branch naming: issue-number-type/brief-description
- Keep branch type and commit type aligned.
- Use Conventional Commits format: type(scope): description
- Supported commit types: feat, fix, docs, refactor, deps and test.

## Coding Expectations

- Match existing style and patterns in nearby files.
- Keep TypeScript strict-safe and avoid type weakening.

## Command Playbook

Use these commands from the repository root.

- Generate Cloudflare types (if bindings or worker environment types changed always run this command): pnpm generate-types
- Run tests: pnpm test when files that affect tests are changed.

## Agent Behavior Guidance

- Prefer pnpm scripts over raw tool commands when an equivalent script exists.
- Do not introduce new dependencies unless necessary for the task.
- If adding dependencies, use pnpm commands so it updates the lockfile.
