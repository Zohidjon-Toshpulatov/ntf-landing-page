(function($) {
    "use strict";
    /*-------------------------------------------
    preloader active
    --------------------------------------------- */
    jQuery(window).on('load',function() {
        jQuery('.preloader').fadeOut('slow');
    });

    /*-------------------------------------------
    Sticky Header
    --------------------------------------------- */
    $(window).on('scroll', function(){
        if( $(window).scrollTop()>80 ){
            $('#sticky').addClass('stick');
        } else {
            $('#sticky').removeClass('stick');
        }
    });

    jQuery(document).ready(function(){
        /*-------------------------------------------
        js scrollup
        --------------------------------------------- */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });


        /*----------------------------
            Cart Plus Minus Button
        ------------------------------ */
        var CartPlusMinus = jQuery('.cart-plus-minus');
        CartPlusMinus.prepend('<div class="dec qtybutton"></div>');
        CartPlusMinus.append('<div class="inc qtybutton"></div>');
        jQuery(".qtybutton").on("click", function() {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });



    });

})(jQuery);