//= modules/swiper-bundle.js
//= modules/select.js

isWebp();
initMenu()
initSlider()
initBenefitsSlider()
isElementExist(".faq", initAccordionColumns);
initAccordion()
isElementExist('.history', initHistoryItemHeight)
isElementExist('.gallery', initGallerySlider)
isElementExist('.gallery', initGalleryFilters)
isElementExist('select', initCustomSelect)

function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch(e) {
			console.log(e);
		}
	}
}

function isWebp() {
    function testWebP(callback) {

        var webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }
    
    testWebP(function (support) {
    
        if (support == true) {
            document.querySelector('body').classList.add('webp')
        } else {
            document.querySelector('body').classList.add('no-webp')
        }
    })
}

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

function initSlider() {
	const swiper = new Swiper('.swiper', {
		loop: true,
		spaceBetween: 50,
		slidesPerView: 1,
		autoHeight: true,

		// Navigation arrows
  		navigation: {
  		  nextEl: '.swiper-button-next',
  		  prevEl: '.swiper-button-prev',
  		},

		// Responsive breakpoints
  		breakpoints: {
  		  	1024: {
  		    	spaceBetween: 40,
				slidesPerView: 2,
		  	},
  		  	1400: {
				slidesPerView: 3,
		  	}
  		},
	})
}

function initBenefitsSlider() {
	const swiper = new Swiper('.benefits-swiper', {
		loop: true,
		spaceBetween: 50,
		slidesPerView: 1,
		autoHeight: true,

		// Navigation arrows
  		navigation: {
  		  nextEl: '.swiper-button-next',
  		  prevEl: '.swiper-button-prev',
  		},

		// Responsive breakpoints
  		breakpoints: {
  		  	1024: {
  		    	spaceBetween: 40,
				slidesPerView: 2,
		  	},
  		  	1400: {
  		    	spaceBetween: 40,
				slidesPerView: 3,
		  	}
  		},
	})
}

function initAccordionColumns() {
    const grid = document.querySelector('.faq-grid');
    const items = document.querySelectorAll('.faq');
    const totalItems = items.length;
    const half = Math.ceil(totalItems / 2);

	// Create columns
    const column1 = document.createElement('div');
    column1.classList.add('faq-grid__column');

    const column2 = document.createElement('div');
    column2.classList.add('faq-grid__column');

    items.forEach((item, index) => {
        if (index < half) {
            column1.appendChild(item);
        } else {
            column2.appendChild(item);
        }
    });

    grid.innerHTML = '';
    grid.appendChild(column1);
    grid.appendChild(column2);
}

function initAccordion() {
	const accordionItems = document.querySelectorAll('.faq');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const openItem = document.querySelector('.faq.active');

            toggleItem(item);

            if (openItem && openItem !== item) {
                toggleItem(openItem);
            }
        });
    });

    const toggleItem = (item) => {
        const content = item.querySelector('.faq__text');

        if (item.classList.contains('active')) {
            content.style.maxHeight = null;
            item.classList.remove('active');
        } else {
            content.style.maxHeight = content.scrollHeight + 48 + 'px';
            item.classList.add('active');
        }
    };
}

function initHistoryItemHeight() {
	const item = document.querySelector('.history-item:last-child')
	const inner = document.querySelector('.history__inner')
	let height = item.clientHeight
	inner.style.setProperty('--lastItemHeight', `${height}px`)
	window.addEventListener('resize', () => {
		height = item.clientHeight
		inner.style.setProperty('--lastItemHeight', `${height}px`)
	})
}

function initGallerySlider() {
	const items = document.querySelectorAll('.gallery')
	items.forEach((item, index) => {
		
		const slider = item.querySelector('.gallery-slider');

		slider.classList.add(`gallery-slider-${index}`);

		const nextButton = item.querySelector('.swiper-button-next');
		const prevButton = item.querySelector('.swiper-button-prev');
		
		if (nextButton && prevButton) {
			nextButton.classList.add(`swiper-button-next${index}`);
			prevButton.classList.add(`swiper-button-prev${index}`);
		}

		const swiper = new Swiper(slider, {
			loop: true,
			spaceBetween: 40,
			slidesPerView: 1,
			autoHeight: true,
	
			navigation: {
				nextEl: `.swiper-button-next${index}`,
				prevEl: `.swiper-button-prev${index}`,
			},
	
			breakpoints: {
				1024: {
					spaceBetween: 40,
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				}
			},
		});
	});
}

function initGalleryFilters() {
	const filterButtons = document.querySelectorAll('.filter__btn');
    const galleryItems = document.querySelectorAll('.gallery');

    let activeFilters = new Set();

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = button.getAttribute('data-filter');

            if (filter === 'all') {
                activeFilters.clear();
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                showItems();
            } else {
                button.classList.toggle('active');
                if (activeFilters.has(filter)) {
                    activeFilters.delete(filter);
                } else {
                    activeFilters.add(filter);
                    document.querySelector('.filter__btn[data-filter="all"]').classList.remove('active');
                }
                showItems();
            }
        });
    });

    function showItems() {
        if (activeFilters.size === 0) {
            galleryItems.forEach(item => item.style.display = '');
        } else {
            galleryItems.forEach(item => {
                const itemCategory = item.querySelector('.gallery__title').textContent.trim();
                if (activeFilters.has(itemCategory)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    }
}

function initCustomSelect() {
	const selectElements = document.querySelectorAll("[data-custom]")

	selectElements.forEach(selectElement => {
	  new Select(selectElement)
	})
}