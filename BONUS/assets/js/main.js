$(document).ready(function () {
    var cssLi = $('.hamburger-menu ul li')
    var cssLink = $('.hamburger-menu ul li a')
    $('.hamburger-menu ').css("background-color",'#61CE4E')
    $(cssLi).fadeTo(0,0);
    var color = ['#182637','#1b2d41','#233a55','#2B3F58'];
    $(cssLi).each(function (i) {
        $(this).css({
            "width":'100%',
            "height":"calc(100%/4)",
            "background-color": color[i],
            "display": "flex",
            "text-align":"center",
        });
        $(cssLink).css({
            "margin" : "auto",
            "border": "none",
            "text-transform": "uppercase",
        })
            
    });


    function appearList (){
        $(cssLi).first().fadeTo(300, 1, function showNext() {
            $( this ).next().fadeTo( 300, 1, showNext);
        })
    }

    $('.fas.fa-bars').click(()=> {$('.hamburger-menu').show(100, appearList )});
    $('.fas.fa-times').click(()=> {$('.hamburger-menu').hide(0,$(cssLi).fadeTo(0,0))})
    $(window).resize(function() {
        var width = $(window).width();
        if (width > 1000){
            $('.hamburger-menu ').hide()
        }
    });
});
