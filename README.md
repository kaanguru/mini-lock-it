# Client-Side development template 

Ready for Tauri desktop development

Using:

- [Static site generation](https://kit.svelte.dev/docs/adapter-static)
- [Client-side Storage](https://dexie.org/)
Static  
- [SuperForms](https://superforms.rocks/concepts/spa)

----

- [x] [SvelteKit | Tauri Apps](https://tauri.app/v1/guides/getting-started/setup/sveltekit/#sveltekit-in-ssg-mode)
  - [x] `pnpm create svelte`
  - [x] ` pnpm add -D @sveltejs/adapter-static `
  - [x] Then update the `adapter` import in the `svelte.config.js` file
- [x] [Get started with Dexie in Svelte](https://dexie.org/docs/Tutorial/Svelte)
  - [x]  ` pnpm install dexie@next `
  - [x]  `src\lib\db.ts`
- [x] [Superforms for SvelteKit](https://superforms.rocks/concepts/spa)
  - [ ] `pnpm i -D sveltekit-superforms zod`
- [x] [Skeleton — UI Toolkit for Svelte + Tailwind](https://www.skeleton.dev/docs/get-started)
  - [x] `pnpm i -D @skeletonlabs/skeleton @skeletonlabs/tw-plugin`
  - [x] `pnpm dlx svelte-add@latest tailwindcss`
