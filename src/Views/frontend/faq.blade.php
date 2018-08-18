<div class="container">
    <div class="row">
        <div class="col-md-12 col-12 col-lg-12 col-sm-12">
            <div class="control-bar sandbox-control-bar mt10">
                <span class="btn btn-primary mr10 mb10 filter" data-filter="all">All</span>
                @foreach($filters as $filter)
                    <span class="btn btn-primary mr10 mb10 filter" data-filter=".category-{{$filter['id']}}">{{$filter['title']}}</span>
                @endforeach
            </div>
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="panel-group panel-accordion faq-accordion">
                        <div id="faq">
                            @foreach($items as $item)
                            <div class="mix col-lg-12 panel panel-default category-{{$item['tags'][0]['id']}}" style=" display:inline-block">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a href="#question{{$item['id']}}" data-toggle="collapse" data-parent="#faq" class="collapsed">
                                            <strong class="c-gray-light">1.</strong>
                                            {{$item['title']}}
                                            <span class="pull-right">
                                                <i class="glyphicon glyphicon-plus"></i>
                                                <i class="fa fa-minus"></i>
                                            </span>
                                        </a>
                                    </h4>
                                </div>
                                <div id="question{{$item['id']}}"class="panel-collapse collapse">
                                    <div class="panel-body">
                                        {!!$item['description']!!}
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>