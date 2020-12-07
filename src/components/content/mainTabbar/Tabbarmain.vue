<template>

    <tab-bar>
        <tab-bar-item path="/home">
            <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/homes.png" alt="">
            <div slot="item-text"> 首页</div>
        </tab-bar-item>
        <tab-bar-item path="/categroy">
            <img slot="item-icon" src="~assets/img/tabbar/fen-lei.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/fen-lei(1).png" alt="">
            <div slot="item-text"> 分类</div>
        </tab-bar-item>
        <tab-bar-item path='/car'> <img slot="item-icon" src="~assets/img/tabbar/shop.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/shops.png" alt="">
            <div slot="item-text"> 购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile'> <img slot="item-icon" src="~assets/img/tabbar/wode.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/wode(1).png" alt="">
            <div slot="item-text"> 我的</div>
        </tab-bar-item>

    </tab-bar>

</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar';
    import TabBarItem from 'components/common/tabbar/TabBarItem';
    export default {
        name: 'TabBarMain',
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>