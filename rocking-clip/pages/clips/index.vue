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
import { computed, nextTick, ref, watch, type Ref } from 'vue';
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

// const { clips, setClips } = clipStore;
watch(
	() => data.value,
	newData => {
		if (newData) {
			clipStore.setClips(newData);
			console.log('new Data ?? ', newData);
			// console.log('## 스토어 :: ', clipStore.clips);
			// console.log('## 클라이언트 데이터 ::', data.value);
		} else {
			console.log('### 데이터 없음');
		}
	},
	{ immediate: true },
);

const clipList = computed(() => clipStore.clips);
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
