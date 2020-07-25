import babel from 'rollup-plugin-babel';

export default {
	input: 'index.js',
	output: [
		{ file: 'index.cjs.js', format: 'cjs', sourcemap: true },
		{ file: 'index.es.mjs', format: 'es', sourcemap: true }
	],
	plugins: [
		babel({
			presets: [
				['@babel/env', { targets: { node: 6 }, loose: true }]
			]
		})
	]
};
