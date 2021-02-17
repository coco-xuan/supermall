<template>
  <div id="app">
    <keep-alive exclude='Detial'>
      <router-view></router-view>
    </keep-alive>

    <tab-bar-main></tab-bar-main>
  </div>
</template>

<script>
  import TabBarMain from 'components/content/mainTabbar/Tabbarmain'

  export default {
    name: 'app',
    components: {
      TabBarMain
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  /* @import "assets/css/normalize.css" */
</style>