<template>
    <div id="detial">
        <detial-nav-bar />
        <detial-swiper :top-images='topImages' />
        <detial-base-info :goods="goods" />
    </div>
</template>

<script>


    import DetialNavBar from './childComps/DetialNavBar'
    import { getDetial, Goods, Shop } from 'network/detial.js'
    import DetialSwiper from './childComps/DetialSwiper'
    import DetialBaseInfo from './childComps/DetialBaseInfo'
    export default {
        name: 'Detial',
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {}
            }
        },
        components: {
            DetialNavBar,
            DetialSwiper,
            DetialBaseInfo
        },
        created() {
            this.iid = this.$route.params.iid;
            getDetial(this.iid).then(res => {
                // 1.获取顶部的图片
                const data = res.result
                this.topImages = data.itemInfo.topImages
                console.log(this.topImages);
                //2.获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                console.log(this.goods);
                this.shop = new Shop(data.shopInfo)
                console.log(this.shop);
            })

        }
    }


</script>

<style scoped>

</style>