<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-12 col-12 col-lg-12 col-sm-12">
                <div class="control-bar sandbox-control-bar mt10">
                    <span class="btn btn-primary mr10 mb10 filter active" data-filter="all">All</span>
                    <span class="btn btn-primary mr10 mb10 filter" data-filter=".category-1">HTML</span>
                    <span class="btn btn-primary mr10 mb10 filter" data-filter=".category-2">PHP</span>
                    <span class="btn btn-primary mr10 mb10 filter" data-filter=".category-3">JQUERY</span>
                </div>
                <div class="card card_collapse">
                    <div class="card-body">
                        <div class="panel-group panel-accordion faq-accordion">
                            <div id="faq">
                                <show-item v-for=" (item, index) in items" :key="index" :item="item"></show-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../../../../../public/vendor/laravel_gallery_system/packages/axios/index.js'
    import showItem from './show_item'
    export default {
        name: "laravel_faq",
        props:['direction','lang_id'],
        data: function () {
            return {
                items :[],
                i:0
            }
        },
        mounted() {
            this.getFag(this.lang_id);
        },
        computed: {

        },
        methods: {
            getFag:function (lang_id) {
                axios.post("/FAQ/getFaqFront", {lang_id: lang_id}).then(response => {
                    this.$nextTick(() => {
                        this.items  =   response.data.item;
                    })
                })
            }

        },
        components: {
            showItem
        }
    }
</script>

<style scoped>
    .panel-heading span {
        margin-top: 1px;
        font-size: 12px;
    }
    .mb10{margin-bottom:10px !important}
    .mt10{margin-top: 10px !important}
    .mix{position:relative;display:none;font-weight:400;color:#777;height:auto;overflow:visible}

    .panel{
        width:100%;
    }
    .glyphicon{
        font-weight: lighter;
    }


    a:link, a:link, a:visited, a:hover, a:active {
        color: #757b87;
        text-decoration: none;
        cursor: pointer;
    }
</style>