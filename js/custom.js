
$('[data-sidenav]').sidenav();	

$(function(){
	// $(".gototop").gototop();
    $(".scroll").scroll({
    	position : 0,
        duration : 1250,
        classname : "isvisible"
    });
});

$('.main-banner .owl-carousel').owlCarousel({
	loop:false,
	nav:true,
	dots:false,
	mouseDrag:false,
	margin:0,
	items: 1,
	navSpeed:1500,
	animateOut: 'fadeOut'
});
	
$('.zone-area-plant-growing .owl-carousel').owlCarousel({
    loop:false,
	nav:true,
	dots:false,
    margin:10,
	mouseDrag:false,
	navSpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
			mouseDrag:true,
			margin:8,
			stagePadding: 20,
        },
        600:{
            items:3,
			stagePadding: 0,
        },
        1000:{
            items:3,
			stagePadding: 0,
        },
		1220:{
            items:3,
			stagePadding: 0,
        },
		1400:{
            items:4,
			stagePadding: 0,
        }
    }
});

$('.recommended-slider .owl-carousel').owlCarousel({
    loop:false,
	nav:true,
	dots:false,
    margin:25,
	mouseDrag:false,
	navSpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
			mouseDrag:true,
			margin:8,
			stagePadding: 20,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        },
		1220:{
            items:5,
        }
    }
});


$('.customer-reviews .owl-carousel').owlCarousel({
    loop:false,
	nav:true,
	dots:false,
    margin:45,
	mouseDrag:false,
	navSpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
			mouseDrag:true,
			margin:8,
			stagePadding: 20,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        },
		1220:{
            items:3,
        }
    }
});