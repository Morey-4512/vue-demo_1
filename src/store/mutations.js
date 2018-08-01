import * as Types from './mutations-type';

const mutations={
  [Types.ADD_CART](state,book){
    let product= state.cartList.find(b=>b.id===book.id);
    if(product){
      product.bookCount+=1;
      state.cartList=[...state.cartList];
    }else {

      book.bookCount=1;
      state.cartList=[...state.cartList,book]
    }
  }
}
export default mutations;
