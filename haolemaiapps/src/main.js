import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不要动保存原来位置
//原因:引入有序
//第三方组件库在下面引入
//1:完整引入mint-ui
//import iView from 'iview';
//Vue.use(iView);
import MintUI from 'mint-ui' 
//2:单引引入mint-ui样式
import 'mint-ui/lib/style.css'
//3:将mint-ui注册vue
Vue.use(MintUI);

// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

//4:引入图标字体样式文件
import "./font/iconfont.css"
//5.引入axios.js文件
import axios from "./axios"

//6.引入vuex  注册vuex组件  创建store   将store保存vue实例中
import Vuex from "vuex"

//7.引入min-ui css样式
//import "./lib/mui/css/mui.css"

//import mydetails from "./store/details"  //引入详情列表的仓库数据
Vue.use(Vuex)
//购物车的共享数据
var store = new Vuex.Store({
  state:{  //保存全局共享数据  
      cartCount:0
  },
  mutations:{ //修改全局共享数据函数
      //购物车数量加 1
      increment(state){
        state.cartCount++;
      },
      clear(state){
        state.cartCount=0;
      },
      updateCount(state,c){
        state.cartCount+=c;
      }
      //购物车数量增加指定值  5
  },
  getters:{  //获取全局共享的数据
      getCartCount:function(state){
        return state.cartCount;
      }
  },
  //以异步的方式操作数据
  actions:{  //发请求  //  还要靠mutations:{ //修改全局共享数据函数
     
  },
  modules:{  //子模块 例如用户用的，购物车用的

  }
})



Vue.config.productionTip = false
new Vue({
  router,     //路由文件
  render: h => h(App),  //渲染  创建一个根组件
  store,     //将vuex组件添加到Vue实例中
  //mydetails  //商品详情的共享数据
}).$mount('#app')
