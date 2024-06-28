import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonJs from '@rollup/plugin-commonjs'

export default {
    input: 'src/fetcher.ts',
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [
        commonJs(),
        nodeResolve({ browser: true }),
        terser(),
        typescript()
    ],
};