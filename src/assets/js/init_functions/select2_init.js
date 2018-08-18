function init_select2_ajax(selector, url, allowClear, multiple, tags, placeholder, selectable_id) {
    allowClear = allowClear || false;
    selectable_id = selectable_id || null;
    tags = tags || false;
    multiple = multiple || false;
    placeholder = placeholder || "جستجو کنید ...";
    url = url || '{{ "222"}}';
    $(selector).select2({
        minimumInputLength: 3,
        allowClear: allowClear,
        multiple: multiple,
        tags: tags,
        dir: "rtl",
        width: "100%",
        placeholder: placeholder,
        language: "fa",
        ajax: {
            url: url,
            dataType: "json",
            type: "POST",
            quietMillis: 150,
            data: function (term) {
                return {
                    term: term,
                    selectable_id: selectable_id
                };
            },
            results: function (data) {
                return {
                    results: $.map(data, function (item) {
                        return {
                            text: item.text,
                            id: item.id
                        }
                    })
                };
            }
        }
    });
}

function init_select2_data(selector, data, minimumInputLength, allowClear, multiple, tags, placeholder) {
    //console.log(data);
    allowClear = allowClear || false;
    minimumInputLength = minimumInputLength || false;
    tags = tags || false;
    multiple = multiple || false;
    placeholder = placeholder || "جستجو کنید ...";
    data = data || '{{ "222"}}';
    $(selector).select2({
        minimumInputLength: minimumInputLength,
        allowClear: allowClear,
        multiple: multiple,
        tags: tags,
        dir: "rtl",
        width: "100%",
        placeholder: placeholder,
        language: "fa",
        data: data
    });
}