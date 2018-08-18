function init_doAfterStopTyping(selector, function_name, function_params, waiting_time) {
    selector = selector || 'document';
    function_params = function_params || false;
    waiting_time = waiting_time || 500;
    var $this = $(selector);
    //setup before functions
    var typingTimer; //timer identifier
    var doneTypingInterval = waiting_time; //time in ms, 5 second for example
    //on keyup, start the countdown
    $(document).on('keyup', selector, do_after_stop_typing);

    function do_after_stop_typing() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
            if (function_params) {
                return function_name($this.val(), function_params);
            }
            else {
                return function_name($this.val());
            }

        }, doneTypingInterval);
    }
    //on keydown, clear the countdown
    $(document).on('keydown', selector, function () {
        clearTimeout(typingTimer);
    });
}
