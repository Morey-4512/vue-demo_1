import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import getters from './getters';
import mutations from './mutations'
let state={
  cartList:[]
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
