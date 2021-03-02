<template>
    <div>
        <nav-bar class="nav">
            <div slot="center">我的</div>
        </nav-bar>
        <div class="logo">
            <div class="left"><img src="~assets/img/my/pic.jpg" alt=""></div>
            <div class="right">
                <div class="tit">未登录</div>
                <div class="zhu">注册账号</div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'Profile',
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    .nav {
        color: #fff;
        background-color: #ff8198;

    }

    .logo {
        position: absolute;
        top: 43.8px;
        bottom: 49px;
        overflow: hidden;
    }

    img {
        width: 100%;

    }

    /* 
    .logo {
        width: 100%;
        height: 100px;
        display: flex;


        background-color: #f4f4f4;
    }

    .left {
        width: 100px;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;

    }

    .left img {

        width: 100%;
    }

    .right {
        flex: 1;

        display: flex;
        flex-direction: row;
        font-size: 18px;

        align-items: center;
        flex-wrap: wrap;

    }

    .tit {
        flex: 100%;

    }

    .zhu {
        flex: 1;
    } */
</style>