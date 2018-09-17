<template>
        <div class="mix col-lg-12 panel panel-default"  :data-value="item.id"  data-bound="" style=" display:inline-block">
            <div class="panel-heading" :id="'heading'+item.id">
                <h4 class="panel-title">
                    <a @click="activeIcon" :href="'#question'+item.id" data-toggle="collapse" data-parent="#faq" class="collapsed">
                        <strong class="c-gray-light">{{this.i}}.</strong>
                        {{this.item.title}}
                        <span class="pull-right">
                            <i v-if="icon"  class="glyphicon glyphicon-plus"></i>
                            <i v-else  class="fa fa-minus"></i>
                        </span>
                    </a>
                </h4>
            </div>
            <div :id="'question'+item.id"class="panel-collapse collapse">
                <div class="panel-body" v-html="item.description">
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "show-item",
        props:['item'],
        data: function () {
            return {
                icon:true,
                i:this.$parent.i
            }
        },
        computed :{
            sadeghi:function () {
                return [1,2,3];
            }
        },
        beforeCreate(){
            this.$parent.i++
        },
        methods: {
            activeIcon :function () {

            },
            increaseCounter:function () {
                this.$parent.i++
            }
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
    .card1 {
        margin-bottom: 10px;
    }
    .card-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        color: inherit;
        line-height: 2.5;
    }
    .inline_block{
        display:inline-block;
    }



</style>