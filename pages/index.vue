<script setup>
	definePageMeta(transition)
</script>

<template>
	<!-- ovo pageBg je iz store/index.js, a nakon sto smo definisali to u store/index.js, i pre nego sto smo ovde pozvali, isli smo u nuxt.config.js i dodali: imports: {dirs: ['store']} verovatno da ne moramo ovde da importujemo iz store vec je to verovatno svugde dostupno preko "general" propertija -->
	<div :class="general.pageBg">
		<NuxtLayout name="custom" title="Welcome" page-name="index" />
	</div>
</template>
