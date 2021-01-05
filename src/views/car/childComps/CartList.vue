<template>
    <div id="cart-list">

        <scroll class="content" ref='scroll'>
            <cart-item v-for='(item,index) in cartList' :product='item' :key='index' />

        </scroll>

    </div>
</template>

<script>
    import Scroll from 'components/common/bscroll/Scroll'
    import CartItem from './CartItem'
    import { mapGetters } from 'vuex'
    export default {
        name: 'CartList',
        computed: {
            ...mapGetters(['cartList'])
        },
        components: {
            Scroll,
            CartItem
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    #cart-list {
        height: calc(100% - 44px - 49px - 60px)
    }


    .content {
        height: 100%;
        overflow: hidden;
    }
</style>