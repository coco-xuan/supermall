<template>
    <div id="cart">
        <nav-bar class="nav-ber">
            <div slot='center'> 购物车({{length}})</div>
        </nav-bar>

        <!-- 商品列表 -->
        <cart-list />
        <cart-bottom-bar />



    </div>
</template>

<script>
    import CartBottomBar from './childComps/CartBottomBar'
    import NavBar from 'components/common/navbar/NavBar';
    import CartList from './childComps/CartList'
    import { mapGetters } from 'vuex'
    export default {
        name: 'Car',
        components: {
            NavBar,
            CartList,
            CartBottomBar
        },
        computed: {
            //vuex提供mapGetters 的属性
            // 1.可以是数组的方式来引用getters里面的属性
            // ...mapGetters(['cartNum'])
            // 2.也可以进行自定义的命名，写成对象的形式
            ...mapGetters({
                length: 'cartNum'
            })


        }

    }
</script>

<style scoped>
    #cart {
        height: 100vh;
    }

    .nav-bar {
        background-color: #ff8198;
        color: #fff;
        font-weight: 700;
    }
</style>