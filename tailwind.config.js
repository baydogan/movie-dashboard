module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#42b883",
        primary: "#35495e",
      },
      width: {
        "1/2": "50%",
        "input-width": "800px",
        "poster-width": "500px",
        "card-width": "500px",
      },
      height: {
        "card-height": "1000px",
        "poster-height": "600px",
      },
      
    },
  },
  plugins: [],
};
