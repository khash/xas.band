# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing/artist site for **Xas** (electronica music project, vocalist Solène), built with Astro 5 + Tailwind CSS v4. No backend, no tests, no lint config. Deployed as static files via AWS Amplify.

## Commands

```bash
pnpm dev       # local dev server (astro dev)
pnpm build     # production build → dist/
pnpm preview   # serve the built dist/ locally
```

Use **pnpm** (not npm). The repo is committed directly to `main`; AWS Amplify builds from `main` (`amplify.yml`: Node 22, pnpm pinned to 10.24.0, `pnpm build`, publishes `dist/`).

**AWS / Amplify:** the site's Amplify app lives in the `personal` AWS profile — use `--profile personal` for any `aws` CLI calls. App: **xas.band**, `appId dnojs9xcscsg4`, region **us-east-1**, branch `main`. Watch a deploy with:

```bash
aws amplify list-jobs --profile personal --region us-east-1 --app-id dnojs9xcscsg4 --branch-name main --max-items 1
aws amplify get-job   --profile personal --region us-east-1 --app-id dnojs9xcscsg4 --branch-name main --job-id <id>
```

## Architecture

- **`src/data/tracks.ts` is the single source of truth for the singles.** It exports the `tracks` array (slug, title, note, dur, optional `lyrics`) and the `cover(slug)` helper. Both the home page singles list and the lyrics pages import from here — never reintroduce an inline track array in a page.
- **Pages** (`src/pages/`): `index.astro` is the whole one-page site (sections `#music`, `#voice`, `#story`); `music/[slug].astro` generates one lyrics page per track via `getStaticPaths()` over `tracks.filter(t => t.lyrics)`; `terms.astro` / `privacy.astro` are legal pages.
- **Layouts**: `Layout.astro` (main, sets the neon background + grain) and `LegalLayout.astro` (legal pages; carries its own footer with the **owner** copyright "Kash Sajadi" — distinct from the site's music/lyrics rights notices).
- **Cover images** live in `public/tracks/<slug>.png`; the `slug` in `tracks.ts` must match the filename.

## Lyrics handling (important)

The canonical lyric source files are **outside the repo** in the shared Dropbox **Music** folder — [`~/Dropbox (Personal)/Music`](<file:///Users/khash/Dropbox (Personal)/Music>) — at `Music/Tracks/<Track Name>/lyrics.md`. This folder also holds the source audio (`.wav`), cover art, photos, and videos for each track. They are AI-style lyric sheets containing musical/production instructions — bracketed section markers (`[Verse]`, `[Chorus]`, `[Style]`, `[Intro]`…) and parenthetical production notes (`(sparse atmosphere…)`, `(stutter vocal chops)`, `(Harmony on…)`).

When adding or updating lyrics in `tracks.ts`, **strip all of those instructions** and keep only the sung/spoken words. Kept as content (not instructions): spoken-word samples (e.g. Alan Watts quotes) and sung echo fragments like `(couldn't save)`. Stanzas are separated by a blank line — the lyrics page splits on `\n\s*\n` for stanzas and `\n` for lines.

## Styling

Tailwind v4 via the `@tailwindcss/vite` plugin — there is **no `tailwind.config`**. The theme (custom fonts `font-display`/`font-mono`/`font-serif`, animations `animate-marquee`/`animate-drift`/etc., and the `grain`/`grain-overlay` utilities) is defined in the `@theme` and `@utility` blocks of `src/styles/global.css`, which is imported by `Layout.astro`. The visual direction is dark "Nocturne" neon — fuchsia/violet/cyan blurred glows, film-grain overlay, glowing display type.
