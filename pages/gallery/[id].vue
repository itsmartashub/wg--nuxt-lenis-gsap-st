<script lang="ts" setup></script>

<template>
	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			:title="`project ${$route.params.id}`"
			:page-name="`project-${$route.params.id}`"
		>
			<div class="page-content">
				<div class="page-content__block" v-for="_ in 3">
					<div class="page-content__block-photo">
						<img src="/photo.jpeg" alt="" />
					</div>
					<div class="page-content__block-text p1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aperiam, sapiente velit? Maiores repudiandae incidunt
						aspernatur accusantium quod? Adipisci vitae fugit
						aspernatur aliquid labore dolorem sequi, pariatur odio
						quaerat excepturi. Adipisci?
					</div>
				</div>

				<div class="page-next__project">
					<NuxtLink
						class="page-next__project-link hover-fadein h2"
						:to="`/gallery/${+$route.params.id + 1}`"
					>
						next project - {{ +$route.params.id + 1 }}
					</NuxtLink>
				</div>
			</div>
		</NuxtLayout>
	</div>
</template>

<style lang="scss" scoped>
	.page-content__block {
		padding: 32px 0;

		&-text {
			margin-top: 16px;
		}
	}

	.page-next__project {
		margin-top: 32px;
		padding-bottom: 32px;
	}
</style>
