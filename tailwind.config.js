module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./stories/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF0000"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
