import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
	// idemo u store/index.js da dodamo scrollLenis
	general.scrollLenis = new Lenis({
		duration: 1.2,
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
	})

	general.scrollLenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => general.scrollLenis.raf(time * 1000))

	gsap.ticker.lagSmoothing(0)
	general.scrollLenis.scrollTo(0)
	// general.scrollLenis.stop()
}
