import axios from 'axios';
//设置默认请求地址
axios.defaults.baseURL='http://127.0.0.1:3000';

//获取轮播图地址
let getSwipers=()=>{
  return axios.get('/swipers');
}

//获取全部热门图书
let getHotBooks=()=>{
  return axios.get('/hotbooks');
}

//按页数获取热门图书
let getHotBooksByPage=(page)=>{
  return axios.get('/hotbooks',{
    params:{
      _page:page,
      _limit:4
    }
  })
}
//按页获取图书
let getBooksByPage=(page)=>{
  return axios.get('/books',{
    params:{
      _page:page,
      _limit:4
    }
  })
}

//删除图书
let deleteBook=(id)=>{
  return axios.delete('/books/'+id);
}
//通过id获取图书
let getBookById=(id)=>{
  return axios.get('/books/'+id);
}

//修改图书
let updateBook=(id,book)=>{
  return axios.put('/books/'+id,book);
}

//添加一本图书
let setOneBook=(book)=>{
   return axios.post('/books',book)
}
export {
  getSwipers,
  getHotBooks,
  getHotBooksByPage,
  getBooksByPage,
  deleteBook,
  getBookById,
  updateBook,
  setOneBook
}
