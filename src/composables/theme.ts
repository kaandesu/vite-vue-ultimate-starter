type DaisThemes =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula'
  | 'cmyk'
  | 'autumn'
  | 'business'
  | 'acid'
  | 'lemonade'
  | 'night'
  | 'coffee'
  | 'winter'

export const useThemeManager = () => {
  const setTheme = (theme: DaisThemes | 'default') => {
    document.documentElement.setAttribute('data-theme', theme)
  }
  const getTheme = () => {
    return document.documentElement.getAttribute('data-theme')
  }
  const toggleDark = () => {
    const currentTheme = getTheme()
    if (currentTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return { setTheme, getTheme, toggleDark }
}
