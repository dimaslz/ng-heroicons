// require("dotenv").config();
const enablePurge = process.env.NODE_ENV === "production" || false;

console.log("process.env.NODE_ENV", process.env.NODE_ENV)

module.exports = {
  enablePurge,
  important: true,
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  safelist: [
    "bg-white",
    "text-white",
    {
      pattern: /^bg-(gray|red|yellow|green|blue|purple|indigo)-400$/,
    },
    {
      pattern: /^text-(gray|red|yellow|green|blue|purple|indigo)-(900|400)$/,
    },
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  darkMode: "class",
};
