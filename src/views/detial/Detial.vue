<template>
    <div id="detial">
        <detial-nav-bar @titClick='titClick' ref='nav' />
        <!-- <div v-for='item in $store.state.cartList'>
            {{item}}
        </div> -->

        <scroll class="content" ref="scroll" @scroll="detialScroll" :probe-type="3">
            <detial-swiper :top-images='topImages' />
            <detial-base-info :goods="goods" />
            <detial-shop-info :shop='shop' />
            <detial-goods-info :detial-info='detialInfo' @imgLoad='imgLoad' />
            <detial-params ref='params' :param-info='itemParams' />
            <detial-comment-info ref='comment' :comment-info='commentInfo' />
            <goods-list ref='list' :goods='recommends' />

        </scroll>
        <back-top @click.native='backClick' v-show="isShowBackTop" />
        <detial-bottom @addCart='addCart' />

    </div>
</template>

<script>

    import Scroll from 'components/common/bscroll/Scroll'
    import DetialNavBar from './childComps/DetialNavBar'
    import { getDetial, Goods, Shop, getRecommend } from 'network/detial.js'
    import DetialSwiper from './childComps/DetialSwiper'
    import DetialBaseInfo from './childComps/DetialBaseInfo'
    import DetialShopInfo from './childComps/DetialShopInfo'
    import DetialGoodsInfo from './childComps/DetialGoodsInfo'
    import DetialParams from './childComps/DetialParams'
    import DetialCommentInfo from './childComps/DetialCommentInfo'
    import DetialBottom from './childComps/DetialBottom'
    import BackTop from 'components/content/backTop/BackTop'
    import GoodsList from 'components/content/goods/GoodsList'


    import { debounce } from 'components/utils.js'
    import { imgLoadMix, backTop } from 'components/mixin.js'


    import { mapActions } from 'vuex'

    export default {
        name: 'Detial',
        mixins: [imgLoadMix, backTop],
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop: {},
                detialInfo: {},
                itemParams: {},
                commentInfo: {},
                recommends: [],
                themsTopYs: [],
                getthemsTop: null,
                currentIndex: 0,

            }
        },
        components: {
            DetialNavBar,
            DetialSwiper,
            DetialBaseInfo,
            DetialShopInfo,
            Scroll,
            DetialGoodsInfo,
            DetialParams,
            DetialCommentInfo,
            GoodsList,
            DetialBottom,
            BackTop
        },
        methods: {
            ...mapActions(['appCart']),
            imgLoad() {
                this.refresh()
                this.getthemsTop()
            },
            titClick(index) {
                // console.log(index);
                this.$refs.scroll.scrollTo(0, -this.themsTopYs[index], 300)
            },
            detialScroll(position) {
                // console.log(position.y);

                if (position.y < -1000) {
                    this.isShowBackTop = true
                } else {
                    this.isShowBackTop = false
                }





                const posY = -position.y
                // let lenght = this.themsTopYs.length;
                for (let i = 0; i < this.themsTopYs.length - 1; i++) {

                    // console.log(i);
                    if (this.currentIndex !== i && (posY >= this.themsTopYs[i] && posY < this.themsTopYs[i + 1])) {
                        this.currentIndex = i;
                        this.$refs.nav.currentIndex = this.currentIndex;

                    }

                }

            },
            addCart() {
                const product = {};
                product.image = this.topImages[0];
                product.title = this.goods.title;
                product.desc = this.goods.desc;
                product.price = this.goods.realPrice;
                product.iid = this.iid;
                //这里还可以使用mapActions映射关系直接来获取appCart,类似于mapgetters
                // this.$store.dispatch('appCart', product).then(res => {
                //     console.log(res);
                // })
                this.appCart(product).then(res => {
                    this.$toast.show(res)
                })
            }
        },
        created() {
            this.iid = this.$route.params.iid;
            getDetial(this.iid).then(res => {
                // 1.获取顶部的图片
                const data = res.result
                this.topImages = data.itemInfo.topImages
                // console.log(this.topImages);
                //2.获取商品信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                // console.log(this.goods);
                //3.获取店铺信息      
                this.shop = new Shop(data.shopInfo)
                //4.获取参数信息
                this.detialInfo = data.detailInfo
                //获取详情参数
                this.itemParams = data.itemParams
                //获取评论信息
                if (data.rate.cRate !== 0) {
                    this.commentInfo = data.rate.list[0]
                }
                // this.$nextTick(() => {
                //     // 根据最新的数据，对应的dom应该被渲染出来了
                //     // 但是图片依然是没能加载完（目前获取到的offsettop不包含其中的图片）
                //     // offsetTop值不对的时候，都是图片的问题

                //     this.themsTopYs = []
                //     this.themsTopYs.push(0);
                //     this.themsTopYs.push(this.$refs.params.$el.offsetTop)
                //     this.themsTopYs.push(this.$refs.comment.$el.offsetTop)
                //     this.themsTopYs.push(this.$refs.list.$el.offsetTop)

                //     console.log(this.themsTopYs);
                // })

            }),

                this.getthemsTop = debounce(() => {
                    this.themsTopYs = []
                    this.themsTopYs.push(0);
                    this.themsTopYs.push(this.$refs.params.$el.offsetTop)
                    this.themsTopYs.push(this.$refs.comment.$el.offsetTop)
                    this.themsTopYs.push(this.$refs.list.$el.offsetTop)
                    this.themsTopYs.push(Number.MAX_VALUE)
                    // console.log(this.themsTopYs);
                }, 100)


            getRecommend().then(res => {
                this.recommends = res.data.list
            })


        },
        mounted() {

        },
        destroyed() {
            this.$bus.$off('loadOver', this.itemImagload)
        }

    }


</script>

<style scoped>
    #detial {
        position: relative;
        z-index: 99;
        background-color: #fff;
        height: 100vh;
    }

    .content {
        height: calc(100% - 44px - 49px);
        overflow: hidden;
    }
</style>