import { fileURLToPath } from "node:url"

import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: [
        "src/**/*.{test,spec}.{ts,tsx}",
        "src/**/*.stories.{ts,tsx}",
      ],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL("./src/index.tsx", import.meta.url)),
      name: "ReactSearchPanel",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "react-cool-onclickoutside",
        "react-use-keypress",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        assetFileNames: "react-search-panel.[ext]",
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.stories.{ts,tsx}",
        "src/**/*.d.ts",
        "src/index.tsx",
      ],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
})
