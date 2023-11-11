import { reactive } from 'vue'

export const general = reactive({
	// ovo cemo pozvati u layouts/custom.vue u divu: <div :class="`page_${pageBg}`">   i definisali smo tu klasu page_black u _general.scss
	pageBg: 'page_black',
})
