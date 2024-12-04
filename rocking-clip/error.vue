<template>
	<div class="layout">
		<div class="description">
			<h1>
				<span class="title">404</span>
				<span class="subTitle"> :: NOT FOUND PAGE</span>
			</h1>
			<p>페이지를 찾을 수 없습니다.</p>
		</div>
		<div class="toHome_wrapper">
			<nuxt-link class="toHome" to="/">홈으로 가기</nuxt-link>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.layout {
	padding-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.description {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	margin-bottom: 40px;
}

.toHome {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 40px;
	border: 1px solid var(--secondary-color);
	border-radius: 6px;
	color: var(--primary-color);
}
</style>
