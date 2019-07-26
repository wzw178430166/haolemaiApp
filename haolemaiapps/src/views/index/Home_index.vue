<template>
   <div class="index_content">
      <div class="index02">
      <!-- 顶部搜索栏1555555111 -->
      <hed fixed></hed>
      <!-- 面板 -->
      <mt-tab-container v-model="active" class="fumianban">
         <mt-tab-container-item id="shouye" class="mianban">
            <!-- 面板1 -->
            <!-- 广告 -->
            <img style="width:100%;" src="http://127.0.0.1:8095/img/appimg/biaoti/guanggao.png">
            <!-- 标题栏1 -->
            <div> 
              <img src="http://127.0.0.1:8095/img/appimg/biaoti/tabbar_shouye0.png" class="s1">
               <div>
                  <a href="#"><img src="http://127.0.0.1:8095/img/appimg/biaoti/01.png" class="biaoti_img1"></a>
                  <a href="javascript:;"><img src="http://127.0.0.1:8095/img/appimg/biaoti/top0.png" class="biaoti_img"></a>
                  <a href="javascript:;"><img src="http://127.0.0.1:8095/img/appimg/biaoti/top1.png" class="biaoti_img"></a>
                  <a href="javascript:;"><img src="http://127.0.0.1:8095/img/appimg/biaoti/top2.png" class="biaoti_img"></a>
                  <a href="javascript:;"><img src="http://127.0.0.1:8095/img/appimg/biaoti/top3.png" class="biaoti_img"></a>
                  <a href="javascript:;"><img src="http://127.0.0.1:8095/img/appimg/biaoti/top4.png" class="biaoti_img"></a>
                  <a href="javascript:;"><img src="http://127.0.0.1:8095/img/appimg/biaoti/top5.png" class="biaoti_img"></a>
               </div>
               <img src="http://127.0.0.1:8095/img/appimg/biaoti/tabbar_shouye0.png" class="s1">
            </div>
            <!-- 标题栏2 -->
            <div><img src="http://127.0.0.1:8095/img/appimg/biaoti/02.jpg" class="biaoti2_img"> </div>
            <!-- 导航栏 -->    
            <ul class="dhl_ul">
               <li v-for="(item,i) of navbar" :key="i" class="dhl_li" :class="action==i?'dhl_li1':''" @click="goto(i)">{{item}}</li>
            </ul>
            <!-- 类别循环 -->
            <ul class="shangpin_ul" :style="action==j?'display:block':''" v-for="(item,j) of navbar" :key="j">
        
               <!-- 商品循环 -->
               <li class="shangpin_li" v-for="(item,i) of list" :key="i">

             
                  <router-link to="Product" class="shangpin_a">
                     <div class="shangpin">
                        <img :src="item.img_url">
                        <p>
                           <span>特价999</span>阿斯蒂芬
                        </p>
                     </div>
                  </router-link>
               </li>
            </ul>
            <div style="width:100%;height:30rem;"></div>







         </mt-tab-container-item>
         <!-- 面板2 w22222-->       
         <mt-tab-container-item id="fenlei">
             <Panel2></Panel2>
         </mt-tab-container-item>   

         <!-- 面板3 -->
         <mt-tab-container-item id="temai">
            <Panel3></Panel3>
         </mt-tab-container-item>   
         <mt-tab-container-item id="gouwuche">
           
          <cart></cart>

         </mt-tab-container-item>
         <!--面板5-->
         <mt-tab-container-item id="user"></mt-tab-container-item>  
         </mt-tab-container>   
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
         <mt-tab-item id="shouye" @click.native="select(0)">
            <tabbar01 
            tu1="http://127.0.0.1:8095/img/appimg/index_img/tabbar_shouye1.png"
            tu2="http://127.0.0.1:8095/img/appimg/index_img/tabbar_shouye0.png"
            :panduan="torf[0].s">
            </tabbar01>
         </mt-tab-item>
          <mt-tab-item id="fenlei" @click.native="select(1)">
            <tabbar01
            tu1="http://127.0.0.1:8095/img/appimg/index_img/tabbar_fenlei1.png"
            tu2="http://127.0.0.1:8095/img/appimg/index_img/tabbar_fenlei0.png"
            :panduan="torf[1].s"
            ></tabbar01>
         </mt-tab-item>
            <mt-tab-item id="temai" @click.native="select(2)">
            <tabbar01 
            tu1="http://127.0.0.1:8095/img/appimg/index_img/tabbar_temai1.png"
            tu2="http://127.0.0.1:8095/img/appimg/index_img/tabbar_temai0.png"
            :panduan="torf[2].s"
            ></tabbar01>
         </mt-tab-item>
         <mt-tab-item id="gouwuche" @click.native="select(3)">
            <tabbar01 
            tu1="http://127.0.0.1:8095/img/appimg/index_img/tabbar_gouche1.png"
            tu2="http://127.0.0.1:8095/img/appimg/index_img/tabbar_gouche0.png"
            :panduan="torf[3].s"
            ></tabbar01>
         </mt-tab-item>
         <mt-tab-item id="user" @click.native="select(4)">
            <tabbar01 
            tu1="http://127.0.0.1:8095/img/appimg/index_img/user1.png"
            tu2="http://127.0.0.1:8095/img/appimg/index_img/user0.png"
            :panduan="torf[4].s"
            ></tabbar01>
         </mt-tab-item>
      </mt-tabbar> 
      </div>
   </div>
</template>
<script>
import Hed01 from "./common/Hed01"
import Tabbar01 from "./common/Tabbar01"
import Panel2 from "./common/Panel2"
import Panel3 from "./common/Panel3"
import Cart from "../cart/Cart"
export default {
   created(){
       this.goto(0); 
   },
   data(){
      return{
         action:true,
         active:"shouye",
         torf:[{s:true},{s:false},{s:false},{s:false},{s:false},{a:false}],
         navbar:["精选","运动","服饰","潮鞋","全球购"],    
         fenlei:[],    
         navbara:0,
         action:"",
         list:[],//用来保存数据的数组   
      };
   },
   components:{
      "hed":Hed01,
      "tabbar01":Tabbar01,
      "Panel2":Panel2,
      "Panel3":Panel3,
      "cart":Cart
   },methods:{
      select(n){//底部导航栏
         //创建一个循环，遍历所有按钮,然后匹配对应下标
         for(var i=0;i<this.torf.length;i++){
         if(n==i){
            this.torf[i].s=true;       
         }else{
            this.torf[i].s=false;
         }
        }
       },
       //商品导航栏函数
       goto(n){  
         for(var i=0;i<this.navbar.length;i++){
            if(i==n){
               var j=n;
               var Obj={j:j+1};
               var url="index/brand"
               this.action=n;
               
               this.axios.get(url,{params:Obj}).then(result=>{
                  this.list=result.data;
                  
               })
            }
         }
  
       }
      },
   }


</script>
<style>
/* 导航栏样式 */
.dhl_ul{
   width:100%;
   height:3rem;
   list-style:none;
}
.dhl_li{
   width:16.6%;
   height:100%;
   float:left;
   line-height:3rem;
   color:crimson;
   font-size:1.1rem;
   font-weight:bold;
   box-sizing:border-box;
}
.dhl_li1{
   border-bottom:2px solid crimson;
}
/* 商品的ul */
.shangpin_ul{
   width:100%;
   height:auto;
   display:none;
}
.shangpin_li{
   width:100%;
   height:auto;
   box-sizing:border-box;
}

.shangpin{
   text-align:left;
   box-sizing:border-box;
}
.shangpin>img{
   width:100%;
   height:auto;
}





/* 最外层父元素 */
*{margin:0;padding:0;}
.index_content{
   display:flex;
   width:100%;
   flex-wrap:wrap;
   justify-content:center;
   overflow:hidden;
   box-sizing:border-box;
}
/* 第二层父元素 */
.index02{overflow:auto;}
.dd{text-align:center;}
.fumianban{
   padding-top:5.1rem;
}
/* 面板样式 */
.mianban{
   text-align:center;
   overflow:auto;
   box-sizing:border-box;
}
/* 轮播图样式 */
.lbt_img{
   width:375px;
   height:130px;
}
/* 标题栏样式 */
.biaoti_img{
   width:90px;
   height:90px;
  
}
.biaoti_img1{width:180px;height:90px;}
.biaoti2_img{
   width:100%;
   box-sizing:border-box;
   height:7rem;
   border:1px solid #000;
}
.s1{width:100%;height:10px;}
/* 选择栏 */
.navbars{
   text-decoration:none;
   color:black;
   padding:10px;
}
.d_navbar{
   width:100%;
   height:50px;
   display:flex;
   item-align:center;
   justify-content:center;
}
.navbara{
   color:blueviolet;border-bottom:3px solid blueviolet;
}
/* 导航栏商品样式 */






</style>

