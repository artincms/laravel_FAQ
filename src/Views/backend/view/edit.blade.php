<div class="space-20"></div>
<form id="frm_edit_faq" class="form-horizontal" name="frm_edit_faq">
    @if($multi_lang)
    <div class="form-group row fg_lang">
        <label class="col-sm-2 control-label col-form-label label_post" for="lang">
            <span class="more_info"></span>
            <span class="label_lang">انتخاب زبان</span>
        </label>
        <div class="col-sm-6">
            <select class="form-control" name="lang_id" id="FaqSelectLangEdit">
                <option value="{{$faq->lang_id}}" value="-1">{{$faq->lang_name}}</option>
            </select>
        </div>
        <div class="col-sm-4 messages"></div>
    </div>
    @endif
    <input type="hidden" name="item_id" value="{{$faq->encode_id}}">
    <div class="form-group row fg_title">
        <label class="col-sm-2 control-label col-form-label label_post" for="title">
            <span class="more_info"></span>
            <span class="label_title">عنوان</span>
        </label>
        <div class="col-sm-6">
            <input name="title" value="{{$faq->title}}" class="form-control" id="faq_title" tab="1">
        </div>
        <div class="col-sm-4 messages"></div>
    </div>
    <div class="form-group row">
        <label class="col-lg-2 col-sm-12 col-md-3 control-label col-form-label label_post" for="description">توضیحات</label>
        <div class="col-6">
            <textarea class="form-control" name="description" id="faq_eidt_description" rows="3">{!! $faq->description !!}</textarea>
        </div>
    </div>
    <div class="form-group row fg_title">
        <label class="col-sm-2 control-label col-form-label label_post" for="title">
            <span class="more_info"></span>
            <span class="label_title">انتخاب تگ</span>
        </label>
        <div class="col-sm-6">
            <select class="form-control" multiple id="showSelectTagEdit" name="tag[]">
                @if($tags)
                @foreach($tags as $tag)
                <option value="{{$tag->id}}" selected>{{$tag->title}}</option>
                @endforeach
                @endif
            </select>
        </div>
        <div class="col-sm-4 messages"></div>
    </div>
    <div class="clearfixed"></div>
    <div class="col-12">
        <button type="submit" class="float-right btn btn-success ml-2 edit_submit_buttons"><i class="fa fa-save margin_left_8"></i>ذخیره</button>
        <button type="button" class="float-right btn bg-secondary color_white cancel_edit_faq"><i class="fa fa-times margin_left_8"></i>انصراف</button>
    </div>
</form>

<script>
    init_select2_ajax('#showSelectTagEdit', '{{route('LTS.autoCompleteTag')}}', true,true);
    init_select2_data('#FaqSelectLangEdit',{!! $multi_lang !!});

</script>

