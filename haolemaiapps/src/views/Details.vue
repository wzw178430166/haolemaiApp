<template>
    <div>
        <search></search>
    </div>
</template>
<script>
  import Search from "../components/search.vue";
export default {
      //2:注册子组件,起标签名
    data(){
        return {}
    },
     components:{
        "search": Search
      }
}
</script>
<style scoped>
    
</style>