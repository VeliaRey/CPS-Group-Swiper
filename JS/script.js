new Swiper('.swiper', {

	slidesPerView: 'auto',
	spaceBetween: 16,
	pagination: {
	el: '.swiper-pagination',
	},

breakpoints: {
	320: {
		enable: true,
	},
	768: {
		enabled: false,
	}
},

});



var button = document.querySelector('.brands--show-all');
var hideSlides = document.querySelectorAll('.slider__item--hidden');
var isOpened = false;

button.addEventListener('click', function () {
	for (let i = 0; i < hideSlides.length; i++) {
		hideSlides[i].classList.toggle('slider__item--hidden');
		button.classList.toggle('brands--show-all--opened');
	
	if (!isOpened) {
		button.textContent = 'Скрыть';	
		isOpened = true;
	} else {
		button.textContent = 'Показать все';
		isOpened = false;
	}
	}
	
});

