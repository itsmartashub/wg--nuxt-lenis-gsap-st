<script setup>
	const links = [
		{ href: '/', text: 'main' },
		{ href: '/about', text: 'about' },
		{ href: '/gallery', text: 'gallery' },
	]
</script>

<template>
	<header class="header" data-lenis-prevent>
		<NuxtLink
			v-for="link in links"
			:to="link.href"
			class="header-link hover-fadein"
		>
			{{ link.text }}
		</NuxtLink>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px 0 20px;
		z-index: $z-header;

		&-link {
			margin: 0 20px;
			text-transform: uppercase;
		}
	}

	.page-white .header {
		background: $color-white;
	}
	.page-black .header {
		background: $color-black;
	}
</style>
