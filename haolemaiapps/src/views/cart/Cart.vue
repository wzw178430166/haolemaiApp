<template>
  <div id="a1">
    <div id="a3">
      <img src="http://127.0.0.1:8095/img/cart/back.png" @click="goback">
      <div class="wo_">我的购物车</div>
      <router-link to="/HomeIndex"><img src="http://127.0.0.1:8095/img/cart/goindex.png"></router-link> 
     </div>
<div class="nasp" v-if="open.length==0&&code!=1">现在登录同步电脑和手机购物车中商品&nbsp;&nbsp;&nbsp;&nbsp;<span><router-link to="/Login">登录</router-link></span></div> 
      <div id="contents" v-if="open.length==0">
     
    <div class="er_">
     <img class="im" src="http://127.0.0.1:8095/img/cart/cart.png" style="width:150px;height:100px">
     <div class="kong">购物车还空着呢，快去挑选吧</div>
     <router-link to="/HomeIndex" class="tiao">去首页</router-link>
     <a href="javascript:;" class="zhuan_">我的收藏</a>
     <div class="weini_">
       <img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px">
       <span>为你推荐</span>
       <img src="http://127.0.0.1:8095/img/cart/xiexian.png" style="width:20px;margin-left:5px" >
     </div>
    </div>
    </div>

    <div class="qqqqq" v-else>
     <div class="selectAll">
       全选<input type="checkbox" @change='selectAll'>
     </div>
      <div class="shangping" v-for="(elem,i) of open" :key="i">
      <div class="cont_tit">
        <span>{{elem.title_sec}}</span>
        <span>{{elem.subtitle}}</span>
        <span><img src="../../img/back.png" alt="" class="tit_back"></span>
      </div>
         <div class="cont_conts">
           <div>
             <!--复选按钮-->
       <input type="checkbox" v-model="elem.cb" class="fuxuan_ip" checked=true>
           </div>
           <div>
           <img :src="elem.img" alt="" class="div_img">
           </div>
           <div class="shpping_item">
            <p>{{elem.lname}}</p>
            <p>尺寸：{{elem.size}}</p>
            <p>￥{{elem.price}}</p>
             <div class="input_btn" @click="zengjia">
               <button>-</button>
               <span class="spanq">{{n}}</span>
               <button>+</button>
               <mt-button type="default" class="butdel" @click="delItem" :data-lid="elem.lid">删除</mt-button>
             </div>
            
           </div>
           
           </div> 
     </div>
    </div>
     <div class="tuijian" v-if="open.length!=0">
               <img src="../../img/recommend.png" alt="" class="imgte"> <span>为你推荐</span>  <img src="../../img/recommend.png" alt="" class="imgte"> 
     </div>
      <div class="jiesuan" v-if="open.length!=0">
        <div class="xuanze">    
          <mt-checklist
     v-model="val5"
     :options="['已选择(0)']">
    </mt-checklist> 
        </div>
         <div class="jiesuan_text">
           <!-- <button @click="handleCheck">读取复选框内容</button> -->
            <div class="jisuan_bott">
              <p>结算：<span class="text_jie">{{n*open[0].price}}</span></p>
              <p>优惠：<span class="text_suan">3.2</span></p>
            </div>
            <div>
               <router-link to="/indent" class="btnsaa">
              <mt-button @click.native="handleCheck" size="large" class="btnsaa">
               去结算
              </mt-button>
              </router-link>
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
          n:1,    //购物车商品数量
         open:[],    //购物车商品对象
         val5:['已选择(0)'],     //结算按钮
         listsq:{
           val5:['aa'],
           val6:['bb']
         },
         code:''
        }
    },
    methods: {
      zengjia(e){ //点击增加减少数量
          var tar=e.target;
              if(tar.nodeName==="BUTTON"){
                  this.n+=tar.innerHTML=="-"?-1:1;
              }
      },
        handleCheck(){
        console.log(this.val5);
     } 
     ,
     goback(){
       this.$router.go(-1);//返回上一层
     }
     ,
      selectAll(e){  //使用事件对象获得当前的属性 checked
            var cb=e.target.checked;
            //依据状态修改列表cb
            for(var elem of this.open){
                elem.cb=cb;   //因为每个单选框都使用了双向绑定，循环赋值为 全选按钮的checked值切换全选全不选
               
            }
        }     
        ,
        loadMore(){  //加载购物车的数据
         // console.log(111);
            //加载后发送请求购物车商品
          //请求购物车商品
          var phone=localStorage.getItem("phone");
             this.axios.get('shopping/cart',{params:{phone:phone}}).then(res=>{ 
              var  row=res.data.data;
                 for(var item of row){
                    //添加cb属性 ，用在按钮的checked
                    item.cb=false;

                    
                }
                 this.open=row;
                 this.code=res.data.code;
                console.log(res);
             }).catch(err=>{console.log(err)})
        },
               delItem(e){    //删除当前的商品
             //1.获取当前商品id
            var lid=e.target.dataset.lid;
           // console.log(id);
             //2.显示交互确认框
     this.$messagebox.confirm("是否删除指定数据").then(action=>{
          //4.发送ajax删除数据
          var url="shopping/delItem";
          var obj={lid:lid};
           this.axios.get(url,{params:obj}).then(result=>{
               console.log(result);
               this.loadMore();
            //    if(result.data.code==1){
            //        this.list=this.list.slice(1);
            //    }
           });
                       }).catch(err=>{
              // console.log(err);
           });
             //3.如果用户选择“确认"
            
            

             //5.如果用户选择 “取消”
         }
    },
    mounted() {
     
    },
    created(){
      this.loadMore();
    
    }
     
}
</script>

<style scoped>
.imgte{width:15px;height: 15px;}
.tuijian{width:100%;height: 2rem;line-height: 2rem;text-align: center;display: flex;align-items: center;justify-content: center;margin-top: 10px;}
.mint-cell-wrapper{background-color: #FFFFFF;}
.jisuan_bott p{margin-top: .3rem;}
.jisuan_bott .text_jie{color: #f00;}
.jisuan_bott .text_suan{color:#D70057;}
.div_img{width:100%;height: 100%;}
.btnsaa{width:100%;height: 100%;background: #D70057;color: white;}
.jiesuan_text div:nth-child(1){width:60%;background: #FFFFFF;}
.jiesuan_text div:nth-child(2){width:40%;background: #FFFFFF;}
.jiesuan_text{width:60%;border:1px solid #FFFFFF;display: block;height: 4rem;display: flex;}
.jiesuan .xuanze{width:40%;background: #FFFFFF;height: 4rem;}
.jiesuan{box-sizing:border-box;display:flex;width:100%;height: 4rem;border: 1px solid jiesuan;position: fixed;bottom: 0;}
.cont_conts div:first-child{width:10%;display: flex;align-items:center;justify-content: center;}
.cont_conts div:first-child .fuxuan_ip{width:1.3rem;height: 1.3rem;border-radius: 50%;}
.cont_conts div:nth-child(2){width:30%}
.shpping_item{width:60%;text-align: left;position: relative;}
.shpping_item p:nth-child(2){color: #666;}
.shpping_item p:nth-child(3){color: #D70057;}
.shpping_item .input_btn{display:flex;position: absolute;bottom: 0;right: 0;align-items:center;}
.shpping_item .input_btn button:nth-child(1){width:1.5rem;height: 1.5rem;background-color: #D70057;font-size: 1.5rem;color:#000;text-align: center;line-height: 1.3rem;border:0}
.shpping_item .input_btn button:nth-child(3){width:1.5rem;height: 1.5rem;background-color: #D70057;font-size: 1.5rem;color:#000;text-align: center;line-height: 1.5rem;border:0}
.shpping_item .input_btn .butdel{margin-left: 1rem;margin-bottom:1rem;background-color:#FF2A20;color: #f5f5f5; }
.shpping_item .input_btn .spanq{display:inline-block;width:1.5rem;height: 1.5rem;text-align: center;line-height: 1.5rem;border-top:1px solid #666;border-bottom:1px solid #666;box-sizing: border-box;}
.cont_conts{width:100%;height: 6rem;display:flex;box-sizing: border-box;}
.tit_back{height: 1.5rem;vertical-align: -.6rem;}
.cont_tit{width:100%;height: 2.5rem;
 display:flex;justify-content:space-around;
 align-items:center;background: #FFFFFF;
}
.cont_tit span:first-child{font-size:.6rem;color:crimson;border:1px solid red;padding:5px
 
}
.cont_tit span:nth-child(2){font-size:.8rem;color:#000;width:14rem;display: inline-block;height: 40px;line-height:40px;}

.qqqqq{
  width:100%;
  height: 350px;
  overflow: auto;
}
#contents{
  width:100%;
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
