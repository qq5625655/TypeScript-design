module.exports = {

  
  plugins: ["@typescript-eslint"],
  
  rules: {
    "no-var": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    // "quotes": ["error", "single"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    
  },

  root: true,

  env: {
    node: true
  },

  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript"
  ],

  parserOptions: {
    parser: "vue-eslint-parser",
    parser: "@typescript-eslint/parser",
    
  }
};
