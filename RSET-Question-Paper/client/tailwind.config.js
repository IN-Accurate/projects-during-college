/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#AED2FF',
        'secondary-color': '#9400FF',
        'tertiary-color': '#E4F1FF',
        'quaternary-color': '#27005D',
        'customcolor-bg': '#EEEDEB',
        'customcolor-bg2': '#0F1035',
      },
      textColor: {
        'primary-color': 'black',
      },
    },
  },
  plugins: [],
};
