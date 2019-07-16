<template>
   <div style="padding-top:29px;">
      <!-- 固定导航栏 -->
      <ul class="dhl_ul">
         <li class="dhl_li" :class="i==action?'dhl_li2':''" v-for="(item,i) of dhl" :key="i" @click="open(i)">{{item}}</li>
      </ul>
      <!-- 主要内容 -->
      <ul class="ct_ul" :class="i==action?'ul_block':''" v-for="(item,i) of 5" :key="i">
         <router-link rel="stylesheet" to="Product" style="text-decoration:none;">
         <li class="ct_li" v-for="(elem,i) of list.data" :key="i">
            <span class="ct_sp">仅剩1天</span>
            <img :src="elem.img_url" class="ct_img">
            <p>
               <span class="ct_sp2">{{elem.title1}}</span> <!--测试文字-->
                   {{elem.title2}}
            </p>
         </li>
         </router-link>
      </ul>
   </div>
</template>
<script>
export default {
   created(){
      this.open(0);
   },
   data(){
      return{
         action:"",
         dhl:["今日特卖","服装","鞋袜","儿童用品","包配"],
         list:[]
      }
   },methods:{
      open(n){
         for(var i=0;i<this.dhl.length;i++){
            if(i==n){
               this.action=n;
               //console.log(n);
            }   
            if(n==i){//需要n和i的值一致的时候，才能发ajax请求
             var j=n;
             var obj={j:j+1}
            var url="index/brand"
            this.axios.get(url,{params:obj}).then(result=>{
               this.list=result;        
            })
            }
         }
      }
   }
}
</script>
<style scoped>
*{margin:0;padding:0;}
.dhl_ul{
   position:fixed;
   top:3.8rem;
   width:100%;
   display:flex;
   flex-direction:row;
   background-color:white;
   z-index:77;
}
.dhl_li{
  
   height:2rem;
   color:#888;
   text-align:center;
   line-height:2rem;
   margin:10px;
   font-size:0.5rem;
   
}
.dhl_li2{
   border-bottom:3px solid blueviolet;
   color:blueviolet;
   /* font-size:0.8rem; */
   transition:all .3s;
   transform:scale(1.3)
}
/* 主要内容 */
.ct_ul{
   display:flex;
   flex-direction:column;
   display:none;
}
.ul_block{
   display:block;
}
.ct_li{
   width:100%;
   position:relative;
}
p{
   margin:0 0 10px 5px;
}
/* 右侧标题 */
.ct_sp2{
   margin-right:20px;
   color:red;
   font-size:19px;
   font-weight:600;
}
.ct_sp{
   display:block;
   position:absolute;
   right:0rem;
   top:0rem;
   width:7rem;
   height:2rem;
   color:white;
   text-align:center;
   line-height:2rem;
   background:rgba(0,0,0,0.5);
}
/* 图片 */
.ct_img{
   width:100%;
   height:auto;
}
</style>
