import babel from '@rollup/plugin-babel'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json'

const packageJson = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    json(),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    terser(),
  ],
};