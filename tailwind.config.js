/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['Plus Jakarta Sans', 'sans-serif'],
      secondary: ['Plus Jakarta Sans', 'sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        '2xl': "1256px"
      },
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "24px",
        xxl: "32px",
      },
    },
    keyframes: {
      fadeLoop: {
        '0%, 100%': { opacity: '0.3' },
        '50%': { opacity: '1' },
      },
    },
    animation: {
      fadeLoop: 'fadeLoop 2s ease-in-out infinite',
    },
  },
  plugins: [],
}