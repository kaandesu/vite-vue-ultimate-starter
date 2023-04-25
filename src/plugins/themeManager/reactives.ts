import { reactive, ref } from 'vue'
import type { DaisyThemes, ThemeOptions } from './index'
const isDark = ref<boolean>(
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
)
const defaults = reactive<ThemeOptions>({
  light: 'light',
  dark: 'dark',
  watchSystemTheme: false
})
const currentTheme = ref<DaisyThemes>('default')
const pluginInitiated = ref<boolean>(false)
export { defaults, currentTheme, pluginInitiated, isDark }
