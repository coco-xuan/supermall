<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>
        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sells">
                    <div class="sells-count">
                        {{shop.sells | sellCountFilter}}
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count">
                        {{shop.goodsCount}}
                    </div>
                    <div class="goods-text">全部宝贝</div>
                </div>
            </div>
            <div class="shop-middle-item shop-middle-right">
                <table>
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                        <td class="better" :class="{'better-more':item.isBetter}">
                            <span>{{item.isBetter ? '高':'低'}}</span></td>

                    </tr>
                </table>
            </div>
        </div>
        <div class="shop-bottom">
            <div class="enter-shop">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetialShopInfo',
    }
</script>

<style scoped>

</style>