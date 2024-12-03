module.exports = {
	parser: 'vue-eslint-parser',
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['vue', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
	},

	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'prettier/prettier': 'error',
			},
		},
	],
};
