import { defineStore } from 'pinia';
import type { Clip } from '~/types';
import { useRouter } from 'vue-router';

const router = useRouter();

export const useClipStore = defineStore('clips', {
	state: () => ({
		clips: [] as Clip[],
	}),

	actions: {
		setClips(newClips: Clip[]) {
			this.clips = [...newClips].reverse();
		},

		async addClip(clip: Clip) {
			const maxId = this.clips.reduce(
				(max, clip) => (clip.id > max ? clip.id : max),
				0,
			);
			const newId = maxId + 1;
			const newClip: Clip = {
				...clip,
				id: newId,
				createdAt: new Date().toLocaleString(),
			};

			try {
				const response = await $fetch<{ id: string; message: string }>(
					'/api/addClipToFirestore',
					{
						method: 'POST',
						body: {
							...newClip,
						},
					},
				);

				this.clips.push(newClip);
				const newClips = [...this.clips];
				this.setClips(newClips);

				if (response && response.message) {
					return response;
				} else {
					console.error('응답 데이터가 없거나 올바르지 않습니다.', response);
					return null;
				}
				// return response;
			} catch (err) {
				console.error('ERROR AT ACTION :: ', err);
				return null;
			}
		},

		updateClip(id: number, updatedData: Partial<Clip>) {
			const clipIndex = this.clips.findIndex(clip => clip.id === id);

			if (clipIndex !== -1) {
				Object.assign(this.clips[clipIndex], updatedData);
			}
		},
	},
});
