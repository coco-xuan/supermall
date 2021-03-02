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
const Login = () => import('views/Login')
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
        component: Profile,
        beforeEnter: (to, form, next) => {
            if (to.path === '/login') return next();
            const tokenLogen = window.sessionStorage.getItem('token')
            if (!tokenLogen) return next('/login')
            next()
        }
    },
    {
        path: '/detial/:iid',
        component: Detial
    },
    {
        path: '/login',
        component: Login
    }



]



const router = new VueRouter(
    {
        routes,
        mode: 'history'
    }
)

// 挂载路由守卫





export default router
