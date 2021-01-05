import {
    ADD_CART_NUM,
    ADD_TO_CART
}
    from './mutations-type'

export default {
    appCart(context, payload) {
        // 1.查找之前数组中是否有该商品

        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

            // 2.判断oldProduct
            if (oldProduct) {
                context.commit(ADD_CART_NUM, oldProduct)
                resolve('商品数量加一')
            } else {
                payload.count = 1
                context.commit(ADD_TO_CART, payload)
                resolve('添加了新的商品')
            }
        })
    }
}