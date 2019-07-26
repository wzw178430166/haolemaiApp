<template>
 <div id="b1">
    <div class="b2">
      <img src="http://127.0.0.1:8095/img/cart/back.png">
      <div class="hao_">我的好乐买</div>
      <img src="http://127.0.0.1:8095/img/cart/goindex.png">    
     </div>
     <div class="le_">
         <table></table> 
         <div class="_mai"><img src="http://127.0.0.1:8095/img/cart/userphoto.png" style="width:60px;height:60px"></div>
         <span>15797684265</span> 
    </div>
    <div class="dingdang">我的订单</div>
    <hr>
    <ul class="fa_">
       <li><img src="http://127.0.0.1:8095/img/cart/200.png"><p>待支付</p></li>
      
       <li><img src="http://127.0.0.1:8095/img/cart/201.png"><p>待发货</p></li>
      
       <li><img src="http://127.0.0.1:8095/img/cart/202.png"><p>待签收</p></li>
       
       <li><img src="http://127.0.0.1:8095/img/cart/203.png"><p>退货换货</p>
      </li> 
       <div class="qing"></div>
    </ul> 
    <div class="hui"></div> 
     <ul class="cang_">
       <li><img src="http://127.0.0.1:8095/img/cart/300.png"><p>我的收藏</p></li>
      
       <li><img src="http://127.0.0.1:8095/img/cart/301.png"><p>优惠卷</p></li>
      
       <li><img src="http://127.0.0.1:8095/img/cart/302.png"><p>收货地址</p></li>
       
       <li><img src="http://127.0.0.1:8095/img/cart/303.png"><p>实名认证</p>
      </li> 
       <div class="chu_"></div>
    </ul> 
     <ul class="cangzhu">
       <li><img src="http://127.0.0.1:8095/img/cart/304.png"><p>账号安全</p></li>
      
       <li><img src="http://127.0.0.1:8095/img/cart/305.png"><p>帮助中心</p></li>
       <div class="dong_"></div>
     </ul>
    <div class="dengdeng">
      <span @click="onclick">退出登录</span>
    </div>   
 </div>
 
</template>

<script>
export default {
    data(){
        return {
         
        }
    }, 
   methods:{
      onclick:function(){
        //  this.showcom=true; 
        this.$router.push("/Login")
      } 
    //    add(){
    //        console.log(111);
    //      this.axios.get(
    //          "product_list",
    //          {params:{lid:1}}
    //         ).then(result=>{
    //          console.log(result)
    //      })
    //     	// var xhr=new XMLHttpRequest();
	// 		// console.log(xhr);
	// 		// //4.接收响应数据,开启监听器
	// 		// xhr.onreadystatechange=function(){
	// 		// 	//这个监听会被调用4次，第4次是我们需要的,使用if把第4次筛选出来
	// 		// 	if(xhr.readyState==4&&xhr.status==200){
	// 		// 		//只有在readystate为4，响应传输完整
	// 		// 		//status是响应状态码，为200，是响应成功
	// 		// 		var result=xhr.responseText;
	// 		// 		console.log(result);
	// 		// 	}
	// 		// }
	// 		// //2.创建请求,打开连接
	// 		// xhr.open("get","http://127.0.0.1:8095/product_list",true);
	// 		// //3.发送请求
    //         // xhr.send(null);
            
            
    //     }
    }
   
}
</script>

<style scoped>
#b1{

text-align:center;
width:100%;
height:auto;
margin:0 auto;
text-align:center;
} 
.b2{
display:flex;
flex-wrap:nowrap; 
justify-content:space-between;
background-color:#f5f5f5;
} 
.hao_{
margin-top:13px;    
} 
.le_{
width:100%;
height:120px;
background-color:#e0b5eb;    
}  
._mai{
 margin-top:33px;
 margin-left:50px;
width:60px;
height:60px;
border-radius:50%;
border:2px solid #fff;
background-color:white;
} 
._mai>img{
 display:block;   
} 
.le_>span{
 display:block;   
 margin-left:-20px;
 margin-top:-45px;
 color:#fff;
 font-size:18px;   
}
.dingdang{
 margin-left:-210px;
 margin-top:20px;
 font-size:18px;
 color:#333;   
}
hr{
 margin-top:5px;   
}
.fa_>li{
float:left;
padding:20px ;
}
.hui{
 width:100%;
 height:10px; 
background:#ddd; 
}
.qing{
 clear:both;   
}
.fa_{
list-style:none;    
}


.cang_>li{
float:left;
padding:16px ;
}

.chu_{
 clear:both;   
}
.cang_{
list-style:none;    
}
.cangzhu{
  list-style:none;  
}
.cangzhu>li{
float:left;
padding:16px;
}
.dong_{
clear:both;    
}
.dengdeng{
width:100%;
height:40px;
background-color:#D70057;
margin-top:30px;
}
.dengdeng>span{
 color:white;
 display:inline-block;
 margin-top:10px;   
}
</style>


