function init_checkboxes_and_radios() {
    $(".styled, .multiselect-container, input").uniform({
        radioClass: 'choice'
    });

    $(".control-primary").uniform({
        radioClass: 'choice',
        wrapperClass: 'border-primary-600 text-primary-800'
    });
}