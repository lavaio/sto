<template>
	<div class="home">
		<div class="home_banner">
			<p class="banner_title">{{$t("home.banner-title")}}</p>
			<p class="banner_describe">{{$t("home.banner-describe-one")}}</p>
			<p class="banner_describe">{{$t("home.banner-describe-two")}}</p>

		</div>
		<div class="token">
			<h3 class="history_h3 hoverStyle">{{$t('home.token-title')}}</h3>
			<div class="token_div">
				<div class="img_div">
					<img src="./../../assets/images/token_one.jpg" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-one')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-one-describe')}}</p>
				</div>
			</div>
			<div class="token_div">
				<div class="img_div" style="order: -1">
					<img src="./../../assets/images/token_two.jpg" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-two')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-two-describe')}}</p>
				</div>
			</div>
			<div class="token_div">
				<div class="img_div">
					<img src="./../../assets/images/token_three.jpg" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-three')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-three-describe')}}</p>
				</div>
			</div>
			<div class="token_div">
				<div class="img_div" style="order: -1">
					<img src="./../../assets/images/token_four.png" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title-four')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-four-describe')}}</p>
				</div>
			</div>
		</div>
		<div class="info">
			<h3 class="info_h3">{{$t('home.info-title')}}</h3>
			<p class="info_describe">{{$t('home.info-title-describe')}}</p>
			<p class="button_p">
				<span class="buttonStyle" @click="handleClick"> {{$t('home.info-button')}}</span>
			</p>
		</div>
		<div class="fundraise">
			<h3 class="history_h3 hoverStyle">{{$t('home.fundraise-title')}}</h3>
			<div class="fundraise_list_div">
				<div class="list">
					<div class="list_img">
						<img src='./../../assets/images/efficiency.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">{{$t('home.fundraise_one_title')}}</h3>
						<p class="list_info_p">
							{{$t('home.fundraise_one_describe')}}
						</p>
					</div>
				</div>
				<div class="list">
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
				<div class="list">
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
				<h3 class="history_h3 hoverStyle">{{$t('home.service-title')}}</h3>
				<div class="service_img_div">
					<img src="../../assets/images/service.png"/>
				</div>
				<h4 class="service_h4">{{$t('home.service-describe')}}</h4>
				
				<div class="service_list_div">
					<div class="service_list">
						<h4 class="service_list_title">{{$t('home.service_one_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_one_describe')}}
						</p>
					</div>
					<div class="service_list">
						<h4 class="service_list_title">{{$t('home.service_two_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_two_describe')}}
						</p>
					</div>
					<div class="service_list">
						<h4 class="service_list_title">{{$t('home.service_three_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_three_describe')}}
						</p>
					</div>
					<div class="service_list">
						<h4 class="service_list_title">{{$t('home.service_four_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_four_describe')}}
						</p>
					</div>
					<div class="service_list">
						<h4 class="service_list_title">{{$t('home.service_five_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_five_describe')}}
						</p>
					</div>
					<div class="service_list">
						<h4 class="service_list_title">{{$t('home.service_six_title')}}</h4>
						<p class="service_list_p">
							{{$t('home.service_six_describe')}}
						</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		methods:{
			handleClick(){
				if (this.$store.state.locale === 'zh') {
					this.$router.push(`/zh/market`)
				} else {
					this.$router.push(`/en/market`)
				}
			}
		}
	}
</script>

<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
.home_banner
	width 100%
	background url('../../assets/images/home_banner.jpg') no-repeat 
	background-size cover
	background-position center 
	padding-top 88px
	padding-bottom 100px
	homeBannerHeight()
	.banner_title
		color #FFFFFF
		font-size 36px
		text-align center
		fontBold()
		margin 0 8%
		margin-bottom 16px
	.banner_describe
		color #FFFFFF
		font-size 21px
		fontMedium()
		margin 0 10%
		line-height 29px


.hoverStyle::before,.hoverStyle::after
	margin-bottom 5px
.token
	center()
	// width 65%
	// margin 0 auto
	padding-bottom 128px
	overflow hidden

	.token_div
		display flex
		width 100%
		justify-content space-between
		margin-top 50px
		max-height 230px
		.img_div
			width 62%
			// height 180px
			order 1
			img 
				min-width 100%
				max-width 100%
				min-height 100%
				max-height 100%
				object cover
				border-radius 8px
		.info_div
			width 33%
			color #343744
			display flex
			justify-content center
			flex-direction column
			.h4_title
				font-size 18px
				fontBold()
				margin 0px 0 16px
			.info_div_describer
				font-size 14px
				line-height 18px
				fontMedium()





	

		


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
	// width 70%
	// margin 0 auto 
	center()
	.fundraise_list_div
		display flex
		justify-content space-between
		flex-wrap wrap
		margin-top 72px
		width 100%
		.list
			display flex
			width 47%
			margin-top 72px
			justify-content space-between
			.list_img
				width 64px
				height 60px
				margin-top 7px
			.list_info
				color #343744
				width calc(100% - 80px)
				.list_info_h3
					fontBold()
					margin-bottom 16px
				.list_info_p
					line-height 22px
					fontMedium()



			





.service
	width 100%
	margin 0 auto 
	padding-bottom 128px
	background #F9FBFF
	overflow hidden
	.service_wrap
		// width 70%
		// margin 0 auto
		center()
		.service_img_div
			width 302px
			height 230px
			margin 0 auto 
		.service_h4
			margin 80px 0 32px
			color #27ACE0
			font-size 24px
			fontBold()
			text-align center
		.service_list_div
			display flex
			justify-content space-between
			flex-wrap wrap
			.service_list
				background #ffffff
				border-radius 8px
				// width 304px
				width 30%
				min-height 222px
				margin-top 32px
				.service_list_title
					color #27ACE0
					font-size 18px
					fontBold()
					text-align center
					margin 24px 0 16px
				.service_list_p
					fontMedium()
					text-align center
					font-size 14px
					color #343744
					line-height 18px
					padding 0 10px




</style>