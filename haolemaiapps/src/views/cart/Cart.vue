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
     <router-link to="javascript:;" class="tiao_">去首页</router-link>
     <router-link to="javascript:;" class="zhuan_">我的收藏</router-link>
     <div class="weini_"><img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px"><span>为你推荐</span><img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px;margin-left:5px" ></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
    data(){
        return {

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
 background:#f5f5f5;
 height:350px;
 margin-top:20px;
 position:relative;
}
.tiao_{
position:absolute;top:230px;left:70px;
text-decoration:none;
color:red;
display:block;
border:1px solid red;
width:100px;
height:50px;
line-height:50px;
transform:translate(0,-20px)
}
.zhuan_{
 position:absolute;top:230px;left:200px; 
 text-decoration:none;
 color:red;
 border:1px solid red;
 width:100px;
 height:50px;
 line-height:50px;
 transform:translate(0,-20px)
}
.weini_{
 margin-top:110px;
 height:50px; 
}
.weini_>span{
display:inline-block;
transform:translate(0,-10px)
}
</style>
