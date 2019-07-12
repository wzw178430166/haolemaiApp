<template>
  <div>
    <div class="title_back">
       <router-link  to="/main/stat"><img src="http://127.0.0.1:8095/img/details/back.png" /></router-link>
         <span>限时特卖</span>
         <router-link  to="/main/stat"><img src="http://127.0.0.1:8095/img/details/goindex.png"/></router-link>
    </div>
       <!--商品列表面板-->
       <div class="mian">
        
      <div class="nav">
       <mt-button v-for="(elem,i) of list" :key='i' :data-idx="i">{{elem}}</mt-button>
      </div>
   
         <!--面板-->
      <div>
     <mt-tab-container v-model="active">
       <mt-tab-container-item id="tab1">今日特卖</mt-tab-container-item>
        <mt-tab-container-item id="tab2">购物</mt-tab-container-item>
         <mt-tab-container-item id="tab3">休闲</mt-tab-container-item>
         <mt-tab-container-item id="tab4">儿童</mt-tab-container-item>
         <mt-tab-container-item id="tab5">包配</mt-tab-container-item>
     </mt-tab-container>
     </div>
       </div>
       <!--结束商品面板-->
    </div>
</template>

<script>
export default {
    data(){
        return {
         list:["今日特卖","服装","鞋靴","儿童","包配"],    //复选框
         active:"tab1"
        
        }
        
    },  
    methods:{
          setActive(e){
              var i=parseInt(e.target.dataset.idx)+1;
              console.log(i);
              this.active="tab"+i;
          }
     }
}
</script>

<style scoped>
    .title_back{width:100%;height: 3.25rem;background-color: #F5F5F5;line-height: 3.25rem;
    display: flex;justify-content: space-between;color:#444;font-size:1rem;
    }
    .mian{width:100%;}
   
</style>