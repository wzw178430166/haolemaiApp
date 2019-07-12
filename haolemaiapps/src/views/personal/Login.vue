<template>
    <div>
    <!--登录页头部-->
        <header>
            <span><a href="javascript:;"><img src="http://127.0.0.1:8095/img/personal/Login/back.png"></a></span>
            <span>登录</span>
            <span><a href="javascript:;"><img src="http://127.0.0.1:8095/img/personal/Login/goindex.png"></a></span>
        </header>
    <!--登录页主体-->
        <main>
            <div class="login_box">
                <!--用户账号-->
                <label for="uname">
                    <div class="login_input_wrap">
                        <input id="uname" class="register_input" type="text" placeholder="用户名/邮箱/手机号">
                        <span class="del_input"><b></b></span>
                    </div>
                </label>
                <!--用户密码-->
                <label for="upwd">
                    <div class="login_input_wrap">
                        <input id="upwd" class="register_input" type="password" placeholder="请输入6-16个字符，数字及字母组合">
                        <span class="toggle_hide_image">
                            <b class="hide"></b>
                        </span>
                    </div>
                </label>
                <!--图像验证码1112223344443335555-->
                <label  for="iconcode">
                    <div class="login_input_wrap">
                        <input id="iconcode" class="register_input" type="tel" placeholder="请输入验证码">
                        <span class="del_input"><b></b></span>
                    </div>
                </label>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    /*所有元素的样式*/
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: '黑体',Arial,SimSun,Helvetica,sans-serif;
    }
    /*头部样式 */
    header{
        display:flex;
        justify-content: space-between;
        background-color:#f5f5f5;;
    }
    header span{
        display:block;
    }
    header span:nth-child(2){
        padding-top:1.1rem;
        font-size: .9rem;
        color: #444;
    }

    /*登录框样式*/
    .login_box{
        width:100%;
    }
    .login_input_wrap{
        width:100%;
        height: 2.25rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
    }
    .register_input{
        width:14.25rem;
        height:1.95rem;
        padding: .15rem 0 .15rem .8rem;
        color: #333;
        font-size: .7rem;
        border:0px;
        outline:none;
    }
    .toggle_hide_image{
        display:inline-block;
        width:1.5rem;
        height:1.5rem;
        position:absolute;
        right:0;
        top:0.7rem;
    }
    .hide{
        display:inline-block;
        width:0.925rem;
        height:0.75rem;
        background-image:url("http://127.0.0.1:8095/img/details/prothumb.png");
        background-repeat: no-repeat;
        background-position: -8.525rem 0rem;
        background-size:12.5rem 12.5rem;
    }
</style>