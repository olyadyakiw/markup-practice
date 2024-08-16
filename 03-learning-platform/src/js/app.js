//= modules/swiper-bundle.js

isWebp();
// isElementExist("class", function);
initMenu()
initSlider()
initBenefitsSlider()
initAccordionColumns()
initAccordion()

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
		slidesPerView: 3,
		autoHeight: true,

		// Navigation arrows
  		navigation: {
  		  nextEl: '.swiper-button-next',
  		  prevEl: '.swiper-button-prev',
  		},

		// Responsive breakpoints
  		breakpoints: {
  		  	1400: {
  		    	spaceBetween: 40,
		  	},
  		  	320: {
  		    	slidesPerView: 1,
		  	},
  		},
	})
}

function initBenefitsSlider() {
	const swiper = new Swiper('.benefits-swiper', {
		loop: true,
		spaceBetween: 50,
		slidesPerView: 3,
		autoHeight: true,

		// Navigation arrows
  		navigation: {
  		  nextEl: '.swiper-button-next',
  		  prevEl: '.swiper-button-prev',
  		},

		// Responsive breakpoints
  		breakpoints: {
  		  	1400: {
  		    	spaceBetween: 40,
		  	},
  		  	320: {
  		    	slidesPerView: 1,
		  	},
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
