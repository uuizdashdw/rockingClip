import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	vue: {
		compilerOptions: {
			// isCustomElement: tag => tag === 'default-layout',
		},
	},
	plugins: ['~/plugins/firebase.ts'],

	runtimeConfig: {
		public: {
			firebaseApiKey: process.env.FIREBASE_API_KEY,
			firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
			firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
			firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
			firebaseAppId: process.env.FIREBASE_APP_ID,
			firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
		},
	},

	css: ['@/assets/css/reset.css', '@/assets/css/global.css'],
	// app: {
	// 	head: {
	// 		title: 'Nuxt App',
	// 		meta: [{ name: 'Nuxt App #1', content: '넉스트로 만든 앱 1번' }],
	// 	},
	// },
});
