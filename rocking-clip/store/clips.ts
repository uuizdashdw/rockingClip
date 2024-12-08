import { defineStore } from 'pinia';
import type { Clip } from '~/types';

export const useClipStore = defineStore('clips', {
	state: () => ({
		clips: [] as Clip[],
	}),

	actions: {
		setClips(newClips: Clip[]) {
			this.clips = [...newClips].reverse();
		},

		async addClip(clip: Clip) {
			// const clipStore = useClipStore();
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
				// const response = await addClipToFirestore(newClip);
				const response = await $fetch<{ id: number; message: string }>(
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
				return response;
			} catch (err) {
				console.error('ERROR AT ACTION :: ', err);
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
