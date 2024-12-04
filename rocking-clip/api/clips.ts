import { collection, getDocs } from 'firebase/firestore';
import { useNuxtApp } from '#app';

export const getClips = async () => {
	const { $db } = useNuxtApp();
	const clips: any[] = [];

	try {
		const querySnapshot = await getDocs(collection($db, 'clipList'));

		querySnapshot.forEach(doc => {
			const data = doc.data();
			// clips가 배열 형태라면, 배열을 직접 추가
			if (Array.isArray(data.clips)) {
				clips.push(...data.clips); // clips 배열을 추가
			}
		});
	} catch (error) {
		console.error('Error fetching clips:', error); // 에러 로그
	}

	return clips; // clips 배열 반환
};
