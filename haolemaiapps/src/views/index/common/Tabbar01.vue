<template>
   <div>
      <img :src="panduan?tu1:tu2"> 
   </div>
</template>
<script>
//底部导航栏
export default {
   data(){
      return{}
   },props:{
      panduan:false,
      tu1:{default:""},
      tu2:{default:""}
   }
}
</script>
<style>
img{
   width:50px;
   height:50px;
}
</style>
