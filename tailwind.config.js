module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bhiveFooter: "#222E34",
        bhiveBg: "#EEE7E7",
        lightGrey: "#F9F9F9",
        darkGrey: "#CEC6C6",
        lightYellow: "#FFCF4B",
        darkYellow: "#27AE60",
        textMain: "#263238",
        textSecondary: "#65624C",
        textGrey: "#605F5F",
      },
      boxShadow: {
        custom: "0px 1.08px 8.63px rgba(0, 0, 0, 0.15)",
        bottom: "0 4px 4px -2px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        h1: "58px",
        h2: "36px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
        body: "16px",
        xxs: "8px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
