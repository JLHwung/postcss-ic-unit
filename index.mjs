export default function creator(opts) {
	const preserve = "preserve" in Object(opts) ? Boolean(opts.preserve) : true;
	const whitespace = "[\\f\\n\\r\\x09\\x20]";
	const icMatch = new RegExp(
		`((?:\\.\\d+)|\\d+(?:\\.\\d+)?)${whitespace}*ic`,
		"g"
	);
	return {
		postcssPlugin: "postcss-ic-unit",
		Declaration(decl) {
			const replaced = decl.value.replace(icMatch, "$1em");
			if (replaced !== decl.value) {
				decl.cloneBefore().value = replaced;
				if (!preserve) {
					decl.remove();
				}
			}
		},
	};
}

creator.postcss = true;
