<template>

    <swiper class="swiper-ooo">
        <swiper-item v-for="item in topImages" :key='item'>


            <img :src="item" alt="">

        </swiper-item>
    </swiper>


</template>

<script>
    import { Swiper, SwiperItem } from 'components/common/swiper'
    export default {
        name: 'DetialSwiper',
        props: {
            topImages: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            Swiper,
            SwiperItem
        },

    }
</script>

<style scoped>
    .swiper-ooo {
        height: 300px;
        overflow: hidden;
    }
</style>