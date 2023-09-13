/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/Product/Product.js", "./src/Page/signIn/signin.js", "./src/components/Details/Details.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

