<template>
    <div id="categoodsitem">
        <div v-for='(item,index) in cateItemInfo' :key='index' class="allitem">
            <a :href="item.link" class="item-a">
                <img :src="item.image" alt="" @load='imgLoad'>
                <p>{{item.title}}</p>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CateGoodsItem',
        props: {
            cateItemInfo: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                counter: 0
            }
        },
        methods: {
            imgLoad() {
                if (++this.counter === this.cateItemInfo.length) {
                    this.$emit('imgLoad');
                    // console.log('加载完毕');

                }

            }
        }
    }
</script>

<style scoped>
    #categoodsitem {

        display: flex;
        flex-wrap: wrap;
        flex: 1;

    }

    .allitem {
        width: 25%;
        margin: 10px;
        text-align: center;

    }

    .allitem p {
        margin-top: 5px;
        font-size: 14px;
    }

    .item-a {
        width: 100%;

    }

    .item-a img {
        width: 100%;

    }
</style>