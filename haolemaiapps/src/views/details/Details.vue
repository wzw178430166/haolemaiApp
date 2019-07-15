<template>
    <div class="main" :style="{width:innerWidth+'px'}" @touchmove="moves">
        <titleback msg="商品详情" class="titleback"></titleback>
        <carousel :list=listj></carousel>
        <div class="title_meg">
            <div class="title_msleft">
            <span class="title_mes">￥119</span><s class="title_sld">￥499</s> 
            </div>
            <div class="title_msright">
                <span>距结束</span><span class="jieshuee" id="reverse" data-time="2019/7/14 23:59">
                <em></em>天
                <em>00</em> <span>:</span>
                <em>00</em> <span>:</span>
                <em>00</em> 
                </span>
            </div>
        </div>

          <div class="xiangs">
              <p>女式&nbsp;卡骆驰女士都会街头帆布便鞋</p>
              <p><span>限时特卖</span><span>【特价且部分下单再享8折】CROCS清仓</span></p>
          </div>
          <div class="diyie">
              <p><span>满折</span>【下单8折】crocs度假开启 >></p>
          </div>
            <p class="refund"><span><img src="http://127.0.0.1:8095/img/details/remind.png" alt=""></span>此商品仅支持退货，不支持换货。</p>
          <div class="paddins"></div>
          <!-- 规格 -->
          <div class="specification" :style="{'padding-bottom':sizenum.num}">
              <div class="colors">
                  <p class="colors_p">颜色</p>
                  <ul class="specification_img">
                      <li class="spimg_item"><img src="http://127.0.0.1:8095/img/details/1.png" alt=""></li>
                      <li><img src="http://127.0.0.1:8095/img/details/2.png" alt=""></li>
                      <li><img src="http://127.0.0.1:8095/img/details/3.png" alt=""></li>
                      <li><img src="http://127.0.0.1:8095/img/details/4.png" alt=""></li>
                       <li><img src="http://127.0.0.1:8095/img/details/3.png" alt=""></li>
                      <li><img src="http://127.0.0.1:8095/img/details/4.png" alt=""></li>
                  </ul>
              </div>
            <!-- 尺寸 -->
                <div class="measure">  
                    <p class="me-p"><span>尺寸</span><router-link to="#" class="measur_rout">尺码对照表</router-link> </p>
                    <div class="measure_item">
                        <ul>
                            <li class="mead_active">w5</li>
                             <li>w6</li>
                              <li>w7</li>
                               <li>w8</li>
                                <li>w9</li>
                                 <li>w6</li>
                              <li>w7</li>
                               <li>w8</li>
                                <li>w9</li>
                                       <li>w7</li>
                        </ul>
                    </div>
                </div>
          </div>
            <div class="paddins"></div>

            <div class="mores">
                <img src="http://127.0.0.1:8095/img/details/corss.png" alt="" style="width:2.5rem;height:2.25rem;margin-right:.5rem;"><span>CROCS卡骆驰</span><router-link to="#" style="float:right;margin-right:2rem;text-decoration: none;color:#666">更多></router-link>
            </div>
             <div class="paddins"></div>
             <!-- 图文详情 -->
             <div class="discuss">
                 
                 <div class="disc_item">
                     <div @click="active='tab1'">图文详情</div>
                     <div @click="active='tab2'">评论晒单(0)</div>
                 </div>
                 <div>
                 <!-- 父面板 -->
                  <mt-tab-container v-model="active">
                 <!-- 子面板 -->
                 <mt-tab-container-item id="tab1">
                         <graphic></graphic>
                 </mt-tab-container-item>
                 <mt-tab-container-item id="tab2">
                  <div style="width:100%;height:500px;">
                         <evaluate></evaluate>
                        </div>
                
                     </mt-tab-container-item>
                 </mt-tab-container>
                 </div>

            
             </div>
                  <!-- 底部导航栏 -->
                <div class="tab_button">  <!--  http://127.0.0.1:8095/img/details/cart.png -->
                                <!-- http://127.0.0.1:8095/img/details/keep.png -->
                   <div><router-link to="#"><img src="http://127.0.0.1:8095/img/details/cart.png"><p>购物车</p></router-link></div>
                   <div><router-link to="#"><img src="http://127.0.0.1:8095/img/details/keep.png"><p>收藏</p></router-link></div>
                   <div><router-link to="#">加入购物车</router-link></div>
                </div>
          <!-- <div style="width:100%;height:500px;background:red;"></div> -->
    </div>
</template>

<script>
import TitleBack from "../../components/TitleBack"  //引入子组件中的头部标题TitleBack
import Carousel from "../../components/Carousel"  //引入子组件中的轮播图组件Carousel
import Graphic from "./Graphic"  //引入子组件 图文详情
import Evaluate from "./Evaluate"  //引入子组件 热门评论
export default {    //打包后直接可在服务器host里运行
    data(){
        return {
          //  selected:"加入购物车", //底部导航   
            //鞋子尺寸码数分别有哪些
            sizenum:{num:'5rem'},
            active:'tab1', //图片评论
            listj:[
                  {img:'http://127.0.0.1:8095/img/lunbotu/1.jpg'},
                  {img:'http://127.0.0.1:8095/img/lunbotu/2.jpg'},
                  {img:'http://127.0.0.1:8095/img/lunbotu/3.jpg'}
            ],
            innerWidth:window.innerWidth
        }
    },
    methods: {
         moves(){
             console.log(1111);
         },
        			//限时购
			 brinobj(id){
  var timer = null;//这里设置time为null，用于下面来清除计时器
        var obj = document.getElementById(id)//获取到放置时间数据的span的id
        timer = setInterval(function(){//设置定时器，来更新时间
                var a = new Date((obj.getAttribute("data-time"))).getTime();
                //上面这一步可能比较复杂，我们首先来看obj.getAttribute("data-time")这一句。这个是用来获取指定标签的data-time属性，
 //即我们要使用的到期时间，然后来看new Date().getTime(),这一句是用来获取我们所设置到期时间的时间戳，用于下面的计算，这个获取的是固定的数值
                var b = new Date().getTime();//这是获取当前时间，是一个不固定的数值
                var d = 0,s=0,h=0,m=0;//定义变量
                var ee = obj.getElementsByTagName("em")//获取布局中的em标签用于存取数据
                d = Math.floor((a - b)/1000/60/60/24);//获取剩余天数
                h = Math.floor((a - b)/1000/60/60%24);//获取剩余小时
                m = Math.floor((a - b)/1000/60%60);//获取剩余分钟
                s = Math.floor((a - b)/1000%60);//获取剩余秒数
                //中间这块区域是用来判断，当前时间数值小于10的时候给他前面加个0，这里可以根据具体情况可加可不加，以下同理
                if(d < 10){
                    d = "0" + d
                }else if(d < 0){
                    d = 0
                }
                if(h < 10){
                    h = "0" + h
                }else if(h < 0){
                    h = 0
                }
                if(m < 10){
                    m = "0" + m;
                }else if(m < 0){
                    m = 0;
                }
                if(s < 10){
                    s = "0" + s;
                }else if(s < 0){
                    s = 0;
                }
                ee[0].innerHTML = d;
                ee[1].innerHTML = h;
                ee[2].innerHTML = m;
                ee[3].innerHTML = s;
                if(a <= b){//当我们的时间到期的时候，清除计时器，然后把当前标签的内容设置为0；
                    clearInterval(timer);
                    obj.innerHTML="";
                //    ee[0].innerHTML = 00;
                //    ee[0].innerHTML = 00;
                 //   ee[1].innerHTML = 00;
                //    ee[2].innerHTML = 00;
                }
            },1000)
            }
	  
    
    
    },
    components:{
       "titleback":TitleBack , //注册子组件
       "carousel":Carousel,
       "graphic":Graphic,   //图文详情
       "evaluate":Evaluate  //热门评价
    },
    mounted() { //加载后发ajxa请求     //this.$router.push('/main?lid=10');
        this.brinobj("reverse")
    },
    created(){  //相当于window.onload
    window.addEventListener("resize",()=>{
      this.innerWidth=window.innerWidth;
    })
  },
}
</script>

<style scoped>
    /*底部导航*/
    .tab_button{width:100%;height: 3.5rem;position: fixed;bottom: 0;display:flex;}
    .tab_button div:nth-child(1){width:25%;box-sizing: border-box;text-align: center;background-color: #FFFFFF;border-top:1px solid #e8e8e8;border-right: 1px solid #e8e8e8;}
     .tab_button div:nth-child(1) a{font-size: .75rem;color:#7A7D81;text-decoration: none;padding-top: .63rem;}
     .tab_button div:nth-child(1) a img{width:1.9rem;height: 1.7rem;margin-top: .3rem;}

     .tab_button div:nth-child(2){width:25%;box-sizing: border-box;background-color: #FFFFFF;text-align: center;border-top: 1px solid #e8e8e8;}
      .tab_button div:nth-child(2) a{font-size: .75rem;color:#7A7D81;text-decoration: none;padding-top: .63rem;}
      .tab_button div:nth-child(2) a img{width:1.9rem;height: 1.7rem;margin-top: .3rem;}
      .tab_button div:nth-child(3){width:50%;background-color: #D70057;box-sizing: border-box;text-align: center;line-height: 3.2rem;}
      .tab_button div:nth-child(3) a{text-decoration: none;color:white;font-weight: bold;}
    /*商品信息*/
    /*评论*/
    .disc_item{height: 3rem;width:100%;}
    .disc_item div{text-align:center;width:50%;height: 3rem;line-height: 3rem;float: left;box-sizing: border-box;}
    .discuss{width:100%;}
     /* 更多 */
     .measur_rout{float: right;color: #D70057;font-weight: bold;font-size:.6rem;text-decoration: none;margin-right: 2rem;}
     .mores{width: 100%;height: 2.25rem;line-height: 2.25rem;padding-left: 1rem;font-size: .75rem;}
    /* 尺寸 */
    .measure_item ul{width:100%;height: 3rem;list-style: none;margin-top: .75rem;padding-bottom: 1.5rem;}
    .measure_item ul li{width:3.5rem;height: 2.5rem;line-height:2.5rem;list-style: none;float: left;background-color: #F4F4F4;text-align: center;margin-right: .5rem;border-radius: 10%;margin-top: 1rem;}
    .measure_item ul .mead_active{background: #D70057!important;}
    .measure{width:100%;clear: both;}
    .measure .me-p{padding-top: 2rem;}
    /* 规格 */
    img{width:100%;vertical-align: top;}
    .specification_img .spimg_item{border:1px solid #D70057;}
    .specification_img{width: 100%;list-style: none;}
    .specification_img li{float: left;margin-right: 1rem;width:2.4rem;height: 2.4rem;border:1px solid #c3c3c3;}
     .specification_img li img{width:2.4rem;height: 2.4rem;}
    .specification{width:100%;padding-left: 1rem;}
     .specification .colors{color: #333; font-size: 1rem;}
     .colors .colors_p{padding:1.5rem 0 1rem 0;}
     /* 退货 */
    .diyie{padding-left: 1rem;width:100%;}
    .diyie p:first-child{ color: #B1B1B3; font-size: .8rem;height: 3.5rem;line-height: 3.5rem;}
        .main .diyie p:first-child span:first-child{padding: 3px 4px;background-color: #D70057;font-size: .65rem;color:white;border-radius: 3px;}
          .refund{font-size: .65rem;color:#000;height: 3.5rem;line-height: 3.5rem;background-color: #F8F8F8;padding-left: 1rem;}
           .refund span img{width:1rem;height: 1rem;vertical-align: -1px;margin-right: .8rem;}
       
     .main .xiangs{padding-left:1rem;width:100%;border-bottom: 1px solid #E0E0E0;padding-bottom: 1rem;}
     .main .xiangs p:first-child{line-height: 1rem;
    color: #000;
    font-size: 1rem;}
      .main .xiangs p:nth-child(2){line-height: 1rem;margin-top: 2rem;font-size: 1rem;}
       .main .xiangs p:nth-child(2) span:first-child{padding: 3px 4px;background-color: #D70057;font-size: .65rem;color:white;border-radius: 3px;}
         .main .xiangs p:nth-child(2) span:nth-child(2){font-size: .85rem;color:#B1B1B3;}
        /* .main{width:100%;}*/
    /*头部*/
    .titleback{position: fixed;top:0;z-index: 100;width:100%;}
     /*结束倒计时*/
   #reverse em{background-color: black;color: white;padding: 3px;font-style: inherit;font-size:.6rem;}
    #reverse em:first-child{margin-left: 10px;}
   .title_meg{width:100%;height: 3rem;display: flex;line-height: 3rem;margin-top: 1rem;}
   .title_msleft{width:40%;color:#D70057;padding-left:1rem;}
   .title_msright{line-height: .8rem;text-align: right;padding-right: 1rem;
    color: #666;
    font-size: .6rem;width:60%;height: 3rem;line-height: 3rem;}
   .title_mes{font-size: 1.3rem;padding-right: 1rem;}
   .title_sld{color:#c3c3c3;font-size: .5rem;}
   .paddins{width:100%;height: 1rem;background-color:#EEEEEE;}
</style>