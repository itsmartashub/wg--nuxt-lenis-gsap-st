// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	pages: true,

	css: ['@/assets/scss/default.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/utils.scss";',
				},
			},
		},
	},

	// valjda s ovim mozemo da koristimo store propertoje svugde u projectu preko general propertija (PROVERITI OVO!!)
	imports: {
		dirs: ['store', 'utils'],
	},
})
