<template>
	<div class="home">
		<div class="home_banner">
			<p class="banner_title">{{$t("home.banner-title")}}</p>
			<p class="banner_describe">{{$t("home.banner-describe")}}</p>
		</div>
		<div class="home_wrap">
			<div class="token">
			<h3 class="history_h3 hoverStyle">{{$t('home.token-title')}}</h3>

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
.home_wrap
	center()
	.token
		padding-bottom 128px
		.hoverStyle::before,.hoverStyle::after
			margin-bottom 5px
	

		


</style>