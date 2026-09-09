import { createRequire } from "module";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const commonjs = require("@rollup/plugin-commonjs");

const input = "src/index.tsx";

const plugins = [
  typescript({
    typescript: require("typescript"),
    include: ["src/**/*.ts", "src/**/*.tsx"],
    tsconfigOverride: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
  }),
  postcss({
    extract: false,
    modules: true,
  }),
  commonjs(),
  nodeResolve(),
];

export default [
  {
    input,
    external: ["react"],
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    external: ["react"],
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
];
