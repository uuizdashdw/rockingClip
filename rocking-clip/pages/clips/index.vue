<template>
	<div>
		<h1 class="title">클립 목록</h1>
		<ul>
			<li v-for="clip in clipList" :key="clip.id" class="clip-list">
				<ClipItem
					:clip="clip"
					@update-favorite="updateClipProperties(clip.id, clip)"
				></ClipItem>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useFetch } from 'nuxt/app';
import { useClipStore } from '~/store/clips';
import { ref, type Ref } from 'vue';
import ClipItem from '~/components/clips/ClipItem.vue';

import type { Clip } from '~/types';

const clipStore = useClipStore();

const { data }: { data: Ref<Clip[]> } = useFetch<Clip[]>('/api/getClips', {
	key: 'clips',
	cache: 'default',
	// cache: 'force-cache',
});

const updateClipProperties = (id: number, clip: Clip) => {
	const updatedClip: Clip = {
		...clip,
		favorite: !clip.favorite,
	};
	clipStore.updateClip(id, updatedClip);
};

// const fetchClips = async (id: number, updatedData: Partial<Clip>) => {
// 	try {
// 		const { data }: { data: Ref<Clip[]> } =
// 			await useFetch<Clip[]>('/api/getClips');

// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 	}
// };
if (data.value) {
	// Favorite 변경 핸들링
	// const updatedClipsFavorite = data.value.map(clip => ({
	// 	...clip,
	// 	favorite
	// }))
	clipStore.setClips(data.value);
} else {
	console.log('### 데이터 없음');
}

const { clips, setClips } = clipStore;
const clipList = ref<Clip[]>(clips);
// const clips = ref<Clip[]>([]);
</script>

<style scoped>
.title {
	margin-bottom: 40px;
}

.clip-list {
	padding: 30px;
}

.clip-list:not(:last-child) {
	border-bottom: 1px solid #e0e0e0;
}
</style>
