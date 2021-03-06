//vue.config.js
// const BASE_URL = process.env.NODE_ENV === 'production' ? '/vue_supermall/' : ''

module.exports = {
    // publicPath: BASE_URL,
    configureWebpack: {
        resolve: {

            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'

            }
        }
    }

}
