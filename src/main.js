import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import './plugins/index.js'


//解决移动端300毫秒延迟
import FastClick from 'fastclick'
import toast from './components/common/toast'

//图片懒加载
import vueLazyLoad from 'vue-lazyload'
Vue.use(vueLazyLoad, {
  loading: require('./assets/img/main/cocoxuan.jpg')

})




Vue.use(toast);
// Vue.use(Vant)
FastClick.attach(document.body);


Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
