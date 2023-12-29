/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@unllamas/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
};
