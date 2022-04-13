module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "functions",
        allow: [],
        ignoreOnInitialization: false,
      },
    ],
  },
};
