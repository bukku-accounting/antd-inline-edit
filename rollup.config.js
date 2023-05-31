import { babel } from '@rollup/plugin-babel'; // babel to transpile js codes for older browsers (eg arrow fx)
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'; // to solve importing antd https://www.v2ex.com/t/805171
import terser from '@rollup/plugin-terser'; // to minify js codes of packages
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import image from '@rollup/plugin-image';

import packageJson from './package.json';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        // sourcemap: true,
      },
      {
        file: packageJson.module,
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
    ],
  },
];
