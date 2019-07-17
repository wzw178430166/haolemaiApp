<template>
    <div class="login">
        <!--登录页头部-->
        <header>
            <span><a href="http://127.0.0.1:8080/#/HomeIndex"><img src="http://127.0.0.1:8095/img/personal/Login/back.png"></a></span>
            <span>登录</span>
            <span><a href="http://127.0.0.1:8080/#/HomeIndex"><img src="http://127.0.0.1:8095/img/personal/Login/goindex.png"></a></span>
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
                    <font style="vertical-align: inherit;">
                        <input type="button" value="登录" class="purplebtn">
                    </font>
                </font>
                <div class="unexcended">
                    <span class="unexc_check">
                        <input type="checkbox" id="free_login" selected class="checkbox">
                        <em class="checkicon">
                            <img src="http://127.0.0.1:8095/img/personal/Login/right.png" alt class="nocheck">
                            <img src="http://127.0.0.1:8095/img/personal/Login/empty.png" alt class="checked">
                        </em>
                    </span>
                    <span>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">
                                一个月之内免登录
                            </font>
                        </font>
                    </span>
                </div>
                <div class="otherabout">
                    <div class="fastlogin">
                        <span>
                            <a href="http://127.0.0.1:8080/#/Register">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">快速注册</font>
                                </font>
                            </a>
                        </span>
                    </div>
                    <div class="forgetpassword">
                        <span>
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">忘记密码</font>
                            </font>
                        </span>
                    </div>
                </div>
                <div class="otherloginways">
                    <div class="waysbody">
                        <div class="flexway">
                            <a href="javaScipt:;">
                                <img src="http://127.0.0.1:8095/img/personal/Login/qqlogo.png">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">QQ</font></font>
                                    </font>
                                </span>
                            </a>
                        </div>
                        <div class="flexway">
                            <a href="javaScipt:;">
                                <img src="http://127.0.0.1:8095/img/personal/Login/wblogo.png">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">微博</font></font>
                                    </font>
                                </span>
                            </a>
                        </div>
                        <div class="flexway">
                            <a href="javaScipt:;">
                                <img src="http://127.0.0.1:8095/img/personal/Login/alipaylogo.png">
                                <span>
                                    <font style="vertical-align: inherit;">
                                        <font style="vertical-align: inherit;">支付宝</font></font>
                                    </font>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>              
            </div>
        </main>
        <!--登录尾部-->
        <footer>
            <div class="otFooter_2">
                <p>
                    <a href="javaScript:;">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">平版电脑</font>
                        </font>
                    </a>
                    <span>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">触屏版</font>
                        </font>
                    </span>
                    <a href="javaScript:;">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">客户端</font>
                        </font>
                    </a>
                </p>
                <p>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">©2007-2019 OkBuy.com津ICP备16005872号-1</font>
                    </font>
                </p>
            </div>
        </footer>
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
        font-family: '黑体',Arial,SimSun,Helvetica,sans-serif;
        text-decoration:none;
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
        padding-top:1.2rem;
        font-size: 1rem;
        color: #444;
    }
    /*主体样式*/
    main{
        padding-top: .5rem;
        overflow: hidden;
        background: #eee;
        min-height: 580px;
    }

    /*输入框样式*/
    .login_box{
        width:100%;
        margin-top:.5rem;
        background-color: #fff;
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
        font-size: .8rem;
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

    /*验证码样式*/
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

    .loginnowbox{
        width:100%;
        padding:0 1rem;
        box-sizing: border-box;
    }
    /*登录方式样式*/
    .loginmethod{
        width:100%;
        height: 2.9rem;
        overflow: hidden;
    }

    /*登录方式样式*/
    .loginshow{
        padding: .95rem 0;
    }
    #passwordway{
        float:left;
    }
    .loginmethod .loginshow .current.current{
        background: url("http://127.0.0.1:8095/img/details/prothumb.png") -11.5rem -2.35rem no-repeat;
        background-size: 12.5rem 12.5rem;
        color: #333;
    }
    /*手机登录方式*/
    #mobileway{
        float:right;
    }
    .loginmethod .loginshow span {
        display: block;
        padding-left: 1.15rem;
        height: 1rem;
        line-height: 1rem;
        background: url("http://127.0.0.1:8095/img/details/prothumb.png") -11.5rem -1.15rem no-repeat;
        background-size: 12.5rem 12.5rem;
        color: #999;
        font-size: .9rem;
    }

    /*隐藏提示文字*/
    .loginnowbox .msgreply {
        display: block;
        line-height: 1.5rem;
        margin-bottom: .5rem;
        color: #ef3d2d;
        font-size: .6rem;
    }

    /*登录按钮样式*/
    .purplebtn {
        width: 100%;
        height: 2.4rem;
        line-height: 2.4rem;
        border-radius: .1rem;
        text-align: center;
        color: #fff;
        background-color: #d70057;
        font-size: .9rem;
        border: 0;
        outline: none;
    }

    /*自动登录样式*/
    .unexcended {
        margin-top: .9rem;
        color: #666;
    }
    .unexc_check {
        position: relative;
        width: .9rem;
        height: .9rem;
    }
    .unexc_check .checkbox {
        position: absolute;
        left: 0;
        top: 0;
        width: .9rem;
        height: .9rem;
        opacity: 0;
    }
    .unexc_check img {
        width: 1rem;
        height:1rem;
    }
    .unexc_check img.checked {
        display: none;
    }

    /*快速注册样式*/
    .loginnowbox .otherabout {
        overflow: hidden;
        padding: 1rem .1rem;
    }
    .loginnowbox .otherabout .fastlogin {
        float: right;
    }
    .otherabout .forgetpassword {
        float: left;
    }
    .loginnowbox .otherabout .fastlogin span {
        display: block;
        padding-left: .8rem;
        height: .8rem;
        line-height: .8rem;
        color: #666;
        font-size: .9rem;
        background: url(http://0.touch.js.al.okbuycdn.com/resources/complete/images/product/prothumb.png) -11.9rem 0 no-repeat;
        background-size: 12.5rem 12.5rem;
    }
    .loginnowbox .otherabout .fastlogin span a{
        color: #666;
    }
    .loginnowbox .otherabout .forgetpassword span {
        display: block;
        height: .75rem;
        line-height: .75rem;
        color: #666;
        font-size: .9rem;
    }

    /*其他登录方式的样式*/
    .otherloginways {
        margin-top: 1.6rem;
    }
    .otherloginways .waysbody {
        margin: 4rem 0 0 0;
        width: 100%;
        height: 2rem;
        font-size: .9rem;
    }
    .otherloginways .waysbody .flexway {
        float: left;
        width: 31%;
        text-align: center;
        border-right: 1px solid #c9c9c9;
    }
    .otherloginways .waysbody .flexway a {
        display: block;
        text-align: center;
        margin: 0 auto;
        color: #666;
    }
    .otherloginways .waysbody .flexway a img {
        width: 1.1rem;
        height:1.1rem;
        vertical-align: middle;
        margin-top: -0.2rem;
    }

    /*尾部样式*/
    footer {
        padding-top: .6rem;
        padding-bottom: .6rem;
        background: #e7e7e7;
    }
    /*设备切换样式*/
    footer p {
        width: 100%;
        text-align: center;
        font-size: .8rem;
        color: #b3b3b3;
        line-height: .9rem;
    }
    footer p a {
        font-size: .9rem;
        color: #b3b3b3;
    }
    footer p span {
        margin-right: .7rem;
        font-size: .9rem;
        color: #c4466c;
        margin-left: .7rem;
    }
</style>