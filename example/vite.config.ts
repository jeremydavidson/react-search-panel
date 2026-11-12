import { fileURLToPath, URL } from "node:url"

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const packageRoot = fileURLToPath(new URL("..", import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "react-search-panel": `${packageRoot}/src/index.tsx`,
    },
  },
  server: {
    fs: {
      allow: [packageRoot],
    },
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
})
