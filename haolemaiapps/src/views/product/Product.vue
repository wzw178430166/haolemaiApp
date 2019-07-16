<template>
    <div>
       <titleBack msg="商品列表"></titleBack>
       <!-- 导航列表 -->
       <div>
           <!-- 第一个列表 -->
           <div>
               <span :class="alter==i?'list1_1':''" v-for="(item,i) of list1" :key="i" class="list1" @click="goto1(i)">{{item}}</span>
           </div>
           <!-- 第二个列表 -->
           <div></div>
       </div>
       <!-- 隐藏的boss -->
       <div class="hideboss">
           <!-- 最大的爹 -->
         <div class="fatherMax">
            <!-- 包裹所有内容的爹 -->
             <div class="father">
                <!-- 六个模块的爹 -->
                <!-- 分类 -->
                <div>
                    <div class="biaoti">
                        <span>分类</span>
                    </div>
                    <div class="fatherMin">
                        <a href="#" class="child" v-for="(elem,i) of 9" :key="i"></a>
                    </div>
                </div>
                <!-- 品牌 -->
                <div>
                    <div class="biaoti">
                        <span>品牌</span>
                    </div>
                    <div class="fatherMin">
                        <a href="#" class="child" v-for="(elem,i) of 1" :key="i"></a>
                    </div>
                </div>
                <!-- 性别 -->
                <div>
                   <div class="biaoti">
                        <span>性别</span>
                    </div>
                    <div class="fatherMin">
                        <a href="#" class="child" v-for="(elem,i) of 2" :key="i"></a>
                    </div>
                </div>
                <!-- 价格区间 -->
                <div>
                    <div class="biaoti">
                            <span>价格区间（元）</span>
                    </div>
                    <div>
                        <div class="shaixuan">
                            <!-- 两个input -->
                            <input type="text" placeholder="最低价">
                            <span>—</span>
                            <input type="text" placeholder="最高价">
                        </div>
                        <div class="fatherMin">
                            <a href="#" class="child" v-for="(elem,i) of 3" :key="i"></a>
                        </div>
                    </div>
                </div>
                <!-- 尺码 -->
                <div>
                    <div class="biaoti">
                        <span>尺码</span>
                    </div>
                    <div class="fatherMin">
                        <a href="#" class="child" v-for="(elem,i) of 15" :key="i"></a>
                    </div>
                </div>
                <!-- 是否存货 -->
                <div class="cunhuo">                
                    <input type="checkbox" id="bt" class="btn">
                    <label for="bt" class="label"></label>
                    <span>仅看有货商品</span>
                </div>
            </div>
            <div>
                <!-- 两个按钮 -->
            </div>
        </div>
       </div>
    </div>
</template>

<script>
//1.第一个列表：五个选项，默认，销量，价格，折扣，筛选，先写出静态，前四个是点击功能显示，筛选是点击右边显示一个div
//1.1：右边显示的div列表，6块功能，分类>(6)、品牌>(1)、性别>(2)、价格区间>(3)、尺寸>(6)、仅看有货商品(复选框)，下边两个按钮；重置和确定
//2.第二个列表：三个选项，分类，品牌，尺寸，每次点击都显示下面div


import TitleBack from "../../components/TitleBack"  //引入子组件中的头部标题TitleBack
export default {
    data(){
        return {
            alter:"",//用来存储改变的值
            list1:["默认","销量","价格","折扣","筛选"],
            
        }
    },methods:{
        goto1(n){
            for(var i=0;i<this.list1.length;i++){
                if(n==i){
                    this.alter=i;
                    console.log(n);//获取每个点击对象的下标，先放置
                }
                if(n==4){
                    console.log("选中");
                    return;
                }
                
            }
        }
    },
    components:{
        "titleBack":TitleBack
    }
}
</script>

<style scoped>
/*列表1样式*/
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
/* 隐藏boss的样式 */
.hideboss{
    position:fixed;
    top:0;
    right:0;
    width:85%;
    height:100%;
    border:1px solid #000;
    background-color:white;
    z-index:3000;
    box-sizing:border-box;
    }
/* 内容爹的样式 */
.father{
    height:37rem;
    border:1px solid #f00;
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
/* 按钮样式 */
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





</style>