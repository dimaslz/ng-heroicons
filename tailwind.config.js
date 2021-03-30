
require('dotenv').config();
const enablePurge = process.env.NODE_ENV === 'production' || false;

module.exports = {
  important: true,
  purge: {
    enabled: enablePurge,
    content: [
      './projects/**/*.html',
      './projects/**/*.scss'
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