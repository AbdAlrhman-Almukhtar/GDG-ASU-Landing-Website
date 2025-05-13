/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
        extend: {
          fontFamily: {
            sans: ['GoogleSans', 'Open Sans', 'PT Sans', 'sans-serif'],
          },
          colors: {
            google: {
              red: '#EA4335',
              green: '#0F9D58',
              yellow: '#FBBC04',
              blue: '#4285F4',
            },
          },
        },
      },
    plugins: [],
  };
  