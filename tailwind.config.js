/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pacoGreen: "#175E36",
        pacoRed: "#EB2026",
        pacoBg: "#ECEDE8",
        pacoBlack: "#141414",
        pacoGold: "#D8830F",
        // primary: "#f5f3f3",
        // cardOverlay: "rgba(256,256,256,0.4)",
        // lighttextGray: "#9ca0ab",
        // card: "rgba(256,256,256,0.8)",
        // colorbtn: "#00b53f",
        // borderColorBtn: "#00b53f",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        karla: ["Karla", "sans"],
      },
      screens: {
        smm: "500px",
        sm: "640px",
        md: "768px",
        mdl: "850px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
