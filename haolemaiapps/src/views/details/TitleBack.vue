<template>
       <div>
    <div class="title_back">
       <router-link  to="/main/stat"><img src="http://127.0.0.1:8095/img/details/back.png" /></router-link>
         <span>商品详情</span>
         <router-link  to="/main/stat"><img src="http://127.0.0.1:8095/img/details/goindex.png"/></router-link>
    </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
         list:["今日特卖","服装","鞋靴","儿童","包配"],    //复选框111
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