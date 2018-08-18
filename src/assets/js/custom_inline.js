/*___________________________________________________FixedColumn_____________________________________________________________________*/
function set_fixed_dropdown_menu(e) {
    $(e).find('.dropdown_gallery').toggleClass('hidden');
    var position = $(e).offset();
    var position2 = $(e).position();
    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();
    var drop_height = $(e).find('.dropdown_gallery').height() + 16;
    if (($(window).height() - position.top) > drop_height) {
        $(e).find('.dropdown_gallery').css({'position': 'fixed', 'top': position.top - scrollTop + 16, 'left': Math.abs(position.left) + 20, 'height': 'fit-content'});
        window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            $(e).find('.dropdown_gallery').css('top', position.top - scroll + 16)
        });
    }
    else {
        $(e).find('.dropdown_gallery').css({'position': 'fixed', 'top': position.top - scrollTop + 16 - drop_height, 'left': Math.abs(position.left) + 20, 'height': 'fit-content'});
        window.addEventListener("scroll", function (event) {
            var scroll = this.scrollY;
            $(e).find('.dropdown_gallery').css('top', position.top - scroll + 16 - drop_height)
        });
    }
}