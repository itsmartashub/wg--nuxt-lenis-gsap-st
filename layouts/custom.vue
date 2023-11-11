<script setup>
	const props = defineProps({
		title: String,
		pageName: String,
	})
</script>

<template>
	<div :class="`page ${props.pageName}`">
		<div class="page-wrap _container">
			<TheHeader />
			<TheTitle :text="props.title" />

			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	._container {
		width: 100%;
		padding-left: 32px;
		padding-right: 32px;
		// background-color: red;
	}
</style>
