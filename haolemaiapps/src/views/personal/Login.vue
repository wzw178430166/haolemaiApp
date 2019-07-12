<template>
    <div class="login">
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
                <!--图像验证码-->
                <label  for="iconcode">
                    <div class="login_input_wrap">
                        <input id="iconcode" class="register_input" type="tel" placeholder="请输入验证码">
                        <span class="del_input"><b></b></span>
                        <span class="registericon">
                            <img src="" id="getcode_img">
                        </span>
                    </div>
                </label>
            </div>
            <div class="loginnowbox">
                <div class="loginmethod">
                    <div class="loginshow" id="passwordway">
                        <span class="current">
                            <font>
                                <font>密码登录</font>
                            </font>
                        </span>
                    </div>
                    <div class="loginshow" id="mobileway">
                        <span>
                            <font>
                                <font>手机验证登录</font>
                            </font>
                        </span>
                    </div>
                </div>
                <span class="msgreply"></span>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;"></font>
                </font>
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
    /* 登录页样式*/
    .login{
        width:100%;
    }
    /*头部样式 */
    header{
        display:flex;
        justify-content: space-between;
        background-color:#f5f5f5;
    }
    header span{
        display:block;
    }
    header span:nth-child(2){
        padding-top:1.1rem;
        font-size: .9rem;
        color: #444;
    }
    main{
        min-height: 63.8368rem;
        padding-top:.5rem;
    }
    /*登录框样式*/
    .login_box{
        width:100%;
        height:40rem;
        margin-top:.5rem;
    }

    /*共同样式样式*/
    .login_input_wrap{
        width:100%;
        height: 2.25rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
    }
    .register_input{
    height:1.95rem;
    padding: .15rem 0 .15rem .8rem;
    color: #333;
    font-size: .7rem;
    border:0px;
    outline:none;
    }
    /*登录框样式*/
    #uname{
        width: 10.25rem;
    }
    /*密码框样式*/
    #upwd{
        width: 13rem;
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
    #iconcode{
        width: 6.15rem;
    }
    .registericon{
        position:absolute;
        top: 0;
        right: .5rem;
        width: 4.3rem;
        height: 2.25rem;
        background-color: #fff;
        z-index: 3;
    }
    #getcode_img{
        margin-top: .25rem;
        width: 4rem;
        height:2rem;
    }
</style>