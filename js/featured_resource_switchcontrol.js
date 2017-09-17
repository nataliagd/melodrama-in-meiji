jQuery(document).ready(function ($) {

$('#base-nav-featured').click(function() {
    $('.featured').css({
        'display': 'inline',
    });
    $('.resources').css({
        'display': 'none',
    });
    $('.base-nav li:nth-child(2)').css({
        'opacity': '1',
    });
    $('.base-nav li:nth-child(3)').css({
        'opacity': '0.5',
    });
});

$('#base-nav-resources').click(function() {
    $('.resources').css({
        'display': 'inline',
    });
    $('.featured').css({
        'display': 'none',
    });
    $('.base-nav li:nth-child(2)').css({
        'opacity': '0.5',
    });
    $('.base-nav li:nth-child(3)').css({
        'opacity': '1',
    });
});


$('#base-nav-main').click(function() {
    $('.resources').css({
        'display': 'inline',
    });
    $('.featured').css({
        'display': 'none',
    });
    $('.base-nav li:nth-child(2)').css({
        'opacity': '0.5',
    });
    $('.base-nav li:nth-child(3)').css({
        'opacity': '0.5',
    });
});
});
