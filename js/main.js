(function ($) {

    if ($().slick) {
        $('.showcase-slider').slick();
    }

    if ($().magnificPopup) {
        $('.has-popup').each(function() {
            var popup = $(this);
    
            popup.magnificPopup({
                type: 'ajax'
            });
        });
    }

    $('.has-subnav').on('click', function() {

        const subnav = $(this);
        
        if (subnav.attr('data-show-menu') === "false") {
            subnav.attr('data-show-menu', "true");
        } else {
            subnav.attr('data-show-menu', "false");
        }
    });

}(this.jQuery));