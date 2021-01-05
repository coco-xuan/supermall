import {
    ADD_CART_NUM,
    ADD_TO_CART
}
    from './mutations-type'



export default {

    [ADD_CART_NUM](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true;
        state.cartList.push(payload)
    }

}