//For Carousel
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	autoplay: true,
	autoplayTimeout: 2000,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
})


//For Animation
new WOW().init();