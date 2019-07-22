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
            <!--手机号框-->
            <div class="loginfillbox">
                <mt-field v-model="phone" class="register-input" :attr="{ maxlength: 11 }" placeholder="请输入11位手机号码" type="tel"></mt-field>
             <!--图像验证码框-->
                <mt-field v-model="imageCode" class="register-input"   placeholder="请输入图片验证码" type="tel">
                    <span  @click="refreshCode">
                        <!--<img src="" id="getcode_img">-->
                        <Random-code id="geticoncode" :identifyCode="identifyCode">
                        </Random-code>
                    </span>
                </mt-field>
                 <!--手机验证码框-->
                <mt-field v-model="getmobilecode" class="register-input"   placeholder="请输入手机验证码" type="tel">
                    <span class="getcode" id="registergetcode">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">发送验证码</font>
                        </font>
                    </span>
                </mt-field>
                <!--<label for="mobiletel">
                    <div class="login-input-wrap" >
                        <input type="tel"  placeholder="请输入11位手机号码" id="mobiletel" class="register-input" onkeyup="value=value.replace(/[^\d]/g,'')">
                        <span class="del-input" id="image-code">
                            <b></b>
                        </span>
                    </div>
                </label>
                <label for="geticoncode">
                    <div class="login-input-wrap" id="image-code">
                        <input type="text" id="geticoncode" placeholder="请输入图形验证码" class="register-input">
                        <span class="del-input icondel">
                            <b></b>
                        </span>
                        <span class="registericon">
                            <img src="" id="getcode_img">
                        </span>
                    </div>
                </label>
                <label for="getmobilecode">
                    <div class="login-input-wrap">
                        <input type="tel" id="getmobilecode" placeholder="请输入短信验证码" class="register-input" onkeyup="value=value.replace(/[^\d]/g,'')">
                        <span class="del-input codedel">
                            <b></b>
                        </span>
                        <span class="getcode" id="registergetcode">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">发送验证码</font>
                            </font>
                        </span>
                    </div>
                </label>-->

            </div>
            <div class="loginnowbox">
                <span class="msgreply">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;"></font>
                    </font>
                </span>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">
                        <input type="button" value="注册" @click="register" id="registerbtn" class="purplebtn">
                    </font>
                    <span class="userremind">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">*点击注册代表同意</font>
                        </font>
                    </span>
                    <span class="userremind">
                        <a href="javascript:;">
                            <font style="vertical-align: inherit;">“好乐买软件隐私声明”</font>
                        </a>
                    </span>
                </font>
                <span class="userremind">
                    <font style="vertical-align: inherit;"></font>
                    <a href="javascript:;">
                        <font style="vertical-align: inherit;"></font>
                    </a>
                </span>
                <p class="hreflogin">
                         <a  href="http://127.0.0.1:8080/#/Login">
                         <font style="vertical-align: inherit;">
                             <font style="vertical-align: inherit;">已有账号，去登陆</font>
                         </font>
                    </a>
                </p>
            </div>
        </main>
        <!--注册页尾部-->
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
    import RandomCode from "./Random_code.vue" ; 
export default {
    components:{
        RandomCode
    },
    data() {
        return {
            phone:"",
            imageCode:"",
            getmobilecode:"",
            identifyCodes: "1234567890",
            identifyCode: ""
        }
    },
    methods:{
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ];
            }
            // console.log(this.identifyCode);
            },
        register() {
            var phone=this.phone;
            console.log(phone);
            var imageCode=this.imageCode;
            var getmobilecode=this.getmobilecode;
            var phonereg=/^[1]([3-9])[0-9]{9}$/;
            if(!phonereg.test(phone)){  
                this.$toast("手机号格式不正确");
                return;
            }
            if(imageCode!=this.identifyCode){
                this.$toast("验证码不正确");
                return;
            }
            var url="user/add";
            var obj1={phone:phone};
            this.axios.post(url,{obj1:obj1}).then(result=>{
                if(result[0]<0){
                    this.$toast("该手机号已注册");
                }else{
                    // this.$router.go(-1);
                    this.$router.push("login");
                }
            })
        },
        },
        mounted() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
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
    header span:nth-child(2){
        padding-top:1.2rem;
        font-size: 1rem;
        color: #444;
    }

    /*主体部分样式*/
    main{
        min-height: 630px;
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
     .register-input, .realname-input {
        height: 1.95rem;
        line-height: normal;
        padding-left:.8rem; 
        color: #333;
        font-size: .9rem;
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
    img {
        vertical-align: top;
    }

    /*手机号框样式*/
    .loginfillbox .login-input-wrap #mobiletel {
        width: 8.8rem;
    }
    .login-input-wrap .del-input b {
        display: block;
        margin: .675rem 0 0 .8rem;
        width: .9rem;
        height: .9rem;
        background: url("http://0.touch.js.al.okbuycdn.com/resources/complete/images/product/prothumb.png") -9.75rem 0 no-repeat;
        background-size: 12.5rem 12.5rem;
    }

    /*图片验证码样式*/
     #geticoncode {
        margin-right:-0.3rem;
    }
    .loginfillbox .login-input-wrap .icondel {
        right: 4.7rem;
        width: 2.2rem;
    }
    .login-input-wrap .icondel b {
        margin-left: .7rem;
    }
    .loginfillbox .login-input-wrap .registericon {
        display: block;
        position: absolute;
        top: 0;
        right: .5rem;
        width: 4.3rem;
        height: 2.25rem;
        background-color: #fff;
        z-index: 3;
    }
    .login-input-wrap .registericon img {
        margin-top: .35rem;
        width: 4rem;
    }

    /*短信验证码样式*/
    .loginfillbox .login-input-wrap #getmobilecode {
        width: 8rem;
    }
    .login-input-wrap .codedel {
        right: 5.15rem;
        width: 1.9rem;
    }
    .loginfillbox .login-input-wrap .codedel b {
        margin-left: .5rem;
    }
     .getcode {
        display: block;
        position: absolute;
        top: -1.2rem;
        right: -0.7rem;
        width: 5.1rem;
        height: 2.25rem;
        line-height: 2.25rem;
        text-align: center;
        z-index: 3;
        border-left: 1px solid #e5e5e5;
        color: #d70057;
        font-size: .9rem;
    }

    .loginnowbox{
        padding:0 .5rem;
        margin-top:0.5rem;
    }

    /*提示错误信息样式*/
    .msgreply {
        display: block;
        line-height: 1.5rem;
        margin-bottom: .5rem;
        color: #ef3d2d;
        font-size: .8rem;
    }

    /*注册按钮样式*/
    .purplebtn {
        width: 100%;
        height: 2.2rem;
        line-height: 2.2rem;
        border-radius: .1rem;
        text-align: center;
        color: #fff;
        background-color: #d70057;
        font-size: 0.9rem;
        border: 0;
        outline: none;
    }

    /*提示文字样式*/
    .loginnowbox .userremind {
        display: block;
        margin-top: .75rem;
        color: #666;
        font-size: .9rem;
    }
    .userremind a{
        color:#d70057;
    }

    /*返回登录页样式*/
    .loginnowbox .hreflogin {
        margin-top: .5rem;
        text-align: right;
    }
    .hreflogin a {
        display: inline-block;
        line-height: 1rem;
        color: #316ac0;
        font-size: .9rem;
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