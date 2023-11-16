export function firstScreenAnimation({ parent }) {
	const parentEl = document.querySelector(parent)
	const title = parentEl.querySelector('.default-title__wrap')
	const header = parentEl.querySelector('.header')
	const pageMask = parentEl.querySelector('.page-mask')

	const tl = gsap.timeline()

	tl.to(pageMask, {
		opacity: 0,
	})

	tl.from(title, {
		yPercent: 100,
		opacity: 0,
		clearProps: 'all',
	})

	tl.from(
		header,
		{
			yPercent: -100,
			clearProps: 'all',
		},
		'<'
	)

	// i sada idemo prvo u nuxt.config.js i u imports dodajemo 'animations', a onda u layouts/custom.vue da dodamoe watcher
}
