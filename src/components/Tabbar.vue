<template>
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="records" to="/list">列表</van-tabbar-item>
        <van-tabbar-item icon="add-o" to="/add" >添加</van-tabbar-item>
        <van-tabbar-item icon="cart" to="/cart">购物车</van-tabbar-item>
      </van-tabbar>

    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data() {
          return {
            active: 0
        }},
    methods:{
          //根据路由地址的变化改变底部tabbar的选中状态
          changeTabbar() {
            let routeName = this.$route.name;

            switch (routeName) {
              case "home":
                this.active = 0;
                break;
              case 'list' :
                this.active = 1;
                break;
              case 'add' :
                this.active = 2;
                break;
              default :
                this.active = 3;
            }
          }
    },
    watch:{
      $route(){
        this.changeTabbar();

        }
      }

    }
</script>

<style scoped>

</style>
