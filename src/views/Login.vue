<template>
    <div>
        <nav-bar>
            <div slot="center">注册</div>
        </nav-bar>
        <div class="login">
            <van-cell-group>
                <!-- 输入任意文本 -->
                <van-field v-model="username" label="用户名" clearable required @blur="userinp(username)"
                    :error-message="userBleen" ref="one" placeholder="请输入用户名 纯汉字" />
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field v-model="tel" type="tel" label="手机号" clearable required @blur="inp(tel)"
                    :error-message="phoneBleen" ref="two" placeholder="请输入手机号" />
                <!-- 输入密码 -->
                <van-field v-model="password" type="password" label="密码" clearable required @blur="passinp(password)"
                    ref="three" :error-message="passBleen" placeholder="请输入密码，最少八位" />
            </van-cell-group>
            <van-cell is-link @click="showPopup">注册并登录</van-cell>
            <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '20%'}">
                注册成功 1s后自动跳转</van-popup>

        </div>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'Login',
        components: {
            NavBar
        },
        data() {

            return {
                tel: '',
                username: '',
                password: '',
                phoneBleen: '',
                userBleen: '',
                passBleen: '',
                show: false,
                cocoxuan: '',
                one: false,
                two: false,
                three: false

            }
        },
        methods: {
            btn() {
                window.sessionStorage.setItem('token', '完成了注册')
                this.$router.push('/home')
            },
            inp(value) {
                const regMobile = /^(0|86|17951)?(13[0-9]|15[01223456789]|17[678]|18[0-9]|14[5-7])[0-9]{8}$/

                if (regMobile.test(value)) {
                    this.phoneBleen = ''
                    this.one = true
                } else { this.phoneBleen = "验证失败" }
            },
            userinp(value) {
                const regname = /^[\u4e00-\u9fa5]{2,6}$/;
                if (regname.test(value)) {
                    this.userBleen = ''
                    this.two = true
                } else {
                    this.userBleen = "验证失败"
                }
            },
            passinp(value) {
                const regadmin = /^[0-9a-zA-Z.,;'/]{5,}$/;
                if (regadmin.test(value)) {
                    this.passBleen = ''
                    this.three = true
                } else { this.passBleen = "验证失败" }
            },

            showPopup() {
                if (this.one && this.two && this.three) {
                    this.show = true
                    window.sessionStorage.setItem('token', 'jiazailemiyao')

                    const timer = setInterval(() => {
                        this.$router.push('/home')
                        clearInterval(timer)
                    }, 1000);
                } else {
                    alert('请先完成注册')
                }


            }
        }

    }
</script>

<style scoped>
    .nav-bar {
        background-color: #ff8198;
        color: #fff;
    }

    .login {

        position: absolute;
        top: 43.8px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;
        background-color: #f4f4f4;
    }

    .van-popup {
        justify-content: center;
        display: flex;
        align-items: center;
    }
</style>