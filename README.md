# Мобильное PWA приложение МУП АгроИнвест (agro-worker.q-bit.tech)

> Тут будет описание программы

## Version

**v4.0.0**

## Requirements

1. `docker`
2. `docker compose`
3. `make`

## Run

1. use `pnpm`:
```sh
pnpm i
pnpm dev
```

2. or **docker** and **make**:
```sh
make dev.up
```

## GIT

1. For proper git commit messages, use:
- `git config commit.template .gitmessage`

## Runtime

1. App requires **[Node.js](https://nodejs.org/)** v20.7+ to run.
2. Language: **[Typescript](https://www.typescriptlang.org/)** v5+
3. Packager: **[pnpm](https://pnpm.io/)** 

## Packages

App is using following [npm-package](https://www.npmjs.com/)

| Package | Version |
| ------ | ------ |
| ***Production dependencies*** |
| [@emotion/react](https://npmjs.com/package/@emotion/react) | ^11.11.4 |
| [@emotion/styled](https://npmjs.com/package/@emotion/styled) | ^11.11.5 |
| [@hookform/resolvers](https://npmjs.com/package/@hookform/resolvers) | ^3.4.2 |
| [@radix-ui/react-dialog](https://npmjs.com/package/@radix-ui/react-dialog) | ^1.0.5 |
| [@radix-ui/react-dropdown-menu](https://npmjs.com/package/@radix-ui/react-dropdown-menu) | ^2.0.6 |
| [@radix-ui/react-label](https://npmjs.com/package/@radix-ui/react-label) | ^2.0.2 |
| [@radix-ui/react-slot](https://npmjs.com/package/@radix-ui/react-slot) | ^1.0.2 |
| [@radix-ui/react-toast](https://npmjs.com/package/@radix-ui/react-toast) | ^1.1.5 |
| [@radix-ui/themes](https://npmjs.com/package/@radix-ui/themes) | ^3.0.5 |
| [@t3-oss/env-core](https://npmjs.com/package/@t3-oss/env-core) | ^0.10.1 |
| [@tanstack/react-query](https://npmjs.com/package/@tanstack/react-query) | ^5.40.0 |
| [@tanstack/react-query-devtools](https://npmjs.com/package/@tanstack/react-query-devtools) | ^5.40.0 |
| [axios](https://npmjs.com/package/axios) | ^1.7.2 |
| [class-variance-authority](https://npmjs.com/package/class-variance-authority) | ^0.7.0 |
| [clsx](https://npmjs.com/package/clsx) | ^2.1.1 |
| [dayjs](https://npmjs.com/package/dayjs) | ^1.11.11 |
| [dexie](https://npmjs.com/package/dexie) | ^4.0.7 |
| [dexie-react-hooks](https://npmjs.com/package/dexie-react-hooks) | ^1.1.7 |
| [dotenv-flow](https://npmjs.com/package/dotenv-flow) | ^4.1.0 |
| [geist](https://npmjs.com/package/geist) | ^1.3.0 |
| [input-otp](https://npmjs.com/package/input-otp) | ^1.2.4 |
| [is-mobile](https://npmjs.com/package/is-mobile) | ^4.0.0 |
| [lodash](https://npmjs.com/package/lodash) | ^4.17.21 |
| [lucide-react](https://npmjs.com/package/lucide-react) | ^0.379.0 |
| [notistack](https://npmjs.com/package/notistack) | ^3.0.1 |
| [react](https://npmjs.com/package/react) | 18.3.0-canary-c3048aab4-20240326 |
| [react-dom](https://npmjs.com/package/react-dom) | 18.3.0-canary-c3048aab4-20240326 |
| [react-error-boundary](https://npmjs.com/package/react-error-boundary) | ^4.0.13 |
| [react-helmet-async](https://npmjs.com/package/react-helmet-async) | ^2.0.5 |
| [react-hook-form](https://npmjs.com/package/react-hook-form) | ^7.51.5 |
| [react-hotkeys-hook](https://npmjs.com/package/react-hotkeys-hook) | ^4.5.0 |
| [react-icons](https://npmjs.com/package/react-icons) | ^5.2.1 |
| [react-router-dom](https://npmjs.com/package/react-router-dom) | ^6.23.1 |
| [styled-components](https://npmjs.com/package/styled-components) | ^6.1.11 |
| [tailwind-merge](https://npmjs.com/package/tailwind-merge) | ^2.3.0 |
| [ts-pattern](https://npmjs.com/package/ts-pattern) | ^5.1.2 |
| [usehooks-ts](https://npmjs.com/package/usehooks-ts) | ^3.1.0 |
| [uuid](https://npmjs.com/package/uuid) | ^9.0.1 |
| [vaul](https://npmjs.com/package/vaul) | ^0.9.1 |
| [zod](https://npmjs.com/package/zod) | ^3.23.8 |
| [zustand](https://npmjs.com/package/zustand) | ^4.5.2 |
| ***Development dependencies*** |
| [@commitlint/cli](https://npmjs.com/package/@commitlint/cli) | ^19.3.0 |
| [@commitlint/config-conventional](https://npmjs.com/package/@commitlint/config-conventional) | ^19.2.2 |
| [@playwright/test](https://npmjs.com/package/@playwright/test) | ^1.44.1 |
| [@stylistic/eslint-plugin-js](https://npmjs.com/package/@stylistic/eslint-plugin-js) | ^2.1.0 |
| [@trivago/prettier-plugin-sort-imports](https://npmjs.com/package/@trivago/prettier-plugin-sort-imports) | ^4.3.0 |
| [@types/eslint](https://npmjs.com/package/@types/eslint) | ^8.56.10 |
| [@types/lodash](https://npmjs.com/package/@types/lodash) | ^4.17.4 |
| [@types/node](https://npmjs.com/package/@types/node) | ^20.12.13 |
| [@types/react](https://npmjs.com/package/@types/react) | ^18.3.3 |
| [@types/react-dom](https://npmjs.com/package/@types/react-dom) | ^18.3.0 |
| [@types/styled-components](https://npmjs.com/package/@types/styled-components) | ^5.1.34 |
| [@types/uuid](https://npmjs.com/package/@types/uuid) | ^9.0.8 |
| [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) | ^7.11.0 |
| [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) | ^7.11.0 |
| [@vite-pwa/assets-generator](https://npmjs.com/package/@vite-pwa/assets-generator) | ^0.2.4 |
| [@vitejs/plugin-react](https://npmjs.com/package/@vitejs/plugin-react) | ^4.3.0 |
| [@vitejs/plugin-react-swc](https://npmjs.com/package/@vitejs/plugin-react-swc) | ^3.7.0 |
| [autoprefixer](https://npmjs.com/package/autoprefixer) | ^10.4.19 |
| [eslint](https://npmjs.com/package/eslint) | 8.57.0 |
| [eslint-config-next](https://npmjs.com/package/eslint-config-next) | ^14.2.3 |
| [eslint-config-prettier](https://npmjs.com/package/eslint-config-prettier) | ^9.1.0 |
| [eslint-plugin-prettier](https://npmjs.com/package/eslint-plugin-prettier) | ^5.1.3 |
| [eslint-plugin-react](https://npmjs.com/package/eslint-plugin-react) | ^7.34.2 |
| [eslint-plugin-react-hooks](https://npmjs.com/package/eslint-plugin-react-hooks) | ^4.6.2 |
| [eslint-plugin-react-refresh](https://npmjs.com/package/eslint-plugin-react-refresh) | ^0.4.7 |
| [eslint-plugin-simple-import-sort](https://npmjs.com/package/eslint-plugin-simple-import-sort) | ^12.1.0 |
| [eslint-plugin-tailwindcss](https://npmjs.com/package/eslint-plugin-tailwindcss) | ^3.17.0 |
| [eslint-plugin-unused-imports](https://npmjs.com/package/eslint-plugin-unused-imports) | ^4.0.0 |
| [https-localhost](https://npmjs.com/package/https-localhost) | ^4.7.1 |
| [husky](https://npmjs.com/package/husky) | ^9.0.11 |
| [lint-staged](https://npmjs.com/package/lint-staged) | ^15.2.5 |
| [postcss](https://npmjs.com/package/postcss) | ^8.4.38 |
| [prettier](https://npmjs.com/package/prettier) | ^3.2.5 |
| [prettier-plugin-tailwindcss](https://npmjs.com/package/prettier-plugin-tailwindcss) | ^0.5.14 |
| [sharp](https://npmjs.com/package/sharp) | 0.33.4 |
| [sharp-ico](https://npmjs.com/package/sharp-ico) | 0.1.5 |
| [tailwindcss](https://npmjs.com/package/tailwindcss) | ^3.4.3 |
| [tailwindcss-animate](https://npmjs.com/package/tailwindcss-animate) | ^1.0.7 |
| [typescript](https://npmjs.com/package/typescript) | ^5.4.5 |
| [vite](https://npmjs.com/package/vite) | ^5.2.12 |
| [vite-plugin-node-polyfills](https://npmjs.com/package/vite-plugin-node-polyfills) | ^0.22.0 |
| [vite-plugin-pwa](https://npmjs.com/package/vite-plugin-pwa) | ^0.20.0 |
| [vite-plugin-singlefile](https://npmjs.com/package/vite-plugin-singlefile) | ^2.0.1 |
| [vite-tsconfig-paths](https://npmjs.com/package/vite-tsconfig-paths) | ^4.3.2 |
| [vitest](https://npmjs.com/package/vitest) | ^1.6.0 |
| [workbox-core](https://npmjs.com/package/workbox-core) | ^7.1.0 |
| [workbox-window](https://npmjs.com/package/workbox-window) | ^7.1.0 |

## License

MIT License

| Package | Version |
| ------ | ------ |
| ***Production dependencies*** |
| [@radix-ui/react-context-menu](https://npmjs.com/package/@radix-ui/react-context-menu) | ^2.1.5 |
| [@radix-ui/react-dialog](https://npmjs.com/package/@radix-ui/react-dialog) | ^1.0.5 |
| [@radix-ui/react-dropdown-menu](https://npmjs.com/package/@radix-ui/react-dropdown-menu) | ^2.0.6 |
| [@radix-ui/react-label](https://npmjs.com/package/@radix-ui/react-label) | ^2.0.2 |
| [@radix-ui/react-menubar](https://npmjs.com/package/@radix-ui/react-menubar) | ^1.0.4 |
| [@radix-ui/react-popover](https://npmjs.com/package/@radix-ui/react-popover) | ^1.0.7 |
| [@radix-ui/react-select](https://npmjs.com/package/@radix-ui/react-select) | ^2.0.0 |
| [@radix-ui/react-slot](https://npmjs.com/package/@radix-ui/react-slot) | ^1.0.2 |
| [@radix-ui/react-tooltip](https://npmjs.com/package/@radix-ui/react-tooltip) | ^1.0.7 |
| [@t3-oss/env-nextjs](https://npmjs.com/package/@t3-oss/env-nextjs) | ^0.10.1 |
| [@tanstack/react-query](https://npmjs.com/package/@tanstack/react-query) | ^5.40.0 |
| [@tanstack/react-query-devtools](https://npmjs.com/package/@tanstack/react-query-devtools) | ^5.40.0 |
| [axios](https://npmjs.com/package/axios) | ^1.7.2 |
| [class-variance-authority](https://npmjs.com/package/class-variance-authority) | ^0.7.0 |
| [clsx](https://npmjs.com/package/clsx) | ^2.1.1 |
| [lucide-react](https://npmjs.com/package/lucide-react) | ^0.381.0 |
| [mathjs](https://npmjs.com/package/mathjs) | ^12.4.2 |
| [next](https://npmjs.com/package/next) | ^14.2.3 |
| [next-themes](https://npmjs.com/package/next-themes) | ^0.3.0 |
| [react](https://npmjs.com/package/react) | ^18.3.1 |
| [react-dom](https://npmjs.com/package/react-dom) | ^18.3.1 |
| [tailwind-merge](https://npmjs.com/package/tailwind-merge) | ^2.3.0 |
| [use-editable](https://npmjs.com/package/use-editable) | ^2.3.3 |
| [vaul](https://npmjs.com/package/vaul) | ^0.9.1 |
| [zod](https://npmjs.com/package/zod) | ^3.23.8 |
| [zustand](https://npmjs.com/package/zustand) | ^4.5.2 |
| ***Development dependencies*** |
| [@commitlint/cli](https://npmjs.com/package/@commitlint/cli) | ^19.3.0 |
| [@commitlint/config-conventional](https://npmjs.com/package/@commitlint/config-conventional) | ^19.2.2 |
| [@stylistic/eslint-plugin-js](https://npmjs.com/package/@stylistic/eslint-plugin-js) | ^2.1.0 |
| [@trivago/prettier-plugin-sort-imports](https://npmjs.com/package/@trivago/prettier-plugin-sort-imports) | ^4.3.0 |
| [@types/eslint](https://npmjs.com/package/@types/eslint) | ^8.56.10 |
| [@types/node](https://npmjs.com/package/@types/node) | ^20.12.13 |
| [@types/react](https://npmjs.com/package/@types/react) | ^18.3.3 |
| [@types/react-dom](https://npmjs.com/package/@types/react-dom) | ^18.3.0 |
| [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) | ^7.11.0 |
| [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) | ^7.11.0 |
| [autoprefixer](https://npmjs.com/package/autoprefixer) | ^10.4.19 |
| [eslint](https://npmjs.com/package/eslint) | ^8.57.0 |
| [eslint-config-next](https://npmjs.com/package/eslint-config-next) | ^14.2.3 |
| [eslint-config-prettier](https://npmjs.com/package/eslint-config-prettier) | ^9.1.0 |
| [eslint-plugin-prettier](https://npmjs.com/package/eslint-plugin-prettier) | ^5.1.3 |
| [eslint-plugin-simple-import-sort](https://npmjs.com/package/eslint-plugin-simple-import-sort) | ^12.1.0 |
| [eslint-plugin-tailwindcss](https://npmjs.com/package/eslint-plugin-tailwindcss) | ^3.17.0 |
| [eslint-plugin-unused-imports](https://npmjs.com/package/eslint-plugin-unused-imports) | ^4.0.0 |
| [husky](https://npmjs.com/package/husky) | ^9.0.11 |
| [lint-staged](https://npmjs.com/package/lint-staged) | ^15.2.5 |
| [postcss](https://npmjs.com/package/postcss) | ^8.4.38 |
| [prettier](https://npmjs.com/package/prettier) | ^3.2.5 |
| [prettier-plugin-tailwindcss](https://npmjs.com/package/prettier-plugin-tailwindcss) | ^0.6.0 |
| [sharp](https://npmjs.com/package/sharp) | ^0.33.4 |
| [tailwindcss](https://npmjs.com/package/tailwindcss) | ^3.4.3 |
| [tailwindcss-animate](https://npmjs.com/package/tailwindcss-animate) | ^1.0.7 |
| [typescript](https://npmjs.com/package/typescript) | ^5.4.5 |
