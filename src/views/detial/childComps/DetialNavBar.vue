<template>
    <div>
        <nav-bar>
            <div slot="left" @click='backClick' class="back">
                <img src="~assets/img/common/back.svg" alt="">
            </div>

            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="tit-item" @click='titClick(index)'
                    :class='{color: index===currentIndex}'>
                    {{item}}
                </div>


            </div>

        </nav-bar>
    </div>
</template>

<script>

    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'DetialNavBar',
        components: {
            NavBar
        },
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0,

            }
        },
        methods: {
            titClick(index) {
                this.currentIndex = index
            },
            backClick() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
        font-size: 13px;
    }

    .tit-item {
        flex: 1;
    }

    .color {
        color: red;
    }

    .back {
        margin-top: 4px;
    }

    .back img {
        width: 20px;
        height: 20px;
    }
</style>