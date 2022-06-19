/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        primaryLight: "#6EC6FF",
        secondary: "#0069C0",
        gradiant: "linear-gradient(90deg, #0069C0 4.06%, #2196F3 100%)",
        black100: "#000A12",
        black90: "#263238",
        black80: "#4F5B62",
        black70: "#727C81",
        black60: "#8E969A",
        black50: "#AAB0B3",
        gray100: "#BBC0C2",
        gray90: "#D4D7D8",
        gray80: "#E5E7E8",
        gray70: "#EAECED",
        gray60: "#EEF0F1",
        gray50: "#F1F3F4",
        danger: "#DE0E19",
      },
    },
  },
  plugins: [],
};
