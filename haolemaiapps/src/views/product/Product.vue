<template>
    <div>
       <titleBack msg="商品列表"></titleBack>
       <router-link :to="`/Details/details?lid=`+lid">加入购物车</router-link>
    </div>
</template>

<script>
import TitleBack from "../../components/TitleBack"  //引入子组件中的头部标题TitleBack
export default {
    data(){
        return {
            lid:1
        }
    },
    components:{
        "titleBack":TitleBack
    }
}
</script>

<style scoped>
    
</style>