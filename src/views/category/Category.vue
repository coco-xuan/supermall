<template>
    <div class="category">
        <nav-bar class="nava">
            <div slot='center'>商品分类</div>
        </nav-bar>

        <div class="contenttt">

            <scroll ref='scroll' class="content" @pullingUp="pullingUp" :pullUpLoad="true">

                <cate-goods :cate-item='cateList' @itemCateClick='itemCateClick' />

            </scroll>
            <scroll ref='scrolls' class="contents" :pullUpLoad="true" @pullingUp="pullingUps">

                <cate-goods-item :cate-item-info='cateItemInfo' @imgLoad='imgLoad' />

            </scroll>

        </div>

    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import CateGoods from './childComps/CateGoods'
    import Scroll from 'components/common/bscroll/Scroll'
    import { getCategory, getSubcategory } from 'network/category.js'
    import CateGoodsItem from './childComps/CateGoodsItem'
    import { imgLoadMix, backTop } from 'components/mixin.js'

    export default {

        name: 'Category',
        mixins: [imgLoadMix],
        data() {
            return {
                cateList: [],
                currtIndex: 0,
                cateItemInfo: []
            }
        },
        components: {
            Scroll,
            NavBar,
            CateGoods,
            CateGoodsItem

        },

        activated() {
            // this.$refs.scrolls.refresh()
            // this.$refs.scroll.refresh()
            // const nums = window.localStorage.getItem('catenum')
            // console.log(nums);

        },

        created() {
            getCategory().then(res => {
                const data = res.data.category
                // console.log(data);
                this.cateList = data.list
                getSubcategory(this.cateList[this.currtIndex].maitKey).then(res => {
                    this.cateItemInfo = res.data.list
                    // console.log(res);
                })
            });


        },

        methods: {
            itemCateClick(index) {
                this.currtIndex = index
                getSubcategory(this.cateList[this.currtIndex].maitKey).then(res => { this.cateItemInfo = res.data.list })
                this.$refs.scrolls.scrollTo(0, 0, 0);
                this.pullingUps()

            },
            imgLoad() {
                this.$refs.scrolls.refresh()
            },
            pullingUp() {
                this.$refs.scroll.refresh()
                // console.log('加载');
            },
            pullingUps() {
                this.$refs.scrolls.refresh()
                // console.log('加载');
            }
        }

    }
</script>

<style scoped>
    .category {
        height: 100vh;
        width: 100%;
    }

    .content {
        width: 100px;

        overflow: hidden;

        /* width: 100%; */
        /* word-wrap: break-word; */
    }

    .contents {
        flex: 1;

        overflow: hidden;
    }

    .contenttt {
        display: flex !important;
        height: calc(100% - 44px - 49px);
        overflow: hidden;
    }

    .nava {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>