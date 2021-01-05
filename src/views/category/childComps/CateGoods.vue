<template>
    <div id="cateleft">
        <div v-for='(item,index) in cateItem' class="left-item" :class='{ active: num === index}'
            @click='itemCateClick(index)'>{{item.title}}</div>
    </div>
</template>

<script>
    export default {
        name: 'CateGoods',
        props: {
            cateItem: {
                type: Array,
                default() { return [] }
            }
        },
        data() {
            return {
                isCate: false,
                num: 0
            }
        },
        methods: {
            itemCateClick(index) {
                this.num = index
                this.$emit('itemCateClick', index)
            }
        }
    } </script>

<style scoped>
    #cateleft {
        position: relative;
        left: 0;
        width: 100px;
    }



    .left-item {

        text-align: center;
        width: 100%;
        line-height: 50px;
        height: 50px;
        background-color: #f4f4f4;
    }

    .active {
        font-weight: 700;
        color: #ff5777;
        border-left: 3px solid #ff5777;
        background-color: #fff;
    }
</style>