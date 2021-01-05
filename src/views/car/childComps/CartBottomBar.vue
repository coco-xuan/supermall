<template>
    <div class="bottom-bar">
        <div class="check-content">
            <check-button class="checked-all" :is-checked='isSeleterAll' @click.native="checkClick"></check-button>
            <span>全选</span>
        </div>
        <div class="totalPrice">合计：{{totalPrice}}</div>
        <div class="calculate" @click='calcBtn'>去结算({{checkLength}})</div>
    </div>
</template>

<script>
    import CheckButton from "components/content/checkButton/CheckButton";
    import { mapGetters } from 'vuex'
    export default {
        name: 'CartBottomBar',
        data() {
            return {

            }
        },
        components: {
            CheckButton
        },
        methods: {
            checkClick() {
                // if (this.isSeleterAll) {
                //     //这里isselecterall 为true，即全部选中，所以点击的时候修改为全部不选中
                //     this.cartList.forEach(item => item.checked = false);
                // } else {
                //     // 有部分选中或者都没选中，通过点击变为全选
                //     this.cartList.forEach(item => item.checked = true)
                // }

                // 三元表达式进行简化
                this.isSeleterAll ? this.cartList.forEach(item => item.checked = false) : this.cartList.forEach(item => item.checked = true)

            },
            calcBtn() {

                this.$toast.show('暂无此功能')

            }

        },
        computed: {
            ...mapGetters(['cartList']),
            totalPrice() {
                return '￥' + this.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return preValue + item.price * item.count
                }, 0).toFixed(2)
            },
            checkLength() {
                return this.cartList.filter(item => item.checked).length
            },
            isSeleterAll() {
                if (this.cartList.length === 0) {
                    return false
                }
                // 1.使用filter来进行过滤
                // return !(this.cartList.filter(item => !item.checked).length)

                // 2.可以使用find来进行过滤，find只要找到一个符合条件的就会停止

                return !this.cartList.find(item => !item.checked)



            }

        }
    }
</script>

<style scoped>
    .bottom-bar {
        position: relative;
        display: flex;
        height: 60px;
        line-height: 60px;

        background-color: #eeeeee;
    }

    .check-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 60px;
    }

    .checked-all {
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }

    .totalPrice {
        margin-left: 20px;
        flex: 1;
    }

    .calculate {
        width: 90px;
        background-color: #fb7299;
        text-align: center;
        color: #ffffff;
    }
</style>