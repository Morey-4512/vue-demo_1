<template>
  <div class="swiper">
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image.url" />
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>
    export default {
        name: "Swiper",
      props:{
          images :{

          }
      }
    }
</script>

<style scoped>

  img{
    width: 100%;
  }
</style>
