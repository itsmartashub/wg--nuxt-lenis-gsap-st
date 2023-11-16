<script setup>
	const props = defineProps({
		text: String,
	})
</script>

<template>
	<div class="default-title h1">
		<div class="default-title__wrap">
			<!-- {{ props.text }} -->
			{{ text }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.default-title {
		height: 100vh;
		height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;

		&__wrap {
			will-change: transform;
		}
	}
</style>
