jQuery(document).ready(function($){
	//open/close primary navigation
	$('.grid-trigger').on('click', function(){
		if( $('.primary').hasClass('is-visible') ) {
			$('.primary').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.primary').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
                $('.base-nav li:nth-child(3)').css({
                'opacity': '0.5',
                });
			});
		}
	});

    $('.primary-close').on('click', function(){
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.primary').hasClass('is-visible') ) {
			$('.primary').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden')
			});
		}
	});
});
    //allow featured li to open/close primary navigation
$('.base-nav li:nth-child(2)').click(function() {
    $('.primary').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
    });

    //allow resources li to open/close primary navigation and hide the featured section
$('.base-nav li:nth-child(3)').click(function() {
    $('.primary').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
    $('.resources').css({
        'display': 'inline',
    });
    $('.featured').css({
        'display': 'none',
    });
});
