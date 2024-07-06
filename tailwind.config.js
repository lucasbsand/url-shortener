/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        "light-gray": "hsl(225, 33%, 95%)",
        gray: "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "shorten-mobile": 'url("/images/bg-shorten-mobile.svg")',
        "shorten-desktop": 'url("/images/bg-shorten-desktop.svg")',
        "boost-mobile": 'url("/images/bg-boost-mobile.svg")',
        "boost-desktop": 'url("/images/bg-boost-desktop.svg")',
      },
    },
  },
  plugins: [],
};
