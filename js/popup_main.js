jQuery(document).ready(function ($) {

//open description popup
$('.popup-description-trigger').on('click', function (event) {
    event.preventDefault();
    $('.popup-description').addClass('is-visible');
});

//close description popup
$('.popup-description').on('click', function (event) {
    if ($(event.target).is('.popup-description-close, .popup-highlights-close') || $(event.target).is('.popup-description')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
    }
});
//close popup when clicking the esc keyboard button
$(document).keyup(function (event) {
    if (event.which === '27') {
        $('.popup-description').removeClass('is-visible');
    }
});


                //open highlights popup
$('.popup-highlights-trigger, .exhigh-trigger').on('click', function (event) {
    event.preventDefault();
    $('.popup-highlights').addClass('is-visible');
	$('#body').css({
            'overflow': 'hidden',
        });
        currentSlide(1);
});

//close highlights popup
$('.popup-highlights').on('click', function (event) {
  if (($(event.target).is('.popup-highlights-close')||$(event.target).is('.tertiary-close')) || $(event.target).is('.popup-highlights')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
    }
});



//close highlights popup when clicking the esc keyboard button
$(document).keyup(function (event) {
    if (event.which === '27') {
        $('.popup-highlights').removeClass('is-visible');
    }
});






                //open secondary popup
$('.resources-grid-title, .resources-grid-type, .resources-grid-year').on('click', function(event){
    event.preventDefault();
    $('.secondary').addClass('is-visible');
    $('#resources-header, #resources-secondary').css({
            'display': 'none',
        });
    $('.resources, .featured').css({
            'overflow': 'hidden',
        });

});

//close description popup
$('.secondary').on('click', function (event) {
    if ($(event.target).is('.secondary-close') || $(event.target).is('.secondary')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
    }
});

//close secondary popup when clicking the esc keyboard button
$(document).keyup(function(event){
    if(event.which=='27'){
        $('.secondary').removeClass('is-visible');
         $('#resources-header, #resources-secondary').css({
            'display': 'block',
        });
    }
});






                //open tertiary popup
// $('.resource-grid-thumbnail').click(function(event){
//
//     event.preventDefault();
//     $('.tertiary').addClass('is-visible');
//     $('#resources-header, #resources-secondary').css({
//             'display': 'none',
//         });
//     $('.resources, .featured').css({
//             'overflow': 'hidden',
//         });
// });

                //close tertiary popup
$('.tertiary').on('click', function(event){
    if( $(event.target).is('.tertiary-close') || $(event.target).is('.tertiary') ) {
        event.preventDefault();
        $(this).removeClass('is-visible');
        $('#resources-header, #resources-secondary').css({
            'display': 'block',});
        $('.resources, .featured').css({
            'overflow': 'scroll',});
    }
});
//close tertiary popup when clicking the esc keyboard button
$(document).keyup(function(event){
    if(event.which=='27'){
        $('.tertiary').removeClass('is-visible');
         $('#resources-header, #resources-secondary').css({
            'display': 'block',
        });
        $('.secondary').removeClass('is-visible');
        $('.resources, .featured').css({
            'overflow': 'scroll',
        });
    }
});
});
