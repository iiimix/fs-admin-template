module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "@vue/prettier"],    // 删除prettier
  extends: ["plugin:vue/essential"],
  rules: {
    "singleQuote": true,
    "semi": 0,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
