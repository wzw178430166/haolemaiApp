<template>
    <div class="register">
     <!--注册页头部-->
        <header>
            <span><a href="javascript:;"><img src="http://127.0.0.1:8095/img/personal/Login/back.png"></a></span>
            <span>注册</span>
            <span><a href="javascript:;"><img src="http://127.0.0.1:8095/img/personal/Login/goindex.png"></a></span>
        </header>
        <!--注册页主体部-->
        <main>
            <div class="loginfillbox">
                <div class="login-input-wrap" >
                    <input type="tel"  placeholder="请输入11位手机号码" id="mobiletel" class="register-input" onkeyup="value=value.replace(/[^\d]/g,'')">
                    <span class="del-input" id="image-code">
                        <b></b>
                    </span>
                </div>
                <div class="login-input-wrap" id="geticoncode">
                    <input type="text" id="geticoncode" placeholder="请输入图形验证码" class="register-input">
                    <span class="del-input icondel">
                        <b></b>
                    </span>
                    <span class="del-input icondel">
                        <img src="" id="getcode_img">
                    </span>
                </div>
                <div class="login-input-wrap">
                    <input type="tel" id="getmobilecode" placeholder="请输入短信验证码" class="register-input" onkeyup="value=value.replace(/[^\d]/g,'')">
                    <span class="del-input codedel">
                        <b></b>
                    </span>
                    <span>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">发送验证码</font>
                        </font>
                    </span>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
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
     /* 注册页样式*/
    .register{
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
    /*主体部分样式*/
    main{
        min-height: 960px;
        padding-top: .5rem;
        overflow: hidden;
        background: #eee;
    }
    /*注册框样式*/
    .loginfillbox {
        background-color: #fff;
    }
    /*输入框共同样式*/
    .loginfillbox .login-input-wrap {
        height: 2.25rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
    }
    .loginfillbox .login-input-wrap .register-input, .loginfillbox .login-input-wrap .realname-input {
        height: 1.95rem;
        line-height: normal;
        padding: .15rem 0 .15rem .8rem;
        color: #333;
        font-size: .7rem;
        outline:none;
        border:none;
    }

    /*手机框样式*/
    .loginfillbox .login-input-wrap #mobiletel {
        width: 8.8rem;
    }
    .loginfillbox .login-input-wrap .del-input {
        position: absolute;
        top: 0;
        right: 0;
        width: 2.5rem;
        height: 2.25rem;
        background-color: #fff;
        z-index: 3;
        display: none;
    }
</style>