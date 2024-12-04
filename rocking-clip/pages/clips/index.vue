<template>
	<div>
		<h1 class="title">클립</h1>
		<ul>
			<li v-for="clip in clipList" :key="clip.id">
				<div>
					<h3 class="subTitle">
						{{ clip.clipName }}
					</h3>
					<p>{{ clip.clipPath }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';
import { getClips } from '~/api';

const { data: clipList } = useAsyncData('clips', async () => {
	return await getClips();
});
</script>

<style></style>
