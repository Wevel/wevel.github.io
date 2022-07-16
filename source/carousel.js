// https://stackoverflow.com/questions/20007610/bootstrap-carousel-multiple-frames-at-once
// https://www.codeply.com/p/0CWffz76Q9

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
	const minPerSlide = 5
	let next = el.nextElementSibling
	for (var i = 1; i < minPerSlide; i++) {
		if (!next) {
			// wrap carousel by using first child
			next = items[0]
		}
		let cloneChild = next.cloneNode(true)
		el.appendChild(cloneChild.children[0])
		next = next.nextElementSibling
	}
})

// onmouseover="itemHover(1)" onmouseleave="itemReset(1)" onmousedown="itemClick(1)"

