# vite-vue-ultimate-starter

<p align="center">  
  <img src="https://github.com/kaandesu/vite-vue-ultimate-starter/raw/master/assets/logo.png" height="100" alt="vite-vue-ultimate-starter-Logo" />
</p>

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![RollupJS](https://img.shields.io/badge/RollupJS-ef3335?style=for-the-badge&logo=rollup.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Vite Vue3 Template is a starter template for building Vue3 applications using Vite as the build tool.
It comes pre-configured with
several essential dependencies that will help you get started with your Vue3 project right away.

[Live Demo](https://kaandesu.github.io/vite-vue-ultimate-starter/)

<hr>

## Out of the box

### Vue3

- #### [PWA Plugin](https://www.npmjs.com/package/vite-plugin-pwa): A Vite plugin that helps you build progressive web applications (PWA) by generating a service worker and a manifest file for your application.
- #### [Vue Router](https://github.com/vuejs/router): A router library that helps you handle client-side navigation in your application.
- #### [Typescript](https://github.com/vuejs/language-tools): Adds static type checking to your javascript code.

### Testing

- #### [Playwright](https://playwright.dev/): A testing library for running end-to-end tests in your application.
- #### [Vitest](https://vitest.dev/): A unit testing library, can also be used to test components with `vue test utils`.

### Styling

- #### [Tailwind CSS](https://tailwindui.com/): A utility-first CSS framework that helps you build custom user interfaces.
- #### [DaisyUI](https://daisyui.com/): A minimalistic component library for tailwind CSS. It offers a simple and clean design for your application's UI.
- #### [Sass](https://sass-lang.com/): A CSS preprocessor that allows you to use variables and functions in your CSS.

### Code Quality

- #### [ESLint](https://eslint.org/): A linting tool for JavaScript and TypeScript code.
- #### [Prettier](https://prettier.io/): A code formatter that ensures consistency in your code style.

<hr>

## Custom Plugins

### Vue DaisyUI Theme Manager

This plugin allows you to change the theme of your application at runtime.<br>
It also allows you to watch for system theme changes and update the theme accordingly.<br>

Initiate the plugin with the default theme and the dark theme.
Theme options are from Daisiy UI themes as well as some custom added themes.
Check all the built-in [DaisyUI Themes](https://daisyui.com/docs/themes/). <br>
Create your own custom daisy ui theme [here](https://daisyui.com/theme-generator/) and add it to the
`tailwind.config.js` file!

You can find the detailed [API documentation here](https://github.com/kaandesu/vite-vue-ultimate-starter/tree/master/src/plugins/themeManager/README.md).

<hr>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur & built-in typescript) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

<hr>

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
# Type-check and build the app
npm run build
# Built the app
npm run build-only
# Build the app and run the unit & e2e tests (headless)
npm run build-test
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
# Runs the unit tests
npm run test:unit
# Runs the tests in watch mode
npm run test:unit:watch
# Runs the tests in watch mode with coverage
npm run coverage
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install
# When testing on CI, must build the project first
npm run build
# Runs all the end-to-end tests
npm run test:e2e
# Runs all the end-to-end tests headlessly
npm run test:e2e:headless
# Runs the tests only on Desktop
npm run test:e2e:desktop
# Runs the tests only on Mobile
npm run test:e2e:mobile
```

### Inspect after build

```sh
# Inspect the vite build on localhost
npm run vite:inspect
# Inspect the rollup bundle on localhost
npm run rollup:inspect

```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Help

```sh
npm run help
```

<hr>

## Contributing

Contributions to the project is highly appreciated.
If you have any suggestions/questions/requests please consider
[opening an issue](https://github.com/kaandesu/vite-vue-ultimate-starter/issues/new). If you want to contribute to the project, fixing an open issue is greatly recommended and appreciated. To see the all contribution rules please check the [contribution rules](CONTRIBUTING.md).

## License

This project is licensed under `MIT License` if you want to see more, please check [LICENSE](LICENSE) for more information.

## Credits

This project is created and actively maintained by [kaandesu](https://github.com/kaandesu)
