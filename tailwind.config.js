/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const rem = (num) => ({ [num]: `${num / 16}rem` });

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#353535",
        secondary:"#6C6C6C"

      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Roboto: ["Roboto Flex", "sans-serif"],
        InstrumentSerif: ["Instrument Serif", "serif"],

      },
      screens: {
        xs: "300px",
        mob: "425px",
        ...defaultTheme.screens,
      },
      width: {
        ...rem(29),
        ...rem(269),
        ...rem(346),

      },
      height: {
        ...rem(29),
        ...rem(269),
        ...rem(346),
      },
      fontSize: {
        ...rem(16),
        ...rem(18),
        ...rem(19),
        ...rem(23),
        ...rem(24),
        ...rem(28),
        ...rem(30),
        ...rem(32),
        ...rem(35),
        ...rem(40),
        ...rem(65),
        ...rem(87),
      },
      lineHeight: {
        ...rem(16),
        ...rem(23.4),
        ...rem(26),
        ...rem(28),
        ...rem(28.8),
        ...rem(30),
        ...rem(34),
        ...rem(36.5),
        ...rem(42),
        ...rem(76),
        ...rem(130),
        ...rem(95),
        ...rem(70)

      },
      spacing: {
        '45p': "45%"
      },
      borderRadius: {
        ...rem(32),
        ...rem(100),
      },
      backgroundImage: {
        carouselBg: "url('/carbg.png')",
      },
    },
  },
  plugins: [],
};