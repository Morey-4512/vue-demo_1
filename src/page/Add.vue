<template>
<div>
<MHeader>添加</MHeader>
  <div class="add">
    <img :src="book.bookCover">
    <van-cell-group>
      <van-field
        v-model="book.bookName"
        clearable
        label="图书书名:"
        placeholder="请输入书名"
      />

      <van-field
        v-model="book.bookInfo"
        label="图书信息:"
        placeholder="请输入信息"
      />

      <van-field
        v-model="book.bookCover"
        label="图书封面:"
        placeholder="请输入封面地址"
      />
      <van-field
        v-model="book.bookPrice"
        label="图书价格:"
        placeholder="请输入价格"
      />
      <van-field>
        <van-button slot="button" size="small" @click="setBook(book)">添加</van-button>
      </van-field>

    </van-cell-group>
  </div>
</div>
</template>

<script>
  import MHeader from '../components/MHeader'
  import {setOneBook} from '../api'
  import { Dialog } from 'vant';
    export default {
        name: "Add",
        components:{
          MHeader
        },methods:{
         async setBook(){
           if(Object.keys(this.book).length===0){
            Dialog.alert({
              message: '添加失败,请添加信息！'
            }).then(() => {
              this.$router.push('/add')
            });
          }else if(this.book.bookName===''||typeof this.book.bookName==="undefined"){
             Dialog.alert({
               message: '添加失败，请填写书名！'
             }).then(() => {
               this.$router.push('/add')
             });
           }else if(this.book.bookPrice===''||typeof this.book.bookPrice==="undefined"){
             Dialog.alert({
               message: '添加失败，请输入价格！'
             }).then(() => {
               this.$router.push('/add')
             });
           }else {
             await setOneBook(this.book).then(r=>{
               Dialog.alert({
                 message: '添加成功'
               }).then(() => {
                 this.$router.push('/list')
               });
             });
           }

          }
      },
      data(){
          return {
            book:{

            }
          }
      }
    }
</script>

<style scoped>
.add{
  padding-top: 46px;
  padding-bottom: 55px;
}
  .add img{
    width: 100%;
  }
</style>
