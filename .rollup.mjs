import babel from "@rollup/plugin-babel";

export default {
	input: "index.mjs",
	output: { file: "index.bundle.cjs", format: "cjs", exports: "auto" },
	plugins: [
		babel.default({
			presets: [["@babel/preset-env", { targets: { node: 6 }, loose: true }]],
			babelHelpers: "bundled",
		}),
	],
};
