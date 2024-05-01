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
        secondary: "#6C6C6C",
        detailsdiv: '#F3F4E5',
        textcolor: '#818181',
        servicediv: '#6C6C6C',
        serviceTitle: "#F3F4E5",
        servicedescription: '#C2C2B5',
        contact: '#FFFFFF',
        placeholdecolor: '#737373',
        button: '#545F71'


      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
        Roboto: ["Roboto Flex", "sans-serif"],
        InstrumentSerif: ["Instrument Serif", "serif"],

      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        font300: '300px',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      screens: {
        xs: "300px",
        mob: "425px",
        ...defaultTheme.screens,
      },
      width: {
        ...rem(29),
        ...rem(20),
        ...rem(44),
        ...rem(150),
        ...rem(174),
        ...rem(269),
        ...rem(346),
        ...rem(570),
        ...rem(370),
        ...rem(680),
        ...rem(145),
        "68p": "68%",
        "70p": "70%",
        "75p": "75%",
        "83p": "83%",
        "87p": "87%",
        "92p": "92%",
        "93p": "93%",
        "95p": "95%",
        "25p": "25%",


      },
      height: {
        ...rem(29),
        ...rem(44),
        ...rem(145),
        ...rem(150),
        ...rem(174),
        ...rem(250),
        ...rem(269),
        ...rem(320),
        ...rem(300),
        ...rem(350),
        ...rem(346),
        ...rem(685),
        ...rem(805),
        ...rem(1100),
        ...rem(1000),
      },
      fontSize: {
        ...rem(15),
        ...rem(16),
        ...rem(18),
        ...rem(19),
        ...rem(22),
        ...rem(23),
        ...rem(24),
        ...rem(28),
        ...rem(30),
        ...rem(32),
        ...rem(34),
        ...rem(45),
        ...rem(55),
        ...rem(60),
        ...rem(65),

      },
      lineHeight: {
        ...rem(16),
        ...rem(21.09),
        ...rem(23.4),
        ...rem(26),
        ...rem(28),
        ...rem(28.8),
        ...rem(30),
        ...rem(34),
        ...rem(36.5),
        ...rem(42),
        ...rem(76),
        ...rem(60),
        ...rem(130),
        ...rem(95),
        ...rem(70)

      },
      spacing: {
        '45p': "45%"
      },
      top: {
        '838px': '838px',
      },
      padding: {
        '30px': '30px',
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