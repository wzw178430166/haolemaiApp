<template>
   <div class="content">
      <!-- 左侧选项栏 -->
      <div class="left" fixed>
         <router-link style="text-decoration:none;" to="#" v-for="(item,i) of store" :key="i"> <span class="text" :class="active==i?'text_1':''" @click="goto(i)">{{item}}</span> </router-link>
      </div>
      <!-- 右边内容 上面图片-->
      <div class="right">
         <div>
            <ul class="right_ul">
               <router-link  to="#" v-for="(item,i) of 6" :key="i">
                  <li>
                     <img class="right_img" src="http://127.0.0.1:8095/img/appimg/biaoti/bottom1.jpg">
                  </li>
               </router-link>
            </ul>
         </div>
         <!-- 下部分内容 -->
      <div class="content_none" :class="active==i?'content_block':''" v-for="(item,i) of store" :key="i" >
         <p class="right_p">—{{store[i]}}—</p>
         <!-- 右边内容 下面图片 -->
         <div class="right_tu">  
            <router-link style="text-decoration:none" to="#" class="right_a" v-for="(item,i) of 33" :key="i">
               <div>
                  <img src="http://127.0.0.1:8095/img/appimg/minImg/xie/yundong1.jpg">
                   <p>asfd</p>
                </div>
            </router-link>
          </div>
        </div>

      </div>
   </div>
</template>
<script>
//点击导航栏跳转到对应的ul，每个ul从数据库拿取数据，数据的存储，每个ul都有对应的id，li根据ul的id遍历对象
//rem
export default {
   data(){
      return{
         active:"",
         store:["运动生活","休闲服饰","时尚鞋品","快乐儿童","全球购","家居家纺","腕表首饰","家用电器"]
      }
   },methods:{
      //左侧导航栏跳转事件
      goto(e){
         //遍历数组获取下标，下标与当前点击的位置一致时触发
         for(var i=0;i<this.store.length;i++){
            if(e==i){
               this.active=e;
            }

         }
      }
   }
}
</script>
<style scoped>
.content{
   display:flex;
   width:100%;
   flex-direction:row;
   padding:3px;
   
}
/* 左边标题栏 */
.left{
    position:fixed;
   float:left;
   display:block;
   width:5rem;
   text-align:center;
   
}
.text{
   display:block;
   width:100%;
   height:4rem;
   font-weight:600;
   font-size:14px;
   line-height:4rem;
   color:black;
   text-decoration:none;
}
.text_1{
   color:blueviolet;
   font-size:15px;
}

/* 右边详情 */
.right{
  width:18rem;
  text-align:center;
  margin-left:82px;
}
.right_ul{
   width:40rem;
   list-style:none;
   display:flex;
   flex-direction:row;
}
.right_img{
   width:6rem;
   height:4rem;   
}
p{
   color:darkgray;
}
/* 右边内容样式 */
.content_none{
   display:none;
}
.content_block{
   display:block;
}


.right_tu{
   display:flex;
   flex-direction:row;
   flex-wrap:wrap;
}
.right_a div{
   display:block;
   width:5.8rem;
   height:6rem;
   
   text-decoration:none;
}
.right_a img{
   width:5rem;
   height:4rem;
}
</style>
