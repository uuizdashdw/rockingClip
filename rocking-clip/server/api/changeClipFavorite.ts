import { db } from '~/plugins/firebase-admin';
import admin from 'firebase-admin';
import type { Clip } from '~/types';

export default defineEventHandler(async event => {
	const { id, favorite } = await readBody(event);

	if (typeof id !== 'number' || typeof favorite !== 'boolean') {
		throw createError({
			status: 400,
			statusMessage: '유효하지 않은 요청입니다',
		});
	}

	try {
		const clipRef = db.collection('clipList').doc('clips');

		// 클립데이터 가져오기
		const clipSnapshot = await clipRef.get();
		const clipData = clipSnapshot.data();

		if (!clipData || !clipData.clips) {
			throw createError({
				statusCode: 404,
				statusMessage: '클립을 찾을 수 없습니다.',
			});
		}

		// 클립 목록에서 해당 클립을 찾아 업데이트
		const updateClips: Clip[] = clipData.clips.map((clip: Clip) => {
			if (clip.id === id) {
				return { ...clip, favorite };
			}
			return clip;
		});

		await clipRef.set({ clips: updateClips }, { merge: true });

		return { message: '즐겨찾기 상태가 변경되었습니다' };
	} catch (err) {
		console.error(err);
		throw createError({
			statusCode: 500,
			statusMessage: '클립 데이터 변경하는데 실패했습니다',
		});
	}
});
