/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        storm: {
          primary: '#9aa5ce',
          secondary: '#565f89',
          accent: '#bb9af7',
          neutral: '#111827', 
          'base-100': '#24283b',
          info: '#2ac3de',
          success: '#9ece6a',
          warning: '#e0af68',
          error: '#f7768e'
        },
        breeze: {          
          primary: '#6807f0',
          secondary: '#6b21a8',
          accent: '#db2777',
          neutral: '#170824',
          'base-100': '#f2f2f2',
          info: '#2ac3de',
          success: '#9ece6a',
          warning: '#e0af68',
          error: '#f7768e'
        }, 
      },        
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
    ]
  }
}
