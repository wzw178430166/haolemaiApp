<template>
  <div id="a1">
    <div id="a3">
      <img src="http://127.0.0.1:8095/img/cart/back.png">
      <div class="wo_">我的购物车</div>
      <img src="http://127.0.0.1:8095/img/cart/goindex.png">    
     </div>

      <div id="contents" v-if="open.length==0">
     <div class="nasp">现在登录同步电脑和手机购物车中商品&nbsp;&nbsp;&nbsp;&nbsp;<span>登录</span></div> 
    <div class="er_">
     <img class="im" src="http://127.0.0.1:8095/img/cart/cart.png" style="width:150px;height:100px">
     <div class="kong">购物车还空着呢，快去挑选吧</div>
     <a href="javascript:;" class="tiao">去首页</a>
     <a href="javascript:;" class="zhuan_">我的收藏</a>
     <div class="weini_">
       <img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px">
       <span>为你推荐</span>
       <img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px;margin-left:5px" >
     </div>
    </div>
    </div>

    <div class="qqqqq" v-else>
      <div class="shangping">
      <div class="cont_tit">
        <span>减满</span>
        <span>满2件件200元，还差1件享受此活动。</span>
        <span><img src="../../img/back.png" alt="" class="tit_back"></span>
      </div>
         <div class="cont_conts">
           <div>
        <mt-checklist v-model="val5" :options="['已选(0)']">
           </mt-checklist> 
           </div>
           <div>
           <img :src="open[0].img" alt="" class="div_img">
           </div>
           <div class="shpping_item">
            <p>{{open[0].lname}}</p>
            <p>尺寸：{{open[0].size}}</p>
            <p>￥{{open[0].price}}</p>
           </div>
           </div> 
     </div>
    </div>
      <div class="jiesuan" v-if="open.length!=0">
        <div class="xuanze">
            <mt-checklist v-model="val5" :options="['已选(0)']">
           </mt-checklist> 
        </div>
         <div class="jiesuan_text">
           <!-- <button @click="handleCheck">读取复选框内容</button> -->
            <div class="jisuan_bott">
              <p>结算：</p>
              <p>优惠：</p>
            </div>
            <div>
              <mt-button @click.native="handleCheck" size="large" class="btnsaa">去结算</mt-button>
            </div>
           </div>
      </div>
    <!-- 图片鞋子商品 -->
    <div class="_xie">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/487.jpg" style="width:150px;height:150px">
         <p>c|eef&nbsp;男式&nbsp;满天星兵马俑侃<br>爷椰子鞋男女情侣款高品质<br>潮鞋飞织鞋</p>
          <p class="meiyuan">¥238</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4871.jpg" style="width:150px;height:150px">
         <p>c|eef&nbsp;男式&nbsp;休闲鞋韩版低帮<br>板鞋男鞋时尚皮鞋软面牛<br>皮加布板鞋</p>
          <p class="meiyuan">¥278</p>
        </div>
    </div> 
    <div class="xie_">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4872.jpg" style="width:150px;height:150px">
         <p>c|eef&nbsp;男式&nbsp;皮鞋男牛皮鞋底<br>软面皮单层牛皮男鞋一脚<br>潮鞋飞织鞋</p>
          <p class="meiyuan">¥268</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4873.jpg" style="width:150px;height:150px">
         <p>ELLE&nbsp;HOMME&nbsp;中性&nbsp;出差旅行<br>轻便方向轮拉杆箱</p>
          <p class="meiyuan">¥369</p>
        </div>
    </div>   
     <div class="_zi">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4874.jpg" style="width:150px;height:150px">
         <p>Gress.&nbsp;Dina&nbsp;女式&nbsp;网红拖鞋<br>女夏时尚外穿新款平底百<br>搭方扣糖果色一字学生凉拖室外</p>
          <p class="meiyuan">¥69</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4875.jpg" style="width:150px;height:150px">
         <p>Gress.Dina&nbsp;女式&nbsp;平底凉鞋<br>女夏季2019新款绕脚装饰<br>亮面韩版百搭罗马女凉鞋</p>
          <p class="meiyuan">¥69</p>
        </div>
     </div>   
      <div class="zi_">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4876.jpg" style="width:150px;height:150px">
         <p>男式&nbsp;LUCASSALUCASSA2019<br>年新款时尚潮流常规青年短<br>袖T恤男</p>
          <p class="meiyuan">¥79</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4877.jpg" style="width:150px;height:150px">
         <p>男式&nbsp;LUCASSALUCASSA2019<br>夏季新款男士印花短袖T恤</p>
          <p class="meiyuan">¥79</p>
        </div>
     </div>   
      <div class="_baise">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4878.jpg" style="width:150px;height:150px">
         <p>男式&nbsp;LUCASSALUCASSA2019<br>年新款时尚潮流常规青年短<br>袖T恤男</p>
          <p class="meiyuan">¥69</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4879.jpg" style="width:150px;height:150px">
         <p>男式&nbsp;LUCASSALUCASSA2019<br>夏季新款男士印花短袖T恤</p>
          <p class="meiyuan">¥59</p>
        </div>
     </div>
      <div class="baise_">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4880.jpg" style="width:150px;height:150px">
         <p>男式&nbsp;PPZPOLO衫男短袖翻领<br>t恤韩版潮流2019&nbsp;&nbsp;男士上衣</p>
          <p class="meiyuan">¥89</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4881.jpg" style="width:150px;height:150px">
         <p>男式&nbsp;&nbsp;PPZ2019夏季抓痕印花<br>短袖T恤男</p>
          <p class="meiyuan">¥89</p>
        </div>
     </div>
       <div class="_shangyi">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4882.jpg" style="width:150px;height:150px">
         <p>PPZ&nbsp;&nbsp;男式&nbsp;&nbsp;工装短裤男潮牌宽<br>男士休闲运动五分裤中裤</p>
          <p class="meiyuan">¥79</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4883.jpg" style="width:150px;height:150px">
         <p>女式&nbsp;&nbsp;SK-IISK-II&nbsp;<br>神仙水330</p>
          <p class="meiyuan">¥1499</p>
        </div>
     </div>
     
      <div class="shangyi_">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4884.jpg" style="width:150px;height:130px">
         <p>UUG&nbsp;&nbsp;女式&nbsp;&nbsp;新款女凉鞋<br>AYDEN&nbsp;&nbsp;||轻盈固脚软木垫女<br>鞋罗马风夹趾人字凉鞋</p>
          <p class="meiyuan">¥725</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4885.jpg" style="width:150px;height:130px">
         <p>VVG&nbsp;&nbsp;女式&nbsp;&nbsp;VVC防晒衣时<br>尚拼接长款蓝色</p>
          <p class="meiyuan">¥199</p>
        </div>
     </div>
      <div class="_qiu">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4886.jpg" style="width:150px;height:130px">
         <p>Adidas阿迪达斯&nbsp;&nbsp;LOGO花<br>休闲双肩背包</p>
          <p class="meiyuan">¥158</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4887.jpg" style="width:150px;height:130px">
         <p>男式&nbsp;&nbsp;阿迪达斯猎鹰&nbsp;<br>Predator&nbsp;&nbsp;19+FG运动足球鞋</p>
          <p class="meiyuan">¥455</p>
        </div>
     </div>
      <div class="_qiu">
       <div>
         <img src="http://127.0.0.1:8095/img/cart/4888.jpg" style="width:150px;height:130px">
         <p>Adidas阿迪达斯&nbsp;&nbsp;LOGO花<br>休闲双肩背包</p>
          <p class="meiyuan">¥169</p>
        </div>
        <div>
         <img src="http://127.0.0.1:8095/img/cart/4889.jpg" style="width:150px;height:130px">
         <p>男式&nbsp;&nbsp;阿迪达斯猎鹰&nbsp;<br>Predator&nbsp;&nbsp;19+FG运动足球鞋</p>
          <p class="meiyuan">¥1799</p>
        </div>
      </div>
      

  </div>

  
</template>

<script>
export default {
    data(){
        return {
         open:[],
         val5:[]
        }
    },
    methods: {
        handleCheck(){
        console.log(this.val5);
     } 
          
        
    },
    mounted() {
     
    },
    created(){
      //加载后发送请求购物车商品
          //请求购物车商品
             this.axios.get('shopping/cart?id=1').then(res=>{ 
               this.open=res.data.data;
                console.log(res);
             }).catch(err=>{console.log(err)})
    }
     
}
</script>

<style scoped>
.jisuan_bott p{margin-top: .3rem;}
.div_img{width:100%;height: 100%;}
.btnsaa{width:100%;height: 100%;background: #D70057;color: white;}
.jiesuan_text div:nth-child(1){width:60%;background: blue;}
.jiesuan_text div:nth-child(2){width:40%;background: brown;}
.jiesuan_text{width:60%;border:1px solid red;display: block;height: 4rem;display: flex;}
.jiesuan .xuanze{width:40%;background: red;height: 4rem;}
.jiesuan{box-sizing:border-box;display:flex;width:100%;height: 4rem;border: 1px solid red;position: fixed;bottom: 0;}
.cont_conts div:first-child{width:10%}
.cont_conts div:nth-child(2){width:30%}
.shpping_item{width:60%;border:1px solid red;text-align: left;}
.shpping_item p:nth-child(2){color: #666;}
.shpping_item p:nth-child(3){color: #D70057;}
.cont_conts{width:100%;height: 6rem;border:1px solid blue;display:flex;box-sizing: border-box;}
.tit_back{transform: rotate(180deg);height: 2.5rem;}
.cont_tit{width:100%;height: 2.5rem;
 display:flex;justify-content:space-around;
 align-items:center;background: #F5F5F5;
}
.cont_tit span:first-child{font-size:.6rem;color:crimson;border:1px solid red;padding:5px
 
}
.cont_tit span:nth-child(2){font-size:.8rem;color:#000;}

.qqqqq{
  width:100%;
  height: 400px;
  border:1px solid red;
  overflow: auto;
}
#contents{
  width:100%;border:1px solid red;
}
#a1{
text-align:center;
width:100%;
height:auto;
margin:0 auto;

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
._xie{
display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333; 
}
.meiyuan{
 margin-left:-130px;
 font-size:18px;
 color: #d70057;
}

.xie_{
  display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333;
}
._zi{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333; 
}
.zi_{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333; 
}
._baise{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333;  
}
.baise_{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333; 
}
._shangyi{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333;   
}
.shangyi_{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333; 
}
._qiu{
 display:flex;
 justify-content:space-around;
 font-size:14px;
 color:#333;  
}
</style>
