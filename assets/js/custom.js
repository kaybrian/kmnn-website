(function($) {

	"use strict";



    /*------------------------------------------
        = RECENT CASE SECTION SHOW HIDE
    -------------------------------------------*/
    if($('.recent-cases-thumbs').length){
        $('.recent-case-thumb').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-case'));
            $('.recent-case-thumb').removeClass('active-thumb');
            $(this).addClass('active-thumb');
            $('.recent-cases-content .recent-case-data').hide(0);
            $('.recent-case-data').fadeOut(300).removeClass('active-case-data');
            $(target).fadeIn(300).addClass('active-case-data');
        });
    }



})(window.jQuery);
