/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ddal-kkak/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
