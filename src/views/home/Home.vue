<template>
    <div id="home">

        <nav-bar class="home-nav">
            <div slot="center">购物街
            </div>
        </nav-bar>
        <tab-control :titles="['潮流','精选','精品']" @tabClick="tabClick" ref='tabControl1' v-show="istabShow" class="fixed">
        </tab-control>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp='loadMore'>
            <home-swiper :banners='banners' @swiperImgLoad="swiperImgLoad" />

            <home-recommend-view :recommends='recommends' />
            <home-feature />
            <tab-control :titles="['潮流','精选','精品']" @tabClick="tabClick" ref='tabControl2' class="bgc">
            </tab-control>
            <goods-list :goods="shoeGoods"></goods-list>
        </scroll>
        <back-top @click.native='backClick' v-show="isShowBackTop" />
    </div>
</template>

<script>
    import HomeSwiper from './childComps/HomeSwiper'
    import HomeFeature from './childComps/HomeFeature'
    import HomeRecommendView from './childComps/HomeRecommendView'

    import NavBar from 'components/common/navbar/NavBar';
    import Scroll from 'components/common/bscroll/Scroll'

    import BackTop from 'components/content/backTop/BackTop'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'

    import { gethome, gethomelist } from 'network/home';
    import { debounce } from 'components/utils.js'
    import { imgLoadMix, backTop } from 'components/mixin.js'


    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommendView,
            HomeFeature,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        mixins: [imgLoadMix],
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': { page: 0, list: [] },
                    'new': { page: 0, list: [] },
                    'sell': { page: 0, list: [] }

                },
                currentType: 'pop',
                isShowBackTop: false,
                offsetTop: 0,
                istabShow: false,
                saveY: 0
            }
        },
        created() {
            this.gethome();
            this.gethomelist('pop');
            this.gethomelist('new');
            this.gethomelist('sell');


        },
        computed: {
            shoeGoods() {
                return this.goods[this.currentType].list
            }
        },
        mounted() {

            // // debounce()函数是防抖函数
            // const refresh = debounce(this.$refs.scroll.refresh, 200)
            // this.itemImagload = () => {
            //     refresh()
            // }
            // this.$bus.$on('loadOver', this.itemImagload)


            // 因为使用了mixins混入,可以减少代码的复用

        },
        destroyed() {
            console.log('销毁');
        },
        activated() {
            this.$refs.scroll.scrollTo(0, this.saveY, 0);
            this.$refs.scroll.refresh()
        },
        deactivated() {
            this.saveY = this.$refs.scroll.scroll.y

            this.$bus.$off('loadOver', this.itemImgload)

        },
        methods: {
            /**
            * 事件监听的相关方法
            */
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break;
                    case 1: this.currentType = 'new'
                        break;
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                this.$refs.tabControl1.somenum = index;
                this.$refs.tabControl2.somenum = index;

            },





            backClick() {
                this.$refs.scroll.scrollTo(0, 0)

            },
            contentScroll(position) {
                //监听返回顶部的显示
                if (position.y < -1000) {
                    this.isShowBackTop = true
                } else {
                    this.isShowBackTop = false
                }
                //tabcontrol的吸附效果
                this.istabShow = (-position.y) > this.offsetTop

            },
            loadMore() {
                this.gethomelist(this.currentType);

            },
            //监听swiper图片加载完毕，进行tabControl的吸附效果
            swiperImgLoad() {
                this.offsetTop = this.$refs.tabControl2.$el.offsetTop
                // console.log(this.offsetTop);
            },


            /**
            * 网络请求相关的方法
            */
            gethome() {
                gethome().then(res => {
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list
                });
            },
            gethomelist(type) {
                const page = this.goods[type].page + 1
                gethomelist(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;

                    this.$refs.scroll.finishPullUp()

                })
            }


        }


    }
</script>

<style scoped>
    #home {
        padding-top: 44px;
        height: 100vh;

        position: relative;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }

    .fixed {
        position: relative;
        background-color: #fff;

        z-index: 2;
    }

    .bgc {
        background-color: #fff;
    }

    .content {
        position: absolute;
        top: 43.8px;
        bottom: 49px;
        overflow: hidden;
        background-color: #fff;
    }

    /* .content {
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 43px;
    } */
</style>