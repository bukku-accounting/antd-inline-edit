import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

// import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";

// To handle css files
// import postcss from "rollup-plugin-postcss";

import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import image from '@rollup/plugin-image';

// const packageJson = require("./package.json");

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        // sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'esm',
        exports: 'named',
        // sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(), // to solve importing antd https://www.v2ex.com/t/805171
      //   typescript({ tsconfig: "./tsconfig.json" }),
      //   postcss(),

      terser(), // to minify js codes of packages
    //   image()
    ],
  },
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   // plugins: [dts()],

  //   external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports
  // },
];
