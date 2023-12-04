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
var hideSlides = document.querySelector('.slider__wrapper');
var isOpened = false;

button.addEventListener('click', function () {
 		
	button.classList.toggle('brands--show-all--opened');
	hideSlides.classList.toggle('swiper__ass');
	if (!isOpened) {
		button.textContent = 'Скрыть';	
		isOpened = true;
	} else {
		button.textContent = 'Показать все';	
		isOpened = false;	
	}
	
});

