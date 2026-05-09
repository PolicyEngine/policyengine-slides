// Tailwind v4 ships its PostCSS plugin as @tailwindcss/postcss. The legacy
// `tailwindcss` PostCSS entry point and `autoprefixer` are no longer needed —
// Tailwind v4 vendors browser prefixing internally.
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
