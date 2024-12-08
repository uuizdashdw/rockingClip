import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { defineNuxtPlugin } from 'nuxt/app';

interface FirebaseConfigType {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
}
const firebaseConfig: FirebaseConfigType = {
	apiKey: process.env.FIREBASE_API_KEY as string,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN as string,
	projectId: process.env.FIREBASE_PROJECT_ID as string,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET as string,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID as string,
	appId: process.env.FIREBASE_APP_ID as string,
};
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

// export default defineNuxtPlugin(nuxtApp => {
// 	return {
// 		provide: {
// 			db,
// 		},
// 	};
// });
export default defineNuxtPlugin(() => {});

export { db };
