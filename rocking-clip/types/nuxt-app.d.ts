import { Firestore } from 'firebase/firestore';

declare module 'nuxt/app' {
	interface NuxtApp {
		$db: Firestore;
	}
}

// declare module '@nuxt/types' {
// 	interface NuxtAppOptions {
// 		$db: Firestore;
// 	}
// }
