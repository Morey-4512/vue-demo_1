<template>
<div class="cart">
  <MHeader>购物车</MHeader>
  <div class="content">
    <van-checkbox-group  class="card-goods" v-model="checkedBox">
      <van-checkbox class="card-goods__item"
        v-for="(book,index) in cartList"
        :key="index"
        :name="book.id"
      >
        <van-card
          :title="book.bookName"
          :desc="book.bookInfo"
          :num="book.bookCount"
          :price="book.bookPrice"
          :thumb="book.bookCover"
        > <div slot="footer">

        </div></van-card>
      </van-checkbox>
    </van-checkbox-group>
</div>
</div>
</template>

<script>
  import MHeader from '../components/MHeader';
  import {mapState} from 'vuex';

    export default {
        name: "Cart",
      components:{
          MHeader
      },
      computed:{
        ...mapState(['cartList'])
      },methods:{

      },
      data(){
          return{
            checkedBox:[]
          }
      }
    }
</script>

<style scoped lang="less">
  .card-goods {
    padding: 46px 0;
    background-color: #fff;
    &__item {
      position: relative;
      background-color: #fafafa;

    }
  }
</style>
