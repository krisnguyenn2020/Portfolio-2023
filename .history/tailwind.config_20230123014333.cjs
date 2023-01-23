/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: "jitt",
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            burtons: "burtons",
         },
      },
   },
   plugins: [],
};
