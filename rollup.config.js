import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const input = "src/index.tsx";

const plugins = [
  commonjs(),
  nodeResolve(),
  postcss({
    extract: false,
    modules: true,
    // use: ["sass"],
  }),
  typescript({
    typescript: require("typescript"),
  }),
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
