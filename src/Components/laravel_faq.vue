<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12 col-lg-12 col-sm-12">
                <div class="control-bar sandbox-control-bar mt10">
                    <span class="btn btn-primary mr10 mb10 filter" data-filter="all">All</span>
                    <span v-for="filter in filters" class="btn btn-primary mr10 mb10 filter" @click="filterData(filter.id)" :data-filter="'.category-'+filter.id">{{filter.title}}</span>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="panel-group panel-accordion faq-accordion">
                            <div id="faq">
                                <show-item v-for=" (item, index) in filteredfaq" :key="index" :item="item"></show-item>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    window.axios = require('axios');
    import showItem from './show_item'
    export default {
        name: "laravel_faq",
        props:['direction','lang_id'],
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
                           });
                           return data
                       }

                    });
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
    .mr10{
        margin-right: 4px;
    }
</style>