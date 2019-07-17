<template>
  <div id="a1">
    <div id="a3">
      <img src="http://127.0.0.1:8095/img/back.png">
      <div class="wo_">我的购物车</div>
      <img src="http://127.0.0.1:8095/img/goindex.png">    
     </div>

     <div class="nasp">现在登录同步电脑和手机购物车中商品&nbsp;&nbsp;&nbsp;&nbsp;<span>登录</span></div> 
    <div class="er_">
     <img class="im" src="http://127.0.0.1:8095/img/cart/cart.png" style="width:150px;height:100px">
     <div class="kong">购物车还空着呢，快去挑选吧</div>
     <a href="javascript:;" class="tiao">去首页</a>
     <a href="javascript:;" class="zhuan_">我的收藏{{task}}</a>
     <div class="weini_">
       <img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px">
       <span>为你推荐</span>
       <img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px;margin-left:5px" >
     </div>
    </div>
    <!-- 图片鞋子商品 -->
    <div>
      <div v-for="(elem,i) of task" :key="i">
        <img :src="elem.photo">
         <p>{{elem.title}}</p>
         <p>¥{{elem.price}}</p>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
      task:[{photo:"http://127.0.0.1:8095/img/cart/487.jpg",title:"C|eef男式 满天星兵马俑侃爷椰子鞋男女情侣款高品质潮鞋飞织鞋",price:238},
      {photo:"http://127.0.0.1:8095/img/cart/4871.jpg",title:"c|eef男式休闲鞋韩版低帮板鞋男鞋时尚皮鞋软面牛皮加布板鞋",price:278}
      ]
        }
    }
}
</script>

<style scoped>
#a1{
width:100%;
text-align:center;
} 
#a3{
display:flex;
flex-wrap:nowrap; 
justify-content:space-between;
background-color:#f5f5f5;
}  
.wo_{
 margin-top:15px;
}
.nasp{
 margin-left:10px; 
 margin-top:20px;
}
.nasp>span{
 color:#f00; 
}
.im{
  margin-top:40px;
}
.kong{
 color:#999; 
}
.er_{
  text-align:center;
 background:#f5f5f5;
  height:350px;
 margin-top:20px;
 position:relative; 
}
.tiao{
text-decoration:none;
color:red;
display:inline-block;
border:1px solid red;
margin-top:20px;
width:100px;
height:50px;
line-height:50px;

}
.zhuan_{
 
 text-decoration:none;
 color:red;
 border:1px solid red;
 display:inline-block;
 margin-left:80px;
 width:100px;
 height:50px;
 line-height:50px;
 
}
.weini_{
 margin-top:30px;
 height:50px; 
}
.weini_>span{
display:inline-block;


}
</style>
