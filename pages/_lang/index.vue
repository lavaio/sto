<template>
	<div class="home">
		<div class="home_banner" id="homeTop">
			<div class="home_banner_p">
					<p class="banner_title">{{$t("home.banner-title")}}</p>
					<p class="banner_describe">{{$t("home.banner-describe")}}</p>
			</div>
		</div>
		<!-- <button style="position: fixed; top: 400;" @click="handleTestMask()">点击效果</button> -->
		<div class="token">
			<h3 class="home_h3">{{$t('home.token-title')}}</h3>
			<div class="token_div js_scroll_show" ref="oneMask">
				<div class="img_div" style="order: -1">
					<img src="./../../assets/images/token_two.png" />
					<div class="token_div_mask">
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>           
					</div>
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-one')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-one-describe')}}</p>
					<p class="token_color_p"></p>
				</div>
			</div>
			<div class="token_div js_scroll_show" ref="twoMask">
				<div class="img_div">
					<img src="./../../assets/images/token_three.png" />
					<div class="token_div_mask">
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>           
					</div>
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-two')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-two-describe')}}</p>
					<p class="token_color_p"></p>
				</div>
			</div>
			<div class="token_div js_scroll_show" ref="threeMask">
				<div class="img_div" style="order: -1">
					<img src="./../../assets/images/token_four.png" />
					<div class="token_div_mask">
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>           
					</div>
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-three')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-three-describe')}}</p>
					<p class="token_color_p"></p>
				</div>
			</div>
			<div class="token_div js_scroll_show" ref="fourMask">
				<div class="img_div">
					<img src="./../../assets/images/token_one.png" />
					<div class="token_div_mask">
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>
						<i></i><i></i><i></i><i></i><i></i>           
					</div>
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-four')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-four-describe')}}</p>
					<p class="token_color_p"></p>
				</div>
			</div>
		</div>
		<!-- <div class="info">
			<h3 class="info_h3">{{$t('home.info-title')}}</h3>
			<p class="info_describe">{{$t('home.info-title-describe')}}</p>
			<p class="button_p">
				<span class="buttonStyle" @click="handleClick"> {{$t('home.info-button')}}</span>
			</p>
		</div> -->
		<div class="fundraise">
			<h3 class="home_h3">{{$t('home.fundraise-title')}}</h3>
			<div class="fundraise_list_div">
				<div class="list margin_bottom">
					<div class="list_img">
						<img src='./../../assets/images/efficiency.png' />
					</div>
					<h3 class="list_info_h3">{{$t('home.fundraise_one_title')}}</h3>
					<div class="list_info">
						<p class="list_info_p">
							{{$t('home.fundraise_one_describe')}}
						</p>
					</div>
				</div>
				<div class="list margin_bottom">
					<div class="list_img">
						<img src='./../../assets/images/Security.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">{{$t('home.fundraise_two_title')}}</h3>
						<p class="list_info_p">
							{{$t('home.fundraise_two_describe')}}
						</p>
					</div>
				</div>
				<div class="list margin_bottom">
					<div class="list_img">
						<img src='./../../assets/images/Liquidity.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">{{$t('home.fundraise_three_title')}}</h3>
						<p class="list_info_p">
							{{$t('home.fundraise_three_describe')}}
						</p>
					</div>
				</div>
				<div class="list">
					<div class="list_img">
						<img src='./../../assets/images/Transparency.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">{{$t('home.fundraise_four_title')}}</h3>
						<p class="list_info_p">
							{{$t('home.fundraise_four_describe')}}
						</p>
					</div>
				</div>
				<div class="list">
					<div class="list_img">
						<img src='./../../assets/images/Availability.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">{{$t('home.fundraise_five_title')}}</h3>
						<p class="list_info_p">
							{{$t('home.fundraise_five_describe')}}
						</p>
					</div>
				</div>
				<div class="list">
					<div class="list_img">
						<img src='./../../assets/images/Legality.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">{{$t('home.fundraise_six_title')}}</h3>
						<p class="list_info_p">
							{{$t('home.fundraise_six_describe')}}
						</p>
					</div>
				</div>

			</div>
		</div>

		<div class="service">
			<div class="service_wrap">
				<h3 class="home_h3">{{$t('home.service-title')}}</h3>
				<div class="service_list_div">
					<div class="service_list margin-bottom">
						<div class="service_list_img">
							<img src="./../../assets/images/service_one.png" />
						</div>
						<h4 class="service_list_title">{{$t('home.service_one_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_one_describe')}}
						</p>
					</div>
					<div class="service_list margin-bottom">
						<div class="service_list_img">
							<img src="./../../assets/images/service_two.png" />
						</div>
						<h4 class="service_list_title">{{$t('home.service_two_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_two_describe')}}
						</p>
					</div>
					<div class="service_list">
						<div class="service_list_img">
							<img src="./../../assets/images/service_three.png" />
						</div>
						<h4 class="service_list_title">{{$t('home.service_three_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_three_describe')}}
						</p>
					</div>
					<div class="service_list">
						<div class="service_list_img">
							<img src="./../../assets/images/service_four.png" />
						</div>
						<h4 class="service_list_title">{{$t('home.service_four_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_four_describe')}}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="connect_us">
			<h3 class="home_h3">{{$t('home.connect_us')}}</h3>
			<div class="connect_input_content">
				<div class="connect_input">
					<el-input v-model="email" size="center" :placeholder="$t('home.connect_placeholder')" />
				</div>
				<div class="connect_submit" @click="subscribe">
						{{$t("home.submit")}}
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				email: "",
				isShow: false
			}
		},
		mounted(){
			window.addEventListener('scroll',()=>{
				let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollHeight )
				if (scrollHeight > 150) {
					this.handleTestMask("oneMask");
				}
				if (scrollHeight > 500) {
					this.handleTestMask("twoMask");
				}
				if (scrollHeight > 850) {
					this.handleTestMask("threeMask");
				}
				if (scrollHeight > 1100) {
					this.handleTestMask("fourMask");
				}
			})
		},
		methods:{
			handleTestMask(obj){
				// console.log(this.$refs.oneMask)
				if( !this.$refs[obj].classList.contains("is_show") ){
					this.$refs[obj].classList.add("is_show");
				}
				// if(this.isShow){
				// 		this.$refs.mask.classList.remove("is_show");
				// 		this.isShow = false;
				// } else{
				// 		this.$refs.mask.classList.add("is_show");
				// 		this.isShow = true;
				// }
			},
			handleClick(){
				if (this.$store.state.locale === 'zh') {
					this.$router.push(`/zh/market`)
				} else {
					this.$router.push(`/en/market`)
				}
			},
			async subscribe(){
				console.log(this.email)
				const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
				if (this.email === '') {
					this.$message.error('请输入邮箱地址')
					return
				}
				if (!reg.test(this.email)) {
					this.$message.error('请输入正确的邮箱格式')
					return
				}
				// const res = await this.$axios.post('/v1/email/add', { email: this.email })
				// if (res !== undefined) {
				// 	this.$message.success('订阅成功')
				// }
			},
		}
	}
</script>

<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
/deep/.el-input__inner
	border-radius 8px 0 0 8px
	height 56px
	line-height 14px
	border none
	padding 13px  15px
	display block
.el-input.is-active .el-input__inner, .el-input__inner:focus
	border-color #FFF
	outline none
	border none
.home_banner
	width 100%
	background url('../../assets/images/home_banner.png') no-repeat 
	background-size contain
	background-position right 
	padding-top 88px
	background-color #001629
	homeBannerHeight()
	.home_banner_p
		center()
		.banner_title
			width 65%
			color #FFFFFF
			font-size 36px
			text-align left
			fontBold()
		.banner_describe
			color #FFFFFF
			font-size 21px
			fontMedium()
			width 60%
			margin-top 34px
			line-height 29px
.token
	center()
	padding-bottom 128px
	overflow hidden
	.token_div
		display flex
		width 100%
		justify-content space-between
		margin-top 50px
		height 320px
		.img_div
			width 48%
			order 1
			position relative
			img 
				min-width 100%
				max-width 100%
				min-height 100%
				max-height 100%
				object-fit cover
				border-radius 8px
		.info_div
			width 48%
			color #343744
			.h4_title
				font-size 18px
				fontBold()
				line-height 30px
				margin 0px 0 16px
				margin-top 48px
				min-height 83px
			.info_div_describer
				font-size 14px
				line-height 21px
				fontMedium()
				min-height 85px
			.token_color_p
				width 27px
				height 2px
				background #27ACE0

	.token_div_mask
		position absolute
		top 0
		left 0
		display flex
		flex-wrap wrap
		width 100%
		height 100%
		font-size 0
		background-color rgba(14,25,45,1)
		transform rotateY(90deg)
		transition transform .6s cubic-bezier(.935,.015,.335,.92) 0s,background-color 0s linear .6s,-webkit-transform .6s cubic-bezier(.935,.015,.335,.92) 0s
		transform-origin left
		i 
			display block
			width 20%
			height 20%
			background-color #0e192d
			font-size 0
.js_scroll_show
	.img_div
		img
			transition opacity 0s ease .5s
			opacity 0
		.token_div_mask 
			i
				transform rotateY(0deg)
				transition transform .5s cubic-bezier(.935,.015,.335,.92)
			i:first-child
				transition-delay .6s
				transform-origin left
			i:nth-child(2), 
			i:nth-child(3)
				transition-delay .6s
				transform-origin right
			i:nth-child(4)
				transition-delay .6s
				transform-origin left
			i:nth-child(5), 
			i:nth-child(6)
				transition-delay .6s
				transform-origin right
			i:nth-child(7), 
			i:nth-child(8)
				transition-delay .6s
				transform-origin left
			i:nth-child(9), 
			i:nth-child(10)
				transition-delay .6s
				transform-origin right
			i:nth-child(11)
				transition-delay .6s
				transform-origin left
			i:nth-child(12), 
			i:nth-child(13)
				transition-delay .6s
				transform-origin right
			i:nth-child(14), 
			i:nth-child(15)
				transition-delay .6s
				transform-origin left
			i:nth-child(16), 
			i:nth-child(17)
				transition-delay .6s
				transform-origin right
			i:nth-child(18)
				transition-delay .6s
				transform-origin left
			i:nth-child(19), 
			i:nth-child(20)
				transition-delay .6s
				transform-origin right
			i:nth-child(21), 
			i:nth-child(22)
				transition-delay .6s
				transform-origin left
			i:nth-child(23), 
			i:nth-child(24)
				transition-delay .6s
				transform-origin right
			i:nth-child(25)
				transition-delay .6s
				transform-origin left
.is_show
	.img_div
		img 
			opacity 1
		.token_div_mask 
			transform rotateY(0deg)
			background-color rgba(14,25,45,0)
			i
				transform rotateY(90deg)

	
		



.info
	background #F9FBFF
	padding 56px 0 64px
	.info_h3
		color #343744
		font-size 24px
		fontBold()
		margin 0 auto
		text-align center
		margin-bottom 5px
	.info_describe
		color #343744
		font-size 16px
		text-align center
		margin 0 auto
		margin-bottom 32px
		fontMedium()
	.button_p
		text-align center
		margin 0 auto




.fundraise
	padding-bottom 128px
	overflow hidden
	background url("./../../assets/images/fundraise_bg.png") repeat
	.home_h3
		color #ffffff
	.fundraise_list_div
		center()
		display flex
		justify-content space-between
		flex-wrap wrap
		width 100%
		.list
			width 30%
			.list_img
				width 120px
				height 120px
				margin 0 auto
			.list_info_h3
					fontBold()
					color #FFFFFF
					text-align center
					margin-bottom 16px
					min-height 100px
			.list_info
				color rgba(255,255,255,0.8)
				margin 0 auto
				width calc(100% - 80px)
				.list_info_p
					line-height 22px
					fontMedium()
					text-align center
		.margin_bottom
			margin-bottom 40px


.service
	width 100%
	margin 0 auto 
	padding-bottom 128px
	background #F9FBFF
	overflow hidden
	.service_wrap
		center()
		.service_list_div
			display flex
			justify-content space-between
			flex-wrap wrap
			.margin-bottom
				margin-bottom 64px
			.service_list
				border-radius 8px
				width 42%
				.service_list_img
					max-width 158px
					height 136px
					margin 0 auto
				.service_list_title
					color #343744
					font-size 18px
					line-height 26px
					min-height 52px
					fontBold()
					text-align center
					margin 20px 0 10px
				.service_list_p
					fontMedium()
					text-align center
					font-size 14px
					color #656B87
					line-height 25px
					padding 0 10px





.connect_us
	overflow hidden
	background url("./../../assets/images/connect_bg.png") repeat
	width 100%
	height 400px
	padding-bottom 130px
	.home_h3
		margin-top 70px
		color #ffffff
	.home_h3::after
		background #ffffff
	.connect_input_content
		height 56px
		width 700px
		margin 0 auto
		display flex
		justify-content space-between
		border-radius 0px 8px 8px 0px
		.connect_input
			width 75%
			height 100%
		.connect_submit
			width 25%
			min-width 80px 
			height 100%
			background #45BEED
			height 56px
			line-height 56px
			text-align center
			color #FFFFFF
			fontMedium()
			border-radius 0px 8px 8px 0px
			cursor pointer
		.connect_submit:hover
			background rgba(39,172,224,1)
			box-shadow 0px 2px 4px 3px rgba(18,179,242,1)


</style>