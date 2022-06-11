module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white-rgba': 'rgba(0,0,0,0.1)',
        'black-rgba': 'rgba(255,255,255,0.1)'
      },
      backgroundColor: {
        'primary': 'rgba(128, 128, 255, 1)',
        'gray-950': 'rgba(20, 29, 37, 1)',
      },
    },
  },
  plugins: [],
}
