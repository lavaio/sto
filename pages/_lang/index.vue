<template>
	<div class="home">
		<div class="home_banner" id="homeTop">
			<div class="home_banner_p js_show" ref="homeTop">
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
	<div class="fundraise">
		<div class="fundraise_list_div">
			<h3 class="home_h3">{{$t('home.fundraise-title')}}</h3>
			<div class="list js_show"  ref="listOne">
				<div class="list_content">
					<div class="list_img">
						<img src='./../../assets/images/efficiency.png' />
					</div>
				</div>
				<div class="list_content">
					<div class="list_img" style="transition-delay: 2s;">
						<img src='./../../assets/images/Security.png' />
					</div>
				</div>
				<div class="list_content">
					<div class="list_img" style="transition-delay: 3.35s;">
						<img src='./../../assets/images/Liquidity.png' />
					</div>
				</div>
			</div>
			<div class="list js_show" ref="listTwo">
				<div class="list_content">
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_one_title')}}</h3>
				</div>
				<div class="list_content">
						<h3 class="list_info_h3 second_list_info_h3" style="transition-delay: 2.5s;">{{$t('home.fundraise_two_title')}}</h3>
				</div>
				<div class="list_content">
						<h3 class="list_info_h3 second_list_info_h3" style="transition-delay: 3.85s;">{{$t('home.fundraise_three_title')}}</h3>
				</div>
			</div>
			<div class="list js_show" ref="listThree">
				<div class="list_content margin_bottom">
					<div class="list_info">
						<p class="list_info_p">
							{{$t('home.fundraise_one_describe')}}
						</p>
					</div>
				</div>
		
				<div class="list_content margin_bottom">
					<div class="list_info">
						<p class="list_info_p" style="transition-delay: 3s;">
								{{$t('home.fundraise_two_describe')}}
						</p>
					</div>
				</div>
	
				<div class="list_content margin_bottom">
					<div class="list_info">
							<p class="list_info_p" style="transition-delay: 4.35s;">
								{{$t('home.fundraise_three_describe')}}
							</p>
					</div>
				</div>
			</div>

			<div class="list js_show"  ref="listFour">
				<div class="list_content">
					<div class="list_img">
						<img src='./../../assets/images/Transparency.png'/>
					</div>
				</div>
				<div class="list_content">
					<div class="list_img" style="transition-delay: 2s;">
						<img src='./../../assets/images/Availability.png' />
					</div>
				</div>
				<div class="list_content">
					<div class="list_img" style="transition-delay: 3.35s;">
						<img src='./../../assets/images/Legality.png' />
					</div>
				</div>
			</div>
			<div class="list js_show" ref="listFive">
				<div class="list_content">
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_four_title')}}</h3>
				</div>
				<div class="list_content">
						<h3 class="list_info_h3 second_list_info_h3" style="transition-delay: 2.5s;">{{$t('home.fundraise_five_title')}}</h3>
				</div>
				<div class="list_content">
						<h3 class="list_info_h3 second_list_info_h3" style="transition-delay: 3.85s;">{{$t('home.fundraise_six_title')}}</h3>
				</div>
			</div>
			<div class="list js_show" ref="listSix">
				<div class="list_content">
					<div class="list_info">
						<p class="list_info_p">
							{{$t('home.fundraise_four_describe')}}
						</p>
					</div>
				</div>
		
				<div class="list_content">
					<div class="list_info">
						<p class="list_info_p" style="transition-delay: 3s;">
								{{$t('home.fundraise_five_describe')}}
						</p>
					</div>
				</div>
	
				<div class="list_content">
					<div class="list_info">
							<p class="list_info_p" style="transition-delay: 4.35s;">
								{{$t('home.fundraise_six_describe')}}
							</p>
					</div>
				</div>
			</div>
		</div>
	</div> 

	<div class="fundraise second_fundraise">
		<div class="fundraise_list_div fundraise_column">
			<h3 class="home_h3">{{$t('home.fundraise-title')}}</h3>
				<div class="column_list js_show margin_bottom" ref="second_one_list">
					<div>
						<div class="list_img">
							<img src='./../../assets/images/efficiency.png' />
						</div>
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_one_title')}}</h3>
					</div>
					<div class="list_info">
						<p class="list_info_p">
							{{$t('home.fundraise_one_describe')}}
						</p>
					</div>
				</div>

				<div class="column_list js_show margin_bottom" ref="second_two_list">
					<div>
						<div class="list_img">
							<img src='./../../assets/images/Security.png' />
						</div>
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_two_title')}}</h3>
					</div>
					<div class="list_info" >
						<p class="list_info_p">
							{{$t('home.fundraise_two_describe')}}
						</p>
					</div>
				</div>
				<div class="column_list js_show margin_bottom" ref="second_three_list">
					<div>
						<div class="list_img">
							<img src='./../../assets/images/Liquidity.png' />
						</div>
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_three_title')}}</h3>
					</div>
					<div class="list_info" >
						<p class="list_info_p">
							{{$t('home.fundraise_three_describe')}}
						</p>
					</div>
				</div>


				<div class="column_list js_show margin_bottom" ref="second_four_list">
					<div>
						<div class="list_img">
							<img src='./../../assets/images/Transparency.png' />
						</div>
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_four_title')}}</h3>
					</div>
					<div class="list_info" >
						<p class="list_info_p">
							{{$t('home.fundraise_four_describe')}}
						</p>
					</div>
				</div>



				<div class="column_list js_show margin_bottom"  ref="second_five_list">
					<div>
						<div class="list_img">
							<img src='./../../assets/images/Availability.png' />
						</div>
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_five_title')}}</h3>
					</div>
					<div class="list_info" >
						<p class="list_info_p">
							{{$t('home.fundraise_five_describe')}}
						</p>
					</div>
				</div>

				<div class="column_list js_show margin_bottom" ref="second_six_list">
					<div>
						<div class="list_img">
							<img src='./../../assets/images/Legality.png' />
						</div>
						<h3 class="list_info_h3 second_list_info_h3">{{$t('home.fundraise_six_title')}}</h3>
					</div>
					<div class="list_info" >
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
				<div class="second_service_content" ref="serviceOne">
					<div class="service_list second_service_list js_show" >
						<div class="service_list_img">
							<img src="./../../assets/images/service_one.png" />
						</div>
					</div>
					<div class="service_list second_service_list js_show">
						<div class="service_list_img" style="transition-delay: 2s;">
							<img src="./../../assets/images/service_two.png" />
						</div>
					</div>
				</div>
				<div class="second_service_content js_show" ref="serviceTwo">
					<div class="service_list second_service_list">
						<h4 class="service_list_title">{{$t('home.service_one_title')}}</h4>
					</div>
					<div class="service_list second_service_list">
						<h4 class="service_list_title" style="transition-delay: 2.5s;">{{$t('home.service_two_title')}}</h4>
					</div>
				</div>
				<div class="second_service_content margin-bottom js_show" ref="serviceThree">
					<div class="service_list second_service_list">
						<p class="service_list_p">
							{{$t('home.service_one_describe')}}
						</p>
					</div>
					<div class="service_list margin-bottom second_service_list">
						<p class="service_list_p" style="transition-delay: 3s;">
							{{$t('home.service_two_describe')}}
						</p>
					</div>
				</div>

				<div class="second_service_content" ref="serviceFour">
					<div class="service_list second_service_list js_show" >
						<div class="service_list_img">
							<img src="./../../assets/images/service_three.png" />
						</div>
					</div>
					<div class="service_list second_service_list js_show">
						<div class="service_list_img" style="transition-delay: 2s;">
							<img src="./../../assets/images/service_four.png" />
						</div>
					</div>
				</div>

				<div class="second_service_content js_show" ref="serviceFive">
					<div class="service_list second_service_list">
						<h4 class="service_list_title second_service_list_title">
							{{$t('home.service_three_title')}}
						</h4>
					</div>
					<div class="service_list second_service_list">
						<h4 class="service_list_title" style="transition-delay: 2.5s;">{{$t('home.service_four_title')}}</h4>
					</div>
				</div>

				<div class="second_service_content js_show" ref="serviceSix">
					<div class="service_list second_service_list">
						<p class="service_list_p">
							{{$t('home.service_three_describe')}}
						</p>
					</div>
					<div class="service_list second_service_list">
						<p class="service_list_p" style="transition-delay: 3s;">
							{{$t('home.service_four_describe')}}
						</p>
					</div>
				</div>
			</div>
		</div>




		<div class="service second_service">
			<div class="service_wrap">
				<h3 class="home_h3">{{$t('home.service-title')}}</h3>
				<div class="service_list_div">
					<div class="service_list js_show  margin-bottom" ref="secondServiceOne">
						<div class="service_list_img">
							<img src="./../../assets/images/service_one.png" />
						</div>
						<h4 class="service_list_title">{{$t('home.service_one_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_one_describe')}}
						</p>
					</div>
					<div class="service_list js_show margin-bottom" ref="secondServiceTwo" style="transition-delay: 2s;">
						<div class="service_list_img" style="transition-delay: .25s;">
							<img src="./../../assets/images/service_two.png" />
						</div>
						<h4 class="service_list_title" style="transition-delay: .5s;">{{$t('home.service_two_title')}}</h4>
						<p class="service_list_p" style="transition-delay: .75s;">
							{{$t('home.service_two_describe')}}
						</p>
					</div>
					<div class="service_list js_show margin-bottom" ref="secondServiceThree">
						<div class="service_list_img">
							<img src="./../../assets/images/service_three.png" />
						</div>
						<h4 class="service_list_title second_service_list_title">{{$t('home.service_three_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_three_describe')}}
						</p>
					</div>
					<div class="service_list js_show margin-bottom" ref="secondServiceFour">
						<div class="service_list_img" style="transition-delay: .25s;">
							<img src="./../../assets/images/service_four.png" />
						</div>
						<h4 class="service_list_title second_service_list_title" style="transition-delay: .5s;">{{$t('home.service_four_title')}}</h4>
						<p class="service_list_p" style="transition-delay: .75s;">
							{{$t('home.service_four_describe')}}
						</p>
					</div>
				</div>
			</div>
		</div>


		






		<div class="connect_us">
			<div class="connect_content">
				<div class="connect_top">
					<div class="connect_top_icon">
						<img src="./../../assets/images/connect_icon.png" />
					</div>
					<div class="connect_top_right">
						<div class="connect_top_right_title">	{{$t("home.connect_us")}}</div>
					</div>
				</div>
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
			if(!this.$refs.homeTop.classList.contains("is_show") ){
				this.$refs.homeTop.classList.add("is_show");
			}
			var top = document.body.scrollTop + document.documentElement.scrollTop;
			if( top > 150){
				this.handleTestMask("oneMask");
				this.handleTestMask("twoMask");
				this.handleTestMask("threeMask");
				this.handleTestMask("fourMask");

				this.handleTestMask("listOne");
				this.handleTestMask("listTwo");
				this.handleTestMask("listThree");

				this.handleTestMask("listFour");
				this.handleTestMask("listFive");
				this.handleTestMask("listSix");

				this.handleTestMask("serviceOne");
				this.handleTestMask("serviceTwo");

				this.handleTestMask("serviceThree");
				this.handleTestMask("serviceFour");

				this.handleTestMask("secondServiceOne");
				this.handleTestMask("secondServiceTwo");
				this.handleTestMask("secondServiceThree");

				this.handleTestMask("secondServiceFour");
				this.handleTestMask("secondServiceFive");
				this.handleTestMask("secondServiceSix");


					this.handleTestMask("second_one_list");
					this.handleTestMask("second_two_list");
					this.handleTestMask("second_three_list");

					this.handleTestMask("second_four_list");
					this.handleTestMask("second_five_list");
					this.handleTestMask("second_six_list");
			}

			window.addEventListener('scroll',()=>{
				let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
				console.log(scrollHeight)
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
				if (scrollHeight > 2000) {
					this.handleTestMask("listOne");
					this.handleTestMask("listTwo");
					this.handleTestMask("listThree");

					this.handleTestMask("second_one_list");
				
				}
				if (scrollHeight > 2200) {
					this.handleTestMask("listFour");
					this.handleTestMask("listFive");
					this.handleTestMask("listSix");
				}
				if (scrollHeight > 2300) {
					this.handleTestMask("second_two_list");
				}
				if (scrollHeight > 2500) {
					this.handleTestMask("second_three_list");
				}
				if (scrollHeight > 2700) {
					this.handleTestMask("second_four_list");
				}

				if (scrollHeight > 2900) {
					this.handleTestMask("second_five_list");
				}
				if (scrollHeight > 3100) {
					this.handleTestMask("second_six_list");
				}


				if (scrollHeight > 2700) {
					this.handleTestMask("serviceOne");
					this.handleTestMask("serviceTwo");
					this.handleTestMask("serviceThree");
				}
				
				if (scrollHeight > 3000) {
					this.handleTestMask("serviceFour");
					this.handleTestMask("serviceFive");
					this.handleTestMask("serviceSix");
				}

				if (scrollHeight > 4300) {
					this.handleTestMask("secondServiceOne");
				}
				if (scrollHeight > 4500) {
					this.handleTestMask("secondServiceTwo");
				}
				if (scrollHeight > 5000) {
					this.handleTestMask("secondServiceThree");
				}
					if (scrollHeight > 5500) {
					this.handleTestMask("secondServiceFour");
				
				}
			})
		},
		methods:{
			handleTestMask(obj){
				if (this.$refs[obj]) {
					if( !this.$refs[obj].classList.contains("is_show") ){
						this.$refs[obj].classList.add("is_show");
					}
				}
			
				// if(this.isShow){
				// 		this.$refs.listOne.classList.remove("is_show");
				// 		this.$refs.listTwo.classList.remove("is_show");
				// 		this.$refs.listThree.classList.remove("is_show");

				// 		this.$refs.listFour.classList.remove("is_show");
				// 		this.$refs.listFive.classList.remove("is_show");
				// 		this.$refs.listSix.classList.remove("is_show");
				// 		this.isShow = false;
				// } else{
				// 		this.$refs.listOne.classList.add("is_show");
				// 		this.$refs.listTwo.classList.add("is_show");
				// 		this.$refs.listThree.classList.add("is_show");

				// 			this.$refs.listFour.classList.add("is_show");
				// 		this.$refs.listFive.classList.add("is_show");
				// 		this.$refs.listSix.classList.add("is_show");
					
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
	border-radius unset
	height 40px
	line-height 14px
	border none
	padding 13px  15px
	display block
	background-color transparent
	border-bottom 2px solid #45BEED
	padding-left 0
.el-input.is-active .el-input__inner, .el-input__inner:focus
	border-color #FFF
	outline none
	border none
.home_banner
	width 100%
	background url('../../assets/images/home_banner.png') no-repeat 
	background-size contain
	background-position right bottom
	padding-top 88px
	background-color #001629
	homeBannerHeight()
	overflow hidden
	.home_banner_p
		center()
		
		.banner_title
			width 65%
			transition all 1s ease 0s
			transform-origin left
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
			transition all 1s ease .5s
			transform-origin left
	.js_show
		transform translate(2.8%,56%)
		.banner_title,.banner_describe
			transform rotateY(90deg)
	.is_show
		transform none
		.banner_title, .banner_describe
			transform rotateY(0deg)

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
				// font-size 18px
				font-size 1.5rem
				fontBold()
				line-height 30px
				margin 0px 0 16px
				margin-top 48px
				min-height 83px
			.info_div_describer
				// font-size 14px
				font-size 1.1rem
				line-height 21px
				fontMedium()
				// min-height 85px
			.token_color_p
				width 27px
				height 2px
				padding-top 30px
				border-bottom 2px solid #27ace0

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
	.info_div, .h4_title, .info_div_describer, .token_color_p
		opacity 0
		transform translateY(25px)
	.info_div
		transition all 1s ease .5s
		.h4_title
			transition all 1s ease 1.25s
		.info_div_describer
			transition all 1s ease 1.5s
		.token_color_p
			transition all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.75s
.is_show
	.img_div
		img 
			opacity 1
		.token_div_mask 
			transform rotateY(0deg)
			background-color rgba(14,25,45,0)
			i
				transform rotateY(90deg)
	.info_div, .h4_title, .info_div_describer, .token_color_p
		opacity 1
		transform translateY(0px)
	
		



.fundraise
	padding-bottom 128px
	overflow hidden
	background url("./../../assets/images/fundraise_bg.png") repeat
	.home_h3
		color #ffffff
	.fundraise_list_div
		center()
		width 100%
		.list
			display flex
			justify-content space-between
			width 100%
		.column_list
			width unset
		.list_content
			width 30%
		.list_img
			width 120px
			height 120px
			margin 0 auto
		.list_info_h3
			font-size 1.5rem
			fontBold()
			color #FFFFFF
			text-align center
			margin-bottom 16px
		.list_info
			color rgba(255,255,255,0.8)
			margin 0 auto
			width calc(100% - 80px)
			.list_info_p
				line-height 22px
				font-size 1.1rem
				fontMedium()
				text-align center
					
		.js_show
			.list_img
				transition all 1s ease
				opacity 0
				transform scale(.001)
			.list_info_h3
				opacity 0
				transition all 1s ease 1.25s
				transform translateY(25px)
			.list_info
				.list_info_p
					transition all 1s ease 1.75s
					transform translateY(25px)
					opacity 0
		.is_show
			.list_img
				opacity 1
				transform scale(1)
			.list_info_h3
				opacity 1
				transform translate(0)
			.list_info
				.list_info_p
					opacity 1
					transform translate(0)

	.fundraise_column
		display flex
		justify-content space-between
		flex-wrap wrap
	.margin_bottom
		margin-bottom 60px
@media screen and (max-width: 750px)  
	.fundraise
		display none
	.second_fundraise
		display flex
@media screen and (min-width: 751px)  
	.fundraise
		display block
	.second_fundraise
		display none

.service
	width 100%
	margin 0 auto 
	padding-bottom 128px
	background #F9FBFF
	overflow hidden
	.service_wrap
		center()
		.second_service_content
			width 100%
			display flex
			justify-content space-between
			flex-wrap wrap
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
				width 104px
				height 104px
				margin 0 auto
				img
					height 100%
			.service_list_title
				color #343744
				// font-size 18px
				font-size 1.5rem
				line-height 32px
				fontBold()
				text-align center
				margin 20px 0 10px
			.service_list_p
				fontMedium()
				text-align center
				// font-size 14px
				font-size 1.1rem
				color #656B87
				line-height 25px
				padding 0 10px
		.js_show
			.service_list_img
				transition all 1s ease
				opacity 0
				transform scale(.001)
			.service_list_title
				opacity 0
				transition all 1s ease 1.25s
				transform translateY(25px)
			.service_list_p
				transition all 1s ease 1.75s
				transform translateY(25px)
				opacity 0
		.is_show
			.service_list_img
				opacity 1
				transform scale(1)
			.service_list_title
				opacity 1
				transform translate(0)
			.service_list_p
				opacity 1
				transform translate(0)
.second_service
	.service_wrap
		
		.service_list
			width unset

@media screen and (max-width: 750px)  
	.service
		display none
	.second_service
		display block
@media screen and (min-width: 751px)  
	.service
		display block
	.second_service
		display none
.connect_us
	overflow hidden
	background-image url('../../assets/images/connect_bg.png')
	background-position center
	background-repeat no-repeat
	background-color rgba(41,51,66,1)
	background-size contain
	width 100%
	height 308px
	padding 76px 0 56px
	.connect_content
		width 600px
		margin 0 auto
		color #ffffff
		display flex
		flex-direction column
		justify-content space-between
		height 100%
		.connect_top
			display flex
			margin 0 auto
			align-items center
			.connect_top_icon
				width 90px
			.connect_top_right
				.connect_top_right_title
					font-size 24px
					fontMedium()
		.connect_input_content
			height 40px
			width 400px
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
				height 40px
				line-height 40px
				text-align center
				color #FFFFFF
				fontMedium()
				border-radius 4px
				cursor pointer
				margin-left 5px
			.connect_submit:hover
				// background rgba(39,172,224,1)
				background #45BEED
				transform translateY(-10px)
				// box-shadow 0px 2px 4px 3px rgba(18,179,242,1)


</style>