<template>
    <div>
        <nav-bar class="nav">
            <div slot="center">我的</div>
        </nav-bar>

        <div class="box"></div>
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

    .box {
        width: 100%;
        height: 200px;
        background-color: red;
    }
</style>