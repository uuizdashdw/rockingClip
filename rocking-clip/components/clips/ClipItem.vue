<template>
	<div>
		<h3 class="clip-title">{{ clip.clipName }}</h3>
		<div class="favorite-wrapper">
			<div>
				<span class="level">{{ getFavoriteLevel(clip.favoriteLevel) }}</span>
			</div>
			<div>
				<span
					class="favorite"
					@click="onChangeFavorite(clip.id, clip.favorite)"
					>{{ getFavorite(clip.favorite) }}</span
				>
			</div>
			<div>{{ clip.createdAt }}</div>
		</div>

		<div class="video-wrapper">
			<iframe
				:src="`https://www.youtube.com/embed/${extractVideoID(clip.clipPath)}`"
				width="500"
				height="300"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				loading="lazy"
			></iframe>
		</div>
		<div>설명 : {{ clip.description }}</div>
	</div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import type { Clip } from '~/types';

const router = useRouter();
const { clip } = defineProps<{
	clip: Clip;
}>();

const extractVideoID = (url: string) => {
	const regex =
		/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
	const match = url.match(regex);
	return match ? match[1] : '';
};

const getFavoriteLevel = (level: string) => {
	if (level === '5') return '🥇';
	if (level === '4') return '🥈';
	if (level === '3') return '🥉';
	if (level === '2') return '4️⃣';
	if (level === '1') return '5️⃣';
};

const getFavorite = (favorite: boolean) => {
	if (favorite) return '💖';
	if (!favorite) return '➕';
};

const emit = defineEmits(['update-favorite']);
const onChangeFavorite = async (clipId: number, favorite: boolean) => {
	const newFavorite = !favorite;

	if (
		confirm(
			`${favorite ? '즐겨찾기를 취소하시겠습니까?' : '즐겨찾기에 등록하시겠습니까?'}`,
		)
	) {
		try {
			const response = await $fetch<{ message: string }>(
				'/api/changeClipFavorite',
				{
					method: 'POST',
					body: { id: clipId, favorite: newFavorite },
				},
			);

			alert(response.message);
			emit('update-favorite');
			router.replace('/');
		} catch (err) {
			console.error('즐겨찾기 상태 변경 실패', err);
		}
	}
};
</script>
<style scoped>
.clip-title {
	font-size: 1.125rem;
	font-weight: bold;
	margin-bottom: 16px;
}

.video-wrapper {
	margin-bottom: 40px;
}

.favorite-wrapper {
	display: flex;
	align-items: center;
	gap: 20px;
	margin-bottom: 20px;
}

.level,
.favorite {
	font-size: 22px;
}

.favorite {
	cursor: pointer;
}
</style>
