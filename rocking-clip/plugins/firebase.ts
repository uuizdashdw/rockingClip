import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { useRuntimeConfig } from '#app';
import { defineNuxtPlugin } from '#app'; // defineNuxtPlugin 가져오기

interface FirebaseConfigType {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
}
export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	const firebaseConfig: FirebaseConfigType = {
		apiKey: config.public.firebaseApiKey as string,
		authDomain: config.public.firebaseAuthDomain as string,
		projectId: config.public.firebaseProjectId as string,
		storageBucket: config.public.firebaseStorageBucket as string,
		messagingSenderId: config.public.firebaseMessagingSenderId as string,
		appId: config.public.firebaseAppId as string,
	};

	const app = initializeApp(firebaseConfig);
	const db: Firestore = getFirestore(app);

	// db를 Nuxt의 전역 프로퍼티로 추가하기
	return {
		provide: {
			db, // db를 제공하여 다른 곳에서 사용할 수 있게 함
		},
	};
});
