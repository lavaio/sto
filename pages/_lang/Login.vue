<template>
	<div class="login">
		<div class="login_wrap">
			<h3 class="login_wrap_h3">Login</h3>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="100px" class="demo-ruleForm">
				
				<el-form-item label="手机号" prop="phone">
					<el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				
				<el-form-item label="验证码" prop="captcha" style="position: relative">
					<el-input v-model="ruleForm.captcha" placeholder="请输入验证码"></el-input>
					<div class="captcha_wrap">
						<img :src="captchaUrl" @click="getCaptcha()"/>
					</div>

				</el-form-item>
				
				<el-form-item label="手机验证码" prop="code" style="position: relative">
					<el-input v-model="ruleForm.code" placeholder="请输入手机验证码"></el-input>
					<p :class="phoneValidate && ruleForm.captcha ?'code_wrap allowed_p': 'code_wrap not_allowed'"   @click="getPhoneCode">获取验证码</p>
				</el-form-item>
				<div :class="phoneValidate && ruleForm.captcha && ruleForm.code?' button_wrap button_allowed': 'button_wrap button_not_allowd'"  @click="submitForm('ruleForm')">
					login
				</div>
			</el-form>
		</div>
	</div>
</template>
<script>
var qs = require('qs');
export default {
		layout: "login",
	  data() {
			var validatePhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入手机号码'));
        }
        setTimeout(() => {
					if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))) {
						this.phoneValidate = false;

						callback(new Error("手机号码格式不对"));
					} else{
						this.phoneValidate = true;
						callback();
					}
        }, 500);
      };
			
      return {
				captchaUrl: "",
				phoneValidate: false,
				captchaId: "",
				token: "",
        ruleForm: {
          captcha: '',
					code: "",
					phone: "",
        },
        rules: {
					phone: [
            { required: true,validator:validatePhone, trigger: 'change' }
					],
          captcha: [
            { required: true, message: '验证码不能为空', trigger: 'change' },
            // { min: 3, max: 5, message: '长度在 3 到 7 个字符', trigger: 'change' }
          ],
					code: [
            { required: true, message: '手机验证码不能为空', trigger: 'change' }
          ],
          
        }
      };
    },
	mounted(){
		this.getCaptcha();
	},
	methods:{
		getCaptcha(){
			this.$axios.$post(`/cpi/captcha`).then(data=>{
				if (data.code == 200) {
					this.captchaUrl = data.data.CaptchaURL;
					this.captchaId = data.data.ID;
				}
			}) 
		},
		
		phoneLogin(){
			let phone = this.ruleForm.phone;
			this.$axios.$post("/cpi/auth/phonelogin",{
				phone: phone,
				code: this.ruleForm.code
			}).then((data)=>{
				if (data.code == 200) {
						window.localStorage.removeItem("token")
						window.localStorage.setItem("token",data.data)
						this.token = data.data;
						if (this.$store.state.locale === 'en') {
							this.$router.push('/')
						} else {
							this.$router.push('/zh/')
						}
				} else {
						this.$message.error("登录失败");
				}
			})
		},
		getPhoneCode(){
			let code = this.ruleForm.captcha;
			let phone = this.ruleForm.phone;
			if (this.phoneValidate && this.ruleForm.captcha ) {
				this.$getPhoneCodeApi.$post(`/cpi/auth/code?id=${this.captchaId}&digits=${code}`,qs.stringify({ 'phone': phone })).then(data=>{
					if (data.code == 200) {
						this.$message.success('验证码发送成功');
					} else {
						this.$message.error(data.msg);
					}
				}) 
			}
			

		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.phoneLogin();
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~assets/styles/mixins.styl'
	/deep/.el-form-item
		margin-bottom 35px
		border-bottom 1px solid #EBEEFD
	/deep/ .el-input__inner
		border none
		padding 0
		background-color #FCFCFF
	/deep/.el-form-item__label
		color #000000
		fontMedium()
	.login
		margin 0 auto
		position absolute
		left 0
		top 0
		right 0
		bottom 0
		background #F8F9Fd
	.login_wrap
		width 400px
		height 510px
		background  #FCFCFF
		box-shadow 0px 8px 30px 0px rgba(24,98,204,0.09)
		border-radius 10px
		position absolute
		left 0
		top 0
		bottom 0
		right 0
		padding 48px 24px 61px
		margin auto
		.login_wrap_h3
			color #27ACE0
			fontMedium()
			font-size 20px
			text-align center
			margin-bottom 40px
		.captcha_wrap
			background #EBEEFD
			width 100px
			height 46px
			position absolute
			top -9px
			right 0
			border-radius 4px
			img 
				max-width 100%
				min-width 100%
				min-height 100%
				max-height 100%
				object-fit contain
		.code_wrap
			position absolute
			top 0px
			right 8px
		.not_allowed
			cursor not-allowed
			color #B4B6BF
		.allowed_p
			color #27ACE0
			cursor pointer
		.button_wrap
			width 100%
			height 50px
			border-radius 4px
			color #fff
			text-align center
			display flex
			justify-content center
			align-items center
			font-size 16px
			fontMedium()
			margin-top 96px
		.button_allowed
			cursor pointer
			background linear-gradient(90deg,rgba(49,205,186,1) 0%,rgba(40,170,226,1) 100%)
		.button_not_allowd
			background #B4B6BF
			cursor not-allowed
		





</style>