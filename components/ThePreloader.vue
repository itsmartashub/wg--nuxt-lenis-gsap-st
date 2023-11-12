<script setup>
	const percentage = ref(0)

	onMounted(() => {
		console.log(gsap)
		const tl = gsap.timeline()

		tl.to(percentage, {
			progress: 100,
			duration: 1,
			onUpdate() {
				percentage.value = Math.floor(percentage.progress)
			},
			onComplete() {
				general.isPreloaderVisible = false
			},
		})

		tl.fromTo(
			'.preloader',
			{
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			},
			{
				clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
				duration: 1,
			}
		)
	})
</script>

<template>
	<div class="preloader">
		<div class="preloader-percent h2">{{ percentage }}%</div>
	</div>
</template>

<style lang="scss" scoped>
	.preloader {
		position: fixed;
		inset: 0;
		background: $color-white;
		z-index: $z-preloader;
		display: flex;
		align-items: center;

		color: #000;
	}
</style>
