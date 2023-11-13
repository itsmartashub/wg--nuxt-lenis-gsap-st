import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
	// idemo u store/index.js da dodamo scrollLenis
	general.scrollLenis = new Lenis({
		duration: 1.2,
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
	})

	// TODO videti sta ovo znaci
	general.scrollLenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		general.scrollLenis.raf(time * 1000)
	})

	// TODO videti sta ovo znaci jeez
	gsap.ticker.lagSmoothing(0)
	general.scrollLenis.scrollTo(0)
	// general.scrollLenis.stop()
}
