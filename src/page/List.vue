<template>
    <div class="list">
      <MHeader>列表</MHeader>
      <div class="content">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <div v-for="(book,index) in books" :key="index" @click="goDetail(book.id)">
            <van-card
              :title="book.bookName"
              :desc="book.bookInfo"
              :price="book.bookPrice"
              :thumb="book.bookCover"
            >
              <div slot="footer">
                <van-button size="mini" @click.stop="deleteBook(book.id)">删除</van-button>
                <van-button size="mini"@click.stop="addCart(book)">购物车</van-button>
              </div>
            </van-card>

          </div>

        </van-list>
      </div>
    </div>
</template>

<script>
  import MHeader from '../components/MHeader'
  import {getBooksByPage,deleteBook} from '../api'
  import * as Typse from '../store/mutations-type'
    export default {
        name: "List",
      components:{
          MHeader
      },
      created(){
          this.getBookByPage(this.page);
      },methods:{
        async getBookByPage(page){
          await getBooksByPage(page).then(r=>{

            let link=r.headers.link;
            if(link.indexOf('_page='+(page+1))>0){
              this.hasMore=true;
            }else {
              this.hasMore=false;
            }
            this.books=[...this.books,...r.data];
          });
        },
        onLoad() {
          setTimeout(() => {
            this.loading = false;
            if (this.hasMore) {
              this.page=this.page+1;
              this.getBookByPage(this.page);

            }else {
              this.finished = true;
            }
          }, 500);
        },
        goDetail(id){
          this.$router.push({ name: 'detail', params: { id: id }});
        },
       async deleteBook(id){
          await deleteBook(id)
         this.books=this.books.filter(b=>b.id!==id);
        },
        addCart(book){
        this.$store.commit(Typse.ADD_CART,book);
        }
      },
      data(){
          return{
            books:[],
            page:1,
            hasMore:true,
            loading: false,
            finished: false

          }
      }
    }
</script>

<style scoped>
.content{
  padding-top: 45px;
  padding-bottom: 55px;
}
.list{
  background-color: #fbfbfb;
}
  .van-card{
    background-color: #fff;
    border-top: #fbfbfb 2px solid;
  }
</style>
