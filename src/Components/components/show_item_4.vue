<template>
        <div class="width_100 faq_card"  :data-value="item.id"  data-bound="" style=" display:inline-block;margin-bottom: 10px">
            <div class="faq_card-heading" style="">
                <h4 class="faq_card_title" :class="{faq_card_title_border:active}">
                    <a @click="showAnswer">
                        <!--<strong class="c-gray-light">{{this.i}}.</strong>-->
                        {{this.item.title}}
                        <span class="lgs_float_right">
                            <i v-if="icon"  class="faq-icon fa-faq-plus-square"></i>
                            <i v-else  class="faq-icon fa-faq-minus-square"></i>
                        </span>
                    </a>
                </h4>
            </div>
            <div>
                <div v-if="active" class="faq_card_body" v-html="item.description">
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
                i:this.$parent.i,
                active:false
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
            showAnswer :function () {
                this.active = !this.active;
                this.icon = !this.icon ;
            },
            increaseCounter:function () {
                this.$parent.i++
            }
        }
    }
</script>

<style scoped>







</style>