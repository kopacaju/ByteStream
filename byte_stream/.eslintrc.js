module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {"allowTemplateLiterals": true}],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
module.exports = {
  settings: {
    react: {
      version: "detect" // Automatically detects the React version
    }
  },
  // Other ESLint settings here...
};
export const defaultConfig = [
    // existing configuration
    {
      files: ["dataconnect-generated/js/default-connector/**/*.d.ts"],
      rules: {
        // Add any specific rules for TypeScript files if needed
      },
    },
  ];
  export default [
    {
      files: ["*.ts", "*.d.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off"
      },
    },
  ];
  module.exports = {
    overrides: [
      {
        files: ["*.js", "*.jsx", "*.ts", "*.tsx"], // Špecifikujete typy súborov priamo tu
        rules: {
          // Pravidlá pre tieto typy súborov
        },
      },
    ],
  };
  