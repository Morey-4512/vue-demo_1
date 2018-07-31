<template>
  <div>
  <MHeader >首页</MHeader>
<div class="content">

    <Swiper :images="images" ></Swiper>

        <h3>热门图书</h3>
      <div >
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <ul >
              <li  v-for="(hot,index) in hotBooks" :key="index" >
                <img :src="hot.bookCover">
                <b>{{hot.bookName}}</b>
              </li >

            </ul>

             </van-list>

      </div>


</div>

  </div>
</template>

<script>
  import RouterLink from "vant/packages/mixins/router-link";
  import MHeader from '../components/MHeader';
  import Swiper from '../components/Swiper';
  import {getSwipers,getHotBooks,getHotBooksByPage} from '../api';
export default {
  name: 'Home',
  components:{
    RouterLink,
    MHeader,
    Swiper,

  },
  computed:{

  },
  async created(){
    this.getSwipersUrl();
   this.getHotByPage(this.hotPage);

  },
  methods:{
    async getSwipersUrl(){
      let {data}=await getSwipers();
      this.images=data;
    },
    async getHot(){
      let {data}=await getHotBooks();
      this.hotBooks=data;
    },
    async getHotByPage(page){
      await getHotBooksByPage(page).then(r=>{

        let link=r.headers.link;
        if(link.indexOf('_page='+(page+1))>0){
          this.hasMore=true;
        }else {
          this.hasMore=false;
        }
        this.hotBooks=[...this.hotBooks,...r.data];
      });
    },
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        if (this.hasMore) {
          this.hotPage=this.hotPage+1;
          this.getHotByPage(this.hotPage);

        }else {
          this.finished = true;
        }
      }, 500);
    }

  },
  data () {
    return {
      images:[],
      hotBooks:[],
      hotPage:1,
      hasMore:false,
      loading: false,
      finished: false
    }
  }
}
</script>

<style scoped>

  .content{
    padding-bottom: 55px;
    padding-top: 45px;
  }
.content ul{
   display: flex;
   flex-wrap: wrap;
 }
.content ul li{
  width: 50%;
  text-align: center;
  margin: 5px 0;
}
.content ul li img{
  width: 100%;
}
  h3{
    color: darkgray;
    padding-left: 20px;
  }

</style>
