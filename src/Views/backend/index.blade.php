@extends('laravel_faq::backend.layouts.master')
@section('page_title')
    Laravel Faq Manager
@stop
@section('custom_plugin_js')
@endsection
@section('content')
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header text-center">مدیریت سوالات متداول</div>
            <div class="card-body">
                <div class="tabbable">
                    <ul class="nav nav-tabs nav-tabs-bottom" id="faq_tab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" href="#manage_tab" data-toggle="tab"><i class="fas fa-th-list"></i><span class="margin_right_5">مدیریت </span></a></li>
                        <li class="nav-item add_faq_tab">
                            <a class="nav-link" href="#add_faq" data-toggle="tab">
                                <i class="far fa-plus-square"></i>
                                <span>افزودن</span>
                            </a>
                        </li>
                        <li class="nav-item edit_faq_tab hidden">
                            <a href="#edit_faq" class="nav-link paddin_left_30" data-toggle="tab">
                                <span class="span_edit_faq_tab">ویرایش</span>
                            </a>
                            <button class="close closeTab cancel_edit_faq" type="button">×</button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="manage_tab">
                            <div>
                                <div class="space-20"></div>
                                <div class="col-xs-12 faq_manager_parrent_div">
                                    <table id="FaqManagerGridData" class="table " width="100%"></table>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="add_faq">
                            <div class="space-20"></div>
                            <form id="frm_create_faq" class="form-horizontal" name="frm_create_faq">
                                @if($multiLang)
                                    <div class="form-group row fg_lang">
                                        <label class="col-sm-2 control-label col-form-label label_post" for="lang">
                                            <span class="more_info"></span>
                                            <span class="label_lang">انتخاب زبان</span>
                                        </label>
                                        <div class="col-sm-6">
                                            <select class="form-control" name="lang_id" id="FaqSelectLang">
                                                <option value="-1">انتخاب زبان</option>
                                            </select>
                                        </div>
                                        <div class="col-sm-4 messages"></div>
                                    </div>
                                @endif
                                <div class="form-group row fg_title">
                                    <label class="col-sm-2 control-label col-form-label label_post" for="title">
                                        <span class="more_info"></span>
                                        <span class="label_title">عنوان</span>
                                    </label>
                                    <div class="col-sm-6">
                                        <input name="title" class="form-control" id="faq_title" tab="1">
                                    </div>
                                    <div class="col-sm-4 messages"></div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-lg-2 col-sm-12 col-md-3 control-label col-form-label label_post" for="description">توضیحات</label>
                                    <div class="col-6">
                                        <textarea class="form-control" name="description" id="faq_description" rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row fg_tag">
                                    <label class="col-sm-2 control-label col-form-label label_post" for="title">
                                        <span class="more_info"></span>
                                        <span class="label_title">انتخاب تگ</span>
                                    </label>
                                    <div class="col-sm-6">
                                        <select class="form-control" multiple id="showSelectTag" name="tag[]">
                                        </select>
                                    </div>
                                    <div class="col-sm-4 messages"></div>
                                </div>
                                <div class="clearfixed"></div>
                                <div class="col-12">
                                    <button type="submit" class="float-right btn btn-success ml-2"><i class="fa fa-save margin_left_8"></i>ذخیره</button>
                                    <button type="button" class="float-right btn bg-secondary color_white cancel_add_close_btn"><i class="fa fa-times margin_left_8"></i>انصراف</button>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane" id="edit_faq"></div>
                        <div class="tab-pane" id="manage_tab_item">
                            <div class="space-20"></div>
                                <div class="tabbable">
                                    <ul class="nav nav-tabs nav-tabs-bottom" id="faq_tab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#manage_tab_faq_item" data-toggle="tab">
                                                <i class="fas fa-th-list"></i>
                                                <span class="margin_right_5">مدیریت آیتم ها</span>
                                            </a>
                                        </li>
                                        <li class="nav-item" id="add_faq_item_tab">
                                            <a class="nav-link" href="#add_faq_item" data-toggle="tab">
                                                <i class="far fa-plus-square"></i>
                                                <span>افزودن آیتم</span>
                                            </a>
                                        </li>
                                        <li class="nav-item edit_faq_item_tab hidden">
                                            <a href="#edit_faq_item" class="nav-link paddin_left_30" data-toggle="tab">
                                                <span class="span_edit_faq_item_tab">ویرایش</span>
                                            </a>
                                            <button class="close closeTab cancel_edit_faq_item_tab" type="button">×</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="manage_tab_faq_item"></div>
                                        <div class="tab-pane" id="add_faq_item"></div>
                                        <div class="tab-pane" id="edit_faq_item"></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('inline_js')
    @include('laravel_faq::backend.helper.inline_js')
@stop