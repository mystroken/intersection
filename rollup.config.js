import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/intersection.min.js',
      format: 'iife',
      name: 'Intersection'
    },
    {
      file: 'index.js',
      format: 'cjs',
    }
  ],
  plugins: [
    commonjs(),
    terser()
  ]
};
