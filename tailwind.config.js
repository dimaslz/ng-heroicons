
require('dotenv').config();
const enablePurge = process.env.NODE_ENV === 'production' || false;

module.exports = {
  important: true,
  purge: {
    enabled: enablePurge,
    content: [
      './projects/**/*.html',
      './projects/**/*.scss',
      './projects/**/*.ts'
    ],
    safelist: [
      "bg-white",
      "text-white",
      /^bg-(gray|red|yellow|green|blue|purple|indigo)-400$/,
      /^text-(gray|red|yellow|green|blue|purple|indigo)-(900|400)$/
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  darkMode: 'class',
}