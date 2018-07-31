<template>
    <div>
      <MHeader :goBack="true">详情</MHeader>
      <div class="detail">
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
          <van-button slot="button" size="small" @click="updateBook(book.id,book)">修改</van-button>
          </van-field>

        </van-cell-group>

      </div>

    </div>
</template>

<script>
  import MHeader from '../components/MHeader';
  import {getBookById,updateBook} from '../api'
  import { Dialog } from 'vant';
    export default {
        name: "Detail",
      components:{
          MHeader
      },
     async created(){
          this.getBook();
      },
      watch:{
          $route(){
            this.getBook();
          }
      },
      methods:{
         async getBook(){
           let id=this.$route.params.id;
          let {data}= await getBookById(id).catch(e=>{
             this.$router.push('/list');
           });
          this.book=data;

          },
        async updateBook(id,book) {
          if (Object.keys(this.book).length === 0) {
            Dialog.alert({
              message: '修改失败,请输入信息！'
            }).then(() => {
              this.$router.push('/detail')
            });
          } else if (this.book.bookName === '' || typeof this.book.bookName === "undefined") {
            Dialog.alert({
              message: '修改失败，请填写书名！'
            }).then(() => {
              this.$router.push('/detail')
            });
          } else if (this.book.bookPrice === '' || typeof this.book.bookPrice === "undefined") {
            Dialog.alert({
              message: '修改失败，请输入价格！'
            }).then(() => {
              this.$router.push('/detail')
            });
          } else {
            await updateBook(id, book).then(r => {
              this.$router.push('/list')
            }, c => {
              Dialog.alert({
                message: '修改失败'
              }).then(() => {
                this.getBook();
              });
            });

          }
        }
      },
      data(){
          return {book:{}}
      }
    }
</script>

<style scoped>
.detail{
  position: absolute;
  top:46px;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fbfbfb;
  z-index: 99;
}
  .detail img{
    width: 100%;
  }
</style>
