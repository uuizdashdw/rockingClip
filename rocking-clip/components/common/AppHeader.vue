<template>
	<header>
		<nav>
			<ul class="nav_list">
				<li>
					<nuxt-link to="/">홈</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/clips">클립목록</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/users">유저목록</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/addclip">클립추가</nuxt-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script></script>

<style scoped>
.nav_list {
	display: flex;
	align-items: center;
	gap: 20px;
}

.nav_list a {
	font-size: 18px;
	color: var(--primary-color);
}

header {
	height: 100px;
	border: 1px solid var(--secondary-color);
}

nav {
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 30px;
}
</style>
