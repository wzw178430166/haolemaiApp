<template>
   <div class="contents">
      <img src="http://127.0.0.1:8095/img/appimg/index_img/logo.png" class="img_logo">
      <a class="search">
            <img src="http://127.0.0.1:8095/img/appimg/index_img/indexsearch.png">
      </a>
<<<<<<< HEAD
      <a href="http://127.0.0.1:8080/#/Login" class="btn_login">登录</a>
=======
      <router-link to="/Login" class="btn_login">登录</router-link>
>>>>>>> 3085bfc6b66be0d49aaab1dbcb46656597bce222
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
   width:100%;
   flex-direction:row;
   align-items:center;
   padding:6px;
   position:fixed;
   left:0;
   background:white;
   z-index:999;
}
.img_logo{
   width:80px;
   height:50px;
}
.search{
   display:block;
   width:220px !important;
   height:40px !important;
   margin:0 8px;
   position:relative;
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