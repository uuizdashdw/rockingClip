// import { defineNuxtConfig } from 'nuxt/config';
// // import { fileURLToPath } from 'url';
// // import path, { dirname } from 'path';

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);

// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
// 	compatibilityDate: '2024-11-01',
// 	devtools: { enabled: true },
// 	vue: {
// 		compilerOptions: {
// 			// isCustomElement: tag => tag === 'default-layout',
// 		},
// 	},
// 	plugins: ['./plugins/firebase.ts'],

// 	runtimeConfig: {
// 		public: {
// 			firebaseApiKey: process.env.FIREBASE_API_KEY,
// 			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
// 			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
// 			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// 			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// 			firebaseAppId: process.env.FIREBASE_APP_ID,
// 			firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
// 		},
// 	},

// 	css: ['./assets/css/reset.css', './assets/css/global.css'],
// 	// app: {
// 	// 	head: {
// 	// 		title: 'Nuxt App',
// 	// 		meta: [{ name: 'Nuxt App #1', content: '넉스트로 만든 앱 1번' }],
// 	// 	},
// 	// },

// 	// vite: {
// 	// 	resolve: {
// 	// 		alias: {
// 	// 			'@': path.resolve(__dirname, './'),
// 	// 			'~': path.resolve(__dirname, './'),
// 	// 		},
// 	// 	},
// 	// },
// });
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	modules: ['@pinia/nuxt'],
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	vue: {
		compilerOptions: {},
	},

	plugins: [{ src: './plugins/firebase.ts', mode: 'client' }],

	runtimeConfig: {
		public: {
			firebaseApiKey: process.env.FIREBASE_API_KEY || 'default-key',
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID,
			firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
		},
	},

	css: ['@/assets/css/global.css', '@/assets/css/reset.css'],

	app: {
		head: {
			title: '클립 저장소',
			meta: [{ name: 'description', content: '클립 저장소' }],
		},
	},

	vite: {
		resolve: {
			alias: {
				// 서버 런타임에서 별칭을 사용하지 않도록 설정
				// '@': path.resolve(__dirname, './'),
				// '~': path.resolve(__dirname, './'),
			},
		},
	},
});
