/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      minHeight: {
        page: 'calc(100vh - 61px)',
      },
    },
  },
  plugins: [],
};
