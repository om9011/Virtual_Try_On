/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/Product/Product.js", "./src/Page/signIn/signin.js", "./src/Page/signIn/SignUp.js", "./src/Page/404/Page404.js"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

