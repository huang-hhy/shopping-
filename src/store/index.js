import Vue from 'vue'
import Vuex from 'vuex'

import getters from './gettes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state, payload){
      let oldProduct=null
      for(let item of state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item
        }
      }

      if(oldProduct){
        oldProduct.count += 1
      }else{
        payload.checked=true
        payload.count = 1 
        state.cartList.push(payload)
      }    
    }
  },
  actions: {
  },
  modules: {
  },
  getters
})
