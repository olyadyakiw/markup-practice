initMenu()
initInfinityAnimation()
initTitleAnimation()

function initMenu() {
	const body = document.querySelector('body');
	const button = document.querySelector('.nav-opener');
	const content = document.querySelector('.header__content');

	button.addEventListener('click', () => {
		body.classList.toggle('nav-active');
		content.classList.toggle('active');
		button.classList.toggle('active');
	})

	window.addEventListener('resize', () => {
		body.classList.remove('nav-active');
		content.classList.remove('active');
		button.classList.remove('active');
	})
}

function initInfinityAnimation() {
	const lines = document.querySelectorAll('.infinity-line')
	let targetWidth = 4500 // The width that the items should fill

	lines.forEach(line => {
		// Get item content
		const scrollerContent = Array.from(line.children)

		if (scrollerContent.length === 0) return; // Exit if there are no children

		// Measure the width of a single item
    	const sampleItem = scrollerContent[0];
    	const itemWidth = sampleItem.getBoundingClientRect().width + 20;

		 // Calculate how many items are needed to fill
    	const itemsNeeded = Math.ceil((targetWidth) / itemWidth);

		// For each item in the array, clone it the required number of times
    	for (let i = 0; i < itemsNeeded; i++) {
    	  scrollerContent.forEach((el) => {
    	    const duplicatedItem = el.cloneNode(true);
    	    line.appendChild(duplicatedItem);
    	  });
    	}

		const items = line.querySelectorAll('.infinity-line__text')

		// Get the animation duration from the first item
		const duration = parseFloat(getComputedStyle(sampleItem).animationDuration)

		// Set width
		const totalWidth = itemWidth * itemsNeeded;
		line.style.width = `${totalWidth}px`;
		line.style.setProperty('--itemWidth', `${itemWidth}px`)

		// Set delay
		Array.from(items).forEach((item, index) => {
			const delay = `calc(${duration}s / ${itemsNeeded} * (${itemsNeeded} - ${index}) * -1)`;
			item.style.animationDelay = delay;
		});

	})
}

function initTitleAnimation() {
	let observer = new IntersectionObserver( isElScrolledIntoView, { root: null, rootMargin: '0px', threshold: 0.4 } );
	
	const elements = document.querySelectorAll('.section');
	
	elements.forEach( element => {
	  observer.observe(element);
	});
	
	function isElScrolledIntoView( entries ) {
	  entries.forEach( entry => {
	    if ( entry.isIntersecting ) {
	      entry.target.classList.add('scrolled-into-view');
	    }
	  });
	}
}
