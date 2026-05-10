/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        cream:      '#F5EDE0',
        'cream-dk': '#EDE3D5',
        terra:      '#8B3A2A',
        'terra-lt': '#A84B38',
        brown:      '#3D2B1F',
        'brown-md': '#5C3D2E',
        muted:      '#6B5B4E',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { container: '1280px' },
    },
  },
  plugins: [],
};
