// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Lazyload } from 'vant';
import store from './store'

Vue.use(Lazyload);
Vue.use(Vant);
//访问每个路由时拦截
router.beforeEach(function(to,from,next){
  //给每页添加title
  document.title=to.meta.title;
  next();
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
