export function contentAnimation({ type, element }) {
	const elements = document.querySelectorAll(element)

	elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
			// markers: true,
			animation: type === 'text' ? useAnimateText(el) : useAnimateImage(el),
		})
	})
}
