/** @type {import('tailwindcss').Config} */
export default {
  config: {
    variants: {
      extend: {
        translate: ["group-hover", "hover"],
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["Playfair Display", "ui-serif", "system-ui"],
      sans: ["Geist", "ui-sans-serif", "system-ui"],
      mono: ["Iosevka", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        darker: "#020202",
        bg: "#000",
        mbg: "#090909",
        bg3: "#181818",
        fg: "#efeeee",
        bright: "#bab8b8",
        error: "#c14d53",
        success: "#56966e",
        warn: "#e1956c",
        primary: "#6e95bd",
        disabled: "#d466e9",
        secondary: "#6a9f98",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      lineHeight: {
        "extra-loose": "2.5",
        14: "3rem",
      },
      height: {
        fuller: "140vh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
