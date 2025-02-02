import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/bundle.js',
    format: 'iife'
  },
  plugins: [resolve(), commonjs()]
};