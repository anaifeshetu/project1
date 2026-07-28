// Tailwind v4 uses a single @tailwindcss/postcss plugin.
// Autoprefixer is built in — do NOT add tailwindcss or autoprefixer here,
// that's the old v3 setup and will break v4.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};