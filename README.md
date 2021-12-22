# Headless Commerce Platforms

This is a feature comparison of various headless e-commerce platforms.

## Contributing & Corrections

This project is community-driven. I've done my best to honestly evaluate feature support for each solution, but in many cases I'm not able to determine support, so I left it "unknown". In other cases I may have made a mistake.

Corrections and extensions are welcome! You can either use the provided form on the website (click the small edit icon when hovering over a feature), or make a pull request to this repo.

The data for each solution is found in the [src/solutions](/src/solutions) directory.

## Developing

This project is built with [SvelteKit](https://kit.svelte.dev/).

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
