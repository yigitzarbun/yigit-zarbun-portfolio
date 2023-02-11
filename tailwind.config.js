/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    height: {
      "10v": "10vh",
      "20v": "20vh",
      "30v": "30vh",
      "40v": "40vh",
      "50v": "50vh",
      "60v": "60vh",
      "70v": "70vh",
      "80v": "80vh",
      "90v": "90vh",
      "100v": "100vh",
    },
    width: {
      "5v": "5vw",
      "10v": "10vw",
      "20v": "20vw",
      "30v": "30vw",
      "40v": "40vw",
      "50v": "50vw",
      "60v": "60vw",
      "70v": "70vw",
      "80v": "80vw",
      "90v": "90vw",
      "100v": "100vw",
    },
    spacing: {
      "2.5v": "2.5vw",
      "2v": "2vh",
      "5v": "5vh",
      "10v": "10vh",
      "12v": "12vh",
      "14v": "14vh",
    },
    color: {
      headerNav: "#6B7280",
    },
    rotate: {
      24: "24deg",
    },
  },
  plugins: [],
};
