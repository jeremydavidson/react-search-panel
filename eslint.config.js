import js from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import jsxA11y from "eslint-plugin-jsx-a11y"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    ignores: [
      "coverage/**",
      "dist/**",
      "docs/**",
      "example/**",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      react,
      "react-hooks": reactHooks,
      "simple-import-sort": simpleImportSort,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "comma-dangle": ["error", "always-multiline"],
      "jsx-a11y/anchor-is-valid": "off",
      "no-inline-comments": "error",
      "no-trailing-spaces": "error",
      "quotes": ["error", "double", { avoidEscape: true }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "semi": ["error", "never"],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.{test,spec}.{ts,tsx}", "e2e/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
)
