/** @type {import('postcss-load-config').Config} */
// import cssnano from 'cssnano'
const config = {
  plugins: {
    tailwindcss: {},
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};

export default config;
