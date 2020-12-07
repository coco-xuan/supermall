import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
};


const Home = () => import('views/home/Home')
const Car = () => import('views/car/Car');
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')
const Detial = () => import('views/detial/Detial')
// 1.安装插件

Vue.use(VueRouter)

// 2.创建router
const routes = [
    {
        path: '',
        redirect: '/home',
    }, {
        path: '/home',
        component: Home
    },
    {
        path: '/car',
        component: Car
    }, {
        path: '/categroy',
        component: Category
    }, {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detial/:iid',
        component: Detial
    }



]



const router = new VueRouter(
    {
        routes,
        mode: 'history'
    }
)
export default router
