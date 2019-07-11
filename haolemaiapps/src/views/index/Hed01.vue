<template>
   <div class="contents">
      <!-- <img src="../../../img/appimg/logo.png" class="img_logo"> -->
      <!-- <a class="search">
            <img src="../../../img/appimg/indexsearch.png">
      </a>
      <a href="#" class="btn_login">登录</a> -->
   </div>
</template>
<script>
export default {
   data(){
      return{}
   }
}
</script>
<style>
.contents{
   display:flex;
   flex-direction:row;
   align-items:center;
   padding:6px;
   position:fixed;
   left:0;
   background:#fff;
   z-index:999;
}
.img_logo{
   width:80px;
   height:50px;
}
.search{
   position:relative;
   width:230px;
   height:30px;
   border:1px solid #777;
   border-radius:30px;
}
.search img{
   width:20px;
   height:20px; 
   position:absolute;
   right:7px;
   top:5px;
}
.btn_login{
   display:block;
   width:50px;
   height:40px;
   text-align:center;
   line-height:40px;
   text-decoration:none;
   color:darkgray;
}
</style>
