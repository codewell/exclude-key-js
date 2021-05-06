import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".js"];

export default {
  input: "./src/index.js",
  output: {
    file: "./lib/index.js",
    format: "cjs",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      extensions,
    }),
    resolve({
      extensions,
    }),
    commonjs(),
  ],
};
