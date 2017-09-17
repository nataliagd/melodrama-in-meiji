jQuery(document).ready(function ($) {
 $('button').on('click',function(e) {
    if ($(this).hasClass('featured-grid')) {
        $('#featured-list-container ul').removeClass('featured-list').addClass('featured-grid');
    }
    else if($(this).hasClass('featured-list')) {
        $('#featured-list-container ul').removeClass('featured-grid').addClass('featured-list');
    }
});

$('button').on('click',function(e) {
    if ($(this).hasClass('resources-grid')) {
        $('#resources-list-container ul').removeClass('resources-list').addClass('resources-grid');
    }
    else if($(this).hasClass('resources-list')) {
        $('#resources-list-container ul').removeClass('resources-grid').addClass('resources-list');
    }
});

});
