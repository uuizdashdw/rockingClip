import admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';
// import { defineNuxtPlugin } from 'nuxt/app';
// import { defineNuxtPlugin } from 'nuxt/app';
// import serviceAccount from '~/rocking-clip-firebase-adminsdk-imk3y-39256cf3e8.json';
import serviceAccount from '../rocking-clip-firebase-adminsdk-imk3y-39256cf3e8.json';

const serviceAccountTyped = serviceAccount as ServiceAccount;

admin.initializeApp({
	credential: admin.credential.cert(serviceAccountTyped),
});

const db = admin.firestore();

// export default defineNuxtPlugin(() => {
// 	return {
// 		provide: {
// 			db,
// 		},
// 	};
// });

export { db };
