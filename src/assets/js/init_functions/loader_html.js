function generate_loader_html(loading_text) {
    var loader_html = '' +
        '<div class="total_loader">' +
        '   <div class="total_loader_content" style="">' +
        '       <div class="spinner_area">' +
        '           <div class="spinner_rects">' +
        '               <div class="rect1"></div>' +
        '               <div class="rect2"></div>' +
        '               <div class="rect3"></div>' +
        '               <div class="rect4"></div>' +
        '               <div class="rect5"></div>' +
        '           </div>' +
        '       </div>' +
        '       <div class="text_area">' + loading_text + '</div>' +
        '   </div>' +
        '</div>';
    return loader_html;
}