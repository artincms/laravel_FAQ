<script>
    //get gallery
    window['faq_grid_columns'] = [
        {
            width: '5%',
            data: 'id',
            title: 'ردیف',
            searchable: false,
            sortable: false,
            render: function (data, type, row, meta) {
                return meta.row + meta.settings._iDisplayStart + 1;
            }
        },
        {
            data: 'id',
            name: 'id',
            title: 'آی دی',
            visible: false
        },
        {
            width: '15%',
            data: 'title',
            name: 'title',
            title: 'عنوان'
        },
        {
            width: '25%',
            data: 'description',
            name: 'description',
            title: 'توضیحات',
            mRender: function (data, type, full) {
                return '<div class="text_over_flow">'+full.description+'</div>'
            }
        },
        {
            width: '20%',
            data: 'lang_name',
            name: 'lang_name',
            title: 'زبان'
        },

        {
            width: '15%',
            data: 'created_by',
            name: 'created_by',
            title: 'ایجاد شده توسط',
            mRender: function (data, type, full) {
                if (full.user && full.user.name) {
                    return '<span>' + full.user.name + '<span>';
                }
                else
                    return '<span><span>';
            }
        },

        {
            width: '5%',
            data: 'is_active',
            name: 'is_active',
            title: 'وضعیت',
            mRender: function (data, type, full) {
                var ch = '';
                if (parseInt(full.is_active))
                    ch = 'checked';
                else
                    ch = '';
                return '<input class="styled " id="' + full.id + '" type="checkbox" name="special" data-item_id="' + full.id + '"  onchange="change_status_faq(this)"' + ch + '>'
            }
        },
        {
            width: '30%',
            data: 'order',
            name: 'order',
            title: 'ترتیب',
            searchable: false,
            mRender: function (data, type, full) {
                var order = FaqManagerGridData.order();
                if (order[0][0] == 7) {
                    if (order[0][1] == 'desc') {
                        var result = '';
                        result += '' +
                            '<div class="input-group mb-3">' +
                            '   <div class="input-group-prepend ">' +
                            '       <button type="button" style="float: right;border-radius: 0px;" class="btn btn-outline-secondary reorder_faq_form_grid_data bg-info-400" ' +
                            '           data-order_type="increase" ' +
                            '           data-item_id="' + full.id + '"' +
                            '           data-lang_id="' + full.lang_id + '" >' +
                            '           <i class="fas fa-level-up-alt"></i>'  +
                            '       </button>' +
                            '   </div>' +
                            '   <input type="text" class="form-control text-center" style="width:30% " disabled value="'+full.order+'">' +
                            '    <div class="input-group-append">' +
                            '       <button type="button" style="border-radius: 0px;" class="btn btn-outline-secondary reorder_faq_form_grid_data bg-info-800" ' +
                            '           data-order_type="decrease"' +
                            '           data-item_id="' + full.id + '"' +
                            '           data-lang_id="' + full.lang_id + '" >' +
                            '       <i class="fas fa-level-down-alt fa-flip-horizontal"></i>' +
                            '   </button>';
                        '   </div>' +
                        '</div>';
                        return result;
                    }
                    else {
                        var result = ''+
                            '<div class="input-group mb-3">' +
                            '   <div class="input-group-prepend ">' +
                            '       <button type="button" style="float: right;border-radius: 0px;" class="btn btn-outline-secondary reorder_faq_form_grid_data bg-info-400" ' +
                            '           data-order_type="decrease" ' +
                            '           data-item_id="' + full.id + '"' +
                            '           data-lang_id="' + full.lang_id + '">' +
                            '           <i class="fas fa-level-up-alt"></i>'  +
                            '       </button>' +
                            '   </div>' +
                            '   <input type="text" class="form-control text-center" style="width:30% " disabled value="'+full.order+'">' +
                            '    <div class="input-group-append">' +
                            '       <button type="button" style="border-radius: 0px;" class="btn btn-outline-secondary reorder_faq_form_grid_data bg-info-800" ' +
                            '           data-order_type="increase"' +
                            '           data-item_id="' + full.id + '"' +
                            '           data-lang_id="' + full.lang_id + '">' +
                            '       <i class="fas fa-level-down-alt fa-flip-horizontal"></i>' +
                            '   </button>';
                        '   </div>' +
                        '</div>';
                        return result;
                    }
                }
                else {
                    return '<span class="order_number">' + full.order + '</span>';
                }
            }
        },
        {
            width: '7%',
            searchable: false,
            sortable: false,
            data: 'action', name: 'action', 'title': 'عملیات',
            mRender: function (data, type, full) {
                return '' +
                    '<div class="gallerty_menu float-right pointer" onclick="set_fixed_dropdown_menu(this)" data-toggle="dropdowns">' +
                    '<span>' +
                    '   <em class="fas fa-caret-down"></em>' +
                    '   <i class="fas fa-bars"></i> ' +
                    '</span>' +
                    '  <div class="dropdown_gallery hidden">' +
                    '   <a class="btn_edit_faq pointer gallery_menu-item" data-item_id="' + full.id + '" data-title="' + full.title + '">' +
                    '       <i class="fa fa-edit"></i><span class="ml-2">ویرایش</span>' +
                    '   </a>' +
                    '    <a class="btn_trash_faq pointer gallery_menu-item" data-item_id="' + full.id + '" data-title="' + full.title + ' ">' +
                    '       <i class="fa fa-trash"></i><span class="ml-2">خذف</span>' +
                    '   </a>'
                '  </div>' +
                '</div>';

            }
        }
    ];

    //-----------------------------------------------document ready -------------------------------------------------------//
    $(document).ready(function () {
        datatable_load_fun();
        $(document).off('change', '.filter_is_active');
        $(document).on('change', '.filter_is_active', datatable_reload_fun);
        $(document).off('select2:select', '.filter_lang');
        $(document).on('select2:select', '.filter_lang', datatable_reload_fun);
        init_doAfterStopTyping('.filter_title', datatable_reload_fun);

        function datatable_reload_fun() {
            var filter_is_active = $('.filter_is_active').val();
            var filter_lang_id = $('.filter_lang').val();
            var filter_title = $('.filter_title').val();
            FaqManagerGridData.destroy();
            $('#FaqManagerGridData').empty();
            datatable_load_fun(filter_lang_id, filter_title,filter_is_active);
        }
    });

    /*___________________________________________________Add Gallery_____________________________________________________________________*/
    $(document).off("click", ".cancel_add_close_btn");
    $(document).on("click", ".cancel_add_close_btn", function () {
        clear_form_elements('#frm_create_faq');
        $('a[href="#manage_tab"]').click();
    });
    var create_faq_constraints = {
        title: {
            presence: {message: '^<strong>عنوان فرم ضروریست.</strong>'}
        },
    };
    var create_faq_form_id = document.querySelector("#frm_create_faq");
    init_validatejs(create_faq_form_id, create_faq_constraints, ajax_func_create_faq,"#frm_create_faq",'.add_submit_buttons');

    function ajax_func_create_faq(formElement) {
        var formData = new FormData(formElement);
        $.ajax({
            type: "POST",
            url: '{{ route('FAQ.saveFaq')}}',
            dataType: "json",
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                $('#frm_create_faq .total_loader').remove();
                if (data.success) {
                    clear_form_elements('#frm_create_faq');
                    var form_element = $("#frm_create_faq");
                    form_element.find('select').val('').trigger('change');
                    menotify('success', data.title, data.message);
                    FaqManagerGridData.ajax.reload(null, false);
                    $('a[href="#manage_tab"]').click();
                }
                else {
                    showMessages(data.message, 'form_message_box', 'error', formElement);
                    showErrors(formElement, data.errors);
                }
            }
        });
    }

    /*___________________________________________________Add faq_____________________________________________________________________*/
    $(document).off("click", ".btn_edit_faq");
    $(document).on("click", ".btn_edit_faq", function () {
        var item_id = $(this).data('item_id');
        var title = $(this).data('title');
        $('.span_edit_faq_tab').html('ویرایش : ' + title);
        get_edit_faq_form(item_id);
    });

    function get_edit_faq_form(item_id) {
        $('#edit_faq').children().remove();
        $('#edit_faq').append(generate_loader_html('لطفا منتظر بمانید...'));
        $.ajax({
            type: "POST",
            url: '{{ route('FAQ.getEditFaqForm')}}',
            dataType: "json",
            data: {
                item_id: item_id
            },
            success: function (result) {
                $('#edit_faq .total_loader').remove();
                if (result.success) {
                    $('#edit_faq').append(result.Faq_edit_view);
                    $('.edit_faq_tab').removeClass('hidden');
                    $('a[href="#edit_faq"]').click();

                    var edit_faq_form_id = document.querySelector("#frm_edit_faq");
                    init_validatejs(edit_faq_form_id, create_faq_constraints, ajax_func_edit_faq,"#frm_edit_faq",'.edit_submit_buttons');
                }
                else {
                }
            }
        });
    }

    function ajax_func_edit_faq(formElement) {
        var formData = new FormData(formElement);
        $.ajax({
            type: "POST",
            url: '{{ route('FAQ.editFaq')}}',
            dataType: "json",
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                $('#frm_edit_faq .total_loader').remove();
                if (data.success) {
                    menotify('success', data.title, data.message);
                    FaqManagerGridData.ajax.reload(null, false);
                    $('a[href="#manage_tab"]').click();
                    $('.edit_faq_tab').addClass('hidden');
                    $('#edit_faq').html('');

                }
                else {
                    showMessages(data.message, 'form_message_box', 'error', formElement);
                    showErrors(formElement, data.errors);
                }
            }
        });
    }

    /*___________________________________________________Edit faq_____________________________________________________________________*/

    $(document).off("click", ".cancel_edit_faq");
    $(document).on("click", ".cancel_edit_faq", function () {
        $('a[href="#manage_tab"]').click();
        $('.edit_faq_tab').addClass('hidden');
        $('#edit_faq').html('');
    });
    /*___________________________________________________init select2_____________________________________________________________________*/
    init_select2_data('#FaqSelectLang',{!! $multiLang !!});
    /*___________________________________________________Trash faq_____________________________________________________________________*/

    $(document).off("click", ".btn_trash_faq");
    $(document).on("click", ".btn_trash_faq", function () {
        var item_id = $(this).data('item_id');
        var title = $(this).data('title');
        desc = 'بله آیتم( ' + title + ' ) را حذف کن !';
        var parameters = {item_id: item_id};
        yesNoAlert('حذف آیتم', 'از حذف آیتم مطمئن هستید ؟', 'warning', desc, 'لغو', trash_faq, parameters);
    });

    function trash_faq(params) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '{!!  route('FAQ.trashFaq') !!}',
            data: params,
            success: function (data) {
                if (data.success) {
                    menotify('success', data.title, data.message);
                    FaqManagerGridData.ajax.reload(null, false);
                }
                else {
                    showMessages(data.message, 'form_message_box', 'error', formElement);
                    showErrors(formElement, data.errors);
                }
            }
        });
    }

    /*___________________________________________________Change is_active_____________________________________________________________________*/
    function change_status_faq(input) {
        var checked = input.checked;
        var item_id = input.id;
        var parameters = {is_active: checked, item_id: item_id};
        yesNoAlert('تغییر وضعیت تگ', 'از تغییر وضعیت تگ مطمئن هستید ؟', 'warning', 'بله، وضعیت تگ را تغییر بده!', 'لغو', set_faq_is_active, parameters, remove_checked, parameters);
    }

    function set_faq_is_active(params) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '{!!  route('FAQ.setFaqStatus') !!}',
            data: params,
            success: function (result) {
                if (result.success) {
                    menotify('success', result.title, result.message);
                }
                else {
                    showMessages(data.message, 'form_message_box', 'error', formElement);
                    showErrors(formElement, data.errors);
                }
            }
        });
    }

    function remove_checked(params) {
        var $this = $('#' + params.item_id);
        if (params.is_active) {
            $this.prop('checked', false);
        }
        else {
            $this.prop('checked', true);
        }
    }

    $('#FAQ_showThumbImage').tooltip({
        animated: 'fade',
        placement: 'bottom',
        html: true
    });
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
    $(window).click(function(e) {
        if (!$(e.target).closest(".gallerty_menu ").length > 0) {
            $('.dropdown_gallery').addClass('hidden');
        }
    });
    /*___________________________________________________SummerNote_____________________________________________________________________*/

    var init_summernote_for_add_faq= false;
    $(document).off('click', '.add_faq_tab a');
    $(document).on('click', '.add_faq_tab a', function () {
        if (!init_summernote_for_add_faq) {
            $('#faq_description').summernote({
                height: 150,
            });
            init_summernote_for_add_faq = true;
        }
    });
    $(document).off('click', '.edit_faq_tab a');
    $(document).on('click', '.edit_faq_tab a', function () {
        $('#faq_eidt_description').summernote({
            height: 150,
        });
    });
    /*___________________________________________________DataTable_____________________________________________________________________*/

    function datatable_load_fun(filter_lang_id,filter_title,filter_is_active) {
        filter_lang_id = filter_lang_id || false;
        filter_title = filter_title || '';
        filter_is_active = filter_is_active || false;
        data ={
            filter_lang_id: filter_lang_id,
            filter_title: filter_title,
            filter_is_active: filter_is_active,
        };
        var getFaqRoute = '{{ route('FAQ.getFaq') }}';
        dataTablesGrid('#FaqManagerGridData', 'FaqManagerGridData', getFaqRoute, faq_grid_columns,data);
        FaqManagerGridData.columns([7]).visible(false);
        html_td = '' ;
        if(filter_lang_id)
        {
            FaqManagerGridData.columns([7]).visible(true);
            html_td = '   <td style="border: none; border-bottom: 1px lightgray solid;">' ;
        }
        $('#FaqManagerGridData').find('thead').first().append
        (
            '<tr role="row">' +
            '   <td style="border: none; border-bottom: 1px lightgray solid;">&nbsp;</td>' +
            '   <td style="border: none; border-bottom: 1px lightgray solid;">' +
            '       <input type="text" class="form-control filter_title" name="filter_title" value="' + filter_title + '" style="width: 100%;">' +
            '   </td>' +
            '   <td style="border: none; border-bottom: 1px lightgray solid;">&nbsp;</td>' +
            '   <td style="border: none; border-bottom: 1px lightgray solid;">' +
            '       <select class="form-control filter_lang" name="filter_lang" style="width:100px">' +
            '           <option value="-1">انتخاب نمایید</option>' +
            '       </select>' +
            '   </td>' +
            '    <td style="border: none; border-bottom: 1px lightgray solid;">&nbsp;</td>' +
            '   <td style="border: none; border-bottom: 1px lightgray solid;">' +
            '       <select class="form-control filter_is_active" name="filter_is_active" style="width:150px">' +
            '           <option value="-1">انتخاب وضعیت</option>' +
            '           <option value="0" '+('0' === filter_is_active ? 'selected="selected"' : '')+'>غیرفعال</option>' +
            '           <option value="1" '+('1' === filter_is_active ? 'selected="selected"' : '')+'>فعال</option>' +
            '       </select>' +
            '   </td>' +
            html_td +

            '    <td style="border: none; border-bottom: 1px lightgray solid;">&nbsp;</td>' +
            '</tr>'
        );
        init_select2_data('.filter_lang',{!! $multiLang !!});
    }

    //--------------------------------------------tag select----------------------------------------------
    init_select2_ajax('#showSelectTag', '{{route('LTS.autoCompleteTag')}}', true,true);

    /*-----------------------------------------------Order------------------------------------------------------*/
    $(document).off("click", '.reorder_faq_form_grid_data');
    $(document).on('click', '.reorder_faq_form_grid_data', function () {
        var $this = $(this);
        var order_type = $this.data('order_type');
        var item_id = $this.data('item_id');
        var lang_id = $this.data('lang_id');
        reOrderFaqFormGridData(order_type, item_id,lang_id);
    });

    function reOrderFaqFormGridData(order_type, item_id,lang_id) {
        var result = false;
        $.ajax({
            type: "POST",
            url: '{{ route('FAQ.saveOrderFaqForm')}}',
            dataType: "json",
            data: {item_id:item_id, order_type: order_type,lang_id:lang_id},
        success: function (data) {
            if (data.success) {
                window.FaqManagerGridData.ajax.reload(null,false);
                result = true;
            }
        }
    });
        return result;
    }
</script>