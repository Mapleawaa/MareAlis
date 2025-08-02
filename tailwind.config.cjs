/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["'LXGW Wenkai'", "'MapleMono-CN'", "Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        mono: ["'LXGW WenKai Mono'", "'MapleMono-CN'", "'JetBrains Mono Variable'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
