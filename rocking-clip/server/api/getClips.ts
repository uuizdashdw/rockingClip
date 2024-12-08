import { useNuxtApp } from 'nuxt/app';
// import { collection, Firestore, getDocs } from 'firebase/firestore';
// import { get } from 'firebase-admin/firestore';
import type { Clip } from '../../types';
import { db } from '../../plugins/firebase-admin';
import { resolve } from 'path';

// const absolutePathToFirebase = resolve(process.cwd(), 'plugins/firebase');
// const absolutePathToTypes = resolve(process.cwd(), 'types');

// export const getClips = async (): Promise<Clip[]> => {
// 	const clips: Clip[] = [];

// 	try {
// 		const querySnapshot = await getDocs(collection(db, 'clipList'));

// 		querySnapshot.forEach(doc => {
// 			const data = doc.data();
// 			if (Array.isArray(data.clips)) {
// 				clips.push(...data.clips);
// 			}
// 		});
// 	} catch (err) {
// 		console.error(err);
// 	}

// 	return clips;
// };

// export default defineEventHandler(async event => {
// 	const clips = await getClips();
// 	return clips;
// });

export const getClips = async (): Promise<Clip[]> => {
	const clips: Clip[] = [];

	try {
		const snapshot = await db.collection('clipList').get();

		snapshot.forEach(doc => {
			const data = doc.data();
			if (Array.isArray(data.clips)) {
				clips.push(...data.clips);
			}
		});
	} catch (err) {
		console.error(err);
	}

	return clips;
};

export default defineEventHandler(async event => {
	const clips = await getClips();
	return clips;
});
