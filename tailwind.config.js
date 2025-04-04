/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["app/index.js", "./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    function ({addComponents}){
      addComponents({
        '.style-center':{
          '@apply h-full w-full bg-white pt-16': ''
        }
      })
    }

  ],
}