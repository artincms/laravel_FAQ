<?php
if (!function_exists('faq_sampleLang'))
{
    function faq_sampleLang()
    {
        $lang = [
            [
                'id'=>1,
                'text'=>'Persian'
            ] ,
            [
                'id'=>2,
                'text'=>'English'
            ] ,
            [
                'id'=>3,
                'text'=>'Spanish'
            ] ,
            [
                'id'=>4,
                'text'=>'Italian'
            ] ,  [
                'id'=>5,
                'text'=>'French'
            ] ,
            [
                'id'=>6,
                'text'=>'Russian'
            ] ,
            [
                'id'=>7,
                'text'=>'Arabic'
            ]
        ];

        return $lang ;
    }
}

function FAQ_getEncodeId($id)
{
    if ($id < 0)
    {
        return $id;
    }
    else
    {
        $hashids = new \Hashids\Hashids(md5('sadeghi'));

        return $hashids->encode($id);
    }

}

function FAQ_GetDecodeId($id, $route = false)
{
    $my_routes = [
        'LFM.DownloadFile',
        'LFM.ShowCategories',
        'LFM.ShowCategories.Create',
        'LFM.ShowCategories.Edit',
        'LFM.EditFile',
        'LFM.FileUpload',
        'LFM.FileUploadForm',
        'LFM.EditPicture',
        'LFM.Breadcrumbs',
    ];
    if ((int)$id < 0)
    {
        return (int)$id;
    }
    else
    {
        $hashids = new \Hashids\Hashids(md5('sadeghi'));
        if ($route)
        {
            if (in_array($route->getName(), $my_routes))
            {
                if ($hashids->decode($id) != [])
                {
                    return $hashids->decode($id)[0];
                }
                else
                {
                    return $id;
                }
            }
            else
            {
                return $id;
            }
        }
        else
        {
            return $hashids->decode($id)[0];
        }
    }

}

function createTemplate($lang_id)
{
    $items = \ArtinCMS\FAQ\Models\Faq::with('tags')->where('lang_id',$lang_id)->
    where('is_active','1')->
    orderBy('order','asc')->get();
    $filters = \ArtinCMS\LTS\Models\Tag::with(['faqs' =>function($e){
        $e->where('taggable_type','ArtinCMS\FAQ\Models\Faq');
    }])->get();
    $result= view("laravel_faq::frontend.faq", compact('items','filters'))->render();
    return $result ;
}

?>