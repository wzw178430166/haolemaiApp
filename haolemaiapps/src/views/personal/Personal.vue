<template>
    <div>
       我是个人中心 <span @click="add">点我获取</span>
    </div>
</template>

<script>
export default {
   methods:{
       add(){
           console.log(111);
         this.axios.get(
             "product_list",
             {params:{lid:1}}
            ).then(result=>{
             console.log(result)
         })
        	// var xhr=new XMLHttpRequest();
			// console.log(xhr);
			// //4.接收响应数据,开启监听器
			// xhr.onreadystatechange=function(){
			// 	//这个监听会被调用4次，第4次是我们需要的,使用if把第4次筛选出来
			// 	if(xhr.readyState==4&&xhr.status==200){
			// 		//只有在readystate为4，响应传输完整
			// 		//status是响应状态码，为200，是响应成功
			// 		var result=xhr.responseText;
			// 		console.log(result);
			// 	}
			// }
			// //2.创建请求,打开连接
			// xhr.open("get","http://127.0.0.1:8095/product_list",true);
			// //3.发送请求
            // xhr.send(null);
            
            
        }
    },
    data(){
        return {

        }
    },
}
</script>

<style scoped>
    
</style>