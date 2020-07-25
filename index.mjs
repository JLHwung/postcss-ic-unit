import postcss from 'postcss';

export default postcss.plugin('postcss-ic-unit', opts => {
	const preserve = 'preserve' in Object(opts) ? Boolean(opts.preserve) : true;
	return root => {
		root.walkDecls(decl => {
			if (decl.value.indexOf("ic") === -1) return;
			if (/\d+ic/.test(decl.value)) {
				const cloned = decl.cloneBefore();
				cloned.value = cloned.value.replace(/\d+ic/, string => {
					return parseInt(string) + 'em'
				})
				if (!preserve) {
					decl.remove();
				}
			}
		})
	};
});
