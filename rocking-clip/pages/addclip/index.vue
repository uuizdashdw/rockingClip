<template>
	<div>
		<h1 class="title">클립 추가</h1>

		<ul class="data-wrapper">
			<li>
				<label for="">클립 이름</label>
				<input
					type="text"
					v-model="clipData.clipName"
					name="clipName"
					class="data-input"
					placeholder="동영상 이름"
				/>
				<span v-if="fieldErrors.clipName" class="error">{{
					fieldErrors.clipName
				}}</span>
			</li>

			<li>
				<label for="">클립 주소</label>
				<input
					type="text"
					v-model="clipData.clipPath"
					name="clipPath"
					class="data-input"
					placeholder="https://www.youtube.com/"
				/>
				<span v-if="fieldErrors.clipPath" class="error">{{
					fieldErrors.clipPath
				}}</span>
			</li>
			<li>
				<label for="">클립 점수</label>
				<select
					v-model="clipData.favoriteLevel"
					name="favoriteLevel"
					id=""
					class="data-input"
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<span v-if="fieldErrors.favoriteLevel" class="error">{{
					fieldErrors.favoriteLevel
				}}</span>
			</li>
			<li>
				<label for="">설명</label>
				<textarea
					v-model="clipData.description"
					name="description"
					id=""
					class="data-input description"
				></textarea>
				<span v-if="fieldErrors.description" class="error">{{
					fieldErrors.description
				}}</span>
			</li>
			<li>
				<label for="favorite" class="favorite-label">
					<input
						id="favorite"
						v-model="clipData.favorite"
						type="checkbox"
						class="data-input favorite"
					/>
					가장 좋아하는 클립 목록에 저장하기
				</label>
			</li>
		</ul>
		<div class="button-wrapper">
			<button class="btn" @click="addClip">추가하기</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { validateClipData } from '~/utils';
import type { Clip, ClipFieldErrors } from '~/types';
import { useClipStore } from '~/store/clips';

const clipStore = useClipStore();
const router = useRouter();
const clipData = ref<Clip>({
	id: 0,
	clipName: '',
	clipPath: '',
	description: '',
	favorite: false,
	favoriteLevel: '1',
	createdAt: new Date().toLocaleString(),
});

const fieldErrors = ref<ClipFieldErrors>({});

const clips = ref<Clip[]>([]);
const addClip = async () => {
	fieldErrors.value = validateClipData(clipData.value);

	if (Object.keys(fieldErrors.value).length > 0) return;

	try {
		const response = await clipStore.addClip(clipData.value);

		alert(response?.message);
		clipData.value = {
			id: 0,
			clipName: '',
			clipPath: '',
			description: '',
			favorite: false,
			favoriteLevel: '1',
			createdAt: new Date().toLocaleString(),
		};

		await router.push('/clips');
	} catch (err) {
		console.error(err);
		alert('클립 추가에 실패했습니다.');
	}
};

// const addClip = async () => {
// 	fieldErrors.value = validateClipData(clipData.value);

// 	if (Object.keys(fieldErrors.value).length > 0) return;

// 	try {
// 		const result = await addClipToFirestore(clipData.value);

// 		clipData.value = {
// 			id: 0,
// 			clipName: '',
// 			clipPath: '',
// 			description: '',
// 			favoriteLevel: '1',
// 			favorite: false,
// 			createdAt: new Date().toLocaleString(),
// 		};

// 		alert(result.message);
// 	} catch (err) {
// 		console.error('클립 추가에 실패했습니다. :: addClip', err);
// 	}
// };
</script>
<style scoped>
.title {
	margin-bottom: 40px;
}
.data-wrapper {
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 40px;
}

.data-wrapper > li {
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.data-input {
	border: 1px solid var(--third-color);
	border-radius: 4px;
	width: 260px;
	height: 30px;
	outline: none;
	padding: 0 6px;
}

.favorite-label {
	display: flex;
	align-items: center;
	gap: 6px;
	cursor: pointer;
}

.favorite {
	width: 20px;
	height: 20px;
	appearance: none;
	border: 1px solid var(--third-color);
	outline: var(--third-color);
	border-color: var(--third-color);
	cursor: pointer;
	position: relative;
}

.favorite:checked {
	background-color: var(--third-color);
}

.favorite:checked::after {
	content: '';
	position: absolute;
	left: 6px;
	top: 3px;
	width: 6px;
	height: 10px;
	border: solid var(--primary-color);
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}

.description {
	width: 100%;
	height: 200px;
	resize: none;
	padding: 6px;
}

.btn {
	border: 1px solid var(--third-color);
	border-radius: 4px;
	width: 100%;
	height: 40px;
	background-color: transparent;
	cursor: pointer;
}

.error {
	font-size: 10px;
	color: red;
}
</style>
