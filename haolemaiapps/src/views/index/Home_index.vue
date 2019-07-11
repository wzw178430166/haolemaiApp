<template>
   <div class="index_content">
      <div class="index02">
      <!-- 顶部搜索栏1555555111 -->
      <hed fixed></hed>
      <!-- 面板 -->
      <mt-tab-container v-model="active" class="fumianban">
         <mt-tab-container-item id="shouye" >
            <!-- <div><img src="../../img/appimg/轮播图/lbt01.jpg" class="lbt_img"></div> -->
            <!-- 标题栏1 -->
            <div>
               <span><img src="http://127.0.0.1:8095/img/appimg/biaoti/tabbar_shouye0.png" class="s1"></span>
               <div>
                  <a href="#"><img src="#" class="biaoti_img1"></a>
                  <a v-for="(item,i) of 6" :key="i" href="javascript:;"><img src="#" class="biaoti_img"></a>
               </div>
               <span><img src="http://127.0.0.1:8095/img/appimg/biaoti/tabbar_shouye0.png" class="s1"></span>
            </div>
            <!-- 标题栏2 -->
            <div><img src="#" class="biaoti2_img" v-for="(item,i) of 6" :key="i"> </div>
            <!-- 导航栏 -->    
            <div class="d_navbar">
               <a href="javascript:;" v-for="(item,i) of navbar" :key="i" class="navbars" :class="i==navbara?'navbara':''"  @click="pitchOn(i)">{{navbar[i]}}</a>
            </div> 
           <div>
              <!-- 根据导航栏的i和ul的j匹配 -->
              <!-- 显示一个ul，其余所有ul都是display：none。给ul设置一个标记，一但匹配到下标就显示 -->
              <ul class="dhl_ul" v-for="(elem,j) of navbar" :key="j" :class="j==navbara?'xs':''">
                 <li class="dhl_li" v-for="(elem,i) of list" :key="i"  >
                     <span class="dhl_sp">仅剩两天</span>
                     <a href="javascript:;">
                        <img :src=elem.my_img class="dhl_img">
                     </a>
                     <p class="dhl_p">
                        <span class="jiage">{{elem.title}}</span> <!--暂时写死11111，等传数据-->
                        活力潮服律动夏日 <span>{{elem.title_price}}</span>
                     </p>
                  </li>
              </ul>
       
           </div>
            面板1
            <div v-for="(item,i) of 100" :key="i" class="dd">ssssssssssssssssssssssssss</div> 
         </mt-tab-container-item>

         <mt-tab-container-item id="fenlei">面板2</mt-tab-container-item>      
         <mt-tab-container-item id="temai">面板3</mt-tab-container-item>   
         <mt-tab-container-item id="gouwuche"> 面板4</mt-tab-container-item>
         <mt-tab-container-item id="user">面板5</mt-tab-container-item>  
         </mt-tab-container>   
      <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
         <mt-tab-item id="shouye" @click.native="select(0)">
            <tabbar01 
            tu1="http://127.0.0.1:8095/img/appimg/index_img/tabbar_shouye1.png"
            tu2="http://127.0.0.1:8095/img/appimg/index_img/tabbar_shouye0.png"
            :panduan="torf[0].s"
            ></tabbar01>
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
export default {
   created(){
          //导航栏发送ajax请求
           var url="index/brand"
           this.axios.get(url).then(result=>{           
             console.log(result);
             this.list=result.data;
             console.log(this.list);
          })
   },
   data(){
      return{
         action:true,
         active:"shouye",
         torf:[{s:true},{s:false},{s:false},{s:false},{s:false},{a:false}],
         navbar:["精选","运动","服饰","潮鞋","全球购","儿童"],   
         list:[],      
         navbara:0
      };
   },
   components:{
      "hed":Hed01,
      "tabbar01":Tabbar01
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
      },pitchOn(n){//导航栏点击事件
         for(var i=0;i<this.navbar.length;i++){
            if(n==i){
               this.navbara=i;
            }
         }
      }

   }
}

</script>
<style>
/* 最外层父元素 */
*{margin:0;padding:0;}
.index_content{
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   overflow:hidden;
}
/* 第二层父元素 */
.index02{overflow:auto;}
.dd{text-align:center;}
.fumianban{
   padding-top:70px;
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
   border:1px solid #000;
}
.biaoti_img1{width:180px;height:90px;border:1px solid #000;}
.biaoti2_img{
   width:120px;
   height:129px;
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
.dhl_ul{
   position:relative;
   list-style:none;
   display:none;
}
.xs{display:block;}
.dhl_sp{
   display:block;
   width:80px;
   height:30px;
   text-align:center;
   font-size:8px;
   line-height:30px;
   color:white;
   background-color:rgba(0,0,0,0.5);
   position:absolute;
   right:0;
}
.dhl_img{
   width:100%;
   height:175px;
}
.jiage{color:red;font-size:17px;margin-right:15px;}
.dhl_p{
   margin:8px 0 0 8px;
   font-size:12px; 
   color:slategray;
}
</style>

