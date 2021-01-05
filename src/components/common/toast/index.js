import Toast from './Toast'
const obj = {}


obj.install = function (Vue) {

    // 1.创建构造器

    const toastCon = Vue.extend(Toast)

    // 2.new 的方式可以根据组件构造器，创建一个组件对象

    const toast = new toastCon()

    // 3.将组件对象，手动挂载到某一个元素上来

    toast.$mount(document.createElement('div'));

    // 4.toast.$el对应的就是div

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast;

}




export default obj