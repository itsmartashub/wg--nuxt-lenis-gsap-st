<script setup>
	onMounted(() => {
		useSmoothScroll()
	})
</script>

<template>
	<div id="viewport">
		<ThePreloader />
		<slot />
	</div>
</template>
