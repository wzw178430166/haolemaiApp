//共享数据
// import Vue from 'vue'
// Vue.use(Vuex)

// const mydetails = new Vuex.Store({
//     state:{  //保存全局共享数据  
//         cartCount:0
//     },
//     mutations:{ // 修改全局共享数据函数
//         //购物车数量加 1
//         increment(details){
//           details.cartCount++;
//         },
//         clear(details){
//           details.cartCount=0;
//         },
//         updateCount(details,c){
//           details.cartCount+=c;
//         }
//         //购物车数量增加指定值  5
//     },
//     getters:{  //获取全局共享的数据  000000 00 00000
//         getCartCount:function(details){
//           return details.cartCount;
//         }
//     }
//   })
  import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})