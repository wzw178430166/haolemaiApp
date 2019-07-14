<template>
    <div>
        <titleback msg="商品详情" @click="add"></titleback>
        <carousel :list=listj></carousel>
        
    </div>
</template>

<script>
import TitleBack from "../../components/TitleBack"  //引入子组件中的头部标题TitleBack
import Carousel from "../../components/Carousel"  //引入子组件中的轮播图组件Carousel
export default {
    data(){
        return {
            listj:[
                  {img:'http://127.0.0.1:8095/img/lunbotu/1.jpg'},
                  {img:'http://127.0.0.1:8095/img/lunbotu/2.jpg'},
                  {img:'http://127.0.0.1:8095/img/lunbotu/3.jpg'}
            ]
        }
    },
    methods: {
         add(){console.log(111)}
    },
    components:{
       "titleback":TitleBack ,
       "carousel":Carousel
    }
}
</script>

<style scoped>
    
</style>