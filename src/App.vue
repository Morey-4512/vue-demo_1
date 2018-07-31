<template>
  <div id="app">

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <Tabbr></Tabbr>

  </div>
</template>

<script>
  import Tabbr from './components/Tabbar'
export default {
  name: 'App',
  components:{
    Tabbr
  }
}
</script>

<style>
  .header{
    position: absolute;
    z-index: 100;
  }
body{
  background-color: #fff;
}
</style>
