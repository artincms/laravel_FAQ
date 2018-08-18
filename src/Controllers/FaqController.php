<?php

namespace ArtinCMS\FAQ\Controllers;

use ArtinCMS\FAQ\Models\Faq;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Exceptions\HttpResponseException;

class FaqController extends Controller
{
    private function reOrderFaqForm($parrent_id)
    {
        $all_faq = Faq::where('lang_id', $parrent_id)->orderBy('order', 'asc')->get();
        $i = 1;
        foreach ($all_faq as $item)
        {
            $item->order = $i++;
            $item->save();
        }

        return $i;
    }

    public function manageFaq()
    {
        $multiLangFunc = config('laravel_faq.multiLang');
        if ($multiLangFunc)
        {
            $multiLang = json_encode($multiLangFunc());
        }
        else
        {
            $multiLang = false;
        }

        return view('laravel_faq::backend.index', compact('multiLang'));
    }

    public function getFaq(Request $request)
    {
        $Faq = Faq::with('user');
        if ($request->filter_title)
        {
            $Faq->where('title', 'like', '%' . $request->filter_title . '%');
        }
        if ($request->filter_lang_id != 'false')
        {
            $Faq->where('lang_id', $request->filter_lang_id);
        }
        if ($request->filter_is_active == "1")
        {
            $Faq->where('is_active', '1');
        }
        elseif ($request->filter_is_active == "0")
        {
            $Faq->where('is_active', '0');
        }

        return DataTables::eloquent($Faq)
            ->editColumn('id', function ($data) {
                return FAQ_getEncodeId($data->id);
            })
            ->editColumn('lang_id', function ($data) {
                return FAQ_getEncodeId($data->lang_id);
            })
            ->editColumn('description', function ($data) {
                return strip_tags($data->description);
            })
            ->make(true);
    }

    public function saveFaq(Request $request)
    {
        $Faq = new Faq;
        if ($request->lang_id)
        {
            $lang_id = $request->lang_id;
            $multiLang = config('laravel_faq.multiLang')();
            $Faq->lang_id = $lang_id;
            $lang_title = $this->searchForId($lang_id, $multiLang);
            $Faq->lang_name = $lang_title;
        }
        $Faq->title = $request->title;
        $Faq->description = $request->description;
        if (Auth::user())
        {
            if (isset(Auth::user()->id))
            {
                $Faq->created_by = Auth::user()->id;
            }
        }
        $Faq->save();
        $res['tag'] = LTS_saveTag($Faq, $request->tag);
        $res =
            [
                'success' => true,
                'title'   => "ثبت سوالات متداول جدید",
                'message' => 'سوالات متداول با موفقیت ثبت شد.'
            ];

        return $res;
    }

    public function getEditFaqForm(Request $request)
    {
        $multiLangFunc = config('laravel_faq.multiLang');
        if ($multiLangFunc)
        {
            $multiLang = json_encode($multiLangFunc());
        }
        else
        {
            $multiLang = false;
        }
        $faq = Faq::find(FAQ_GetDecodeId($request->item_id));
        $faq->encode_id = FAQ_getEncodeId($faq->id);
        $tags = LTS_showTag($faq);
        $Faq_form = view('laravel_faq::backend.view.edit', compact('faq', 'multiLang'))->render();
        $res =
            [
                'success'       => true,
                'Faq_edit_view' => $Faq_form
            ];
        throw new HttpResponseException(
            response()
                ->json($res, 200)
                ->withHeaders(['Content-Type' => 'text/plain', 'charset' => 'utf-8'])
        );
    }

    public function editFaq(Request $request)
    {
        $Faq = Faq::find(FAQ_GetDecodeId($request->item_id));
        if ($request->lang_id)
        {
            $lang_id = $request->lang_id;
            $multiLang = config('laravel_faq.multiLang')();
            $Faq->lang_id = $lang_id;
            $lang_title = $this->searchForId($lang_id, $multiLang);
            $Faq->lang_name = $lang_title;
        }
        $Faq->title = $request->title;
        $Faq->description = $request->description;
        if (Auth::user())
        {
            if (isset(Auth::user()->id))
            {
                $Faq->created_by = Auth::user()->id;
            }
        }
        $Faq->save();
        $res =
            [
                'success' => true,
                'title'   => "ویرایش سوالات متداول",
                'message' => 'سوالات متداول با موفقیت ویرایش شد.'
            ];

        return $res;
    }

    public function trashFaq(Request $request)
    {
        $Faq = Faq::find(FAQ_GetDecodeId($request->item_id));
        $Faq->delete();

        $res =
            [
                'success' => true,
                'title'   => "حذف سوالات متداول",
                'message' => 'سوالات متداول با موفقیت حذف شد.'
            ];

        throw new HttpResponseException(
            response()
                ->json($res, 200)
                ->withHeaders(['Content-Type' => 'text/plain', 'charset' => 'utf-8'])
        );
    }

    public function setFaqStatus(Request $request)
    {
        $Faq = Faq::find(FAQ_GetDecodeId($request->item_id));
        if ($request->is_active == "true")
        {
            $Faq->is_active = "1";
            $res['message'] = ' سوالات متداول فعال گردید';
        }
        else
        {
            $Faq->is_active = "0";
            $res['message'] = 'سوالات متداول غیر فعال شد';
        }
        $Faq->save();
        $res['success'] = true;
        $res['title'] = 'وضعیت سوالات متداول تغییر پیدا کرد .';

        return $res;
    }

    public function autoCompleteFaq(Request $request)
    {
        $x = $request->term;
        $data = Faq::select("id", 'title AS text')->where('is_active', '1');
        if ($x['term'] != '...')
        {
            $data = Faq::select("id", 'title AS text')
                ->where('is_active', '1')
                ->where("title", "LIKE", "%" . $x['term'] . "%");
        }
        $data = $data->get();
        $data = ['results' => $data];

        return response()->json($data);
    }

    function searchForId($id, $array)
    {
        foreach ($array as $value)
        {
            if ($value['id'] == $id)
            {
                return $value['text'];
            }
        }

        return null;
    }

    public function saveOrderFaqForm(Request $request)
    {
        $item_id = FAQ_GetDecodeId($request->item_id);
        $parrent_id = FAQ_GetDecodeId($request->lang_id);
        $count = $this->reOrderFaqForm($parrent_id);
        $faq = Faq::find($item_id);
        $order = $faq->order;
        if ($request->order_type == 'increase')
        {
            $nextItem = Faq::where([
                ['lang_id', $parrent_id],
                ['order', $order + 1]
            ])->first();
            if ($nextItem)
            {
                $faq->order = $order + 1;
                $faq->save();
                //set new order
                $nextItem->order = $order;
                $nextItem->save();
            }
        }
        elseif ($request->order_type == 'decrease')
        {

            $previousItem = Faq::where([
                ['lang_id', $parrent_id],
                ['order', $order - 1]
            ])->first();
            if ($previousItem)
            {
                $faq->order = $order - 1;
                $faq->save();
                //set new order
                $previousItem->order = $order;
                $previousItem->save();
            }
        }
        else
        {
            $result['error'][] = "متاسفانه با مشکل مواجه شد!";
            $result['success'] = false;

            return response()->json($result, 200)->withHeaders(['Content-Type' => 'json', 'charset' => 'utf-8']);
        }
        $result['message'][] = "با موفقیت انجام شد.";
        $result['success'] = true;
        return response()->json($result, 200)->withHeaders(['Content-Type' => 'json', 'charset' => 'utf-8']);
    }

    public function getFaqFront(Request $request)
    {
        $lang_id = $request->lang_id;
        $faq = Faq::where('lang_id',$lang_id)->
            where('is_active','1')->
            orderBy('order','asc')->get();
        $result['item']=$faq;
        return $result ;
    }
}
