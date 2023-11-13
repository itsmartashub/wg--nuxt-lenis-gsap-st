<script setup>
	definePageMeta(transition)

	watch(
		() => [general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisibility]) => {
			if (transitionFinish && !preloaderVisibility) {
				contentAnimation({
					type: 'text',
					element: '.page-content__block',
				})
			}
		}
	)
</script>

<template>
	<div :class="general.pageBg">
		<NuxtLayout name="custom" title="about" :page-name="$route.name">
			<div class="page-content">
				<div v-for="_ in 10" class="page-content__block p1">
					<pre>{{ $route.name }}</pre>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus laboriosam alias accusantium libero.
					Unde saepe amet temporibus magni commodi placeat, aliquid fugit, nihil quaerat iusto eius odio illum
					mollitia blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dignissimos
					iste repellat ratione, optio suscipit ipsam omnis magnam nam quod labore fugit accusamus est
					pariatur ipsa vero nostrum praesentium tempore!
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
	.page-content__block {
		padding-bottom: 32px;
	}
</style>
