<template>
	<div>
		<div class="form">
			<div class="form_wrap">
				<h3 class="form_h3">
					{{$t("issue.title")}}
				</h3>
				<div class="form_box">
					<p class="label">{{$t("issue.name")}}</p>
					<el-input v-model="name" placeholder="name"></el-input>
					<p class="label">{{$t("issue.email")}}</p>
					<el-input v-model="email" placeholder="Contact email"></el-input>
					<p class="label">{{$t("issue.info")}}</p>
					<el-input type="textarea" :autosize="{ minRows: 6, maxRows: 8}" v-model="desc" placeholder="We will get back to you as soon as possible…"></el-input>
					<div class="button_div">
						<!-- <span class="span_button"  @click="subscribe">SEND</span> -->
						<span class="buttonStyle"  @click="subscribe">{{$t("issue.send")}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="contact" id="contact">
			<div class="contact_wrap">
				<h3 class="contact_h3">{{$t("issue.contact")}}</h3>

				<div class="contact_list">
					<div class="contact_div">
						<div class="contact_div_left">
							<img src="./../../assets/images/one.png" />
						</div>
						<div class="contact_div_right">
							<p class="contact_div_right_p">{{$t("index-form.first_icon")}}</p>
							<!-- <p class="contact_div_right_p">https://twitter.com/LavaConsortium</p> -->
						</div>
					</div>
					<div class="contact_div marginTop">
						<div class="contact_div_left">
							<img src="./../../assets/images/two.png" />
						</div>
						<div class="contact_div_right">
							<p class="contact_div_right_p">{{$t("index-form.second_icon")}}</p>
							<!-- <p class="contact_div_right_p">Spreadsheets</p> -->
						</div>
					</div>
					<div class="contact_div marginTop">
						<div class="contact_div_left">
							<img src="./../../assets/images/three.png" />
						</div>
						<div class="contact_div_right">
							<p class="contact_div_right_p">{{$t("index-form.third_icon")}}</p>
							<p class="contact_div_right_p">info@securityin.io</p>
						</div>
					</div>
					<div class="contact_div marginTop">
						<div class="contact_div_left">
							<img src="./../../assets/images/four.png" />
						</div>
						<div class="contact_div_right">
							<p class="contact_div_right_p">{{$t("index-form.fourth_icon")}}</p>
							<!-- <p class="contact_div_right_p">https://twitter.com/LavaConsortium</p> -->
						</div>
					</div>
					

				</div>
			</div>
		</div>			
	</div>
</template>
<script>
export default {
	data(){
		return {
       
				name: '',
				email: '',
				desc: '',
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
         
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
	},
	methods:{
		async subscribe(){
				console.log(this.name)
				console.log(this.email)
				console.log(this.desc)
				const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
				if (this.email === '') {
					this.$message.error('请输入邮箱地址')
					return
				}
				if (!reg.test(this.email)) {
					this.$message.error('请输入正确的邮箱格式')
					return
				}
			

				// /api/contents?type=Announcement
				// const res = await this.$axios.post('/v1/email/add', { email: this.email })
				// if (res !== undefined) {
				// 	this.$message.success('订阅成功')
				// }
			},
	}
	
}
</script>
<style lang="stylus" scoped>
	/deep/.el-input__inner
		height 56px
		margin-bottom 32px
		line-height 14px
		line-height 56px
		border-radius 8px
		border 1px solid #343744
	/deep/.el-textarea__inner
		border 1px solid #343744
		border-radius 8px


	@import '~assets/styles/mixins.styl'
	.form
		width 100%
		background #FBFBFE
		padding 80px 0 133px
		.form_wrap
			width 60%
			margin 0 auto 
			.form_h3
				color #343744
				font-size 24px
				fontBold()
				text-align center
				margin-bottom 54px
			.form_h3::before,.form_h3::after
				content "" 
				background #27ACE0 
				display inline-block
				width 36px
				height 4px
				margin-bottom 6px
			.form_h3::before
				margin-right 12px
			.form_h3::after
				margin-left 12px
			.form_box
				width 60%
				margin 0 auto
				.label
					color #343744
					font-size 16px
					fontMedium()
					margin-bottom 16px
				.button_div
					margin 47px auto 0
					text-align center
					.span_button
						height 54px
						line-height 54px
						padding 0px 60px
						background rgba(55,148,252,1)
						box-shadow 0px 12px 20px 0px rgba(27,107,222,0.37)
						border-radius 28px
						display inline-block
						margin-top 47px
						color white
						fontMedium()
					.span_button:hover
						background #1A2E44

	.contact
		background url("./../../assets/images/stobg.png") no-repeat 
		background-size cover
		padding 64px 0 135px
		.contact_wrap
			width 50%
			margin 0 auto
			.contact_h3
				fontBold()
				font-size 24px
				text-align center
				color #FFFFFF
				margin-bottom 76px
			.contact_list
				display flex
				justify-content space-between
				width 410px
				flex-direction column
				margin 0 auto
				.marginTop 
					margin-top 46px
				.contact_div
					display flex
					justify-content space-between
					.contact_div_left
						width 50px
						img 
							min-width 100%
							min-height 100%
							max-width 100%
							max-height 100%
							object-fit contain
					.contact_div_right
						margin-left 25px
						width 326px
						display flex
						justify-content center
						flex-direction column
						.contact_div_right_p
							font-size 18px
							fontMedium()
							color #FFFFFF




		



</style>