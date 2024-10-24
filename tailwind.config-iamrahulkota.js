export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "title-lg" : "180px",
        "title-md" : "106px",
        "title" : "62px",
        "focus-title-lg" : "300px",
        "focus-title-md" : "150px",
        "focus-title" : "100px"
      },
      fontFamily: {
        bigRiverRegular: ['bigRiverRegular', 'sans-serif'],
        satoshiLight: ['satoshiLight', 'sans-serif'],
        satoshiRegular: ['satoshiRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

