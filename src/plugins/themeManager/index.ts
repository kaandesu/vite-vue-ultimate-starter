import type { App } from 'vue'
import { defaults, pluginInitiated, currentTheme, isDark } from './reactives'
export const daisyThemes = [
  'default',
  'storm',
  'breeze',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter'
] as const
export type DaisyThemes = (typeof daisyThemes)[number]
export type ThemeOptions = {
  light: DaisyThemes
  dark: DaisyThemes
  watchSystemTheme: boolean
}

export const useThemeManager = () => {
  const options: ThemeOptions = {
    light: defaults.light,
    dark: defaults.dark,
    watchSystemTheme: defaults.watchSystemTheme
  }

  if (!pluginInitiated) {
    defaults.light = options?.light as DaisyThemes
    defaults.dark = options?.dark as DaisyThemes
    defaults.watchSystemTheme = options?.watchSystemTheme
    currentTheme.value = isDark.value ? defaults.dark : defaults.light
  }
  // Watch for system preferred theme changes

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    isDark.value = event.matches
    const theme = event.matches ? (defaults.dark as DaisyThemes) : (defaults.light as DaisyThemes)
    if (defaults.watchSystemTheme === true) setTheme(theme)
  })

  // Set theme
  const setTheme = (theme: DaisyThemes) => {
    let _light = defaults.light as DaisyThemes
    let _dark = defaults.dark as DaisyThemes
    // if default, set theme based on system preferred theme and the default light and dark themes
    let newTheme: DaisyThemes = 'default'
    if (theme === 'default') newTheme = isDark.value ? _dark : _light
    else newTheme = theme

    return document.documentElement.setAttribute('data-theme', (currentTheme.value = newTheme))
  }
  setTheme(currentTheme.value)
  // Get theme
  const getTheme = () => {
    return currentTheme.value
  }
  // Toggle dark mode, using default light and dark themes
  const toggleDark = () => {
    let _light = defaults.light as DaisyThemes
    let _dark = defaults.dark as DaisyThemes
    return document.documentElement.setAttribute(
      'data-theme',
      (currentTheme.value = currentTheme.value === _light ? _dark : _light)
    )
  }
  // Set default light and dark themes
  const setDefaults = (themes: { light?: DaisyThemes; dark?: DaisyThemes }) => {
    defaults.light = themes.light ?? defaults.light
    defaults.dark = themes.dark ?? defaults.dark
    setTheme('default')
  }
  // Get default light and dark themes
  const getDefaults = () => {
    return { light: defaults.light, dark: defaults.dark }
  }
  const isWatchingSystemTheme = (bool?: boolean, updateTheme: boolean = true) => {
    if (bool === undefined) return defaults.watchSystemTheme
    if (bool && updateTheme) setTheme('default')
    return (defaults.watchSystemTheme = bool)
  }

  const themeManagerInstance = {
    set: setTheme,
    get: getTheme,
    toggleDark,
    setDefaults,
    getDefaults,
    watchSystemTheme: isWatchingSystemTheme,
    isDark
  }
  pluginInitiated.value = true
  return { ...themeManagerInstance }
}

export const createThemeManager = (options?: ThemeOptions) => {
  return (app: App) => {
    defaults.light = options?.light as DaisyThemes
    defaults.dark = options?.dark as DaisyThemes
    defaults.watchSystemTheme = options?.watchSystemTheme ?? true
    app.config.globalProperties.$theme = useThemeManager()
  }
}
