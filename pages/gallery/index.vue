<script lang="ts" setup></script>

<template>
	<div :class="general.pageBg">
		<NuxtLayout name="custom" title="gallery" :page-name="$route.name">
			<div class="page-content">
				<NuxtLink
					v-for="(_, i) in 10"
					class="page-content__photo p1"
					:to="`/gallery/${i + 1}`"
				>
					<img src="/photo.jpeg" alt="" />
				</NuxtLink>
			</div>
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
	.page-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		align-items: flex-start;
	}
</style>
