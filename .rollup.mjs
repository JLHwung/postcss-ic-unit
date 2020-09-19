import babel from "@rollup/plugin-babel";

export default {
	input: "index.mjs",
	output: [
		{ file: "dist/index.bundle.cjs", format: "cjs", exports: "default" },
		{ file: "dist/index.bundle.mjs", format: "es" },
	],
	plugins: [
		babel.default({
			babelHelpers: "bundled",
		}),
	],
};
