import { db } from '~/plugins/firebase-admin';
import type { Clip } from '~/types';
import admin from 'firebase-admin';

export const addClipToFirestore = async (clip: Clip) => {
	try {
		const docRef = await db
			.collection('clipList')
			.doc('clips')
			.set(
				{
					clips: admin.firestore.FieldValue.arrayUnion({
						...clip,
						createdAt: new Date().toLocaleString(),
					}),
				},
				{ merge: true },
			);

		return { id: clip.id, message: '클립이 추가되었습니다.' };
	} catch (err) {
		console.error(err);
		throw new Error('클립 추가에 실패했습니다.');
	}
};

export default defineEventHandler(async event => {
	const clip: Clip = await readBody(event);

	try {
		await addClipToFirestore(clip);
		return {
			message: `${clip.clipName} 클립이 추가되었습니다.`,
		};
	} catch (err) {
		console.error('클립 추가 실패', err);
		throw createError({
			statusCode: 500,
			statusMessage: `${clip.clipName} 클립 추가에 실패했습니다`,
		});
	}
});
