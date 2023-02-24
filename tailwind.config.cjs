/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Primary
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
        //Neutral
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
      backgroundImage: {
        "left-bg": "url('./src/assets/images/bg-sidebar-mobile.svg')",
        "left-bg-xl": "url('/src/assets/images/bg-sidebar-desktop.svg')",
        "icon-advanced": "url('/src/assets/images/icon-advanced.svg')",
        "icon-arcade": "url('/src/assets/images/icon-arcade.svg')",
        "icon-checkmark": "url('/src/assets/images/icon-checkmark.svg')",
        "icon-pro": "url('/src/assets/images/icon-pro.svg')",
        "icon-thank-you": "url('/src/assets/images/icon-thank-you.svg')",
      },
      backgroundPosition: {
        "100%-60%": "100% 60%",
        "80%-65%": "80% 65%",
      },
    },
  },
  plugins: [],
};
