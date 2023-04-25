# Vue Daisy UI Theme Manager Plugin

This plugin allows you to change the theme of your application at runtime.
It also allows you to watch for system theme changes and update the theme accordingly.

# API

## Plugin Setup: `createThemeManager`

Initiate the plugin with the default theme and the dark theme.
Theme options are from Daisiy UI themes as well as some custom added themes.
Check all the built-in [DaisyUI Themes](https://daisyui.com/docs/themes/). <br>
Create your own custom daisy ui theme [here](https://daisyui.com/theme-generator/) and add it to the
`tailwind.config.js` file!
<br>

```ts
type DaisyThemes = "light" | "default" | "storm" | "breeze" | "dark" | "cupcake" |
 "bumblebee" | "emerald" | "corporate" | "synthwave" | "retro" | "cyberpunk" |
  "valentine" | "halloween" | "garden" |  'forest' | 'aqua' | 'lofi' | 'pastel' |
  'fantasy' | 'wireframe' | 'black' | 'luxury' | 'dracula' | 'cmyk' | 'autumn' |
  'business' | 'acid' | 'lemonade' | 'night' | 'coffee' | | "winter"
```

### Type definition

```ts
export type ThemeOptions = {
  light: DaisyThemes
  dark: DaisyThemes
  watchSystemTheme: boolean
}

createThemeManager(options?: ThemeOptions): (app: App) => void
```

### Usage in main.ts

The `light` and `dark` options are the default themes that will be used when "`toggleDark()`" is called.
Or when "`setTheme('default')`" is being called.

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createThemeManager } from '@/plugins/themeManager'

const app = createApp(App)
app.use(
  createThemeManager({
    light: 'breeze',
    dark: 'storm',
    watchSystemTheme: true
  })
)

app.mount('#app')
```

<hr />

## Usage in the component: `useThemeManager()`

### Type definition

```ts
const themeManagerInstance = {
  set
  get
  toggleDark
  setDefaults
  getDefaults
  watchSystemTheme
  isDark
}
```

### Installation

```ts
import { useThemeManager } from '@/plugins/themeManager'
const $theme = useThemeManager()
```

### Methods

- `set` - Set a theme from the daisy theme options defined in the `tailwind.config.js`<br>
  Type definition:
  ```ts
  set(theme: DaisyThemes): void
  ```
  usage example:
  ```ts
  $theme.set('light')
  ```
- `get` - Get the current active theme <br>
  Type definition:
  ```ts
  get(): DaisyThemes
  ```
  Usage example:
  ```ts
  $theme.get() // ie: 'coffee'
  ```
- `toggleDark` - Toggle between the default light and dark themes that were defined in the plugin setup <br>
  Type definition:
  ```ts
  toggleDark(): void
  ```
  Usage example:
  ```ts
  $theme.toggleDark()
  ```
- `setDefaults` - Set the default light and dark themes after the plugin has been initiated. <br>
  Type definition:
  ```ts
  setDefaults(themes: { light?: DaisyThemes; dark?: DaisyThemes }): void
  ```
  Usage example:
  ```ts
  $theme.setDefaults({ light: 'aqua', dark: 'business' })
  ```
- `getDefaults` - Get the default light and dark themes <br>
  Type definition:
  ```ts
  getDefaults(): { light: DaisyThemes; dark: DaisyThemes }
  ```
  Usage example:
  ```ts
  $theme.getDefaults() // ie: { light: 'aqua', dark: 'business' }
  ```
- `watchSystemTheme` - Watch for system theme changes, and set if you want it to
  update the theme `immediately` to the default theme that corresponds to the system mode (light/dark).
  `updateTheme` is set to `true` by default. <br>
  Type definition:
  ```ts
  watchSystemTheme(bool?: boolean, updateTheme: boolean = true): boolean
  ```
  Usage example:
  ```ts
  /* Returns if the theme manager watching the active system theme */
  $theme.watchSystemTheme() // ie: true
  /*
    Theme will change to the default theme that corresponds
    to the system mode (light/dark)
  */
  $theme.watchSystemTheme(true)
  /* theme will remain the same even if the system theme changes */
  $theme.watchSystemTheme(false)
  /* theme will not change immidiatly to the default theme that corresponds to the system mode (light/dark)
     it will change if the theme of the system changes again
  */
  $theme.watchSystemTheme(true, false)
  ```
- `isDark` - Get the current system theme <br>
  Type definition:
  ```ts
  isDark(): boolean
  ```
  Usage example:
  ```ts
  $theme.isDark() // ie: true
  ```
