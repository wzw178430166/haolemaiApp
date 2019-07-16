<template>
       <div>
    <div class="title_back">
       <router-link  to="/main/stat"><img :src="img_url" /></router-link>
         <span>{{msg}}</span>
         <router-link  to="/HomeIndex"><img :src="img_url2"/></router-link>
    </div>
        </div>
</template>

<script>
export default {  
    data(){         
        return {

        }         
    },  
    props:{
        msg:{default:""},
        img_url:{default:"http://127.0.0.1:8095/img/details/back.png"},
        img_url2:{default:"http://127.0.0.1:8095/img/details/goindex.png"},
        add:{type:Function}
    },
    methods:{
          setActive(e){
              var i=parseInt(e.target.dataset.idx)+1;
              console.log(i);
              this.active="tab"+i;
          }
     }
}
</script>

<style scoped>
    .title_back{width:100%;height: 3.25rem;background-color: #F5F5F5;line-height: 3.25rem;
    display: flex;justify-content: space-between;color:#444;font-size:1rem;
    }
    .mian{width:100%;}
   
</style>