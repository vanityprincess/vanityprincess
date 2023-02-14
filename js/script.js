let options = {
	'speed': 3000,
	'pause': true,
}

window.addEventListener('DOMContentLoaded', function() {
	let slider = document.querySelector('.rbd-review-slider');
	let slides = slider.querySelectorAll('.rbd-review');
	let total  = slides.length;
	let pause  = false;
	
	function pauseSlide(){
		slider.onmouseleave = function(){ pause = false; };
		slider.onmouseenter = function(){ pause = true; };
		return pause;
	}
	
	function slide(){
		if( options.pause && pauseSlide() ) return;
		
		let activeSlide = document.querySelector('.rbd-review-slider .rbd-review.rbd-curr');
		let prev, curr, next, soon;		
		
		curr = activeSlide;
		prev = activeSlide.previousElementSibling;
		next = activeSlide.nextElementSibling;
		
		if( next != null ){
			soon = next.nextElementSibling == null ? slides[0] : next.nextElementSibling;
		} else {
			next = slides[0];
			soon = slides[1];
		}
		
		if( prev != null ) prev.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
		if( curr != null ) curr.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); curr.classList.add('rbd-prev');
		if( next != null ) next.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); next.classList.add('rbd-curr');
		if( soon != null ) soon.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); soon.classList.add('rbd-next');
	}
	
	let slideTimer = setInterval(function(){
		slide();
	}, options.speed);
}, true);