import { createRequire } from "module";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

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
    tsconfigOverride: {
      compilerOptions: {
        skipLibCheck: true,
      },
    },
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
