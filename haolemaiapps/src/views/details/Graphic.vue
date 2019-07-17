<template>
   <div style="width:100%;">       
       <div class="tables">       
 <table style="border-collapse: collapse">
            <tbody>
                            <tr>
                    <td width="30%">商品编号</td>
                    <td>{{list.product_ID}}</td>
                </tr> 
                            <tr>
                    <td width="30%">性别</td>
                    <td>{{list.sex}}</td>
                </tr> 
                            <tr>
                    <td width="30%">鞋面材质</td>
                    <td>{{list.vamp}}</td>
                </tr> 
                            <tr>
                    <td width="30%">鞋底材质</td>
                    <td>{{list.texture}}</td>
                </tr> 
                            <tr>
                    <td width="30%">鞋帮</td>
                    <td>{{list.uppers}}</td>
                </tr> 
                            <tr>
                    <td width="30%">闭合方式</td>
                    <td>{{list.closed}}</td>
                </tr> 
                            <tr>
                    <td width="30%">功能</td>
                    <td>{{list.actions}}</td>
                </tr> 
                            <tr>
                    <td width="30%">适合场地</td>
                    <td>{{list.sites}}</td>
                </tr> 
                            <tr>
                    <td width="30%">季节</td>
                    <td>{{list.season}}</td>
                </tr> 
                            <tr>
                    <td width="30%">温度</td>
                    <td>{{list.temperature}}</td>
                </tr> 
                            <tr>
                    <td width="30%">应季月份</td>
                    <td>{{list.seasonal}}</td>
                </tr> 
                        </tbody>
        </table>     
        </div>  
          <!-- 图片    -->
          <div class="list_img">
              <ul>
                  <li><img src="http://127.0.0.1:8095/img/details/8.png" alt=""></li>
                    <li><img src="http://127.0.0.1:8095/img/details/9.png" alt=""></li>
                      <li><img src="http://127.0.0.1:8095/img/details/10.png" alt=""></li>
                        <li><img src="http://127.0.0.1:8095/img/details/11.png" alt=""></li>
                          <li><img src="http://127.0.0.1:8095/img/details/12.png" alt=""></li>
                            <li><img src="http://127.0.0.1:8095/img/details/13.png" alt=""></li>
                              <li><img src="http://127.0.0.1:8095/img/details/14.png" alt=""></li>
              </ul>
          </div>
    </div>     
</template>
<script>
export default {
    props:{
        list:{default:""} 
    },
    data(){
        return {
          
        }
    }
}
</script>
<style scoped>
    .tables{width:100%;}
    .tables table{width:100%;}
    .tables table tr td{height: 2.5rem;line-height: 2.5rem;border-top:1px solid #e7e7e7;border-bottom: 1px solid #e7e7e7;color:#818181;font-size: 1rem;padding-left: 1rem;}
    img{width:100%;}
    .list_img{width:80%;margin: 0 auto;}
    .list_img ul{list-style: none;}
    .list_img img{width:100%;height: 100%;}
</style>
