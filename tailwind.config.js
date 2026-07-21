/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F5F2E9',
        'paper-dim': '#EFEBDD',
        ink: '#211E19',
        graphite: '#6E6A5C',
        hairline: '#DCD6C3',
        folder: '#EAE3CE',
        rust: '#A8402A',
        moss: '#4B5A3F',
      },
      fontFamily: {
        serif: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
