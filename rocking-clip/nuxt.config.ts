// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	vue: {
		compilerOptions: {
			// isCustomElement: tag => tag === 'default-layout',
		},
	},

	css: ['@/assets/css/reset.css'],
	// app: {
	// 	head: {
	// 		title: 'Nuxt App',
	// 		meta: [{ name: 'Nuxt App #1', content: '넉스트로 만든 앱 1번' }],
	// 	},
	// },
});
