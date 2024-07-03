import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/App.tsx',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      preserveModulesRoot: 'src'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    typescript(),
    replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }
      }),
    terser() // Minifies the code
  ]
};
