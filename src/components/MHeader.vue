<template>
    <div class="header">
      <template v-if="goBack">
      <van-nav-bar fixed left-text="返回" left-arrow @click-left="onClickLeft">
        <slot slot="title"></slot>
      </van-nav-bar>
      </template>
    <template v-else>
      <van-nav-bar fixed>
        <slot slot="title"></slot>
      </van-nav-bar>
    </template>

    </div>
</template>

<script>
    export default {
        name: "MHeader",
        props:{
          goBack:{
            type:Boolean,
            default: false
          }
        },
      methods:{
        onClickLeft(){
        this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>


</style>
