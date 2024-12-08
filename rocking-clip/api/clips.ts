import {
	collection,
	getDocs,
	getDoc,
	doc,
	addDoc,
	Firestore,
} from 'firebase/firestore';
// import { useNuxtApp } from '#app';
// import { db } from '~/plugins/firebase';

// Type
import type { Clip } from '~/types';

// export const getClips = async (db: Firestore): Promise<Clip[]> => {
// 	// const { $db } = useNuxtApp();
// 	const clips: Clip[] = [];

// 	try {
// 		const querySnapshot = await getDocs(collection(db, 'clipList'));

// 		querySnapshot.forEach(doc => {
// 			const data = doc.data();
// 			// clips가 배열 형태라면, 배열을 직접 추가
// 			if (Array.isArray(data.clips)) {
// 				clips.push(...data.clips); // clips 배열을 추가
// 			}
// 		});
// 	} catch (error) {
// 		console.error('Error fetching clips:', error); // 에러 로그
// 	}

// 	return clips; // clips 배열 반환
// };

// export const getClip = async (id: number): Promise<Clip | null> => {
// 	// const { $db } = useNuxtApp();
// 	const clipRef = doc($db, 'clipList', String(id));

// 	try {
// 		const docSnapShot = await getDoc(clipRef);

// 		if (docSnapShot.exists()) {
// 			const data = docSnapShot.data();

// 			const clip: Clip = {
// 				id: data.id,
// 				clipName: data.clipName,
// 				clipPath: data.clipPath,
// 				description: data.description,
// 				favorite: data.favorite,
// 				favoriteLevel: data.favoriteLevel,
// 				createdAt: data.createdAt,
// 			};

// 			return clip;
// 		} else {
// 			console.error('일치하는 클립이 없습니다.');
// 			return null;
// 		}
// 	} catch (err) {
// 		console.error('클립을 불러오는 데 실패했습니다.', err);
// 		return null;
// 	}
// };

// export const addClipToFirestore = async (clipData: Clip) => {
// 	// const { $db } = useNuxtApp();

// 	try {
// 		const existingClips = await getClips();

// 		const maxId =
// 			existingClips.length > 0
// 				? Math.max(...existingClips.map(clip => clip.id))
// 				: 0;

// 		const newClipData: Clip = {
// 			...clipData,
// 			id: maxId + 1,
// 		};
// 		const docRef = await addDoc(collection($db, 'clipList'), newClipData);

// 		return { id: docRef.id, message: '추가되었습니다' };
// 	} catch (err) {
// 		console.error('문서를 저장하는데 에러가 발생했습니다.', err);
// 		throw new Error(`클립 추가에 실패했습니다. ${err}`);
// 	}
// };
