<template>
    <div class="main" @touchmove="moves"><!-- :style="{width:innerWidth+'px'}"-->
        <titleback msg="商品详情" class="titleback"></titleback>
        <carousel :list=pics></carousel>
        <div class="title_meg">
            <div class="title_msleft">
            <span class="title_mes">￥{{products.price}}</span><s class="title_sld">${{products.original}}</s> 
            </div>
             <div class="title_msright"><!--2019/8/14 23:59 -->
                <span>距结束</span><span class="jieshuee" id="reverse" :data-time="new Date(products.shelf_time).toLocaleString()">
                <em></em>天
                <em>00</em> <span>:</span>
                <em>00</em> <span>:</span>
                <em>00</em> 
                </span>
            </div>
        </div>

          <div class="xiangs">
              <p>{{products.lname}}</p> 
              <p><span>{{products.title}}</span><span>{{products.subtitle}}</span></p>
          </div>
          <div class="diyie">
              <p><span>{{products.title_sec}}</span>{{products.subtitle_sec}}</p>
          </div>
            <p class="refund"><span><img src="http://127.0.0.1:8095/img/details/remind.png" alt=""></span>{{products.promise}}</p>
          <div class="paddins"></div>
          <!-- 规格 -->
          <div class="specification" :style="{'padding-bottom':sizenum.num}">
              <div class="colors">
                  <p class="colors_p">颜色</p>
                  <ul class="specification_img">
                      <li v-for="(elem,i) of img" :key='i' :class="imgs==i?'spimg_item':''" @click="gotoimg(elem,i)"><img :src="elem.img" alt=""></li>
                    
                  </ul>
              </div>
            <!-- 尺寸 -->
                <div class="measure">  
                    <p class="me-p"><span>尺寸</span><router-link to="#" class="measur_rout">尺码对照表</router-link> </p>
                    <div class="measure_item">
                        <ul>
                            <li v-for="(elem,i) of sizes" :key="i" :class="action==i?'mead_active':''" @click="goto(elem,i)">
                                    {{elem}}
                            </li>
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
                     <div @click="active='tab1'" :style="active=='tab1' ?'border-bottom:1px solid #d70057;color:#d70057':''">图文详情</div>
                     <div @click="active='tab2'" :style="active=='tab2' ?'border-bottom:1px solid #d70057;color:#d70057':''">评论晒单(0)</div>
                 </div>
                 <div>
                 <!-- 父面板 -->
                  <mt-tab-container v-model="active">
                 <!-- 子面板 -->
                 <mt-tab-container-item id="tab1">
                         <graphic :list=specs[0] :dibu=dibu></graphic>
                 </mt-tab-container-item>
                 <mt-tab-container-item id="tab2">
                  <div style="width:100%;height:500px;">
                         <evaluate></evaluate>
                        </div>
                     </mt-tab-container-item>
                 </mt-tab-container>
                 </div>

            
             </div>
                  <!-- 底部导航栏 http://127.0.0.1:8095/shopping/cart-->
                <div class="tab_button">  <!--  http://127.0.0.1:8095/img/details/cart.png -->
                                <!-- http://127.0.0.1:8095/img/details/keep.png -->
                   <div>
                       <router-link to="/cart"><img src="http://127.0.0.1:8095/img/details/cart.png"><p>购物车</p>
                       </router-link>
                      <mt-badge size="small" class="item_ee" color="red">{{$store.getters.getCartCount}}</mt-badge>
                   </div>
                   <div>
                       <router-link to="#"><img src="http://127.0.0.1:8095/img/details/keep.png"><p>收藏</p></router-link>
                       
                       </div>
                   <div @click.prevent="adds"><span class="spantext">加入购物车</span></div>
                </div>
          <!-- <div style="width:100%;height:500px;background:red;"></div> -->
    </div>
</template>

<script>  ////<router-link :to="`/Details/details?lid=`+lid">加入购物车</router-link>
import TitleBack from "../../components/TitleBack"  //引入子组件中的头部标题TitleBack
import Carousel from "../../components/Carousel"  //引入子组件中的轮播图组件Carousel
import Graphic from "./Graphic"  //引入子组件 图文详情
import Evaluate from "./Evaluate"  //引入子组件 热门评论
export default {    //打包后直接可在服务器host里运行
    data(){
        return {
          //  selected:"加入购物车", //底部导航   
            //鞋子尺寸码数分别有哪些
            action:0,   //切换尺寸的样式
            imgs:0,
           sizenum:{num:'7rem'},
            active:'tab1', //图片评论
            listj:[
                  {img:'http://127.0.0.1:8095/img/lunbotu/1.jpg'},
                  {img:'http://127.0.0.1:8095/img/lunbotu/2.jpg'},
                  {img:'http://127.0.0.1:8095/img/lunbotu/3.jpg'},
                   {img:'http://127.0.0.1:8095/img/lunbotu/4.jpg'},
                    {img:'http://127.0.0.1:8095/img/lunbotu/5.jpg'}
            ],
           // innerWidth:window.innerWidth,
            products:{},  //这是商品详情数据
            pics:[],    //商品轮播图片
            specs:[],  //商品规格
            size:[] ,  //鞋子的码数
            dibu:[],   //底部图片
            sizes:[],   //对象转数组
            lidss:[],
            img:[],
          //  lid:[]   //商品编号

          }
    },
    methods: {
         moves(){  //手指滑动屏幕触发11
             console.log(1111);
         },
         goto(n,index){
             sessionStorage.setItem("size",n);
                for(var i=0;i<this.sizes.length;i++){
                 if(index==i){
                     this.action=index;  // 再设置一个action可以设置成双向绑定的效果
                 }
             }
         },
         gotoimg(n,index){
             console.log(n);
             var img=n.img;  // 图片的url地址
               sessionStorage.setItem("img_url",img);
    for(var i=0;i<this.img.length;i++){
                 if(index==i){
                     this.imgs=index;    
                 }
             }
         },
           adds(){    //保存尺寸在客户端方便取出来     //加入购物车
           //  var flag=true;
          var  size=sessionStorage.getItem("size");
           var  img_url=sessionStorage.getItem("img_url");
           var phone=localStorage.getItem("phone");
          
         if(size!=undefined&&img_url!=undefined){
          var price=this.products.price;
          var lname=this.products.lname;
          var subtitle=this.products.subtitle;
          var title_sec=this.products.title_sec;
          var title=this.products.title;
          //lid   price  size  http://127.0.0.1:8095/shopping/add?lid=5&price=66&size=66
         //  console.log(size);
           //  console.log(price);
            //   console.log(this.lidss);
         
             //加入购物车
       this.axios.get('shopping/add',{params:{lid:this.lidss,price:price,size:size,img:img_url,lname:lname,subtitle:subtitle,title_sec:title_sec,title:title,phone:phone}}).then(res=>{
           console.log(res)
                this.$toast({
                    message:"加入购物车成功",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                    className:"mytoast",//添加样式
                  //  iconClass:"iconfont icon-food-cake"
                    });
                     this.$store.commit("increment");
       }).catch(err=>{console.log(err);
       });
               }else{
               //请选择码数  做一个弹框用mint-ui
              this.$toast({
                    message:"请先选择规格",//内容
                    position:"middle",   //位置
                    duration:3000,     //时间
                    className:"mytoast",//添加样式
                  //  iconClass:"iconfont icon-food-cake"
                    });
             //  console.log('请选择码数');
               }
         },
           //封装Promise方法请求 //多个请求造成回调地狱 所有使用这个封装的方法

          /*  getCount(type){ //type是请求中的prams传过去的值。
                 return new Promise( //中没有return，只能靠开门解决之前的open
                     function(resolve,reject){
                      
                          this.axios.get(
                     "/product_list",{
                         params:{type} //本来的c参数换成函数的参数type,一样参数和属性的就写一个就可以了
                     }
                 ).then(res=>{
                     resolve(res.data.count); //总数累加
                     //开门（传参） 在下面的 count接着总数累加
              //Promise中没有return 使用resolve抛出
                    // total+=res.data.count;
                 });
                     }
                 )
             },*/
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
       "carousel":Carousel,   //轮播的子组件
       "graphic":Graphic,   //图文详情
       "evaluate":Evaluate  //热门评价
    },
    mounted() { //加载后发ajxa请求     //this.$router.push('/main?lid=10');
        this.brinobj("reverse");
          //console.log(this.$route.query.lid);
     //发送请求商品的详情信息
    this.axios.get('details/',{params:{lid:this.$route.query.lid}}).then(res=>{
        console.log(res.data)
         this.products=res.data.products;
         //this.lid
         this.pics=res.data.pics;
         this.specs=res.data.specs;
        this.size=res.data.size;
        this.dibu=res.data.dibu;
        this.lidss=this.$route.query.lid;
         var sizes=res.data.size; //把对象转为数组
         var img=res.data.img;  //把图片对象转为数组
        // this.lid=res.data.lid;
       //  console.log(lid)
        var arr=[];
        // var arrimg=[];
        //  for(var i in img){
        //     arrimg.push(img[i]);
        // }
        this.img=img;
        //尺寸
        for(var i in sizes[0]){
            arr.push(sizes[0][i]);
        }
        this.sizes=arr;
         });
   Date.prototype.toLocaleString = function() {
     //  console.log(this.getDate());
          return this.getFullYear() + "/" + (this.getMonth() + 1) + "/" + this.getDate() + "/ " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
         }
    },

    props:["lid"], //准备接参数  这是地址栏传的lid  222222

    created(){  
           
 
  },
}
</script>

<style scoped>
.item_ee{position: relative;top:-3rem;left:1.2rem}
  .spantext{color:white;}
      /*mint-ui弹出请选择尺码的样式*/
    .mytoast{
  background-color:#fff !important;
  color:#e4393c !important;
  font-size:19px !important;
  border:1px solid #333  !important; 
}
    /*底部导航*/
    .tab_button{width:100%;height:3.5rem;position:fixed;bottom: 0;display:flex;}
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
    /*尺寸样式*/
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