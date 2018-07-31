import Vue from 'vue'
import Router from 'vue-router'

import Home from '../page/Home';
import Detail from '../page/Detail';
import List from '../page/List';
import Add from '../page/Add';
import Cart from '../page/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        keepAlive:true,title:'首页'
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta:{
        title:'详情'
      }
    }, {
      path: '*',
      redirect : '/home'
    }, {
      path: '/',
      redirect : '/home'
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta:{
        keepAlive:true,title:'列表'
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta:{
        title:'添加'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta:{
        keepAlive:true,title:'购物车'
      }
    }
  ]
})
