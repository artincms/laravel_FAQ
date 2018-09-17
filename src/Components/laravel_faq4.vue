<template>
        <div class="my-3" :class="dClass">
            <div class="col-md-12 col-12 col-lg-12 col-sm-12">
                <!--<div class="control-bar sandbox-control-bar mt10">-->
                    <!--<span class="btn btn-primary mr10 faq_mb10 filter" data-filter="all">All</span>-->
                    <!--<span v-for="filter in filters" class="btn btn-primary mr10 faq_mb10 filter" :data-filter="'.category-'+filter.id">{{filter.title}}</span>-->
                <!--</div>-->
                <div class="faq_card card_collapse">
                    <div class="faq_card_body">
                        <div class="faq_card_group">
                            <div id="faq">
                                <show-item v-for=" (item, index) in filteredfaq" :key="index" :item="item"></show-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    window.axios = require('axios');
    import showItem from './components/show_item_4'
    export default {
        name: "laravel_faq",
        props:['lang_id','rtl'],
        data: function () {
            return {
                items :[],
                filters:[],
                i:0,
                tag_id:-1
            }
        },
        mounted() {
            this.getFag(this.lang_id);
        },
        computed: {
            filteredfaq: function() {
                let vm = this;

                if(vm.tag_id === -1) {
                    return vm.items;
                } else {
                    return vm.items.filter(function(item) {
                       if(item.tags.length>0)
                       {
                           let data = item.tags.find(function (obj) {
                               console.log(obj.id,vm.tag_id);
                               if(obj.id == vm.tag_id)
                               {
                                   return item ;
                               }
                               else
                               {
                                   return [] ;
                               }
                           });
                           return data
                       }

                    });
                }
            },
            dClass:function () {
                if (this.rtl)
                {
                    return 'rtl'
                }
                else
                {
                    return 'ltr'
                }
            }
        },
        methods: {
            getFag:function (lang_id) {
                axios.post("/FAQ/getFaqFront", {lang_id: lang_id}).then(response => {
                    this.$nextTick(() => {
                        this.items  =   response.data.items;

                        this.filters  =   response.data.filters;
                    })
                })
            },
            filterData:function (id) {
                this.tag_id=id;
            }

        },
        components: {
            showItem
        }
    }
</script>

<style scoped>
    @import  './assets/fonts/icon/style.css';
    @import  './assets/css/faq.css';


</style>