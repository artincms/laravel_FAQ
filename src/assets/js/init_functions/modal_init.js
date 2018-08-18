function modal_init(modal_id, modal_size, modal_header, modal_content, modal_footer) {
    //console.log(modal_id);
    $('#' + modal_id).remove();
    var public_modal = '' +
        '<div id="' + modal_id + '" class="modal fade">' +
        '   <div class="modal-dialog ' + modal_size + '">' +
        '       <div class="modal-content">' +
        '           <div class="modal-header no-padding" style="border-bottom: 1px solid #ddd; background-color: #eee;">' +
        modal_header +
        '           </div>' +
        '           <div class="modal-body no-margin no-padding">' +
        modal_content +
        '           </div>' +
        '           <div class="modal-footer">' +
        modal_footer +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '</div>';

    $('#all_modals').append(public_modal);
    $('#' + modal_id).modal('show');
}