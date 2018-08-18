function init_touch_swipe(selector, swipe_func_name, swipe_status_func_name, threshold,element_) {
    var _threshold = threshold || 10;
    var _element = element_ || null;
    $(function () {
        $(selector).swipe({
            swipe: function (event, direction) {
                window[swipe_func_name](selector,event, direction,_element);
            },
            swipeStatus: function (event, phase) {
                window[swipe_status_func_name](selector,event, phase,_element);
            },
            threshold: _threshold
        });
    });
}

function _carousel_swipe(selector,event, direction,element) {
    if (direction === 'right' || direction === 'down') {
        $(element).carousel("next");
    }
    else if (direction === 'left' || direction === 'up') {
        $(element).carousel("prev");
    }
}

function _carousel_swipe_status(selector,event, direction,element) {
    //console.log(event, phase);
}

function init_touch_swipe_carousel() {
    $(".carousel").each(function (k,v) {
        init_touch_swipe('#'+$(v).attr('id')+' .carousel-inner img', '_carousel_swipe', '_carousel_swipe_status', 30,'#'+$(v).attr('id'));
    });
}