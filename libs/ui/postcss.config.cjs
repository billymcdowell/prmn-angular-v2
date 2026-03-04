const path = require('path');

module.exports = {
  plugins: {
    // Explicit config path so Tailwind uses this lib's config when run from Storybook (any cwd)
    tailwindcss: { config: path.join(__dirname, 'tailwind.config.js') },
    autoprefixer: {},
  },
};
