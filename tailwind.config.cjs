module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(12, 21, 47, 0.35)'
      }
    }
  },
  plugins: []
};
