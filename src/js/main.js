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
}(this.jQuery));