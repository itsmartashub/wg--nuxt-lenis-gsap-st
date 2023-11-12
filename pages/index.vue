<template>
	<!-- ovo pageBg je iz store/index.js, a nakon sto smo definisali to u store/index.js, i pre nego sto smo ovde pozvali smo isli u nuxt.config.js i dodali: imports: {dirs: ['store']} verovatno da ne moramo ivde da importujemo iz store vec je o verovatno svugde dostupno preko "general" propertija -->
	<div :class="general.pageBg">
		<NuxtLayout name="custom" title="Welcome" :page-name="$route.name" />
	</div>
</template>

<script setup></script>
