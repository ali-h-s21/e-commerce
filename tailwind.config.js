/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        radialBlack:
          "radial-gradient(50% 50% at 50% 50%, #3A3535 0%, #3A3535 0%, #232C34 0.01%, #000A12 100%);",
      },

      transitionTimingFunction: {
        "in-slow": "cubic-bezier(0.73, -0.03, 0.68, 0.71)",
      },
      gridTemplateColumns: {
        3: "repeat(2, minmax(240px,600px)) minmax(142px,240px)",
      },
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
  plugins: [require("@tailwindcss/line-clamp")],
};
