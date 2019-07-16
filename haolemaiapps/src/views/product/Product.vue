<template>
    <div>
       <titleBack msg="商品列表"></titleBack>
</div>
</template>

<script>
//两个列表都需要一个固定定位  <router-link :to="`/Details/details?lid=`+lid">加入购物车</router-link>
//1.第一个列表：五个选项，默认，销量，价格，折扣，筛选，先写出静态，前四个是点击功能显示，筛选是点击右边显示一个div
//1.1：右边显示的div列表，6块功能，分类>(6)、品牌>(1)、性别>(2)、价格区间>(3)、尺寸>(6)、仅看有货商品(复选框)，下边两个按钮；重置和确定
//2.第二个列表：三个选项，分类，品牌，尺寸，每次点击都显示下面div
//主要内容的商品列表：div>div*2 1.div>img 2.div>span*4
//


import TitleBack from "../../components/TitleBack"  //引入子组件中的头部标题TitleBack
export default {
    data(){
        return {
            lid:1,
        }
    },
    created(){
        this.commlist();
    },
    components:{
        "titleBack":TitleBack
    }
}
</script>

<style scoped>
/* 三个导航栏样式 */
.min_ul{
    width:100%;
    height:20rem;
    overflow:auto;
    list-style:none;
    background:white;
    display:none;
}
.min_ul2{
    display:block;
}
.min_li{
    width:45%;
    height:2rem;
    float:left;
    line-height:2rem;
    padding-left:1rem;
}

/* 最外层父元素 */
.content{
  box-sizing:border-box;
  padding-top:151px;
}
/* 灰色斗篷样式 */
.back{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
}
/* .back1{
    width:100% !important;
} */
/* 列表样式 */
.liebiao{
    position:fixed;
    top:3.3rem;
    width:100%;
    background:white;
    z-index:999;
}
/*列表1样式*/
.list{
    width:100%;
    height:3rem;
    line-height:3rem;
    text-align:center;
    box-sizing:border-box;
    
}
.list1{
    /*移动端宽高不能写死，用rem或者百分比来设置比较合理*/
    display:inline-block;
    box-sizing:border-box;
    width:16%;
    height:2rem;
    text-align:center;
    line-height:2rem;
    margin:0 2%;
    }

.list1_1{
    color:blueviolet;
    border-bottom:2px solid blueviolet;
}
/* 列表2样式 */
.list2{
    display:inline-block;
    text-align:center;
    line-height:2rem;
    box-sizing:border-box;
    width:25%;
    height:2rem;
    margin:0.5rem 4%;
}
.list2_1{
    border:1px solid blueviolet;
    color:blueviolet;
    border-bottom:0;
    border-radius:2px;
}
/* 隐藏小boss样式 */
.minBoss{
   /* display:none; */
   position:absolute;
   top:5.6rem;
}
/* 隐藏boss的样式 */
.hideboss{
    position:fixed;
    top:0;
    right:0;
    width:0;
    height:100%;
    background-color:white;
    z-index:3000;
    box-sizing:border-box;
    transition:all .3s linear;
    }
.hideboss1{ width:85%;}
/* 内容爹的样式 */
.father{
    height:37rem;
    
    overflow:auto;/*scroll这个属性不管溢出不溢出都添加滚动条,用auto不溢出没有滚动条*/
}
/* 小孩子内容块的样式 */
.biaoti{
    padding:1rem 0 0 0.6rem;
    height:2.4rem;
    line-height:2.4rem;
    font-size:16px;
    font-weight:500;
    color:#999;
    }
.fatherMin{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    }
/* 选项框样式 */
.child{
  display:block;
  text-decoration:none;
  text-align:center;
  line-height:2rem;
  width:30%;
  height:2rem;
  margin:0 0 0.6rem 2%;
  border-radius:5px;
  border:1px solid #000;
 }
/* 筛选表单样式 */
.shaixuan{
    display:flex;
    flex-direction:row;
    box-sizing:border-box;
    justify-content:center;
    padding:7px;
    margin:4px 0;
}
.shaixuan input{
    width:40%;
    height:1.5rem;
    text-align:center;
    border:0;
    outline:none;
}
/* 存货样式 */
.cunhuo{
    line-height:3rem;
    height:3rem;
}
/* 存货checkbox样式 */
.btn{
    /* 先把按钮隐藏 */
    visibility:hidden;
    position:absolute;
}
.label{
    display:inline-block;
    width:1.2rem;
    height:1.2rem;
    border-radius:50%;
    background:#ccc;
    position:relative;
    border:1px solid #bbb;
    vertical-align:text-top;
    margin:0 0.5rem;
}
.btn:checked+label:before{
    position:absolute;
    display:block;
    content:"";
    width:1.2rem;
    height:1.2rem;
    border-radius:50%;
    background:blueviolet;
}
.btn:checked+label:after{
    position:absolute;
    right:0.4rem;
    top:0.2rem;
    display:block;
    content:"";
    width:0.2rem;
    height:0.5rem;
    z-index:90;
    border-bottom:0.1rem solid #fff;
    border-right:0.1rem solid #fff;
    transform:rotate(45deg)
 }
/* 两个按钮 */
.anniu{
    display:inline-block;
    box-sizing:border-box;
    width:50%;
    height:3rem;
    border:0;
    background:white;
    outline:0;
}
.anniu2{
    background-color:blueviolet;
}
/* 商品列表样式 */
.listbox1{
   float:left;
   box-sizing:border-box;
   width:48%;
  margin:0 0 0.2rem 0.2rem;
  text-align:left;
}
.listcontent:after{
    display:block;
    content:"";
    clear:both;
}
.listbox2{
    width:100%;
   
}
.listbox2>img{
    width:11rem;
    height:auto;
}
.listbox2>p{
    width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size:0.8rem;
    color:#888;
    margin-bottom:0.2rem;
}
.listbox2>span{
    padding-left:0.2rem;
    color:#444;
    font-size:0.8rem;
}
/* 价格样式 */
.jiage:first-child{
    color:blueviolet;
    font-size:1.4rem;
    font-family:"黑体";
    font-weight:600;
}
.jiage+span{
    color:blueviolet;
    border:1px solid blueviolet;
}
.tj{
    display:block;
    margin-top:0.5rem;
    line-height:1.5rem;
    width:30% !important;
    height:1.5rem !important;
    background:blueviolet;
    color:wheat !important;
    text-align:center;
}



</style>