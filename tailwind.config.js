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
        "title" : "62px"
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

