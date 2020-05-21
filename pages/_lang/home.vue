<template>
	<div class="home">
		<div class="home_banner">
			<p class="banner_title">{{$t("home.banner-title")}}</p>
			<p class="banner_describe">{{$t("home.banner-describe")}}</p>
		</div>
		<div class="token">
			<h3 class="history_h3 hoverStyle">{{$t('home.token-title')}}</h3>
			<div class="token_div">
				<div class="img_div">
					<img src="./../../assets/images/token_one.png" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-one-describe')}}</p>
				</div>
			</div>
			<div class="token_div">
				<div class="img_div">
					<img src="./../../assets/images/token_one.png" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-one-describe')}}</p>
				</div>
			</div>
			<div class="token_div">
				<div class="img_div">
					<img src="./../../assets/images/token_one.png" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-one-describe')}}</p>
				</div>
			</div>
			<div class="token_div">
				<div class="img_div">
					<img src="./../../assets/images/token_one.png" />
				</div>
				<div class="info_div">
					<h4 class="h4_title">{{$t('home.token-title')}}</h4>
					<p class="info_div_describer">{{$t('home.token-title-one-describe')}}</p>
				</div>
			</div>
		</div>
		<div class="info">
			<h3 class="info_h3">{{$t('home.info-title')}}</h3>
			<p class="info_describe">{{$t('home.info-title-describe')}}</p>
			<p class="button_p">
				<span class="buttonStyle"> {{$t('home.info-button')}}</span>
			</p>
		</div>
		<div class="fundraise">
			<h3 class="history_h3 hoverStyle">{{$t('home.fundraise-title')}}</h3>
			<div class="fundraise_list_div">
				<div class="list" v-for="item in 6" :key="item">
					<div class="list_img">
						<img src='./../../assets/images/efficiency.png' />
					</div>
					<div class="list_info">
						<h3 class="list_info_h3">Security</h3>
						<p class="list_info_p">
							All sides of the process - both issuers and investors are protected during the sale. Security is ensured by a smart contract and supervisory regulators.
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
					<div class="service_list" v-for="item in 6" :key="item">
						<h4 class="service_list_title">Legal Regulation</h4>
						<p class="service_list_p">
							Every security token offering must be registered in accordance with the laws of a country. We help to understand all the complexities of legislation and to register STOs with regulatory authorities.
						</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	
})
</script>

<style lang="stylus"  scoped>
@import '~assets/styles/mixins.styl'
.home_banner
	width 100%
	background url('../../assets/images/home_banner.png') no-repeat 
	background-size cover
	background-position center 
	padding-top 88px
	padding-bottom 100px
	.banner_title
		color #FFFFFF
		font-size 36px
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
	width 65%
	margin 0 auto
	padding-bottom 128px

	.token_div
		display flex
		width 100%
		justify-content space-between
		hieght 180px
		margin-top 50px
		.img_div
			width 65%
			height 180px
			order 0
		.img_div:nth-child(2n+0)
			order 1
		.img_div:nth-child(3n+0)
			order 2
		.info_div
			width 35%
			height 180px
			color #343744
			.h4_title
				font-size 18px
				fontBold()
				margin 20px  0 16px
			.info_div_describer
				font-size 14px
				line-height 18px
				fontMedium()





	

		


.info
	background #FBFBFE
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
	width 70%
	margin 0 auto 
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
	background #FBFBFE
	.service_wrap
		width 70%
		margin 0 auto
		.service_img_div
			width 302px
			height 230px
			margin 0 auto 
		.service_h4
			margin 48px 0 40px
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
				width 304px
				height 222px
				margin-top 24px
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
					padding 0 5px




</style>