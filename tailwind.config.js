/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-gradient': 'linear-gradient(to bottom, transparent, #e8e8e880, #e8e8e8cc, #e8e8e8)',
      }),
    },
  },
  plugins: [],
}

