<script setup></script>

<template>
	<div class="page-mask"></div>
</template>

<style lang="scss" scoped>
	.page-mask {
		position: fixed;
		inset: 0;
		z-index: $z-mask;
		pointer-events: none;
	}

	.page_white .page-mask {
		background: $color-white;
	}
	.page_black .page-mask {
		background: $color-black;
	}
</style>
