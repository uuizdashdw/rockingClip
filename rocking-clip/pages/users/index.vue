<template>
	<div>
		<h1 class="title">유저 목록</h1>

		<ul>
			<li v-for="user in userList" :key="user.id">
				<div>
					<h3>{{ user.userName }}</h3>
					<p>{{ user.userNickName }}</p>
					<p>{{ user.userAccount }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { useAsyncData } from '#app';
import { getUsers } from '~/api';

const { data: userList } = useAsyncData('users', async () => {
	return await getUsers();
});
</script>

<style></style>
